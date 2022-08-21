// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Action, Dispatch } from "redux";
import ProjectService from "../../services/projectService";
import { ActionTypes } from "./actionTypes";
import { AssetService } from "../../services/assetService";
import cookie from 'react-cookies';
import {
    AppError,
    ErrorCode,
    IApplicationState,
    IAsset,
    IAssetMetadata,
    IProject,
    ITag,
    ISecurityToken,
    FieldType,
    FieldFormat,
    ITableConfigItem,
    ITableTag,
    ITableField,
    TableVisualizationHint
} from "../../models/applicationState";
import { createAction, createPayloadAction, IPayloadAction } from "./actionCreators";
import { appInfo } from "../../common/appInfo";
import { saveAppSettingsAction } from "./applicationActions";
import { toast } from 'react-toastify';
import { strings, interpolate } from "../../common/strings";
import clone from "rfdc";
import _ from "lodash";
import { decryptProject } from "../../common/utils";
import { constants } from "../../common/constants";
import ServerApisHelper from "../../services/serverApisHelper";
import atob from "atob";
import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";
const sasToken = process.env.storagesastoken || "?sp=racwdli&st=2022-07-06T17:43:57Z&se=2023-01-01T01:43:57Z&spr=https&sv=2021-06-08&sr=c&sig=HzRU7WDlxq02jMR4K%2FOIlX94sSHtrxODgLPrns4RJzA%3D";
const containerName = `test`;
const storageAccountName = process.env.storageresourcename || "stratfy01";

/**
 * Actions to be performed in relation to projects
 */
export default interface IProjectActions {
    loadProject(project: IProject, token?: {}): Promise<IProject>;
    saveProject(project: IProject, saveTags?: boolean, updateTagsFromFiles?: boolean): Promise<IProject>;
    saveModel(modelId: string): Promise<void>;
    deleteProject(project: IProject): Promise<void>;
    closeProject(): void;
    addAssetToProject(project: IProject, fileName: string, buffer: Buffer, analyzeResult: any): Promise<IAsset>;
    addAssetToProjectWithoutAnalyze(project: IProject, fileName: string, buffer: Buffer): Promise<IAsset>;
    deleteAsset(project: IProject, assetMetadata: IAssetMetadata): Promise<void>;
    loadAssets(project: IProject): Promise<IAsset[]>;
    loadAssets1(project: IProject, customer_id:any): Promise<IAsset[]>;
    refreshAsset(project: IProject, assetName: string): Promise<void>;
    loadAssetMetadata(project: IProject, asset: IAsset): Promise<IAssetMetadata>;
    saveAssetMetadata(project: IProject, assetMetadata: IAssetMetadata): Promise<IAssetMetadata>;
    saveAssetMetadataAndCleanEmptyLabel(project: IProject, assetMetadata: IAssetMetadata): Promise<IAssetMetadata>;
    updateProjectTag(project: IProject, oldTag: ITag, newTag: ITag): Promise<IAssetMetadata[]>;
    deleteProjectTag(project: IProject, tagName: string, tagType: FieldType, tagFormat: FieldFormat): Promise<IAssetMetadata[]>;
    updateProjectTagsFromFiles(project: IProject, asset?: string): Promise<void>;
    updatedAssetMetadata(project: IProject, assetDocumentCountDifference: any, columnDocumentCountDifference?: any, rowDocumentCountDifference?: any): Promise<void>;
    reconfigureTableTag?(project: IProject, originalTagName: string, tagName: string, tagType: FieldType, tagFormat: FieldFormat, visualizationHint: TableVisualizationHint, deletedColumns: ITableConfigItem[], deletedRows: ITableConfigItem[], newRows: ITableConfigItem[], newColumns: ITableConfigItem[]): Promise<IAssetMetadata[]>;
}

/**
 * Dispatches Load Project action and resolves with IProject
 * @param project - Project to load
 */
