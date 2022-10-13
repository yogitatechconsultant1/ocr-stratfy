// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import React from "react";
import { AutoSizer, List } from "react-virtualized";
import { FontIcon, PrimaryButton, Spinner, SpinnerSize } from "@fluentui/react";
import {
    IAsset,
    AssetState,
    ISize,
    AssetLabelingState,
    IProject,
    IRecentModel,
    IApplicationState,
    IAssetMetadata,
} from "../../../../models/applicationState";
import {
    AssetPreview,
    ContentSource,
} from "../../common/assetPreview/assetPreview";
import { interpolate, strings } from "../../../../common/strings";
import _ from "lodash";
import url from "url";
import { getPrimaryGreenTheme } from "../../../../common/themes";
import Confirm from "../../common/confirm/confirm";
import { AssetService } from "../../../../services/assetService";
import { constants } from "../../../../common/constants";
import ServiceHelper from "../../../../services/serviceHelper";
import { ITrainRecordProps } from "../train/trainRecord";
import { webStorage } from "../../../../common/webStorage";
import { isElectron } from "../../../../common/hostProcess";
import IProjectActions from "../../../../redux/actions/projectActions";
import UseLocalStorage from "../../../../services/useLocalStorage";
import { getAppInsights } from "../../../../services/telemetryService";
import { getAPIVersion } from "../../../../common/utils";

/**
 * Properties for Editor Side Bar
 * @member assets - Array of assets to be previewed
 * @member onAssetSelected - Function to call when asset from side bar is selected
 * @member selectedAsset - Asset initially selected
 * @member thumbnailSize - The size of the asset thumbnails
 */
export interface ITrainButtonProps {
    project: IProject;
    actions: IProjectActions;
}

interface ITrainApiResponse {
    modelId: string;
    createdDateTime: string;
    averageModelAccuracy: number;
    fields: object[];
}

/**
 * State for Editor Side Bar
 * @member selectedAsset - Asset selected from side bar
 */
export interface ITrainButtonState {
    isTraining: boolean;
    trainMessage: string;
    modelName: string;
    currTrainRecord: ITrainRecordProps;
    showTrainingFailedWarning: boolean;
    inputtedLabelFolderURL: string;
    trainingFailedMessage: string;
    currModelId: string;
    modelUrl: string;
}

/**
 * @name - Editor Side Bar
 * @description - Side bar for editor page
 */
export default class TrainButton extends React.Component<
    ITrainButtonProps,
    ITrainButtonState
