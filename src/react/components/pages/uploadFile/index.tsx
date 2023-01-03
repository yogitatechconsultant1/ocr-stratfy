import React, { FC, useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import "./uploadFile.scss";

import { useDropzone } from "react-dropzone";
import { FontIcon, PrimaryButton } from "@fluentui/react";
import { getPrimaryGreenTheme } from "../../../../common/themes";
import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";
import cookie from "react-cookies";
const sasToken =
    process.env.storagesastoken ||
    "?sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2030-05-31T15:59:47Z&st=2023-01-03T07:59:47Z&spr=https,http&sig=z%2BGM%2FU14wAG1uOGK9HxB14LM8huKSVXGOH5RZKTxBLo%3D";
const containerName = `test`;
const storageAccountName = process.env.storageresourcename || "stratfy01";

// @flow

type Props = {};
const UploadFile: FC<Props> = () => {
    const [fileName, setFileName] = useState<string>("");
    const history = useHistory();

    const uploadFileToBlob = async (file: any, filename: string) => {
        // console.log('filePath',filename)
        if (!file) return [];

        // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
        const blobService = new BlobServiceClient(
            `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
        );
        // get Container - full public read access
        const containerClient = blobService.getContainerClient(containerName);
        const blobName = new Date().getTime() + filename;
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        try {
            const uploadBlobResponse = await blockBlobClient.uploadData(file);
            // const uploadedFileUrl = `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blobName}?${sasToken}`;
            saveFileToDatabase(blobName);
            // console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse);
            // const test = await blockBlobClient.downloadToFile(blobName);
            // console.log('blockBlobClient>>',test);
        } catch (e) {
            console.log("e", e);
        }
    };
    const saveFileToDatabase = async (uploadedFile: string) => {
        const client_id = cookie.load("client_id");
        if (!client_id) {
            toast.error("Kindly log in and try again!!");
            history.push("/");
            return;
        }
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                client_id: parseInt(client_id),
                file_url: uploadedFile,
            }),
        };

        fetch(
            "https://dashboard.stratafyconnect.com/Invoices/ocrUploadFile.json",
            requestOptions
        )
            .then((response) => response.json())
            .then((data) => {
                console.log("data", data);
                if (data.status === 0) {
                    console.log("toast", toast);
                    toast.error(
                        "Something went wrong. Please try again later !!"
                    );
                }
                if (data.status === 1) {
                    toast.success("File Successfully Uploaded!!");
                    history.push("/ocr");
                }
            })
            .catch((error) => {
                console.log(error);
                toast.error("Something went wrong please try again later.");
            });
    };
    const onDrop = (acceptedFiles) => {
        //Upload file

        acceptedFiles.forEach((file) => {
            const reader = new FileReader();
            reader.onabort = () => console.log("file reading was aborted");
            reader.onerror = () => console.log("file reading has failed");
            reader.onload = () => {
                // Do whatever you want with the file contents
                console.log("file", file);
                const binaryStr = reader.result;
                console.log("binaryStr>>>", binaryStr);
                uploadFileToBlob(binaryStr, file.name);
                setFileName(file.path);
            };
            //   reader.readAsArrayBuufer(file)
            reader.readAsArrayBuffer(file);
        });
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: { "application/pdf": [".pdf"] },
        maxFiles: 1,
    });

    return (
        <div className="app-settings-page-form p-3">
            <h3 className="mb-3 flex-center">
                <FontIcon iconName="Settings" />
                <span className="px-2">Upload File</span>
            </h3>
            <div className="m-3 dropzone">
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {!fileName && (
                        <p>
                            Drag 'n' drop some file here, or click to select
                            files
                        </p>
                    )}
                    {fileName && <p>Uploaded File: {fileName}</p>}
                </div>
            </div>
            <div>
                <PrimaryButton
                    // style={{ "margin": "15px 0px" }}
                    id="train_trainButton"
                    theme={getPrimaryGreenTheme()}
                    autoFocus={true}
                    className="flex-center"
                    onClick={() => history.push("/ocr")}
                >
                    Cancel
                </PrimaryButton>
            </div>
        </div>
    );
};

export default UploadFile;