export function loadProject(project: IProject, sharedToken?: ISecurityToken):
    (dispatch: Dispatch, getState: () => IApplicationState) => Promise<IProject> {
    return async (dispatch: Dispatch, getState: () => IApplicationState) => {
        const appState = getState();
        const projectService = new ProjectService();

        let projectToken: ISecurityToken;
        // Lookup security token used to decrypt project settings
        if (sharedToken) {
            projectToken = sharedToken;
            const existingToken = appState.appSettings.securityTokens.find((token) => token.name === projectToken.name);

            if (!existingToken) {
                // if we do not have project sharedToken, we need update security tokens in appState
                dispatch(saveAppSettingsAction({
                    securityTokens: [
                        ...appState.appSettings.securityTokens,
                        sharedToken
                    ]
                }));
            } else if (existingToken.key !== sharedToken.key) {
                const reason = interpolate(strings.shareProject.errors.tokenNameExist, { sharedTokenName: sharedToken.name })
                toast.error(reason, { autoClose: false, closeOnClick: false });
                return null;
            }
        } else {
            projectToken = appState.appSettings.securityTokens.find((token) => token.name === project.securityToken);
        }

        if (!projectToken) {
            throw new AppError(ErrorCode.SecurityTokenNotFound, "Security Token Not Found");
        }
        const loadedProject = await projectService.load(project, projectToken);
        await ProjectService.checkAndUpdateSchema(loadedProject);
        const schemaUpdatedProject = await AssetService.checkAndUpdateSchema(loadedProject);
        dispatch(loadProjectAction(schemaUpdatedProject));
        return schemaUpdatedProject;
    };
}

/**
 * Dispatches Save Project action and resolves with IProject
 * @param project - Project to save
 */
export function saveProject(project: IProject, saveTags?: boolean, updateTagsFromFiles?: boolean)
    : (dispatch: Dispatch, getState: () => IApplicationState) => Promise<IProject> {
    return async (dispatch: Dispatch, getState: () => IApplicationState) => {
        project = Object.assign({}, project);
        const appState = getState();
        const projectService = new ProjectService();
        if (projectService.isDuplicate(project, appState.recentProjects)) {
            throw new AppError(ErrorCode.ProjectDuplicateName, `Project with name '${project.name}
                already exists with the same target connection '${project.sourceConnection.name}'`);
        }
        const findMatchToken = (tokens, project) => {
            const tokenFinded = tokens.find((securityToken) => securityToken.name === project.securityToken);
            if (!tokenFinded) {
                throw new AppError(ErrorCode.SecurityTokenNotFound, "Security Token Not Found");
            }
            return tokenFinded;
        }

        const projectToken = findMatchToken(appState.appSettings.securityTokens, project);
        const savedProject = await projectService.save(project, projectToken, saveTags, updateTagsFromFiles);
        dispatch(saveProjectAction(savedProject));
        dispatch(loadProjectAction(await decryptProject(savedProject, projectToken)));
        return savedProject;
    };
}

/**
 * Dispatches Save Model action
 * @param modelId - Model ID to save
 */
export function saveModel(modelId: string)
    : (dispatch: Dispatch, getState: () => IApplicationState) => Promise<void> {
    return async (dispatch: Dispatch, getState: () => IApplicationState) => {
        await ServerApisHelper.saveModelApi({ "model-id": modelId });
    };
}

export function updateProjectTagsFromFiles(project: IProject, asset?: string): (dispatch: Dispatch) => Promise<void> {
    return async (dispatch: Dispatch) => {
        const projectService = new ProjectService();
        const updatedProject = await projectService.updateProjectTagsFromFiles(project, asset);
        if (updatedProject !== project) {
            dispatch(updateProjectTagsFromFilesAction(updatedProject));
        }
    };
}

export function updatedAssetMetadata(project: IProject, assetDocumentCountDifference: any, columnDocumentCountDifference?: any,
    rowDocumentCountDifference?: any): (dispatch: Dispatch) => Promise<void> {
    return async (dispatch: Dispatch) => {
        const projectService = new ProjectService();
        const updatedProject = await projectService.updatedAssetMetadata(project, assetDocumentCountDifference, columnDocumentCountDifference, rowDocumentCountDifference);
        if (updatedProject !== project) {
            dispatch(updatedAssetMetadataAction(updatedProject));
        }
    };
}

/**
 * Dispatches Delete Project action and resolves with project
 * @param project - Project to delete
 */