> {
    private appInsights: any = null;
    public state: ITrainButtonState = {
        isTraining: false,
        trainMessage: strings.train.notTrainedYet,
        modelName: "",
        modelUrl: "",
        currTrainRecord: null,
        showTrainingFailedWarning: false,
        trainingFailedMessage: "",
        inputtedLabelFolderURL:
            strings.train.defaultLabelFolderURL +
            (this.props.project?.folderPath
                ? "/" + this.props.project.folderPath
                : ""),
        currModelId: "",
    };

    private notAdjustedLabelsConfirm: React.RefObject<Confirm> =
        React.createRef();

    public render() {
        return (
            <div className="m-3">
                {!this.state.isTraining ? (
                    <div className="">
                        <PrimaryButton
                            // style={{ "margin": "15px 0px" }}
                            id="train_trainButton"
                            theme={getPrimaryGreenTheme()}
                            autoFocus={true}
                            className="flex-center"
                            onClick={this.handleTrainClick}
                            disabled={this.state.isTraining}
                        >
                            <FontIcon iconName="MachineLearning" />
                            <h6 className="d-inline text-shadow-none ml-2 mb-0">
                                {strings.train.title}{" "}
                            </h6>
                        </PrimaryButton>
                    </div>
                ) : (
                    <div className="loading-container">
                        <Spinner
                            styles={{
                                circle: {
                                    width: "18px",
                                },
                            }}
                            label="Training in progress..."
                            ariaLive="assertive"
                            labelPosition="right"
                            size={SpinnerSize.small}
                        />
                    </div>
                )}
            </div>
        );
    }

    public async componentDidMount() {
        if (this.props.project.id) {
            // this.showCheckboxPreview(project);
            this.updateCurrTrainRecord(this.getProjectTrainRecord());
        }
        if (this.state.currTrainRecord) {
            this.setState({
                currModelId: this.state.currTrainRecord.modelInfo.modelId,
            });
        }

        this.checkAndUpdateInputsInLocalStorage(this.props.project.id);
        this.appInsights = getAppInsights();
    }

    private checkAndUpdateInputsInLocalStorage = async (projectId: string) => {
        const storedTrainInputs = JSON.parse(
            (await webStorage.getItem("trainPage_inputs")) as string
        );

        if (storedTrainInputs?.id !== projectId) {
            await webStorage.removeItem("trainPage_inputs");
            UseLocalStorage.setItem("trainPage_inputs", "projectId", projectId);
        }

        if (storedTrainInputs) {
            if (storedTrainInputs.modelName) {
                this.setState({ modelName: storedTrainInputs.modelName });
            }
            if (storedTrainInputs.labelURL) {
                this.setState({
                    inputtedLabelFolderURL: storedTrainInputs.labelURL,
                });
            }
        }
    };

    private updateCurrTrainRecord = (curr: ITrainRecordProps): void => {
        this.setState({ currTrainRecord: curr });
    };

    private handleModelTrain = () => {
        this.setState({
            isTraining: true,
            trainMessage: strings.train.training,
        });

        this.trainProcess()
            .then(async (trainResult) => {
                const assets = Object.values(this.props.project.assets);
                const assetService = new AssetService(this.props.project);

                const newAssets = {};
                for (const asset of assets) {
                    const newAsset = _.cloneDeep(asset);

                    const metadata = await assetService.getAssetMetadata(
                        newAsset
                    );
                    if (
                        metadata.labelData &&
                        metadata.labelData.labels?.findIndex(
                            (label) => label.value?.length > 0
                        ) >= 0 &&
                        metadata.labelData.labelingState !==
                            AssetLabelingState.Trained
                    ) {
                        metadata.labelData.labelingState =
                            AssetLabelingState.Trained;
                        metadata.asset.labelingState =
                            AssetLabelingState.Trained;
                        const newMeta = await assetService.save({
                            ...metadata,
                        });
                        newAssets[asset.id] = newMeta.asset;
                    } else {
                        newAssets[asset.id] = newAsset;
                    }
                }
                await this.props.actions.saveProject(
                    { ...this.props.project, assets: newAssets },
                    false,
                    false
                );
                await this.props.actions.saveModel(
                    trainResult["modelInfo"]["modelId"]
                );

                this.setState((prevState, props) => ({
                    isTraining: false,
                    trainMessage: this.getTrainMessage(trainResult),
                    currTrainRecord: this.getProjectTrainRecord(),
                    modelName: "",
                }));
                // reset webStorage successful train process
                await webStorage.setItem("trainPage_inputs", "{}");
            })
            .catch((err) => {
                this.setState({
                    isTraining: false,
                    trainMessage: err.message,
                });
            });
        if (this.appInsights) {
            this.appInsights.trackEvent({ name: "TRAIN_MODEL_EVENT" });
        }
    };

    private getProjectTrainRecord = (): ITrainRecordProps => {
        return _.get(this, "props.project.trainRecord", null);
    };

    private getTrainMessage = (trainingResult): string => {
        if (
            trainingResult !== undefined &&
            trainingResult.modelInfo !== undefined &&
            trainingResult.modelInfo.status === constants.statusCodeReady
        ) {
            return "Trained successfully";
        }
        return "Training failed";
    };

    private async train(): Promise<any> {
        const apiVersion = getAPIVersion(this.props.project?.apiVersion);
        const baseURL = url.resolve(
            this.props.project.apiUriBase,
            interpolate(constants.apiModelsPath, { apiVersion })
        );
        const provider = this.props.project.sourceConnection
            .providerOptions as any;
        let trainSourceURL;
        let trainPrefix;

        if (
            this.props.project.sourceConnection.providerType ===
            "localFileSystemProxy"
        ) {
            trainSourceURL = this.state.inputtedLabelFolderURL;
            trainPrefix = "";
        } else {
            trainSourceURL = provider.sas;
            trainPrefix = this.props.project.folderPath
                ? this.props.project.folderPath
                : "";
        }
        await this.cleanLabelData();
        const payload = {
            source: trainSourceURL,
            sourceFilter: {
                prefix: trainPrefix,
                includeSubFolders: false,
            },
            useLabelFile: true,
            modelName: this.state.modelName,
        };
        try {
            const result = await ServiceHelper.postWithAutoRetry(
                baseURL,
                payload,
                {},
                this.props.project.apiKey as string
            );
            this.setState({ modelUrl: result.headers.location });
            return result;
        } catch (err) {
            ServiceHelper.handleServiceError({ ...err, endpoint: baseURL });
        }
    }

    private async cleanLabelData() {
        const allAssets = { ...this.props.project.assets };
        const assetValues = Object.values(allAssets).filter(
            (asset) => asset.labelingState !== AssetLabelingState.Trained
        );
        for (const asset of assetValues) {
            const assetMetadata: IAssetMetadata = _.cloneDeep(
                await this.props.actions.loadAssetMetadata(
                    this.props.project,
                    asset
                )
            );
            let isUpdated = false;
            assetMetadata.labelData?.labels?.forEach((label, index) => {
                if (label.value?.length === 0) {
                    assetMetadata.labelData.labels.splice(index, 1);
                    isUpdated = true;
                }
            });
            if (
                !isUpdated &&
                assetMetadata.asset.labelingState ===
                    AssetLabelingState.ManuallyLabeled &&
                assetMetadata.labelData?.labels?.findIndex(
                    (label) =>
                        label.confidence ||
                        label.originValue ||
                        label.revised ||
                        label.value?.findIndex((item) => item["confidence"]) < 0
                ) < 0
            ) {
                return;
            }
            if (
                assetMetadata.labelData?.labels?.findIndex(
                    (label) => label.value?.length > 0
                ) >= 0
            ) {
                assetMetadata.asset.labelingState =
                    AssetLabelingState.ManuallyLabeled;
                if (assetMetadata.labelData) {
                    assetMetadata.labelData.labelingState =
                        AssetLabelingState.ManuallyLabeled;
                }
                isUpdated = true;
            }

            assetMetadata.labelData?.labels?.forEach((label) => {
                delete label.confidence;
                delete label.originValue;
                delete label.revised;
                label.value?.forEach((item) => {
                    delete item["confidence"];
                });
                isUpdated = true;
            });
            if (isUpdated) {
                await this.props.actions.saveAssetMetadataAndCleanEmptyLabel(
                    this.props.project,
                    assetMetadata
                );
            }
        }
    }

    /**
     * Poll function to repeatably check if request succeeded
     * @param func - function that will be called repeatably
     * @param timeout - timeout
     * @param interval - interval
     */
    private poll = (func, timeout, interval): Promise<any> => {
        const endTime = Number(new Date()) + (timeout || 10000);
        interval = interval || 100;

        const checkSucceeded = (resolve, reject) => {
            const ajax = func();
            ajax.then((response) => {
                if (
                    response.data.modelInfo &&
                    response.data.modelInfo.status === constants.statusCodeReady
                ) {
                    resolve(response.data);
                } else if (
                    response.data.modelInfo &&
                    response.data.modelInfo.status === "invalid"
                ) {
                    const message = _.get(
                        response,
                        "data.trainResult.errors[0].message",
                        "Sorry, we got errors while training the model."
                    );
                    reject(message);
                } else if (Number(new Date()) < endTime) {
                    // If the request isn't succeeded and the timeout hasn't elapsed, go again
                    setTimeout(checkSucceeded, interval, resolve, reject);
                } else {
                    // Didn't succeeded after too much time, reject
                    reject(
                        new Error(
                            "Timed out, sorry, it seems the training process took too long."
                        )
                    );
                }
            });
        };

        return new Promise(checkSucceeded);
    };

    private async getTrainStatus(operationLocation: string): Promise<any> {
        const timeoutPerFileInMs = 10000; // 10 second for each file
        const minimumTimeoutInMs = 90 * 60 * 1000; // 90 minutes minimum waiting time for each training process.
        const extendedTimeoutInMs =
            timeoutPerFileInMs *
            Object.keys(this.props.project.assets || []).length;
        const res = this.poll(
            () => {
                return ServiceHelper.getWithAutoRetry(
                    operationLocation,
                    { headers: { "cache-control": "no-cache" } },
                    this.props.project.apiKey as string
                );
            },
            Math.max(extendedTimeoutInMs, minimumTimeoutInMs),
            1000
        );
        return res;
    }

    private buildUpdatedProject = (
        newTrainRecord: ITrainRecordProps
    ): IProject => {
        const recentModelRecords: IRecentModel[] = this.props.project
            .recentModelRecords
            ? [...this.props.project.recentModelRecords]
            : [];

        localStorage.setItem("newModelId", JSON.stringify(recentModelRecords));
        recentModelRecords.unshift({
            ...newTrainRecord,
            isComposed: false,
        } as IRecentModel);
        if (recentModelRecords.length > constants.recentModelRecordsCount) {
            recentModelRecords.pop();
        }
        localStorage.setItem("newModelId", JSON.stringify(recentModelRecords));
        return {
            ...this.props.project,
            recentModelRecords,
            trainRecord: newTrainRecord,
            predictModelId: newTrainRecord.modelInfo.modelId,
        };
    };

    private parseTrainResult = (
        response: ITrainApiResponse
    ): ITrainRecordProps => {
        localStorage.setItem(
            "predictModelId",
            JSON.stringify(response["modelInfo"]["modelId"])
        );
        return {
            modelInfo: {
                modelId: response["modelInfo"]["modelId"],
                createdDateTime: response["modelInfo"]["createdDateTime"],
                modelName: response["modelInfo"]["modelName"],
                isComposed: false,
            },
            averageAccuracy: response["trainResult"]["averageModelAccuracy"],
            accuracies: this.buildAccuracies(response["trainResult"]["fields"]),
        };
    };

    private buildAccuracies = (fields: object[]): object => {
        const accuracies = {};
        for (const field of fields) {
            accuracies[field["fieldName"]] = field["accuracy"];
        }
        return accuracies;
    };

    private async trainProcess(): Promise<any> {
        try {
            const trainRes = await this.train();
            const trainStatusRes = await this.getTrainStatus(
                trainRes.headers["location"]
            );
            const updatedProject = this.buildUpdatedProject(
                this.parseTrainResult(trainStatusRes)
            );
            await this.props.actions.saveProject(updatedProject, false, false);

            return trainStatusRes;
        } catch (error) {
            console.log("error", error);
            const isOnPrem =
                isElectron &&
                this.props.project.sourceConnection.providerType ===
                    "localFileSystemProxy";
            this.setState({
                showTrainingFailedWarning: true,
                trainingFailedMessage: isOnPrem
                    ? interpolate(
                          strings.train.errors.electron.cantAccessFiles,
                          { folderUri: this.state.inputtedLabelFolderURL }
                      )
                    : error?.message !== undefined
                    ? error.message
                    : error,
            });
            throw error;
        }
    }

    private handleTrainClick = () => {
        const assets = Object.values(this.props.project.assets).filter(
            (asset) => asset.labelingState === AssetLabelingState.AutoLabeled
        );
        if (assets.length > 0) {
            this.notAdjustedLabelsConfirm.current.open();
        } else {
            this.handleModelTrain();
        }
    };

    private handleModelTrainConfirm = () => {
        this.handleModelTrain();
    };
}
