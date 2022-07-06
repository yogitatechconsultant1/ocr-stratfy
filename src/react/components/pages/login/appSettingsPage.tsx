// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import IApplicationActions, * as applicationActions from "../../../../redux/actions/applicationActions";
import IAppTitleActions, * as appTitleActions from "../../../../redux/actions/appTitleActions";
import { IApplicationState, ILoginSettings } from "../../../../models/applicationState";
import "./appSettingsPage.scss";
import { strings } from "../../../../common/strings";
import { AppSettingsForm } from "./appSettingsForm";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import cookie from 'react-cookies';

/**
 * Props for App Settings Page
 * @member appSettings - Current Application settings
 * @member connections - Application connections
 * @member actions - Application actions
 * @member appTitleActions - Application Title actions
 */
export interface IAppSettingsProps extends RouteComponentProps, React.Props<AppSettingsPage> {
    loginSettings: ILoginSettings;
    actions: IApplicationActions;
    appTitleActions: IAppTitleActions;
}

/**
 * State for App Settings Page
 * @member formSchema - JSON Form Schema for page
 * @member uiSchema - JSON Form UI Schema for page
 * @member appSettings - Application settings
 */
function mapStateToProps(state: IApplicationState) {
    return {
        appSettings: state.appSettings,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(applicationActions, dispatch),
        appTitleActions: bindActionCreators(appTitleActions, dispatch),
    };
}

/**
 * Page for viewing and editing application settings
 */
@connect(mapStateToProps, mapDispatchToProps)
export default class AppSettingsPage extends React.Component<IAppSettingsProps> {
    constructor(props: IAppSettingsProps) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onFormCancel = this.onFormCancel.bind(this);
    }

    public async componentDidMount() {
        this.props.appTitleActions.setTitle(strings.login.title);
        document.title = strings.login.title + " - " + strings.appName;
    }

    public render() {
        return (
            <div className="app-settings-page skipToMainContent" id="pageAppSettings">
                <AppSettingsForm
                    loginSettings={this.props.loginSettings}
                    onSubmit={this.onFormSubmit}
                    onCancel={this.onFormCancel} />
            </div>
        );
    }

    private async onFormSubmit(loginSettings: any) {
        
       
        const {username, password} = loginSettings.loginFields[0];
       
        const requestOptions:any = {
        method: 'POST',
        headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },
        referrer: "about:client", // "" for no-referrer, or an url from the current origin
        referrerPolicy: "no-referrer", // no-referrer, origin, same-origin...
        mode: "cors", // same-origin, no-cors
        credentials: "same-origin", // omit, include
        body: JSON.stringify({ username,password },)
    };

        fetch('https://dashboard.stratafyconnect.com/Invoices/ocrLogin.json', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log('data',data);
            if(data.status === 0){
                console.log('toast',toast)
                 toast.error('You are not authorized!!');
            }
             if(data.status === 1){
                 console.log('client_id',data.client_id)
                cookie.save('client_id', data.client_id, { path: '/' });
                toast.success(strings.login.messages.saveSuccess);
                this.props.history.push('/ocr');
            }
        }
          
        ).catch((error) => {
            console.log(error);
            toast.error("Something went wrong please try again later.");
        });

        // await this.props.actions.saveAppSettings(loginSettings);
        
        // this.props.history.goBack();
    }

    private onFormCancel() {
        this.props.history.goBack();
    }
}