export function deleteProject(project: IProject)
    : (dispatch: Dispatch, getState: () => IApplicationState) => Promise<void> {
    return async (dispatch: Dispatch, getState: () => IApplicationState) => {
        const appState = getState();
        const projectService = new ProjectService();

        // Lookup security token used to decrypt project settings
        const projectToken = appState.appSettings.securityTokens
            .find((securityToken) => securityToken.name === project.securityToken);

        if (!projectToken) {
            dispatch(deleteProjectAction(project));
            throw new AppError(ErrorCode.SecurityTokenNotFound, interpolate(strings.errors.projectDeleteErrorSecurityTokenNotFound.message, { project }));
        }

        const decryptedProject = await projectService.load(project, projectToken);
        await projectService.delete(decryptedProject);
        dispatch(deleteProjectAction(decryptedProject));
    };
}

/**
 * Dispatches Close Project action
 */
export function closeProject(): (dispatch: Dispatch) => void {
    return (dispatch: Dispatch): void => {
        dispatch({ type: ActionTypes.CLOSE_PROJECT_SUCCESS });
    };
}
/**
 * add asset, ocr data, labels to project storage.
 */
export function addAssetToProject(project: IProject, fileName: string, buffer: Buffer, analyzeResult: any): (dispatch: Dispatch) => Promise<IAsset> {
    return async (dispatch: Dispatch) => {
        const assetService = new AssetService(project);
        await assetService.uploadBuffer(fileName, buffer);
        const assets = await assetService.getAssets();
        const assetName = project.folderPath ? `${project.folderPath}/${fileName}` : fileName;
        const asset = assets.find(a => a.name === assetName);

        await assetService.syncAssetPredictResult(asset, analyzeResult);
        dispatch(addAssetToProjectAction(asset));
        return asset;
    };
}
/**
 * add asset, ocr data, labels to project storage.
 */
 export function addAssetToProjectWithoutAnalyze(project: IProject, fileName: string, buffer: Buffer): (dispatch: Dispatch) => Promise<IAsset> {
    return async (dispatch: Dispatch) => {
        const assetService = new AssetService(project);
        await assetService.uploadBuffer(fileName, buffer);
        const assets = await assetService.getAssets();
        const assetName = project.folderPath ? `${project.folderPath}/${fileName}` : fileName;
        const asset = assets.find(a => a.name === assetName);

        dispatch(addAssetToProjectAction(asset));
        return asset;
    };
}
/**
 * Dispatches Delete Asset action
 */
export function deleteAsset(project: IProject, assetMetadata: IAssetMetadata): (dispatch: Dispatch) => void {
    return async (dispatch: Dispatch) => {
        const assetService = new AssetService(project);
        await assetService.delete(assetMetadata);
        const assets = await assetService.getAssets();
        if (!areAssetsEqual(assets, project.assets)) {
            dispatch(deleteProjectAssetAction(assets));
        }
    };
}

/**
 * Gets assets from project, dispatches load assets action and returns assets
 * @param project - Project from which to load assets
 */
export function loadAssets(project: IProject): (dispatch: Dispatch, getState: () => IApplicationState) => Promise<IAsset[]> {
    return async (dispatch: Dispatch, getState: () => IApplicationState) => {
        const client_id = cookie.load('client_id');
        const response = await fetch(`https://dashboard.stratafyconnect.com/Invoices/ocrGetUploadFiles.json?client_id=${client_id}`);
        const data = await response.json();
        console.log('data',data.data)
        const filteredData = data.data.map((obj)=>{
            console.log('obj',obj);
            return obj.file_url;
        });

        const assetService = new AssetService(project);
        const assets = await assetService.getAssets();
        let shouldAssetsUpdate = false;
        for (const asset of assets) {
            if (AssetService.shouldSchemaUpdate(asset.schema)) {
                shouldAssetsUpdate = true;
                asset.schema = constants.labelsSchema;
            }
        }
        if (!areAssetsEqual(assets, project.assets)) {
            dispatch(loadProjectAssetsAction(assets));
        }
        if (shouldAssetsUpdate) {
            const { currentProject } = getState();
            await AssetService.checkAndUpdateSchema(currentProject);
        }
        const returnData:any = [];
        if(filteredData.length>0){
        assets.map((asset) => {
            if(filteredData.includes(asset.name)){
                returnData.push(asset);
            }
        });
        }
        return returnData;
    };
}

