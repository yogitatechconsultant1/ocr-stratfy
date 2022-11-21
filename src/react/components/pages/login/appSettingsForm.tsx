// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import React from "react";
import { FontIcon } from "@fluentui/react";
import { strings, addLocValues } from "../../../../common/strings";
import Form, { FormValidation } from "react-jsonschema-form";
import { ObjectFieldTemplate } from "../../common/objectField/objectFieldTemplate";
import CustomFieldTemplate from "../../common/customField/customFieldTemplate";
import { ArrayFieldTemplate } from "../../common/arrayField/arrayFieldTemplate";
import { ILoginSettings } from "../../../../models/applicationState";
import { ProtectedInput } from "../../common/protectedInput/protectedInput";
import { CustomField } from "../../common/customField/customField";
import { generateKey } from "../../../../common/crypto";
import { PrimaryButton } from "@fluentui/react";
import "./appSettingsPage.scss";
import {
    getPrimaryGreenTheme,
    getPrimaryGreyTheme,
} from "../../../../common/themes";
// tslint:disable-next-line:no-var-requires
const formSchema = addLocValues(require("./appSettingsForm.json"));
// tslint:disable-next-line:no-var-requires
const uiSchema = addLocValues(require("./appSettingsForm.ui.json"));

export interface IAppSettingsFormProps extends React.Props<AppSettingsForm> {
    loginSettings: ILoginSettings;
    onSubmit: (loginSettings: ILoginSettings) => void;
    onCancel?: () => void;
}

export interface IAppSettingsFormState {
    classNames: string[];
    formSchema: any;
    uiSchema: any;
    loginSettings: ILoginSettings;
}

export class AppSettingsForm extends React.Component<
    IAppSettingsFormProps,
    IAppSettingsFormState
> {
    private fields = {
        securityToken: CustomField(ProtectedInput, (props) => ({
            id: props.idSchema.$id,
            value: props.formData ?? generateKey(),
            onChange: props.onChange,
        })),
    };

    constructor(props: IAppSettingsFormProps) {
        super(props);

        this.state = {
            formSchema: { ...formSchema },
            uiSchema: { ...uiSchema },
            loginSettings: { ...this.props.loginSettings },
            classNames: ["needs-validation"],
        };

        this.onFormValidate = this.onFormValidate.bind(this);
        this.onFormCancel = this.onFormCancel.bind(this);
    }

    public componentDidUpdate(prevProps: IAppSettingsFormProps) {
        if (prevProps.loginSettings !== this.props.loginSettings) {
            this.setState({
                loginSettings: { ...this.props.loginSettings },
            });
        }
    }

    public render() {
        return (
            <div className="app-settings-page-form p-3">
                <h3 className="mb-3 flex-center">
                    {/* <FontIcon iconName="Settings" /> */}
                    <span
                        style={{
                            fontWeight: 800,
                            fontSize: "47px",
                            color: "#ffffff",
                            fontFamily: "system-ui",
                            fontStyle: "normal",
                            marginTop: " -20px",
                            marginLeft: "14px",
                            marginBottom: "50px",
                        }}
                    >
                        Application Login
                    </span>
                </h3>
                <div className="m-3">
                    <Form
                        className={this.state.classNames.join(" ")}
                        showErrorList={false}
                        liveValidate={true}
                        noHtml5Validate={true}
                        fields={this.fields}
                        // ObjectFieldTemplate={ObjectFieldTemplate}
                        FieldTemplate={CustomFieldTemplate}
                        ArrayFieldTemplate={ArrayFieldTemplate}
                        validate={this.onFormValidate}
                        schema={this.state.formSchema}
                        uiSchema={this.state.uiSchema}
                        formData={this.state.loginSettings}
                        onSubmit={(form) => this.props.onSubmit(form.formData)}
                    >
                        <div>
                            <button className="login-btn" type="submit">
                                Sign In &#8594;
                            </button>
                            {/* <PrimaryButton
                                theme={getPrimaryGreyTheme()}
                                type="button" 
                                onClick={this.onFormCancel}>
                                {strings.common.cancel}
                            </PrimaryButton> */}
                        </div>
                    </Form>
                </div>
            </div>
        );
    }

    private onFormValidate(
        loginSettings: ILoginSettings,
        errors: FormValidation
    ) {
        const tokensMap = {};
        console.log("loginSettings", loginSettings);
        // loginSettings.loginCredentials.forEach((token, index) => {
        //     if (!token.name) {
        //         return;
        //     }
        //     const tokenName = token.name;  // not trimmed because user's might already have non trimmed token names
        //     if (tokensMap[tokenName] !== undefined) {
        //         const initialSecurityTokenErrorName = errors.securityTokens[tokensMap[tokenName]].name;
        //         const duplicateSecurityTokenErrorName = errors.securityTokens[index.toString()].name
        //         if (duplicateSecurityTokenErrorName) {
        //             duplicateSecurityTokenErrorName.addError(strings.loginSettings.securityToken.duplicateNameErrorMessage);
        //         }
        //         if (initialSecurityTokenErrorName.__errors.length === 0) {
        //             initialSecurityTokenErrorName.addError(strings.loginSettings.securityToken.duplicateNameErrorMessage);
        //         }
        //     } else {
        //         tokensMap[tokenName] = index;
        //     }
        // });

        if (this.state.classNames.indexOf("was-validated") === -1) {
            this.setState({
                classNames: [...this.state.classNames, "was-validated"],
            });
        }

        return errors;
    }

    private onFormCancel() {
        if (this.props.onCancel) {
            this.props.onCancel();
        }
    }
}
