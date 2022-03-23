/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { BatchManagementClient } = require("@azure/arm-batch");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Synchronizes access keys for the auto-storage account configured for the specified Batch account, only if storage key authentication is being used.
 *
 * @summary Synchronizes access keys for the auto-storage account configured for the specified Batch account, only if storage key authentication is being used.
 * x-ms-original-file: specification/batch/resource-manager/Microsoft.Batch/stable/2022-01-01/examples/BatchAccountSynchronizeAutoStorageKeys.json
 */
async function batchAccountSynchronizeAutoStorageKeys() {
  const subscriptionId = "subid";
  const resourceGroupName = "default-azurebatch-japaneast";
  const accountName = "sampleacct";
  const credential = new DefaultAzureCredential();
  const client = new BatchManagementClient(credential, subscriptionId);
  const result = await client.batchAccountOperations.synchronizeAutoStorageKeys(
    resourceGroupName,
    accountName
  );
  console.log(result);
}

batchAccountSynchronizeAutoStorageKeys().catch(console.error);