export function loadAssets1(project: IProject, customer_id:any): (dispatch: Dispatch, getState: () => IApplicationState) => Promise<IAsset[]> {
    return async (dispatch: Dispatch, getState: () => IApplicationState) => {
        const client_id = cookie.load('client_id');
       const response = await fetch(`https://dashboard.stratafyconnect.com/Invoices/ocrGetInvoices.json?client_id=${customer_id}`);
        const data = await response.json();
        const fileList = [];
        // uploadFileToBlob('https://dashboard.stratafyconnect.com/uploads/invoice/invoices_913122702.pdf','invoices_913122702.pdf')
            await Promise.all(data.data.map(async (file) => {
            
            const contentType = 'application/pdf';
            const blob = await b64toBlob(file.file_string, contentType);
            const name = `${file.filename}`;
            await uploadFileToBlob(blob,name);
            // const blobUrl = URL.createObjectURL(blob);
            //const uploadInfo = `https://${storageAccountName}.blob.core.windows.net/${containerName}/${file.filename}?${sasToken}`;
            // fileList.push({
            //     "format":"pdf",
            //     "id":file.invoice_id,
            //     "mimeType":"application/pdf",
            //     "name":name,
            //     "path":uploadInfo,
            //     "size":null,
            //     "state":1,
            //     "type":5
            // })
            fileList.push({
                "invoice_id":file.invoice_id,
                "name":name
            });
           
        })
        );

        const assetService = new AssetService(project);
        if(fileList.length>0){

        var results: any = await Promise.all(fileList.map(async (file): Promise<any> => {
            const assets = await assetService.getAsset(file.name);
            assets.invoice_id = file.invoice_id;
            return assets;
        }));
        }
       
        // const assetService = new AssetService(project);
        //const assets = fileList;
        // const assetService = new AssetService(project);
        
        // const assets = await assetService.getAssets();
        // let shouldAssetsUpdate = false;
        // for (const asset of assets) {
        //     if (AssetService.shouldSchemaUpdate(asset.schema)) {
        //         shouldAssetsUpdate = true;
        //         asset.schema = constants.labelsSchema;
        //     }
        // }
        // if (!areAssetsEqual(assets, project.assets)) {
        //     dispatch(loadProjectAssetsAction(assets));
        // }
        // if (shouldAssetsUpdate) {
        //     const { currentProject } = getState();
        //     await AssetService.checkAndUpdateSchema(currentProject);
        // }
        // const returnData:any = results;
        // if(fileList.length>0){
        // assets.map((asset) => {
            
        //     if(fileList.includes(asset.name)){
        //         returnData.push(asset);
        //     }
        // });
        // }
        // console.log('returnData',returnData)
        return results;
    };
}

function areAssetsEqual(assets: IAsset[], projectAssets: { [index: string]: IAsset }): boolean {
    const keys = Object.keys(projectAssets || {});
    if (assets.length !== keys.length) {
        return false;
    }

    const assetsMap = {};
    assets.forEach((asset) => {
        assetsMap[asset.id] = asset;
    });

    return JSON.stringify(assetsMap) === JSON.stringify(projectAssets);
}

export function refreshAsset(project: IProject, assetName: string): (dispatch: Dispatch) => Promise<void> {
    return async (dispatch: Dispatch) => {
        const assetService = new AssetService(project);
        const asset = await assetService.getAsset(assetName);
        dispatch(refreshAssetAction(asset));
    }
}

/**
 * Load metadata from asset within project
 * @param project - Project from which to load asset metadata
 * @param asset - Asset from which to load metadata
 */
export function loadAssetMetadata(project: IProject, asset: IAsset): (dispatch: Dispatch) => Promise<IAssetMetadata> {
    return async (dispatch: Dispatch) => {
        const assetService = new AssetService(project);
        const assetMetadata = await assetService.getAssetMetadata(asset);
        dispatch(loadAssetMetadataAction(_.cloneDeep(assetMetadata)));

        return { ...assetMetadata };
    };
}

/**
 * Save metadata from asset within project
 * @param project - Project from which to save asset metadata
 * @param assetMetadata - Metadata for asset within project
 */
