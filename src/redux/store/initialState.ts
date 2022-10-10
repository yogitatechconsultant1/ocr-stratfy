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
            recentModelRecords: [
                {
                    modelInfo: {
                        modelName: "",
                        modelId: "600b2b2c-9c61-4a8a-8074-5f4c51ed4984",
                        createdDateTime: "2022-06-02T15:48:37Z",
                        isComposed: false,
                    },
                    averageAccuracy: 0.381,
                    accuracies: {
                        ABN: 0.556,
                        Table: 0,
                        "Table: Description": 0,
                        "Table: Price": 0,
                        "Table: quantity": 0,
                        due_date: 0.222,
                        invoice_date: 0.556,
                        invoice_number: 0.611,
                        tax: 0.278,
                        total: 0.444,
                    },
                    //   "isComposed": false
                },
                {
                    modelInfo: {
                        modelName: "",
                        modelId: "ee1ac8bf-6f67-44da-9ea7-6709a7d11ee3",
                        createdDateTime: "2022-05-24T15:50:02Z",
                        isComposed: false,
                    },
                    averageAccuracy: 0.381,
                    accuracies: {
                        ABN: 0.556,
                        Table: 0,
                        "Table: Description": 0,
                        "Table: Price": 0,
                        "Table: quantity": 0,
                        due_date: 0.222,
                        invoice_date: 0.556,
                        invoice_number: 0.611,
                        tax: 0.278,
                        total: 0.444,
                    },
                    //   "isComposed": false
                },
                {
                    modelInfo: {
                        modelName: "",
                        modelId: "205f5594-dc8c-4646-a425-d28521a4f788",
                        createdDateTime: "2022-05-17T03:02:34Z",
                        isComposed: false,
                    },
                    averageAccuracy: 0.381,
                    accuracies: {
                        ABN: 0.556,
                        Table: 0,
                        "Table: Description": 0,
                        "Table: Price": 0,
                        "Table: quantity": 0,
                        due_date: 0.222,
                        invoice_date: 0.556,
                        invoice_number: 0.611,
                        tax: 0.278,
                        total: 0.444,
                    },
                    //   "isComposed": false
                },
                {
                    modelInfo: {
                        modelId: "a093ece7-9543-444d-a56f-b21c1831c59a",
                        modelName: "",
                        createdDateTime: "2022-05-06T23:59:59Z",
                        isComposed: false,
                    },
                    averageAccuracy: 0.381,
                    accuracies: {
                        ABN: 0.556,
                        Table: 0,
                        "Table: Description": 0,
                        "Table: Price": 0,
                        "Table: quantity": 0,
                        due_date: 0.222,
                        invoice_date: 0.556,
                        invoice_number: 0.611,
                        tax: 0.278,
                        total: 0.444,
                    },
                    //   "isComposed": false
                },
                {
                    modelInfo: {
                        modelId: "65b8c95e-b3ad-40e6-9b2c-7dc2b6b36395",
                        createdDateTime: "2022-05-05T16:41:18Z",
                        isComposed: false,
                        modelName: "",
                    },
                    averageAccuracy: 0.349,
                    accuracies: {
                        ABN: 0.5,
                        Table: 0,
                        "Table: Description": 0,
                        "Table: Price": 0,
                        "Table: quantity": 0.111,
                        due_date: 0.222,
                        invoice_date: 0.5,
                        invoice_number: 0.556,
                        tax: 0.222,
                        total: 0.444,
                    },
                    //   "isComposed": false
                },
            ],
            trainRecord: {
                modelInfo: {
                    modelId: "da397593-afba-4e6f-8011-c1aa271e3c5a",
                    modelName: "",
                    createdDateTime: "2022-06-02T15:48:37Z",
                    isComposed: false,
                },
                averageAccuracy: 0.381,
                accuracies: {
                    ABN: 0.556,
                    Table: 0,
                    "Table: Description": 0,
                    "Table: Price": 0,
                    "Table: quantity": 0,
                    due_date: 0.222,
                    invoice_date: 0.556,
                    invoice_number: 0.611,
                    tax: 0.278,
                    total: 0.444,
                },
            },
            predictModelId: "ee5bf0e1-611f-4363-9092-0bdcc0c436af",
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
        lastVisitedAssetId:
            "64daffd22b6c3adccf22c4990d9177b134a447ab363e5f051481771aac3688e7",
        recentModelRecords: [
            {
                modelInfo: {
                    modelName: "",
                    modelId: "f8c267ee-aae8-40c4-badc-9e8a929861b0",
                    createdDateTime: "2022-06-02T15:48:37Z",
                    isComposed: false,
                },
                averageAccuracy: 0.381,
                accuracies: {
                    ABN: 0.556,
                    Table: 0,
                    "Table: Description": 0,
                    "Table: Price": 0,
                    "Table: quantity": 0,
                    due_date: 0.222,
                    invoice_date: 0.556,
                    invoice_number: 0.611,
                    tax: 0.278,
                    total: 0.444,
                },
                //   "isComposed": false
            },
            {
                modelInfo: {
                    modelName: "",
                    modelId: "6cba96f7-d302-46f0-a740-c5e354f384cb",
                    createdDateTime: "2022-05-24T15:50:02Z",
                    isComposed: false,
                },
                averageAccuracy: 0.381,
                accuracies: {
                    ABN: 0.556,
                    Table: 0,
                    "Table: Description": 0,
                    "Table: Price": 0,
                    "Table: quantity": 0,
                    due_date: 0.222,
                    invoice_date: 0.556,
                    invoice_number: 0.611,
                    tax: 0.278,
                    total: 0.444,
                },
                //   "isComposed": false
            },
            {
                modelInfo: {
                    modelName: "",
                    modelId: "0763c72c-a7f1-4610-898c-e5d083059aa5",
                    createdDateTime: "2022-05-17T03:02:34Z",
                    isComposed: false,
                },
                averageAccuracy: 0.381,
                accuracies: {
                    ABN: 0.556,
                    Table: 0,
                    "Table: Description": 0,
                    "Table: Price": 0,
                    "Table: quantity": 0,
                    due_date: 0.222,
                    invoice_date: 0.556,
                    invoice_number: 0.611,
                    tax: 0.278,
                    total: 0.444,
                },
                //   "isComposed": false
            },
            {
                modelInfo: {
                    modelId: "6b83e677-5376-4acf-9ea8-fff92126ee81",
                    modelName: "",
                    createdDateTime: "2022-05-06T23:59:59Z",
                    isComposed: false,
                },
                averageAccuracy: 0.381,
                accuracies: {
                    ABN: 0.556,
                    Table: 0,
                    "Table: Description": 0,
                    "Table: Price": 0,
                    "Table: quantity": 0,
                    due_date: 0.222,
                    invoice_date: 0.556,
                    invoice_number: 0.611,
                    tax: 0.278,
                    total: 0.444,
                },
                //   "isComposed": false
            },
            {
                modelInfo: {
                    modelId: "4db06c97-35d9-4979-afcb-387666422bc4",
                    createdDateTime: "2022-05-05T16:41:18Z",
                    isComposed: false,
                    modelName: "",
                },
                averageAccuracy: 0.349,
                accuracies: {
                    ABN: 0.5,
                    Table: 0,
                    "Table: Description": 0,
                    "Table: Price": 0,
                    "Table: quantity": 0.111,
                    due_date: 0.222,
                    invoice_date: 0.5,
                    invoice_number: 0.556,
                    tax: 0.222,
                    total: 0.444,
                },
                //   "isComposed": false
            },
        ],
        trainRecord: {
            modelInfo: {
                modelId: "cdf9bf0f-6c36-4997-b87a-e9e92315b63a",
                modelName: "",
                createdDateTime: "2022-06-02T15:48:37Z",
                isComposed: false,
            },
            averageAccuracy: 0.381,
            accuracies: {
                ABN: 0.556,
                Table: 0,
                "Table: Description": 0,
                "Table: Price": 0,
                "Table: quantity": 0,
                due_date: 0.222,
                invoice_date: 0.556,
                invoice_number: 0.611,
                tax: 0.278,
                total: 0.444,
            },
        },
        predictModelId: "cdf9bf0f-6c36-4997-b87a-e9e92315b63a",
    },
    appError: null,
    prebuiltSettings: null,
};

/**
 * Instance of initial application state
 */
export default initialState;
