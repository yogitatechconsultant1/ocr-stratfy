// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * Redux Action types
 */
export enum ActionTypes {
    // App
    SAVE_APP_SETTINGS_SUCCESS = "SAVE_APP_SETTINGS_SUCCESS",
    ENSURE_SECURITY_TOKEN_SUCCESS = "ENSURE_SECURITY_TOKEN_SUCCESS",

    // Projects
    LOAD_PROJECT_SUCCESS = "LOAD_PROJECT_SUCCESS",
    SAVE_PROJECT_SUCCESS = "SAVE_PROJECT_SUCCESS",
    ADD_ASSET_TO_PROJECT_SUCCESS = "ADD_ASSET_TO_PROJECT_SUCCESS",
    DELETE_PROJECT_SUCCESS = "DELETE_PROJECT_SUCCESS",
    CLOSE_PROJECT_SUCCESS = "CLOSE_PROJECT_SUCCESS",
    LOAD_PROJECT_ASSETS_SUCCESS = "LOAD_PROJECT_ASSETS_SUCCESS",
    DELETE_PROJECT_ASSET_SUCCESS = "DELETE_PROJECT_ASSET_SUCCESS",
    UPDATE_PROJECT_TAG_SUCCESS = "UPDATE_PROJECT_TAG_SUCCESS",
    UPDATE_PROJECT_TAGS_FROM_FILES_SUCCESS = "UPDATE_PROJECT_TAGS_FROM_FILES_SUCCESS",
    UPDATE_TAG_LABEL_COUNTS_SUCCESS = "UPDATE_TAG_LABEL_COUNTS_SUCCESS",
    DELETE_PROJECT_TAG_SUCCESS = "DELETE_PROJECT_TAG_SUCCESS",

    // Connections
    LOAD_CONNECTION_SUCCESS = "LOAD_CONNECTION_SUCCESS",
    SAVE_CONNECTION_SUCCESS = "SAVE_CONNECTION_SUCCESS",
    DELETE_CONNECTION_SUCCESS = "DELETE_CONNECTION_SUCCESS",

    // Assets
    SAVE_ASSET_METADATA_SUCCESS = "SAVE_ASSET_METADATA_SUCCESS",
    LOAD_ASSET_METADATA_SUCCESS = "LOAD_ASSET_METADATA_SUCCESS",
    REFRESH_ASSET_SUCCESS = "REFRESH_ASSET_SUCCESS",
    ANY_OTHER_ACTION = "ANY_OTHER_ACTION_SUCCESS",

    SHOW_ERROR = "SHOW_ERROR",
    CLEAR_ERROR = "CLEAR_ERROR",

    SET_TITLE = "SET_TITLE",

    UPDATE_PREBUILT_SETTINGS = "UPDATE_PREBUILT_SETTINGS"
}