export function saveAssetMetadata(
    project: IProject,
    assetMetadata: IAssetMetadata): (dispatch: Dispatch) => Promise<IAssetMetadata> {
    const newAssetMetadata = { ...(_.cloneDeep(assetMetadata)), version: appInfo.version };

    return async (dispatch: Dispatch) => {
        const assetService = new AssetService(project);
        assetService.save(newAssetMetadata);
        dispatch(saveAssetMetadataAction(newAssetMetadata));
        return { ...newAssetMetadata };
    };
}

export function saveAssetMetadataAndCleanEmptyLabel(
    project: IProject,
    assetMetadata: IAssetMetadata): (dispatch: Dispatch) => Promise<IAssetMetadata> {
    const newAssetMetadata: IAssetMetadata = { ...(_.cloneDeep(assetMetadata)), version: appInfo.version };

    return async (dispatch: Dispatch) => {
        const assetService = new AssetService(project);
        const savedMetadata = await assetService.save(newAssetMetadata, true);
        dispatch(saveAssetMetadataAction(savedMetadata));

        return { ...savedMetadata };
    };
}
/**
 * Updates a project and all asset references from oldTagName to newTagName
 * @param project The project to update tags
 * @param oldTag The old tag
 * @param newTag The new tag
 */
export function updateProjectTag(project: IProject, oldTag: ITag, newTag: ITag)
    : (dispatch: Dispatch, getState: () => IApplicationState) => Promise<IAssetMetadata[]> {
    return async (dispatch: Dispatch, getState: () => IApplicationState) => {
        let assetUpdates: IAssetMetadata[] = [];

        if (oldTag.name !== newTag.name) {
            // Find tags to rename
            const assetService = new AssetService(project);
            assetUpdates = await assetService.renameTag(oldTag.name, newTag.name);

            // Save updated assets
            await assetUpdates.forEachAsync(async (assetMetadata) => {
                await saveAssetMetadata(project, assetMetadata)(dispatch);
            });
        }

        const currentProject = getState().currentProject;
        const updatedProject = {
            ...currentProject,
            tags: project.tags.map((t) => (t.name === oldTag.name) ? { ...newTag } : t),
        };

        // Save updated project tags
        await saveProject(updatedProject, true, false)(dispatch, getState);
        dispatch(updateProjectTagAction(updatedProject));

        return assetUpdates;
    };
}

/**
 * Updates a project and all asset references from oldTagName to newTagName
 * @param project The project to delete tags
 * @param tagName The tag to delete
 */
export function deleteProjectTag(project: IProject, tagName: string, tagType: FieldType, tagFormat: FieldFormat)
    : (dispatch: Dispatch, getState: () => IApplicationState) => Promise<IAssetMetadata[]> {
    return async (dispatch: Dispatch, getState: () => IApplicationState) => {
        // Find tags to rename
        const assetService = new AssetService(project);
        const assetUpdates = await assetService.deleteTag(tagName, tagType, tagFormat);

        // Save updated assets
        for (const assetMetadata of assetUpdates) {
            await saveAssetMetadata(project, assetMetadata)(dispatch);
        }

        const currentProject = getState().currentProject;
        const updatedProject = {
            ...currentProject,
            tags: project.tags.filter((t) => t.name !== tagName),
        };

        // Save updated project tags
        await saveProject(updatedProject, true, false)(dispatch, getState);
        dispatch(deleteProjectTagAction(updatedProject));

        return assetUpdates;
    };
}

