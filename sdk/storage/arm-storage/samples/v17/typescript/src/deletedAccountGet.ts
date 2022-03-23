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
 * This sample demonstrates how to Get properties of specified deleted account resource.
 *
 * @summary Get properties of specified deleted account resource.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-08-01/examples/DeletedAccountGet.json
 */
import { StorageManagementClient } from "@azure/arm-storage";
import { DefaultAzureCredential } from "@azure/identity";

async function deletedAccountGet() {
  const subscriptionId = "{subscription-id}";
  const deletedAccountName = "sto1125";
  const location = "eastus";
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.deletedAccounts.get(deletedAccountName, location);
  console.log(result);
}

deletedAccountGet().catch(console.error);
