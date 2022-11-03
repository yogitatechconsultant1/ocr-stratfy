// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
    FieldFormat,
    FieldType,
    IApplicationState,
} from "../../models/applicationState";

/**
 * Initial state of application
 * @member appSettings - Application settings
 * @member connections - Connections
 * @member recentProjects - Recent projects
 * @member currentProject - Current project
 */
const modelId = "0c841675-8494-4e67-9fa9-cef27a51d094";
var newModelId;
export function model() {
    newModelId = localStorage.getItem("predictModelId");
}
model();
newModelId =
    localStorage.getItem("predictModelId") == undefined
        ? modelId
        : localStorage.getItem("predictModelId").substring(1, 37);

const initialState: IApplicationState = {
    appSettings: {
        securityTokens: [
            {
                key: "UnKxb6sIUdEToJTbG0hymR24ClSD/U3cDpHUJALELt0=",
                name: "Stratfy Token",
            },
        ],
        hideUploadingOption: true,
    },
    connections: [
        {
            providerOptions: {
                sas: "https://stratfy01.blob.core.windows.net/test?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
            },
            id: "Qpi6oMgio",
            name: "Stratfy",
            providerType: "azureBlobStorage",
        },
    ],
    recentProjects: [
        {
            sourceConnection: {
                providerOptions: {
                    sas: "https://stratfy01.blob.core.windows.net/test?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                },
                id: "Qpi6oMgio",
                name: "Stratfy",
                providerType: "azureBlobStorage",
            },
            apiKey: "f316231f6a9b4017af9c5a19a7070fbc",
            apiUriBase: "https://stratfy011.cognitiveservices.azure.com/",
            name: "Stratfy",
            folderPath: "",
            securityToken: "Stratfy Token",
            version: "2.1.0",
            id: "ookC0C0ix",
            tags: [
                {
                    name: "invoice_number",
                    color: "#CC543A",
                    type: FieldType.String,
                    format: FieldFormat.NotSpecified,
                    documentCount: 18,
                },
                {
                    name: "ABN",
                    color: "#7BA23F",
                    type: FieldType.String,
                    format: FieldFormat.NotSpecified,
                    documentCount: 16,
                },
                {
                    name: "invoice_date",
                    color: "#58B2DC",
                    type: FieldType.String,
                    format: FieldFormat.NotSpecified,
                    documentCount: 18,
                },
                {
                    name: "tax",
                    color: "#FFB11B",
                    type: FieldType.String,
                    format: FieldFormat.NotSpecified,
                    documentCount: 12,
                },
                {
                    name: "biller_code",
                    color: "#8f77b5",
                    type: FieldType.String,
                    format: FieldFormat.NotSpecified,
                    documentCount: 8,
                },
                {
                    name: "building_ID",
                    color: "#24936e",
                    type: FieldType.String,
                    format: FieldFormat.NotSpecified,
                    documentCount: 8,
                },
                {
                    name: "Customer_reference_number",
                    color: "#eea9a9",
                    type: FieldType.String,
                    format: FieldFormat.NotSpecified,
                    documentCount: 8,
                },
                {
                    name: "due_date",
                    color: "#2E5C6E",
                    type: FieldType.String,
                    format: FieldFormat.NotSpecified,
                    documentCount: 8,
                },
                {
                    name: "Table",
                    color: "#A96360",
                    type: FieldType.Array,
                    format: FieldFormat.NotSpecified,
                    documentCount: 0,
                    //@ts-ignore
                    itemType: "Table_object",
                    fields: null,
                    definition: {
                        fieldKey: "Table_object",
                        fieldType: "object",
                        fieldFormat: "not-specified",
                        itemType: null,
                        fields: [
                            {
                                fieldKey: "Description",
                                fieldType: "string",
                                fieldFormat: "alphanumeric",
                                itemType: null,
                                fields: null,
                            },
                            {
                                fieldKey: "quantity",
                                fieldType: "number",
                                fieldFormat: "not-specified",
                                itemType: null,
                                fields: null,
                            },
                            {
                                fieldKey: "Price",
                                fieldType: "number",
                                fieldFormat: "currency",
                                itemType: null,
                                fields: null,
                            },
                        ],
                    },
                    visualizationHint: null,
                },
                {
                    name: "total",
                    color: "#D7C4BB",
                    type: FieldType.String,
                    format: FieldFormat.NotSpecified,
                    documentCount: 15,
                },
            ],
            assets: {},
            lastVisitedAssetId:
                "64daffd22b6c3adccf22c4990d9177b134a447ab363e5f051481771aac3688e7",
            recentModelRecords: [],

            predictModelId: `${newModelId}`,
        },
    ],
    currentProject: {
        sourceConnection: {
            providerOptions: {
                sas: "https://stratfy01.blob.core.windows.net/test?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
            },
            id: "Qpi6oMgio",
            name: "Stratfy",
            providerType: "azureBlobStorage",
        },
        apiKey: "f316231f6a9b4017af9c5a19a7070fbc",
        apiUriBase: "https://stratfy011.cognitiveservices.azure.com/",
        name: "Stratfy",
        folderPath: "",
        securityToken: "Stratfy Token",
        version: "2.1.0",
        id: "ookC0C0ix",
        tags: [],
        assets: {},
        lastVisitedAssetId: null,

        recentModelRecords: [],
        trainRecord: null,
        predictModelId: `${newModelId}`,
    },
    appError: null,
    prebuiltSettings: null,
};

/**
 * Instance of initial application state
 */

export default initialState;