export function reconfigureTableTag(project: IProject, originalTagName: string, tagName: string, tagType: FieldType, tagFormat: FieldFormat, visualizationHint: TableVisualizationHint, deletedColumns: ITableConfigItem[], deletedRows: ITableConfigItem[], newRows: ITableConfigItem[], newColumns: ITableConfigItem[])
    : (dispatch: Dispatch, getState: () => IApplicationState) => Promise<IAssetMetadata[]> {
    return async (dispatch: Dispatch, getState: () => IApplicationState) => {
        // Find tags to rename
        const assetService = new AssetService(project);
        const assetUpdates = await assetService.refactorTableTag(originalTagName, tagName, tagType, tagFormat, visualizationHint, deletedColumns, deletedRows, newRows, newColumns);

        // Save updated assets
        await assetUpdates.forEachAsync(async (assetMetadata) => {
            await saveAssetMetadata(project, assetMetadata)(dispatch);
        });

        const currentProject = clone()(getState().currentProject);

        // temp fix for new schema change
        let newFields;
        let newDefinitionFields;
        let itemType;
        if (tagType === FieldType.Object) {
            if (visualizationHint === TableVisualizationHint.Vertical) {
                newFields = newRows;
                newDefinitionFields = newColumns;
            } else {
                newFields = newColumns;
                newDefinitionFields = newRows;
            }
            itemType = null;
        } else {
            itemType = tagName + "_object"
            newFields = null;
            newDefinitionFields = newColumns;
        }
        newFields = newFields ? newFields.map((field) => {
            return {
                fieldKey: field.name,
                fieldType: tagName + "_object",
                fieldFormat: FieldFormat.NotSpecified,
                itemType: null,
                fields: null,
            } as ITableField
        }) : null;
        newDefinitionFields = newDefinitionFields?.map((definitionField) => {
            return {
                fieldKey: definitionField.name,
                fieldType: definitionField.type,
                fieldFormat: definitionField.format,
                itemType: null,
                fields: null,
            } as ITableField
        });

        const updatedProject = {
            ...currentProject,
            tags: currentProject.tags.reduce((result, tag) => {
                if (tag.name === originalTagName) {
                    (tag as ITag).name = tagName;
                    (tag as ITableTag).definition.fieldKey = tagName + "_object";
                    (tag as ITableTag).definition.fields = newDefinitionFields || (tag as ITableTag).definition.fields;
                    (tag as ITableTag).fields = newFields || (tag as ITableTag).fields;
                    (tag as ITableTag).itemType = itemType;
                    result.push(tag);
                    return result;
                } else {
                    result.push(tag);
                    return result;
                }
            }, [])
        };


        // Save updated project tags
        await saveProject(updatedProject, true, false)(dispatch, getState);
        dispatch(deleteProjectTagAction(updatedProject));

        return assetUpdates;
    };
}


/**
 * Load project action type
 */
export interface ILoadProjectAction extends IPayloadAction<string, IProject> {
    type: ActionTypes.LOAD_PROJECT_SUCCESS;
}

export interface IUpdateProjectTagsFromFilesAction extends IPayloadAction<string, IProject> {
    type: ActionTypes.UPDATE_PROJECT_TAGS_FROM_FILES_SUCCESS;
}

export interface IUpdateTagDocumentCount extends IPayloadAction<string, IProject> {
    type: ActionTypes.UPDATE_TAG_LABEL_COUNTS_SUCCESS;
}

/**
 * Close project action type
 */
export interface ICloseProjectAction extends Action<string> {
    type: ActionTypes.CLOSE_PROJECT_SUCCESS;
}

/**
 * Save project action type
 */
export interface ISaveProjectAction extends IPayloadAction<string, IProject> {
    type: ActionTypes.SAVE_PROJECT_SUCCESS;
}

/**
 * Delete project action type
 */
export interface IDeleteProjectAction extends IPayloadAction<string, IProject> {
    type: ActionTypes.DELETE_PROJECT_SUCCESS;
}

/**
 * Add asset to project action type
 */
export interface IAddAssetToProjectAction extends IPayloadAction<string, IAsset> {
    type: ActionTypes.ADD_ASSET_TO_PROJECT_SUCCESS;
}
/**
 * Load project assets action type
 */
export interface ILoadProjectAssetsAction extends IPayloadAction<string, IAsset[]> {
    type: ActionTypes.LOAD_PROJECT_ASSETS_SUCCESS;
}

/**
 * Delete project asset action type
 */
export interface IDeleteProjectAssetAction extends IPayloadAction<string, IAsset[]> {
    type: ActionTypes.DELETE_PROJECT_ASSET_SUCCESS;
}
export interface IRefreshAssetAction extends IPayloadAction<string, IAsset> {
    type: ActionTypes.REFRESH_ASSET_SUCCESS;
}
/**
 * Load asset metadata action type
 */
export interface ILoadAssetMetadataAction extends IPayloadAction<string, IAssetMetadata> {
    type: ActionTypes.LOAD_ASSET_METADATA_SUCCESS;
}

