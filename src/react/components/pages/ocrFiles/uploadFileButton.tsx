// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import React from "react";
import { FontIcon, PrimaryButton, Spinner, SpinnerSize } from "@fluentui/react";
import { IAsset, AssetState, ISize, AssetLabelingState, IProject, IRecentModel, IApplicationState, IAssetMetadata } from "../../../../models/applicationState";
import { AssetPreview, ContentSource } from "../../common/assetPreview/assetPreview";
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
import { DocumentFilePicker } from "../../common/documentFilePicker/documentFilePicker";
import { ImageMap } from "../../common/imageMap/imageMap";
import { RouteComponentProps } from "react-router-dom";
import { ILoadFileResult } from "../prebuiltPredict/LoadFileHelper";

export interface IUploadButtonState {
    file?: File;
    fileLabel: string;
    fileChanged: boolean;
    isFetching: boolean;
    isPredicting: boolean;
    fileLoaded?: boolean;
    fetchedFileURL: string;
    confirmDuplicatedAssetNameMessage?: string;
}

export interface IPredictPageProps {
    project: IProject;
    actions: IProjectActions;
    history: RouteComponentProps["history"];
    loadProjectAssets: () => Promise<void>;
}

/**
 * @name - Upload Button
 * @description - Upload Button for Editor Page
 */
export default class UploadButton extends React.Component<IPredictPageProps, IUploadButtonState> {
    private imageMap: ImageMap;

    private duplicateAssetNameConfirm: React.RefObject<Confirm> = React.createRef();

    state: IUploadButtonState = {
        isFetching: false,
        isPredicting: false,
        fileLabel: "",
        fileChanged: false,
        fetchedFileURL: "",
        file: undefined,
        // shouldShowAlert: false,
    }

    onFileChange(data: {
        file: File,
        fileLabel: string,
        fetchedFileURL: string
    }): void {
        this.setState({
            ...data,
            fileLoaded: false,
            fileChanged: true,
        }, () => {
            this.imageMap?.removeAllFeatures();
        });
    }

    onSelectSourceChange(): void {
    }

    private onAddAssetToProjectClick = async () => {
        if (this.state.file) {
            const fileName = `${this.props.project.folderPath}/${decodeURIComponent(this.state.file.name)}`;
            const asset = Object.values(this.props.project.assets).find(asset => asset.name === fileName);
            if (asset) {
                const confirmDuplicatedAssetNameMessage = interpolate(strings.predict.confirmDuplicatedAssetName.message, { name: decodeURI(this.state.file.name) });
                this.setState({
                    confirmDuplicatedAssetNameMessage
                });
                this.duplicateAssetNameConfirm.current.open();
            }
            else {
                this.onAddAssetToProjectConfirm();
            }
        }
    }

    private onAddAssetToProjectConfirm = async () => {
        // if (this.props.appSettings.hideUploadingOption) {
        //     this.uploadToTrainingSetView.current.open();
        await this.onAddAssetToProject();
        // this.uploadToTrainingSetView.current.close();
        // } else {
        //     this.uploadToTrainingSetView.current.open();
        // }
    }

    private onAddAssetToProject = async () => {
        if (this.state.file) {
            const fileData = Buffer.from(await this.state.file.arrayBuffer());
            const fileName = decodeURIComponent(this.state.file.name).split("/").pop();
            await this.props.actions.addAssetToProjectWithoutAnalyze(this.props.project, fileName, fileData);
            await this.props.loadProjectAssets();
            // this.props.history.push(`/projects/${this.props.project.id}/edit`);
        }
    }

    onFileLoadError(err: { alertTitle: string; alertMessage: string; }): void {
        // this.setState({
        //     ...err,
        //     shouldShowAlert: true,
        //     predictionLoaded: false,
        // });
    }

    render() {
        return <>
            <div className="m-3">
                <DocumentFilePicker
                    disabled={this.state.isFetching || this.state.isPredicting}
                    onFileChange={(data) => this.onFileChange(data)}
                    onSelectSourceChange={() => this.onSelectSourceChange()}
                    onError={(err) => this.onFileLoadError(err)} />
                {!this.state.isFetching ? <PrimaryButton
                    // style={{ "margin": "15px 0px" }}
                    id="train_trainButton"
                    theme={getPrimaryGreenTheme()}
                    autoFocus={true}
                    className="flex-center"
                    onClick={this.onAddAssetToProjectClick}
                    disabled={this.state.isFetching}>
                    <FontIcon iconName="Upload" />
                    <h6 className="d-inline text-shadow-none mb-0">
                        {strings.train.uploadButtonLabel} </h6>
                </PrimaryButton>
                : (
                    <div className="loading-container">
                        <Spinner
                            styles={{
                                circle: {
                                    width: "18px"
                                }
                            }}
                            label="Training in progress..."
                            ariaLive="assertive"
                            labelPosition="right"
                            size={SpinnerSize.small}
                        />
                    </div>
                )}
                <Confirm
                    ref={this.duplicateAssetNameConfirm}
                    title={strings.predict.confirmDuplicatedAssetName.title}
                    message={this.state.confirmDuplicatedAssetNameMessage}
                    onConfirm={this.onAddAssetToProjectConfirm}
                    confirmButtonTheme={getPrimaryGreenTheme()}
                />
            </div>
        </>
    }
}
