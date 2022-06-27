// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import axios from "axios";

export interface SaveModelApiData {
    "model-id": string;
}

export default class ServerApisHelper {

    static url = "http://52.88.170.55";
    static authorizationHeaderKey = "X-Authorization";
    static authorizationHeaderValue = "2bd3fd4f108472647416b408b645f098";

    public static saveModelApi = async (data: SaveModelApiData): Promise<void> => {
        await axios.post(`${ServerApisHelper.url}/Invoices/storeOcrModel.json`, data, {
            headers: {
                [ServerApisHelper.authorizationHeaderKey]: ServerApisHelper.authorizationHeaderValue
            }
        });
    }
}