/**
 * Save asset metadata action type
 */
export interface ISaveAssetMetadataAction extends IPayloadAction<string, IAssetMetadata> {
    type: ActionTypes.SAVE_ASSET_METADATA_SUCCESS;
}

/**
 * Update Project Tag action type
 */
export interface IUpdateProjectTagAction extends IPayloadAction<string, IProject> {
    type: ActionTypes.UPDATE_PROJECT_TAG_SUCCESS;
}

/**
 * Delete project tag action type
 */
export interface IDeleteProjectTagAction extends IPayloadAction<string, IProject> {
    type: ActionTypes.DELETE_PROJECT_TAG_SUCCESS;
}

/**
 * Instance of Load Project action
 */
export const loadProjectAction = createPayloadAction<ILoadProjectAction>(ActionTypes.LOAD_PROJECT_SUCCESS);
/**
 * Instance of Close Project action
 */
export const closeProjectAction = createAction<ICloseProjectAction>(ActionTypes.CLOSE_PROJECT_SUCCESS);
/**
 * Instance of Save Project action
 */
export const saveProjectAction = createPayloadAction<ISaveProjectAction>(ActionTypes.SAVE_PROJECT_SUCCESS);
/**
 * Instance of Delete Project action
 */
export const deleteProjectAction = createPayloadAction<IDeleteProjectAction>(ActionTypes.DELETE_PROJECT_SUCCESS);
/**
 * Instance of Add Asset to Project action
 */
export const addAssetToProjectAction = createPayloadAction<IAddAssetToProjectAction>(ActionTypes.ADD_ASSET_TO_PROJECT_SUCCESS);
/**
 * Instance of Load Project Assets action
 */
export const loadProjectAssetsAction =
    createPayloadAction<ILoadProjectAssetsAction>(ActionTypes.LOAD_PROJECT_ASSETS_SUCCESS);
/**
 * Instance of Delete Project Asset action
 */
export const deleteProjectAssetAction =
    createPayloadAction<IDeleteProjectAssetAction>(ActionTypes.DELETE_PROJECT_ASSET_SUCCESS);

export const refreshAssetAction =
    createPayloadAction<IRefreshAssetAction>(ActionTypes.REFRESH_ASSET_SUCCESS);
/**
 * Instance of Load Asset Metadata action
 */
export const loadAssetMetadataAction =
    createPayloadAction<ILoadAssetMetadataAction>(ActionTypes.LOAD_ASSET_METADATA_SUCCESS);
/**
 * Instance of Save Asset Metadata action
 */
export const saveAssetMetadataAction =
    createPayloadAction<ISaveAssetMetadataAction>(ActionTypes.SAVE_ASSET_METADATA_SUCCESS);
/**
 * Instance of Update project tag action
 */
export const updateProjectTagAction =
    createPayloadAction<IUpdateProjectTagAction>(ActionTypes.UPDATE_PROJECT_TAG_SUCCESS);

export const updateProjectTagsFromFilesAction =
    createPayloadAction<IUpdateProjectTagsFromFilesAction>(ActionTypes.UPDATE_PROJECT_TAGS_FROM_FILES_SUCCESS);

export const updatedAssetMetadataAction =
    createPayloadAction<IUpdateTagDocumentCount>(ActionTypes.UPDATE_TAG_LABEL_COUNTS_SUCCESS);

/**
 * Instance of Delete project tag action
 */
export const deleteProjectTagAction =
    createPayloadAction<IDeleteProjectTagAction>(ActionTypes.DELETE_PROJECT_TAG_SUCCESS);

    const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, {type: contentType});
  return blob;
}


  const uploadFileToBlob = async (file:any, filename:string) => {
       
    if (!file) return [];

    // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
    const blobService = new BlobServiceClient(
        `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
    );
    // get Container - full public read access
    const containerClient = blobService.getContainerClient(containerName);
    //const blobName = new Date().getTime()+filename;
    const blockBlobClient = containerClient.getBlockBlobClient(filename);
   
    try{
        // const uploadBlobResponse = await blockBlobClient.uploadData(file);
        const uploadBlobResponse = await blockBlobClient.uploadData(file);
       return uploadBlobResponse;
    }catch(e){
        console.log('e',e)
    }
    };