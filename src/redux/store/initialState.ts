// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {FieldFormat, FieldType, IApplicationState} from "../../models/applicationState";

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
                name: "Stratfy Token"
            },
        ],
        hideUploadingOption: true
    },
    connections: [
        {
            providerOptions: {
                sas: "https://stratfy01.blob.core.windows.net/test?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D"
            },
            id:	"Qpi6oMgio",
            name: "Stratfy",
            providerType: "azureBlobStorage"
        }
    ],
    recentProjects: [
        {
          "sourceConnection": {
            "providerOptions": {
              "sas": "https://stratfy01.blob.core.windows.net/test?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D"
            },
            "id": "Qpi6oMgio",
            "name": "Stratfy",
            "providerType": "azureBlobStorage"
          },
          "apiKey": "f316231f6a9b4017af9c5a19a7070fbc",
          "apiUriBase": "https://stratfy011.cognitiveservices.azure.com/",
          "name": "Stratfy",
          "folderPath": "",
          "securityToken": "Stratfy Token",
          "version": "2.1.0",
          "id": "ookC0C0ix",
          "tags": [
            {
              "name": "invoice_number",
              "color": "#CC543A",
              "type": FieldType.String,
              "format": FieldFormat.NotSpecified,
              "documentCount": 18
            },
            {
              "name": "ABN",
              "color": "#7BA23F",
              "type": FieldType.String,
              "format": FieldFormat.NotSpecified,
              "documentCount": 16
            },
            {
              "name": "invoice_date",
              "color": "#58B2DC",
              "type": FieldType.String,
              "format": FieldFormat.NotSpecified,
              "documentCount": 18
            },
            {
              "name": "tax",
              "color": "#FFB11B",
              "type": FieldType.String,
              "format": FieldFormat.NotSpecified,
              "documentCount": 12
            },
            {
              "name": "biller_code",
              "color": "#8f77b5",
              "type": FieldType.String,
              "format": FieldFormat.NotSpecified,
              "documentCount": 8
            },
            {
              "name": "building_ID",
              "color": "#24936e",
              "type": FieldType.String,
              "format": FieldFormat.NotSpecified,
              "documentCount": 8
            },
            {
              "name": "Customer_reference_number",
              "color": "#eea9a9",
              "type": FieldType.String,
              "format": FieldFormat.NotSpecified,
              "documentCount": 8
            },
            {
              "name": "due_date",
              "color": "#2E5C6E",
              "type": FieldType.String,
              "format": FieldFormat.NotSpecified,
              "documentCount": 8
            },
            {
              "name": "Table",
              "color": "#A96360",
              "type": FieldType.Array,
              "format": FieldFormat.NotSpecified,
              "documentCount": 0,
              //@ts-ignore
              "itemType": "Table_object",
              "fields": null,
              "definition": {
                "fieldKey": "Table_object",
                "fieldType": "object",
                "fieldFormat": "not-specified",
                "itemType": null,
                "fields": [
                  {
                    "fieldKey": "Description",
                    "fieldType": "string",
                    "fieldFormat": "alphanumeric",
                    "itemType": null,
                    "fields": null
                  },
                  {
                    "fieldKey": "quantity",
                    "fieldType": "number",
                    "fieldFormat": "not-specified",
                    "itemType": null,
                    "fields": null
                  },
                  {
                    "fieldKey": "Price",
                    "fieldType": "number",
                    "fieldFormat": "currency",
                    "itemType": null,
                    "fields": null
                  }
                ]
              },
              "visualizationHint": null
            },
            {
              "name": "total",
              "color": "#D7C4BB",
              "type": FieldType.String,
              "format": FieldFormat.NotSpecified,
              "documentCount": 15
            }
          ],
          "assets": {
            "67fa079a54ebca66856d1a2fb90361fb3f3df16f2448a62ea8facb70e2c3afe0": {
              "id": "67fa079a54ebca66856d1a2fb90361fb3f3df16f2448a62ea8facb70e2c3afe0",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "Organization Management SRS.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/Organization%20Management%20SRS.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "61e32736cf97beb954af0619699a6ebd6aa84f7a9627dfb2758cef3dbc2b67cd": {
              "id": "61e32736cf97beb954af0619699a6ebd6aa84f7a9627dfb2758cef3dbc2b67cd",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1175901195.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1175901195.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "b38ae1bfc4053838777be431a2330d1ba372a6c2be05aba85dc8cf0c3eb36dc2": {
              "id": "b38ae1bfc4053838777be431a2330d1ba372a6c2be05aba85dc8cf0c3eb36dc2",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1218163215.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1218163215.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "9e33b06843468c5745010b260e9207ce3b8d85537010eb4345a77eabe9c533bb": {
              "id": "9e33b06843468c5745010b260e9207ce3b8d85537010eb4345a77eabe9c533bb",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1272896880.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1272896880.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "82225e023e688f96b16aec747375e62a13824712bd2c55dfa29c66a91fe4227b": {
              "id": "82225e023e688f96b16aec747375e62a13824712bd2c55dfa29c66a91fe4227b",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1331000252.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1331000252.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "ab1011ed2d0697750822f7de317f54a8af8074a8148b67b3c7a887b6b9e807eb": {
              "id": "ab1011ed2d0697750822f7de317f54a8af8074a8148b67b3c7a887b6b9e807eb",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1364242992.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1364242992.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "8127345d06979f209a6e01c6eafb134b033546589f6aa920a8c3f2f66fa46971": {
              "id": "8127345d06979f209a6e01c6eafb134b033546589f6aa920a8c3f2f66fa46971",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1398884870.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1398884870.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "044b985b9eaa184d43ed6f9eb3018f65acd2a216ccecdb357c8c1f119c5bf48a": {
              "id": "044b985b9eaa184d43ed6f9eb3018f65acd2a216ccecdb357c8c1f119c5bf48a",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1434690897.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1434690897.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "adc31bee85d089454a5d92442d453628ecd644268a3eaef137f1b06507e1955e": {
              "id": "adc31bee85d089454a5d92442d453628ecd644268a3eaef137f1b06507e1955e",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1478577507.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1478577507.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "9d4be7f7ddd663278887060ec93cbbb5490e00f767a1b5b5c4ff8fcd00ba0763": {
              "id": "9d4be7f7ddd663278887060ec93cbbb5490e00f767a1b5b5c4ff8fcd00ba0763",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1543351377.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1543351377.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "69b17fe68676ab5cab83e4ec969e98dd3159b1d5b315725829ea306f4051c061": {
              "id": "69b17fe68676ab5cab83e4ec969e98dd3159b1d5b315725829ea306f4051c061",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1593466222.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1593466222.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "3f0be55989b5b4133f902f901760b6b4a8499617417c0ae83788b378e4b13b45": {
              "id": "3f0be55989b5b4133f902f901760b6b4a8499617417c0ae83788b378e4b13b45",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1602013939.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1602013939.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "884ac845c6e94865a5b4d363b8f8711e107eca00c949e11e1e75e887ab8b4b50": {
              "id": "884ac845c6e94865a5b4d363b8f8711e107eca00c949e11e1e75e887ab8b4b50",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_160393417.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_160393417.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "09b1b209ca14b0868ff7753fdb34eca384c097836aeb40c3ffc135c7d6bc732a": {
              "id": "09b1b209ca14b0868ff7753fdb34eca384c097836aeb40c3ffc135c7d6bc732a",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1611931649.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1611931649.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "a70c6599a0c2a1468f02d8cfa252c07c27798c076ce6e7ff3c7d07720468e0ff": {
              "id": "a70c6599a0c2a1468f02d8cfa252c07c27798c076ce6e7ff3c7d07720468e0ff",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1644229996.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1644229996.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "88dba0e610a0adef638b5a13330393443024dd6222f9cae0ef8d1613c3c07533": {
              "id": "88dba0e610a0adef638b5a13330393443024dd6222f9cae0ef8d1613c3c07533",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1656457645.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1656457645.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "37491b530b92cdbdbb75e359f279fffe6629b0b05a9be83f0d2889c4c065e520": {
              "id": "37491b530b92cdbdbb75e359f279fffe6629b0b05a9be83f0d2889c4c065e520",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1708887988 (1).pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1708887988%20(1).pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "dcce1c0ad19b9132cadd8f5b3873dc439327c389b481b0f0e471069509df2ead": {
              "id": "dcce1c0ad19b9132cadd8f5b3873dc439327c389b481b0f0e471069509df2ead",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1765854137.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1765854137.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "ecebbb510b2fb43aa544936ba74ca6f9b00cc7923286edabc7cc0ed1096946e9": {
              "id": "ecebbb510b2fb43aa544936ba74ca6f9b00cc7923286edabc7cc0ed1096946e9",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1708887988.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1708887988.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "52daadfd3abf7b2baaa7845991f04208808763d39a60f7264f7e97c4a7f1bd3d": {
              "id": "52daadfd3abf7b2baaa7845991f04208808763d39a60f7264f7e97c4a7f1bd3d",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1780461106.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1780461106.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "04ab84194b88ced8803671751d46f586d0b0d46a776b391e13f693d3e764133d": {
              "id": "04ab84194b88ced8803671751d46f586d0b0d46a776b391e13f693d3e764133d",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1793789094.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1793789094.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "230ef5f94c7088bf051d717982fefd2e7860d86262eec024c8fa1d2a7d67b798": {
              "id": "230ef5f94c7088bf051d717982fefd2e7860d86262eec024c8fa1d2a7d67b798",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1832731011.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1832731011.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "ab59f3c77f01953dfa8cc8fce3a197cdbb41e414dd733f80eaa07ed991dafc53": {
              "id": "ab59f3c77f01953dfa8cc8fce3a197cdbb41e414dd733f80eaa07ed991dafc53",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1846565748.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1846565748.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "aad05b68b701cacf4daaa77bffb0d6be75c683ce4e14bf00978ec5aaaf15c23b": {
              "id": "aad05b68b701cacf4daaa77bffb0d6be75c683ce4e14bf00978ec5aaaf15c23b",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1852308150.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1852308150.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "055cd78202ecd5cbd0cdd0deb1f8b94a9c26a8bb931156d708f581267a32bec4": {
              "id": "055cd78202ecd5cbd0cdd0deb1f8b94a9c26a8bb931156d708f581267a32bec4",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1870312507.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1870312507.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "56170b4ab380f989fb1b7e6b6485031f9575cd6ef6510c5063d4442cb239d82f": {
              "id": "56170b4ab380f989fb1b7e6b6485031f9575cd6ef6510c5063d4442cb239d82f",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1897610768.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1897610768.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "6684229bfbc35d6205e3e79757034e1eafa09ffdc552d66ef7b531a3a459c7d2": {
              "id": "6684229bfbc35d6205e3e79757034e1eafa09ffdc552d66ef7b531a3a459c7d2",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1932332783.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1932332783.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "fc3482c114a62fd7e4da3467f086e2db88e5dc49c3d6ab0e5ac96bd5befba3dd": {
              "id": "fc3482c114a62fd7e4da3467f086e2db88e5dc49c3d6ab0e5ac96bd5befba3dd",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1962592488.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1962592488.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "a65ec79eee8eb01a63cb006237e85ea13464fd22f26c2a997da17ad2c41ad666": {
              "id": "a65ec79eee8eb01a63cb006237e85ea13464fd22f26c2a997da17ad2c41ad666",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_1962856309.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1962856309.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "e01e31dfb596880a71abfa182e5d2097059e9a3ac64d9f8a3363ff1ae5e352fa": {
              "id": "e01e31dfb596880a71abfa182e5d2097059e9a3ac64d9f8a3363ff1ae5e352fa",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_200578101.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_200578101.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "9247db515cb10e56098321d86063927e1fc06469a2118c08ade50f58f807f604": {
              "id": "9247db515cb10e56098321d86063927e1fc06469a2118c08ade50f58f807f604",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_2052899701.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_2052899701.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "34257a920672db605559ec9f6e4d16d8fca36de97e0df8f24673711e1f317703": {
              "id": "34257a920672db605559ec9f6e4d16d8fca36de97e0df8f24673711e1f317703",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_2074546605.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_2074546605.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "678cee39e9511cc11475176ac4f5606374f010396859c1aa05363ae66c37b92d": {
              "id": "678cee39e9511cc11475176ac4f5606374f010396859c1aa05363ae66c37b92d",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_2099719119.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_2099719119.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "19ede6d4bcc40b2a198f218bbdf5c7381ed6e17813e9e663d1784a09483494bc": {
              "id": "19ede6d4bcc40b2a198f218bbdf5c7381ed6e17813e9e663d1784a09483494bc",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_2108570095.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_2108570095.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "7909dc454646422f23b3be269e7cfc1bdf605f247dd5dd2bc990a17d294fa10e": {
              "id": "7909dc454646422f23b3be269e7cfc1bdf605f247dd5dd2bc990a17d294fa10e",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_2132557852.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_2132557852.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "eee36ee0d3132a4304d0ff39cd63a43eda503fabb8e3ebca444e8ec6d71ed319": {
              "id": "eee36ee0d3132a4304d0ff39cd63a43eda503fabb8e3ebca444e8ec6d71ed319",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_2132939268.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_2132939268.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "1c5d56dd6930efb2b83766f674f575766d85379be45ead9871574f0b0e36ec96": {
              "id": "1c5d56dd6930efb2b83766f674f575766d85379be45ead9871574f0b0e36ec96",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_21860140.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_21860140.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "ec2b0b67bf01d5b9d5cd0188a29a277f26d6deba8a887257cad99bc5d7306256": {
              "id": "ec2b0b67bf01d5b9d5cd0188a29a277f26d6deba8a887257cad99bc5d7306256",
              "format": "ai",
              "state": 1,
              "type": 5,
              "name": "invoices_239912881.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_239912881.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/postscript"
            },
            "c6f30d53a63ccf7af4ba3540cdd621103c5bcfa9c859557afde4e8bb9f34fbb4": {
              "id": "c6f30d53a63ccf7af4ba3540cdd621103c5bcfa9c859557afde4e8bb9f34fbb4",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_267107453.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_267107453.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "fd1928ab51c865fd364593790b9055784858c72a5a4b9aab8a63f70c04431ca5": {
              "id": "fd1928ab51c865fd364593790b9055784858c72a5a4b9aab8a63f70c04431ca5",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_284724174.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_284724174.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "ba30b26ef5e16df275e10e10a9220bd0ba34b37a24a4c86bd7c0dadb3251db36": {
              "id": "ba30b26ef5e16df275e10e10a9220bd0ba34b37a24a4c86bd7c0dadb3251db36",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_319506763.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_319506763.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "abfb8ef6cfeab3015c83fb7dcb275dd9f548f59f30e18cbb9011cd9c04a71568": {
              "id": "abfb8ef6cfeab3015c83fb7dcb275dd9f548f59f30e18cbb9011cd9c04a71568",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_338648176.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_338648176.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "75590930e7eef96f2ffc886f7a3a881f383732f67dabf8ec755294537174a4cd": {
              "id": "75590930e7eef96f2ffc886f7a3a881f383732f67dabf8ec755294537174a4cd",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_352667272.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_352667272.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "36095e156fe5e315a37f1c6a2947d362514a1c6ad3c7033f4b59df8528952327": {
              "id": "36095e156fe5e315a37f1c6a2947d362514a1c6ad3c7033f4b59df8528952327",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_384619193.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_384619193.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "2a2adea91aa1042f5738eea558d331d4fe507ac25da1fefc447a4626ef1f6ebf": {
              "id": "2a2adea91aa1042f5738eea558d331d4fe507ac25da1fefc447a4626ef1f6ebf",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_44326216.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_44326216.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "82cb4dd7e136f48077e12ff533d58718d0baf01b0ac3be267a8c70deaef03849": {
              "id": "82cb4dd7e136f48077e12ff533d58718d0baf01b0ac3be267a8c70deaef03849",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_483812058.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_483812058.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "bed47e622afc9a74af582e59dcab06faf09081d243f89cf4ece9b69ee27097c7": {
              "id": "bed47e622afc9a74af582e59dcab06faf09081d243f89cf4ece9b69ee27097c7",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_500531634.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_500531634.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "4a5b3bedd82c1ee31140d5e73a40a957babf0b7e2844da2ee0d5b30bbfec81ce": {
              "id": "4a5b3bedd82c1ee31140d5e73a40a957babf0b7e2844da2ee0d5b30bbfec81ce",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_555736080.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_555736080.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "df52484630c3dbac3907e39d11996920e3d90d2bbd52aae41ddf01c2c7d9d637": {
              "id": "df52484630c3dbac3907e39d11996920e3d90d2bbd52aae41ddf01c2c7d9d637",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_578632386.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_578632386.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "7d2520d4513750509ce15548e82fa2d26d31433c62f52483bd56d952fe6d2782": {
              "id": "7d2520d4513750509ce15548e82fa2d26d31433c62f52483bd56d952fe6d2782",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_597132449.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_597132449.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "24aa6142d4f4412b97c701a31782cc3c78be4993e6518eba392d937d1ca2985e": {
              "id": "24aa6142d4f4412b97c701a31782cc3c78be4993e6518eba392d937d1ca2985e",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_652889878.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_652889878.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "07f9c5ad71f75bf4e66611ae1a7b397594a5cf5c6f69e15ef99d72525f902678": {
              "id": "07f9c5ad71f75bf4e66611ae1a7b397594a5cf5c6f69e15ef99d72525f902678",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_688441192.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_688441192.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "0ceba9739fc294303a7950b7b6db9a618076985d73b4e9fe4841730d9d8a09fa": {
              "id": "0ceba9739fc294303a7950b7b6db9a618076985d73b4e9fe4841730d9d8a09fa",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_691239142.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_691239142.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "89c0d22b0bb97be569fc580f55bb92b093ea85d17957a2041f187cbf4279c2aa": {
              "id": "89c0d22b0bb97be569fc580f55bb92b093ea85d17957a2041f187cbf4279c2aa",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_697120672.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_697120672.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "9dd1f47499411034403598f0cf914b32ab62fd0d334d0c0012c5d09d76157bb5": {
              "id": "9dd1f47499411034403598f0cf914b32ab62fd0d334d0c0012c5d09d76157bb5",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_701140162.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_701140162.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "d9b14759ba78f997f5fa71dceed7df29b87a0dd5c8a30c77ac896d3509208000": {
              "id": "d9b14759ba78f997f5fa71dceed7df29b87a0dd5c8a30c77ac896d3509208000",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_720989940.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_720989940.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "c1cad5e31d6b6448f68ad61787f99cb6b04c9e1b37c1b3f4d55c7beceb62b4d0": {
              "id": "c1cad5e31d6b6448f68ad61787f99cb6b04c9e1b37c1b3f4d55c7beceb62b4d0",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_746204560.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_746204560.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "eb976dda6cdee3c5b22add2b29033b04e65f22458b845b80767d9ba99d64d4dd": {
              "id": "eb976dda6cdee3c5b22add2b29033b04e65f22458b845b80767d9ba99d64d4dd",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_759212333.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_759212333.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "9b08e39f84a01c69bcfd8d6c147e6eddaad8fd1548f62503252eb8a4d7b43801": {
              "id": "9b08e39f84a01c69bcfd8d6c147e6eddaad8fd1548f62503252eb8a4d7b43801",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_769190728 (1).pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_769190728%20(1).pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "8498857478d5a8e71c47bf1fd0d22b752f82c4555b0a93b3072001e587ee56f1": {
              "id": "8498857478d5a8e71c47bf1fd0d22b752f82c4555b0a93b3072001e587ee56f1",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_769190728.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_769190728.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "cd1d2442d9b991027cfbe47adc5bdb813394f3cfca3a082a07e0ef8df4ce32f4": {
              "id": "cd1d2442d9b991027cfbe47adc5bdb813394f3cfca3a082a07e0ef8df4ce32f4",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_778281042.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_778281042.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "fdcf3751b9ddc78ce8cf4bdacdd2eb5e984232a9cfd09ca2bc010b5bcbbcbcf6": {
              "id": "fdcf3751b9ddc78ce8cf4bdacdd2eb5e984232a9cfd09ca2bc010b5bcbbcbcf6",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_801142873.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_801142873.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "abe5d1db1af3208e9dc8a85c402f5fe438d5adea910cbb1e2732502f2d9e7505": {
              "id": "abe5d1db1af3208e9dc8a85c402f5fe438d5adea910cbb1e2732502f2d9e7505",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_808358348.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_808358348.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "41899941036d66e788a8fea4f38b0e971ca2703fd634be48d9978ea1963dd0fb": {
              "id": "41899941036d66e788a8fea4f38b0e971ca2703fd634be48d9978ea1963dd0fb",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_864602125.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_864602125.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "bad57bc367f841807e3732b7941170fbec64c0d172e17718f300aec179b89659": {
              "id": "bad57bc367f841807e3732b7941170fbec64c0d172e17718f300aec179b89659",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_878975076.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_878975076.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "b9895eb2c2f126e3aaa451e2d4205c70deb7df3db0f8737093c21d78df9eb7b0": {
              "id": "b9895eb2c2f126e3aaa451e2d4205c70deb7df3db0f8737093c21d78df9eb7b0",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_904758558.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_904758558.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "f402ca21166ce742e0919e780140d7f807795ba81a7eb9bfe523b8b3981c6ba9": {
              "id": "f402ca21166ce742e0919e780140d7f807795ba81a7eb9bfe523b8b3981c6ba9",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_914037949.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_914037949.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "80d9230389327b0135e2d78fd5d6ed91106a152efced7b1e28a07fce88102982": {
              "id": "80d9230389327b0135e2d78fd5d6ed91106a152efced7b1e28a07fce88102982",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_914997798.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_914997798.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "bb9deac3cf7fccb15d709fda6a25f361020babd1447624f1cf99c91fda22ec07": {
              "id": "bb9deac3cf7fccb15d709fda6a25f361020babd1447624f1cf99c91fda22ec07",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_927968522.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_927968522.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "36b427ffa3cf50e6425073d4e7990f335bd6bad731d891483842e9c98882c20d": {
              "id": "36b427ffa3cf50e6425073d4e7990f335bd6bad731d891483842e9c98882c20d",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_950833536.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_950833536.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "ed7958a2412c3e61b28e2ebf487bc311cdbbb72648c377925e51879467709b57": {
              "id": "ed7958a2412c3e61b28e2ebf487bc311cdbbb72648c377925e51879467709b57",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_989989124.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_989989124.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "64daffd22b6c3adccf22c4990d9177b134a447ab363e5f051481771aac3688e7": {
              "id": "64daffd22b6c3adccf22c4990d9177b134a447ab363e5f051481771aac3688e7",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_99446232.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_99446232.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "adec105d79d038cb278b17f9b263e186bd223ddba17655ae9a8e2e412fb6f51c": {
              "id": "adec105d79d038cb278b17f9b263e186bd223ddba17655ae9a8e2e412fb6f51c",
              "format": "pdf",
              "state": 1,
              "type": 5,
              "name": "invoices_323708658.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_323708658.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf"
            },
            "14c17924478ed560dd6583293567e8e39c16cb88e7ad492bf09b7e46b745dd17": {
              "id": "14c17924478ed560dd6583293567e8e39c16cb88e7ad492bf09b7e46b745dd17",
              "format": "pdf",
              "state": 2,
              "type": 5,
              "name": "invoice_1436590255.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoice_1436590255.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf",
              "labelingState": 2,
              "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
            },
            "25d78c15ff7316d5de2eff1b4acee2607ddd9e114cb26feba9c1667382677d9e": {
              "id": "25d78c15ff7316d5de2eff1b4acee2607ddd9e114cb26feba9c1667382677d9e",
              "format": "pdf",
              "state": 2,
              "type": 5,
              "name": "invoices_1012525207.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1012525207.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf",
              "labelingState": 2,
              "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
            },
            "7883e3a010406c1378ce4fc5bb1d5fa79eb9f4b39e9a538229e6a33f983c6c8d": {
              "id": "7883e3a010406c1378ce4fc5bb1d5fa79eb9f4b39e9a538229e6a33f983c6c8d",
              "format": "pdf",
              "state": 2,
              "type": 5,
              "name": "invoices_1046253688.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1046253688.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf",
              "labelingState": 2,
              "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
            },
            "051929c54d417de6c60b25b9f4d9644cec1b358a5ec64c5ca4e46ef70b9a8995": {
              "id": "051929c54d417de6c60b25b9f4d9644cec1b358a5ec64c5ca4e46ef70b9a8995",
              "format": "pdf",
              "state": 2,
              "type": 5,
              "name": "invoices_1062199364.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1062199364.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf",
              "labelingState": 2,
              "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
            },
            "924c8c533c0ef6b8c6258a32dfd2ca77f48b8c45fce3ec3d8ac5949844eddea5": {
              "id": "924c8c533c0ef6b8c6258a32dfd2ca77f48b8c45fce3ec3d8ac5949844eddea5",
              "format": "pdf",
              "state": 2,
              "type": 5,
              "name": "invoice_2026368166.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoice_2026368166.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf",
              "labelingState": 2,
              "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
            },
            "1437fab0d5537b1901ac281e2da4b1122676741d62cbdceb5ce94c9e20e78778": {
              "id": "1437fab0d5537b1901ac281e2da4b1122676741d62cbdceb5ce94c9e20e78778",
              "format": "pdf",
              "state": 2,
              "type": 5,
              "name": "invoice_324447862.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoice_324447862.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf",
              "labelingState": 2,
              "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
            },
            "720c7cfd583d1045a9d3b839e73760fb49667b2b7149b45df44f4549988beedc": {
              "id": "720c7cfd583d1045a9d3b839e73760fb49667b2b7149b45df44f4549988beedc",
              "format": "pdf",
              "state": 2,
              "type": 5,
              "name": "invoices_1135777609.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1135777609.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf",
              "labelingState": 2,
              "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
            },
            "bff7d0ab61054370e848c7f1553cd81b22af7152bf9a680ec2a2c197d00602f6": {
              "id": "bff7d0ab61054370e848c7f1553cd81b22af7152bf9a680ec2a2c197d00602f6",
              "format": "pdf",
              "state": 2,
              "type": 5,
              "name": "invoices_1105175692.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1105175692.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf",
              "labelingState": 2,
              "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
            },
            "49a9e0b4b91a516a5fb31760af4d075dfc6993cc171c5b4f927690d417a35ae4": {
              "id": "49a9e0b4b91a516a5fb31760af4d075dfc6993cc171c5b4f927690d417a35ae4",
              "format": "pdf",
              "state": 2,
              "type": 5,
              "name": "invoices_1162902456.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1162902456.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf",
              "labelingState": 2,
              "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
            },
            "4fc16c8d350b01fcc29bd1567a1d2a73bd11e737fd9d40b7f73b73ffb1fb8743": {
              "id": "4fc16c8d350b01fcc29bd1567a1d2a73bd11e737fd9d40b7f73b73ffb1fb8743",
              "format": "pdf",
              "state": 2,
              "type": 5,
              "name": "invoices_1168186314.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1168186314.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf",
              "labelingState": 2,
              "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
            },
            "73b5d94763e145f3a2c6dc0d4b2a52a33a977be5dc9edd455f40230996438c4d": {
              "id": "73b5d94763e145f3a2c6dc0d4b2a52a33a977be5dc9edd455f40230996438c4d",
              "format": "pdf",
              "state": 2,
              "type": 5,
              "name": "invoices_1193047857.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1193047857.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf",
              "labelingState": 2,
              "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
            },
            "95e2369056b8bf1ef3fc36ec0cc86e69d03d6f8005107cb8dc6079613bba1c0f": {
              "id": "95e2369056b8bf1ef3fc36ec0cc86e69d03d6f8005107cb8dc6079613bba1c0f",
              "format": "pdf",
              "state": 2,
              "type": 5,
              "name": "invoices_1441657616.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1441657616.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf",
              "labelingState": 2,
              "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
            },
            "b91b4048bda56ba01f9b557ee68d2a340b0cde665b42a590d5e8fbb431a28fc0": {
              "id": "b91b4048bda56ba01f9b557ee68d2a340b0cde665b42a590d5e8fbb431a28fc0",
              "format": "pdf",
              "state": 2,
              "type": 5,
              "name": "invoices_1500341453.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_1500341453.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf",
              "labelingState": 2,
              "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
            },
            "4050a0f8709771b09ecbe68cc8a86a60e07353fac1e26c6030583a0c2c5f3b11": {
              "id": "4050a0f8709771b09ecbe68cc8a86a60e07353fac1e26c6030583a0c2c5f3b11",
              "format": "pdf",
              "state": 2,
              "type": 5,
              "name": "invoices_171527390.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_171527390.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf",
              "labelingState": 2,
              "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
            },
            "0795152c2108ed793d4da2980f87063f0d48f2f161184ef7cf975397c927120e": {
              "id": "0795152c2108ed793d4da2980f87063f0d48f2f161184ef7cf975397c927120e",
              "format": "pdf",
              "state": 2,
              "type": 5,
              "name": "invoices_210637450.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_210637450.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf",
              "labelingState": 2,
              "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
            },
            "2edfba1213633f6d6bf3d2ca37609b4da13355c4bdd21e5d2e0e773104a1347b": {
              "id": "2edfba1213633f6d6bf3d2ca37609b4da13355c4bdd21e5d2e0e773104a1347b",
              "format": "pdf",
              "state": 2,
              "type": 5,
              "name": "invoices_438646742.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_438646742.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf",
              "labelingState": 2,
              "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
            },
            "6d23d9c8aa3ed9cbbbe5323d6ac256c4ca4fa823ecf844cbd0ca3f83ec789f11": {
              "id": "6d23d9c8aa3ed9cbbbe5323d6ac256c4ca4fa823ecf844cbd0ca3f83ec789f11",
              "format": "pdf",
              "state": 2,
              "type": 5,
              "name": "invoices_789866661.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_789866661.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf",
              "labelingState": 2,
              "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
            },
            "e2a93b07a6fc3efb6222588cec9d4a32062bf37a6593325020c57db1f5077589": {
              "id": "e2a93b07a6fc3efb6222588cec9d4a32062bf37a6593325020c57db1f5077589",
              "format": "pdf",
              "state": 2,
              "type": 5,
              "name": "invoices_830893467.pdf",
              "path": "https://stratfy01.blob.core.windows.net/test/invoices_830893467.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
              "size": null,
              "mimeType": "application/pdf",
              "labelingState": 2,
              "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
            }
          },
          "lastVisitedAssetId": "64daffd22b6c3adccf22c4990d9177b134a447ab363e5f051481771aac3688e7",
          "recentModelRecords": [
            {
              "modelInfo": {
                  "modelName": "",
                "modelId": "1e4ac789-233c-49e1-93cb-bfe3180c6b93",
                "createdDateTime": "2022-06-02T15:48:37Z",
                "isComposed": false
              },
              "averageAccuracy": 0.381,
              "accuracies": {
                "ABN": 0.556,
                "Table": 0,
                "Table: Description": 0,
                "Table: Price": 0,
                "Table: quantity": 0,
                "due_date": 0.222,
                "invoice_date": 0.556,
                "invoice_number": 0.611,
                "tax": 0.278,
                "total": 0.444
              },
            //   "isComposed": false
            },
            {
              "modelInfo": {
                  "modelName": "",
                "modelId": "c0a6c9b1-0aa3-4661-abfe-1ca0092a140e",
                "createdDateTime": "2022-05-24T15:50:02Z",
                "isComposed": false
              },
              "averageAccuracy": 0.381,
              "accuracies": {
                "ABN": 0.556,
                "Table": 0,
                "Table: Description": 0,
                "Table: Price": 0,
                "Table: quantity": 0,
                "due_date": 0.222,
                "invoice_date": 0.556,
                "invoice_number": 0.611,
                "tax": 0.278,
                "total": 0.444
              },
            //   "isComposed": false
            },
            {
              "modelInfo": {
                  modelName: "",
                "modelId": "5dfd9dc8-3d70-4586-873d-632ad0f34c54",
                "createdDateTime": "2022-05-17T03:02:34Z",
                "isComposed": false
              },
              "averageAccuracy": 0.381,
              "accuracies": {
                "ABN": 0.556,
                "Table": 0,
                "Table: Description": 0,
                "Table: Price": 0,
                "Table: quantity": 0,
                "due_date": 0.222,
                "invoice_date": 0.556,
                "invoice_number": 0.611,
                "tax": 0.278,
                "total": 0.444
              },
            //   "isComposed": false
            },
            {
              "modelInfo": {
                "modelId": "2ba4821d-f73d-4db0-a43f-f3c25ef889c0",
                "modelName": "",
                "createdDateTime": "2022-05-06T23:59:59Z",
                "isComposed": false
              },
              "averageAccuracy": 0.381,
              "accuracies": {
                "ABN": 0.556,
                "Table": 0,
                "Table: Description": 0,
                "Table: Price": 0,
                "Table: quantity": 0,
                "due_date": 0.222,
                "invoice_date": 0.556,
                "invoice_number": 0.611,
                "tax": 0.278,
                "total": 0.444
              },
            //   "isComposed": false
            },
            {
              "modelInfo": {
                "modelId": "1d099ca7-6b1b-4a3e-a1e7-c4f6d5a37bb8",
                "createdDateTime": "2022-05-05T16:41:18Z",
                "isComposed": false,
                modelName: ""
              },
              "averageAccuracy": 0.349,
              "accuracies": {
                "ABN": 0.5,
                "Table": 0,
                "Table: Description": 0,
                "Table: Price": 0,
                "Table: quantity": 0.111,
                "due_date": 0.222,
                "invoice_date": 0.5,
                "invoice_number": 0.556,
                "tax": 0.222,
                "total": 0.444
              },
            //   "isComposed": false
            }
          ],
          "trainRecord": {
            "modelInfo": {
              "modelId": "1e4ac789-233c-49e1-93cb-bfe3180c6b93",
              "modelName": "",
              "createdDateTime": "2022-06-02T15:48:37Z",
              "isComposed": false
            },
            "averageAccuracy": 0.381,
            "accuracies": {
              "ABN": 0.556,
              "Table": 0,
              "Table: Description": 0,
              "Table: Price": 0,
              "Table: quantity": 0,
              "due_date": 0.222,
              "invoice_date": 0.556,
              "invoice_number": 0.611,
              "tax": 0.278,
              "total": 0.444
            }
          },
          "predictModelId": "1e4ac789-233c-49e1-93cb-bfe3180c6b93"
        }
      ],
                    currentProject: {
                        "sourceConnection": {
                          "providerOptions": {
                            "sas": "https://stratfy01.blob.core.windows.net/test?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D"
                          },
                          "id": "Qpi6oMgio",
                          "name": "Stratfy",
                          "providerType": "azureBlobStorage"
                        },
                        "apiKey": "f316231f6a9b4017af9c5a19a7070fbc",
                        "apiUriBase": "https://stratfy011.cognitiveservices.azure.com/",
                        "name": "Stratfy",
                        "folderPath": "",
                        "securityToken": "Stratfy Token",
                        "version": "2.1.0",
                        "id": "ookC0C0ix",
                        "tags": [
                          {
                            "name": "invoice_number",
                            "color": "#CC543A",
                            "type": FieldType.String,
                            "format": FieldFormat.NotSpecified,
                            "documentCount": 18
                          },
                          {
                            "name": "ABN",
                            "color": "#7BA23F",
                            "type": FieldType.String,
                            "format": FieldFormat.NotSpecified,
                            "documentCount": 16
                          },
                          {
                            "name": "invoice_date",
                            "color": "#58B2DC",
                            "type": FieldType.String,
                            "format": FieldFormat.NotSpecified,
                            "documentCount": 18
                          },
                          {
                            "name": "tax",
                            "color": "#FFB11B",
                            "type": FieldType.String,
                            "format": FieldFormat.NotSpecified,
                            "documentCount": 12
                          },
                          {
                            "name": "due_date",
                            "color": "#2E5C6E",
                            "type": FieldType.String,
                            "format": FieldFormat.NotSpecified,
                            "documentCount": 8
                          },
                          {
                            "name": "Table",
                            "color": "#A96360",
                            "type": FieldType.Array,
                            "format": FieldFormat.NotSpecified,
                            "documentCount": 0,
                            //@ts-ignore
                            "itemType": "Table_object",
                            "fields": null,
                            "definition": {
                              "fieldKey": "Table_object",
                              "fieldType": "object",
                              "fieldFormat": "not-specified",
                              "itemType": null,
                              "fields": [
                                {
                                  "fieldKey": "Description",
                                  "fieldType": "string",
                                  "fieldFormat": "alphanumeric",
                                  "itemType": null,
                                  "fields": null
                                },
                                {
                                  "fieldKey": "quantity",
                                  "fieldType": "number",
                                  "fieldFormat": "not-specified",
                                  "itemType": null,
                                  "fields": null
                                },
                                {
                                  "fieldKey": "Price",
                                  "fieldType": "number",
                                  "fieldFormat": "currency",
                                  "itemType": null,
                                  "fields": null
                                }
                              ]
                            },
                            "visualizationHint": null
                          },
                          {
                            "name": "total",
                            "color": "#D7C4BB",
                            "type": FieldType.String,
                            "format": FieldFormat.NotSpecified,
                            "documentCount": 15
                          }
                        ],
                        "assets": {
                          "67fa079a54ebca66856d1a2fb90361fb3f3df16f2448a62ea8facb70e2c3afe0": {
                            "id": "67fa079a54ebca66856d1a2fb90361fb3f3df16f2448a62ea8facb70e2c3afe0",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "Organization Management SRS.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/Organization%20Management%20SRS.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "61e32736cf97beb954af0619699a6ebd6aa84f7a9627dfb2758cef3dbc2b67cd": {
                            "id": "61e32736cf97beb954af0619699a6ebd6aa84f7a9627dfb2758cef3dbc2b67cd",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1175901195.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1175901195.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "b38ae1bfc4053838777be431a2330d1ba372a6c2be05aba85dc8cf0c3eb36dc2": {
                            "id": "b38ae1bfc4053838777be431a2330d1ba372a6c2be05aba85dc8cf0c3eb36dc2",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1218163215.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1218163215.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "9e33b06843468c5745010b260e9207ce3b8d85537010eb4345a77eabe9c533bb": {
                            "id": "9e33b06843468c5745010b260e9207ce3b8d85537010eb4345a77eabe9c533bb",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1272896880.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1272896880.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "82225e023e688f96b16aec747375e62a13824712bd2c55dfa29c66a91fe4227b": {
                            "id": "82225e023e688f96b16aec747375e62a13824712bd2c55dfa29c66a91fe4227b",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1331000252.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1331000252.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "ab1011ed2d0697750822f7de317f54a8af8074a8148b67b3c7a887b6b9e807eb": {
                            "id": "ab1011ed2d0697750822f7de317f54a8af8074a8148b67b3c7a887b6b9e807eb",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1364242992.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1364242992.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "8127345d06979f209a6e01c6eafb134b033546589f6aa920a8c3f2f66fa46971": {
                            "id": "8127345d06979f209a6e01c6eafb134b033546589f6aa920a8c3f2f66fa46971",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1398884870.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1398884870.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "044b985b9eaa184d43ed6f9eb3018f65acd2a216ccecdb357c8c1f119c5bf48a": {
                            "id": "044b985b9eaa184d43ed6f9eb3018f65acd2a216ccecdb357c8c1f119c5bf48a",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1434690897.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1434690897.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "adc31bee85d089454a5d92442d453628ecd644268a3eaef137f1b06507e1955e": {
                            "id": "adc31bee85d089454a5d92442d453628ecd644268a3eaef137f1b06507e1955e",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1478577507.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1478577507.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "9d4be7f7ddd663278887060ec93cbbb5490e00f767a1b5b5c4ff8fcd00ba0763": {
                            "id": "9d4be7f7ddd663278887060ec93cbbb5490e00f767a1b5b5c4ff8fcd00ba0763",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1543351377.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1543351377.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "69b17fe68676ab5cab83e4ec969e98dd3159b1d5b315725829ea306f4051c061": {
                            "id": "69b17fe68676ab5cab83e4ec969e98dd3159b1d5b315725829ea306f4051c061",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1593466222.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1593466222.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "3f0be55989b5b4133f902f901760b6b4a8499617417c0ae83788b378e4b13b45": {
                            "id": "3f0be55989b5b4133f902f901760b6b4a8499617417c0ae83788b378e4b13b45",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1602013939.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1602013939.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "884ac845c6e94865a5b4d363b8f8711e107eca00c949e11e1e75e887ab8b4b50": {
                            "id": "884ac845c6e94865a5b4d363b8f8711e107eca00c949e11e1e75e887ab8b4b50",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_160393417.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_160393417.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "09b1b209ca14b0868ff7753fdb34eca384c097836aeb40c3ffc135c7d6bc732a": {
                            "id": "09b1b209ca14b0868ff7753fdb34eca384c097836aeb40c3ffc135c7d6bc732a",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1611931649.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1611931649.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "a70c6599a0c2a1468f02d8cfa252c07c27798c076ce6e7ff3c7d07720468e0ff": {
                            "id": "a70c6599a0c2a1468f02d8cfa252c07c27798c076ce6e7ff3c7d07720468e0ff",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1644229996.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1644229996.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "88dba0e610a0adef638b5a13330393443024dd6222f9cae0ef8d1613c3c07533": {
                            "id": "88dba0e610a0adef638b5a13330393443024dd6222f9cae0ef8d1613c3c07533",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1656457645.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1656457645.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "37491b530b92cdbdbb75e359f279fffe6629b0b05a9be83f0d2889c4c065e520": {
                            "id": "37491b530b92cdbdbb75e359f279fffe6629b0b05a9be83f0d2889c4c065e520",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1708887988 (1).pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1708887988%20(1).pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "dcce1c0ad19b9132cadd8f5b3873dc439327c389b481b0f0e471069509df2ead": {
                            "id": "dcce1c0ad19b9132cadd8f5b3873dc439327c389b481b0f0e471069509df2ead",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1765854137.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1765854137.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "ecebbb510b2fb43aa544936ba74ca6f9b00cc7923286edabc7cc0ed1096946e9": {
                            "id": "ecebbb510b2fb43aa544936ba74ca6f9b00cc7923286edabc7cc0ed1096946e9",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1708887988.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1708887988.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "52daadfd3abf7b2baaa7845991f04208808763d39a60f7264f7e97c4a7f1bd3d": {
                            "id": "52daadfd3abf7b2baaa7845991f04208808763d39a60f7264f7e97c4a7f1bd3d",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1780461106.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1780461106.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "04ab84194b88ced8803671751d46f586d0b0d46a776b391e13f693d3e764133d": {
                            "id": "04ab84194b88ced8803671751d46f586d0b0d46a776b391e13f693d3e764133d",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1793789094.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1793789094.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "230ef5f94c7088bf051d717982fefd2e7860d86262eec024c8fa1d2a7d67b798": {
                            "id": "230ef5f94c7088bf051d717982fefd2e7860d86262eec024c8fa1d2a7d67b798",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1832731011.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1832731011.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "ab59f3c77f01953dfa8cc8fce3a197cdbb41e414dd733f80eaa07ed991dafc53": {
                            "id": "ab59f3c77f01953dfa8cc8fce3a197cdbb41e414dd733f80eaa07ed991dafc53",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1846565748.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1846565748.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "aad05b68b701cacf4daaa77bffb0d6be75c683ce4e14bf00978ec5aaaf15c23b": {
                            "id": "aad05b68b701cacf4daaa77bffb0d6be75c683ce4e14bf00978ec5aaaf15c23b",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1852308150.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1852308150.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "055cd78202ecd5cbd0cdd0deb1f8b94a9c26a8bb931156d708f581267a32bec4": {
                            "id": "055cd78202ecd5cbd0cdd0deb1f8b94a9c26a8bb931156d708f581267a32bec4",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1870312507.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1870312507.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "56170b4ab380f989fb1b7e6b6485031f9575cd6ef6510c5063d4442cb239d82f": {
                            "id": "56170b4ab380f989fb1b7e6b6485031f9575cd6ef6510c5063d4442cb239d82f",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1897610768.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1897610768.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "6684229bfbc35d6205e3e79757034e1eafa09ffdc552d66ef7b531a3a459c7d2": {
                            "id": "6684229bfbc35d6205e3e79757034e1eafa09ffdc552d66ef7b531a3a459c7d2",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1932332783.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1932332783.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "fc3482c114a62fd7e4da3467f086e2db88e5dc49c3d6ab0e5ac96bd5befba3dd": {
                            "id": "fc3482c114a62fd7e4da3467f086e2db88e5dc49c3d6ab0e5ac96bd5befba3dd",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1962592488.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1962592488.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "a65ec79eee8eb01a63cb006237e85ea13464fd22f26c2a997da17ad2c41ad666": {
                            "id": "a65ec79eee8eb01a63cb006237e85ea13464fd22f26c2a997da17ad2c41ad666",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_1962856309.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1962856309.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "e01e31dfb596880a71abfa182e5d2097059e9a3ac64d9f8a3363ff1ae5e352fa": {
                            "id": "e01e31dfb596880a71abfa182e5d2097059e9a3ac64d9f8a3363ff1ae5e352fa",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_200578101.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_200578101.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "9247db515cb10e56098321d86063927e1fc06469a2118c08ade50f58f807f604": {
                            "id": "9247db515cb10e56098321d86063927e1fc06469a2118c08ade50f58f807f604",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_2052899701.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_2052899701.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "34257a920672db605559ec9f6e4d16d8fca36de97e0df8f24673711e1f317703": {
                            "id": "34257a920672db605559ec9f6e4d16d8fca36de97e0df8f24673711e1f317703",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_2074546605.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_2074546605.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "678cee39e9511cc11475176ac4f5606374f010396859c1aa05363ae66c37b92d": {
                            "id": "678cee39e9511cc11475176ac4f5606374f010396859c1aa05363ae66c37b92d",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_2099719119.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_2099719119.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "19ede6d4bcc40b2a198f218bbdf5c7381ed6e17813e9e663d1784a09483494bc": {
                            "id": "19ede6d4bcc40b2a198f218bbdf5c7381ed6e17813e9e663d1784a09483494bc",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_2108570095.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_2108570095.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "7909dc454646422f23b3be269e7cfc1bdf605f247dd5dd2bc990a17d294fa10e": {
                            "id": "7909dc454646422f23b3be269e7cfc1bdf605f247dd5dd2bc990a17d294fa10e",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_2132557852.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_2132557852.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "eee36ee0d3132a4304d0ff39cd63a43eda503fabb8e3ebca444e8ec6d71ed319": {
                            "id": "eee36ee0d3132a4304d0ff39cd63a43eda503fabb8e3ebca444e8ec6d71ed319",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_2132939268.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_2132939268.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "1c5d56dd6930efb2b83766f674f575766d85379be45ead9871574f0b0e36ec96": {
                            "id": "1c5d56dd6930efb2b83766f674f575766d85379be45ead9871574f0b0e36ec96",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_21860140.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_21860140.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "ec2b0b67bf01d5b9d5cd0188a29a277f26d6deba8a887257cad99bc5d7306256": {
                            "id": "ec2b0b67bf01d5b9d5cd0188a29a277f26d6deba8a887257cad99bc5d7306256",
                            "format": "ai",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_239912881.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_239912881.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/postscript"
                          },
                          "c6f30d53a63ccf7af4ba3540cdd621103c5bcfa9c859557afde4e8bb9f34fbb4": {
                            "id": "c6f30d53a63ccf7af4ba3540cdd621103c5bcfa9c859557afde4e8bb9f34fbb4",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_267107453.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_267107453.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "fd1928ab51c865fd364593790b9055784858c72a5a4b9aab8a63f70c04431ca5": {
                            "id": "fd1928ab51c865fd364593790b9055784858c72a5a4b9aab8a63f70c04431ca5",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_284724174.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_284724174.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "ba30b26ef5e16df275e10e10a9220bd0ba34b37a24a4c86bd7c0dadb3251db36": {
                            "id": "ba30b26ef5e16df275e10e10a9220bd0ba34b37a24a4c86bd7c0dadb3251db36",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_319506763.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_319506763.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "abfb8ef6cfeab3015c83fb7dcb275dd9f548f59f30e18cbb9011cd9c04a71568": {
                            "id": "abfb8ef6cfeab3015c83fb7dcb275dd9f548f59f30e18cbb9011cd9c04a71568",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_338648176.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_338648176.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "75590930e7eef96f2ffc886f7a3a881f383732f67dabf8ec755294537174a4cd": {
                            "id": "75590930e7eef96f2ffc886f7a3a881f383732f67dabf8ec755294537174a4cd",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_352667272.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_352667272.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "36095e156fe5e315a37f1c6a2947d362514a1c6ad3c7033f4b59df8528952327": {
                            "id": "36095e156fe5e315a37f1c6a2947d362514a1c6ad3c7033f4b59df8528952327",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_384619193.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_384619193.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "2a2adea91aa1042f5738eea558d331d4fe507ac25da1fefc447a4626ef1f6ebf": {
                            "id": "2a2adea91aa1042f5738eea558d331d4fe507ac25da1fefc447a4626ef1f6ebf",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_44326216.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_44326216.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "82cb4dd7e136f48077e12ff533d58718d0baf01b0ac3be267a8c70deaef03849": {
                            "id": "82cb4dd7e136f48077e12ff533d58718d0baf01b0ac3be267a8c70deaef03849",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_483812058.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_483812058.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "bed47e622afc9a74af582e59dcab06faf09081d243f89cf4ece9b69ee27097c7": {
                            "id": "bed47e622afc9a74af582e59dcab06faf09081d243f89cf4ece9b69ee27097c7",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_500531634.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_500531634.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "4a5b3bedd82c1ee31140d5e73a40a957babf0b7e2844da2ee0d5b30bbfec81ce": {
                            "id": "4a5b3bedd82c1ee31140d5e73a40a957babf0b7e2844da2ee0d5b30bbfec81ce",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_555736080.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_555736080.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "df52484630c3dbac3907e39d11996920e3d90d2bbd52aae41ddf01c2c7d9d637": {
                            "id": "df52484630c3dbac3907e39d11996920e3d90d2bbd52aae41ddf01c2c7d9d637",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_578632386.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_578632386.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "7d2520d4513750509ce15548e82fa2d26d31433c62f52483bd56d952fe6d2782": {
                            "id": "7d2520d4513750509ce15548e82fa2d26d31433c62f52483bd56d952fe6d2782",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_597132449.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_597132449.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "24aa6142d4f4412b97c701a31782cc3c78be4993e6518eba392d937d1ca2985e": {
                            "id": "24aa6142d4f4412b97c701a31782cc3c78be4993e6518eba392d937d1ca2985e",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_652889878.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_652889878.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "07f9c5ad71f75bf4e66611ae1a7b397594a5cf5c6f69e15ef99d72525f902678": {
                            "id": "07f9c5ad71f75bf4e66611ae1a7b397594a5cf5c6f69e15ef99d72525f902678",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_688441192.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_688441192.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "0ceba9739fc294303a7950b7b6db9a618076985d73b4e9fe4841730d9d8a09fa": {
                            "id": "0ceba9739fc294303a7950b7b6db9a618076985d73b4e9fe4841730d9d8a09fa",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_691239142.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_691239142.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "89c0d22b0bb97be569fc580f55bb92b093ea85d17957a2041f187cbf4279c2aa": {
                            "id": "89c0d22b0bb97be569fc580f55bb92b093ea85d17957a2041f187cbf4279c2aa",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_697120672.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_697120672.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "9dd1f47499411034403598f0cf914b32ab62fd0d334d0c0012c5d09d76157bb5": {
                            "id": "9dd1f47499411034403598f0cf914b32ab62fd0d334d0c0012c5d09d76157bb5",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_701140162.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_701140162.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "d9b14759ba78f997f5fa71dceed7df29b87a0dd5c8a30c77ac896d3509208000": {
                            "id": "d9b14759ba78f997f5fa71dceed7df29b87a0dd5c8a30c77ac896d3509208000",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_720989940.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_720989940.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "c1cad5e31d6b6448f68ad61787f99cb6b04c9e1b37c1b3f4d55c7beceb62b4d0": {
                            "id": "c1cad5e31d6b6448f68ad61787f99cb6b04c9e1b37c1b3f4d55c7beceb62b4d0",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_746204560.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_746204560.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "eb976dda6cdee3c5b22add2b29033b04e65f22458b845b80767d9ba99d64d4dd": {
                            "id": "eb976dda6cdee3c5b22add2b29033b04e65f22458b845b80767d9ba99d64d4dd",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_759212333.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_759212333.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "9b08e39f84a01c69bcfd8d6c147e6eddaad8fd1548f62503252eb8a4d7b43801": {
                            "id": "9b08e39f84a01c69bcfd8d6c147e6eddaad8fd1548f62503252eb8a4d7b43801",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_769190728 (1).pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_769190728%20(1).pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "8498857478d5a8e71c47bf1fd0d22b752f82c4555b0a93b3072001e587ee56f1": {
                            "id": "8498857478d5a8e71c47bf1fd0d22b752f82c4555b0a93b3072001e587ee56f1",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_769190728.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_769190728.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "cd1d2442d9b991027cfbe47adc5bdb813394f3cfca3a082a07e0ef8df4ce32f4": {
                            "id": "cd1d2442d9b991027cfbe47adc5bdb813394f3cfca3a082a07e0ef8df4ce32f4",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_778281042.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_778281042.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "fdcf3751b9ddc78ce8cf4bdacdd2eb5e984232a9cfd09ca2bc010b5bcbbcbcf6": {
                            "id": "fdcf3751b9ddc78ce8cf4bdacdd2eb5e984232a9cfd09ca2bc010b5bcbbcbcf6",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_801142873.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_801142873.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "abe5d1db1af3208e9dc8a85c402f5fe438d5adea910cbb1e2732502f2d9e7505": {
                            "id": "abe5d1db1af3208e9dc8a85c402f5fe438d5adea910cbb1e2732502f2d9e7505",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_808358348.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_808358348.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "41899941036d66e788a8fea4f38b0e971ca2703fd634be48d9978ea1963dd0fb": {
                            "id": "41899941036d66e788a8fea4f38b0e971ca2703fd634be48d9978ea1963dd0fb",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_864602125.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_864602125.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "bad57bc367f841807e3732b7941170fbec64c0d172e17718f300aec179b89659": {
                            "id": "bad57bc367f841807e3732b7941170fbec64c0d172e17718f300aec179b89659",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_878975076.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_878975076.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "b9895eb2c2f126e3aaa451e2d4205c70deb7df3db0f8737093c21d78df9eb7b0": {
                            "id": "b9895eb2c2f126e3aaa451e2d4205c70deb7df3db0f8737093c21d78df9eb7b0",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_904758558.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_904758558.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "f402ca21166ce742e0919e780140d7f807795ba81a7eb9bfe523b8b3981c6ba9": {
                            "id": "f402ca21166ce742e0919e780140d7f807795ba81a7eb9bfe523b8b3981c6ba9",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_914037949.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_914037949.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "80d9230389327b0135e2d78fd5d6ed91106a152efced7b1e28a07fce88102982": {
                            "id": "80d9230389327b0135e2d78fd5d6ed91106a152efced7b1e28a07fce88102982",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_914997798.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_914997798.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "bb9deac3cf7fccb15d709fda6a25f361020babd1447624f1cf99c91fda22ec07": {
                            "id": "bb9deac3cf7fccb15d709fda6a25f361020babd1447624f1cf99c91fda22ec07",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_927968522.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_927968522.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "36b427ffa3cf50e6425073d4e7990f335bd6bad731d891483842e9c98882c20d": {
                            "id": "36b427ffa3cf50e6425073d4e7990f335bd6bad731d891483842e9c98882c20d",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_950833536.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_950833536.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "ed7958a2412c3e61b28e2ebf487bc311cdbbb72648c377925e51879467709b57": {
                            "id": "ed7958a2412c3e61b28e2ebf487bc311cdbbb72648c377925e51879467709b57",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_989989124.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_989989124.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "64daffd22b6c3adccf22c4990d9177b134a447ab363e5f051481771aac3688e7": {
                            "id": "64daffd22b6c3adccf22c4990d9177b134a447ab363e5f051481771aac3688e7",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_99446232.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_99446232.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "adec105d79d038cb278b17f9b263e186bd223ddba17655ae9a8e2e412fb6f51c": {
                            "id": "adec105d79d038cb278b17f9b263e186bd223ddba17655ae9a8e2e412fb6f51c",
                            "format": "pdf",
                            "state": 1,
                            "type": 5,
                            "name": "invoices_323708658.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_323708658.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf"
                          },
                          "14c17924478ed560dd6583293567e8e39c16cb88e7ad492bf09b7e46b745dd17": {
                            "id": "14c17924478ed560dd6583293567e8e39c16cb88e7ad492bf09b7e46b745dd17",
                            "format": "pdf",
                            "state": 2,
                            "type": 5,
                            "name": "invoice_1436590255.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoice_1436590255.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf",
                            "labelingState": 2,
                            "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
                          },
                          "25d78c15ff7316d5de2eff1b4acee2607ddd9e114cb26feba9c1667382677d9e": {
                            "id": "25d78c15ff7316d5de2eff1b4acee2607ddd9e114cb26feba9c1667382677d9e",
                            "format": "pdf",
                            "state": 2,
                            "type": 5,
                            "name": "invoices_1012525207.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1012525207.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf",
                            "labelingState": 2,
                            "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
                          },
                          "7883e3a010406c1378ce4fc5bb1d5fa79eb9f4b39e9a538229e6a33f983c6c8d": {
                            "id": "7883e3a010406c1378ce4fc5bb1d5fa79eb9f4b39e9a538229e6a33f983c6c8d",
                            "format": "pdf",
                            "state": 2,
                            "type": 5,
                            "name": "invoices_1046253688.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1046253688.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf",
                            "labelingState": 2,
                            "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
                          },
                          "051929c54d417de6c60b25b9f4d9644cec1b358a5ec64c5ca4e46ef70b9a8995": {
                            "id": "051929c54d417de6c60b25b9f4d9644cec1b358a5ec64c5ca4e46ef70b9a8995",
                            "format": "pdf",
                            "state": 2,
                            "type": 5,
                            "name": "invoices_1062199364.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1062199364.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf",
                            "labelingState": 2,
                            "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
                          },
                          "924c8c533c0ef6b8c6258a32dfd2ca77f48b8c45fce3ec3d8ac5949844eddea5": {
                            "id": "924c8c533c0ef6b8c6258a32dfd2ca77f48b8c45fce3ec3d8ac5949844eddea5",
                            "format": "pdf",
                            "state": 2,
                            "type": 5,
                            "name": "invoice_2026368166.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoice_2026368166.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf",
                            "labelingState": 2,
                            "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
                          },
                          "1437fab0d5537b1901ac281e2da4b1122676741d62cbdceb5ce94c9e20e78778": {
                            "id": "1437fab0d5537b1901ac281e2da4b1122676741d62cbdceb5ce94c9e20e78778",
                            "format": "pdf",
                            "state": 2,
                            "type": 5,
                            "name": "invoice_324447862.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoice_324447862.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf",
                            "labelingState": 2,
                            "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
                          },
                          "720c7cfd583d1045a9d3b839e73760fb49667b2b7149b45df44f4549988beedc": {
                            "id": "720c7cfd583d1045a9d3b839e73760fb49667b2b7149b45df44f4549988beedc",
                            "format": "pdf",
                            "state": 2,
                            "type": 5,
                            "name": "invoices_1135777609.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1135777609.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf",
                            "labelingState": 2,
                            "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
                          },
                          "bff7d0ab61054370e848c7f1553cd81b22af7152bf9a680ec2a2c197d00602f6": {
                            "id": "bff7d0ab61054370e848c7f1553cd81b22af7152bf9a680ec2a2c197d00602f6",
                            "format": "pdf",
                            "state": 2,
                            "type": 5,
                            "name": "invoices_1105175692.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1105175692.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf",
                            "labelingState": 2,
                            "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
                          },
                          "49a9e0b4b91a516a5fb31760af4d075dfc6993cc171c5b4f927690d417a35ae4": {
                            "id": "49a9e0b4b91a516a5fb31760af4d075dfc6993cc171c5b4f927690d417a35ae4",
                            "format": "pdf",
                            "state": 2,
                            "type": 5,
                            "name": "invoices_1162902456.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1162902456.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf",
                            "labelingState": 2,
                            "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
                          },
                          "4fc16c8d350b01fcc29bd1567a1d2a73bd11e737fd9d40b7f73b73ffb1fb8743": {
                            "id": "4fc16c8d350b01fcc29bd1567a1d2a73bd11e737fd9d40b7f73b73ffb1fb8743",
                            "format": "pdf",
                            "state": 2,
                            "type": 5,
                            "name": "invoices_1168186314.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1168186314.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf",
                            "labelingState": 2,
                            "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
                          },
                          "73b5d94763e145f3a2c6dc0d4b2a52a33a977be5dc9edd455f40230996438c4d": {
                            "id": "73b5d94763e145f3a2c6dc0d4b2a52a33a977be5dc9edd455f40230996438c4d",
                            "format": "pdf",
                            "state": 2,
                            "type": 5,
                            "name": "invoices_1193047857.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1193047857.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf",
                            "labelingState": 2,
                            "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
                          },
                          "95e2369056b8bf1ef3fc36ec0cc86e69d03d6f8005107cb8dc6079613bba1c0f": {
                            "id": "95e2369056b8bf1ef3fc36ec0cc86e69d03d6f8005107cb8dc6079613bba1c0f",
                            "format": "pdf",
                            "state": 2,
                            "type": 5,
                            "name": "invoices_1441657616.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1441657616.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf",
                            "labelingState": 2,
                            "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
                          },
                          "b91b4048bda56ba01f9b557ee68d2a340b0cde665b42a590d5e8fbb431a28fc0": {
                            "id": "b91b4048bda56ba01f9b557ee68d2a340b0cde665b42a590d5e8fbb431a28fc0",
                            "format": "pdf",
                            "state": 2,
                            "type": 5,
                            "name": "invoices_1500341453.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_1500341453.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf",
                            "labelingState": 2,
                            "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
                          },
                          "4050a0f8709771b09ecbe68cc8a86a60e07353fac1e26c6030583a0c2c5f3b11": {
                            "id": "4050a0f8709771b09ecbe68cc8a86a60e07353fac1e26c6030583a0c2c5f3b11",
                            "format": "pdf",
                            "state": 2,
                            "type": 5,
                            "name": "invoices_171527390.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_171527390.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf",
                            "labelingState": 2,
                            "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
                          },
                          "0795152c2108ed793d4da2980f87063f0d48f2f161184ef7cf975397c927120e": {
                            "id": "0795152c2108ed793d4da2980f87063f0d48f2f161184ef7cf975397c927120e",
                            "format": "pdf",
                            "state": 2,
                            "type": 5,
                            "name": "invoices_210637450.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_210637450.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf",
                            "labelingState": 2,
                            "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
                          },
                          "2edfba1213633f6d6bf3d2ca37609b4da13355c4bdd21e5d2e0e773104a1347b": {
                            "id": "2edfba1213633f6d6bf3d2ca37609b4da13355c4bdd21e5d2e0e773104a1347b",
                            "format": "pdf",
                            "state": 2,
                            "type": 5,
                            "name": "invoices_438646742.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_438646742.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf",
                            "labelingState": 2,
                            "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
                          },
                          "6d23d9c8aa3ed9cbbbe5323d6ac256c4ca4fa823ecf844cbd0ca3f83ec789f11": {
                            "id": "6d23d9c8aa3ed9cbbbe5323d6ac256c4ca4fa823ecf844cbd0ca3f83ec789f11",
                            "format": "pdf",
                            "state": 2,
                            "type": 5,
                            "name": "invoices_789866661.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_789866661.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf",
                            "labelingState": 2,
                            "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
                          },
                          "e2a93b07a6fc3efb6222588cec9d4a32062bf37a6593325020c57db1f5077589": {
                            "id": "e2a93b07a6fc3efb6222588cec9d4a32062bf37a6593325020c57db1f5077589",
                            "format": "pdf",
                            "state": 2,
                            "type": 5,
                            "name": "invoices_830893467.pdf",
                            "path": "https://stratfy01.blob.core.windows.net/test/invoices_830893467.pdf?sp=racwdl&st=2022-05-03T06:48:08Z&se=2031-07-11T14:48:08Z&spr=https&sv=2020-08-04&sr=c&sig=F1qgtRtfypyzUkF6dK43UG53jgUvKMdnR%2BjlrGi9IEA%3D",
                            "size": null,
                            "mimeType": "application/pdf",
                            "labelingState": 2,
                            "schema": "https://schema.cognitiveservices.azure.com/formrecognizer/2021-03-01/labels.json"
                          }
                        },
                        "lastVisitedAssetId": "64daffd22b6c3adccf22c4990d9177b134a447ab363e5f051481771aac3688e7",
                        "recentModelRecords": [
                          {
                            "modelInfo": {
                                "modelName": "",
                              "modelId": "1e4ac789-233c-49e1-93cb-bfe3180c6b93",
                              "createdDateTime": "2022-06-02T15:48:37Z",
                              "isComposed": false
                            },
                            "averageAccuracy": 0.381,
                            "accuracies": {
                              "ABN": 0.556,
                              "Table": 0,
                              "Table: Description": 0,
                              "Table: Price": 0,
                              "Table: quantity": 0,
                              "due_date": 0.222,
                              "invoice_date": 0.556,
                              "invoice_number": 0.611,
                              "tax": 0.278,
                              "total": 0.444
                            },
                          //   "isComposed": false
                          },
                          {
                            "modelInfo": {
                                "modelName": "",
                              "modelId": "c0a6c9b1-0aa3-4661-abfe-1ca0092a140e",
                              "createdDateTime": "2022-05-24T15:50:02Z",
                              "isComposed": false
                            },
                            "averageAccuracy": 0.381,
                            "accuracies": {
                              "ABN": 0.556,
                              "Table": 0,
                              "Table: Description": 0,
                              "Table: Price": 0,
                              "Table: quantity": 0,
                              "due_date": 0.222,
                              "invoice_date": 0.556,
                              "invoice_number": 0.611,
                              "tax": 0.278,
                              "total": 0.444
                            },
                          //   "isComposed": false
                          },
                          {
                            "modelInfo": {
                                modelName: "",
                              "modelId": "5dfd9dc8-3d70-4586-873d-632ad0f34c54",
                              "createdDateTime": "2022-05-17T03:02:34Z",
                              "isComposed": false
                            },
                            "averageAccuracy": 0.381,
                            "accuracies": {
                              "ABN": 0.556,
                              "Table": 0,
                              "Table: Description": 0,
                              "Table: Price": 0,
                              "Table: quantity": 0,
                              "due_date": 0.222,
                              "invoice_date": 0.556,
                              "invoice_number": 0.611,
                              "tax": 0.278,
                              "total": 0.444
                            },
                          //   "isComposed": false
                          },
                          {
                            "modelInfo": {
                              "modelId": "2ba4821d-f73d-4db0-a43f-f3c25ef889c0",
                              "modelName": "",
                              "createdDateTime": "2022-05-06T23:59:59Z",
                              "isComposed": false
                            },
                            "averageAccuracy": 0.381,
                            "accuracies": {
                              "ABN": 0.556,
                              "Table": 0,
                              "Table: Description": 0,
                              "Table: Price": 0,
                              "Table: quantity": 0,
                              "due_date": 0.222,
                              "invoice_date": 0.556,
                              "invoice_number": 0.611,
                              "tax": 0.278,
                              "total": 0.444
                            },
                          //   "isComposed": false
                          },
                          {
                            "modelInfo": {
                              "modelId": "1d099ca7-6b1b-4a3e-a1e7-c4f6d5a37bb8",
                              "createdDateTime": "2022-05-05T16:41:18Z",
                              "isComposed": false,
                              modelName: ""
                            },
                            "averageAccuracy": 0.349,
                            "accuracies": {
                              "ABN": 0.5,
                              "Table": 0,
                              "Table: Description": 0,
                              "Table: Price": 0,
                              "Table: quantity": 0.111,
                              "due_date": 0.222,
                              "invoice_date": 0.5,
                              "invoice_number": 0.556,
                              "tax": 0.222,
                              "total": 0.444
                            },
                          //   "isComposed": false
                          }
                        ],
                        "trainRecord": {
                          "modelInfo": {
                            "modelId": "1e4ac789-233c-49e1-93cb-bfe3180c6b93",
                            "modelName": "",
                            "createdDateTime": "2022-06-02T15:48:37Z",
                            "isComposed": false
                          },
                          "averageAccuracy": 0.381,
                          "accuracies": {
                            "ABN": 0.556,
                            "Table": 0,
                            "Table: Description": 0,
                            "Table: Price": 0,
                            "Table: quantity": 0,
                            "due_date": 0.222,
                            "invoice_date": 0.556,
                            "invoice_number": 0.611,
                            "tax": 0.278,
                            "total": 0.444
                          }
                        },
                        "predictModelId": "1e4ac789-233c-49e1-93cb-bfe3180c6b93"
                      },
    appError: null,
    prebuiltSettings: null
};

/**
 * Instance of initial application state
 */
export default initialState;
