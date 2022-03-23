/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Gets the private link resources that need to be created for a storage account.
 *
 * @summary Gets the private link resources that need to be created for a storage account.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-08-01/examples/StorageAccountListPrivateLinkResources.json
 */
import { StorageManagementClient } from "@azure/arm-storage";
import { DefaultAzureCredential } from "@azure/identity";

async function storageAccountListPrivateLinkResources() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res6977";
  const accountName = "sto2527";
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.privateLinkResources.listByStorageAccount(
    resourceGroupName,
    accountName
  );
  console.log(result);
}

storageAccountListPrivateLinkResources().catch(console.error);
