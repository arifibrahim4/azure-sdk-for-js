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
 * This sample demonstrates how to Secures delete ResourceGuardProxy operations.
 *
 * @summary Secures delete ResourceGuardProxy operations.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2021-10-01/examples/ResourceGuardProxyCRUD/UnlockDeleteResourceGuardProxy.json
 */
const { RecoveryServicesBackupClient } = require("@azure/arm-recoveryservicesbackup");
const { DefaultAzureCredential } = require("@azure/identity");

async function unlockDeleteResourceGuardProxy() {
  const subscriptionId = "0b352192-dcac-4cc7-992e-a96190ccc68c";
  const vaultName = "sampleVault";
  const resourceGroupName = "SampleResourceGroup";
  const resourceGuardProxyName = "swaggerExample";
  const parameters = {
    resourceGuardOperationRequests: [
      "/subscriptions/c999d45b-944f-418c-a0d8-c3fcfd1802c8/resourceGroups/vaultguardRGNew/providers/Microsoft.DataProtection/resourceGuards/VaultGuardTestNew/deleteProtectedItemRequests/default",
    ],
    resourceToBeDeleted:
      "/subscriptions/62b829ee-7936-40c9-a1c9-47a93f9f3965/resourceGroups/gaallarg/providers/Microsoft.RecoveryServices/vaults/MercuryCrrVault/backupFabrics/Azure/protectionContainers/VMAppContainer;compute;crrtestrg;crrtestvm/protectedItems/SQLDataBase;mssqlserver;testdb",
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.resourceGuardProxy.unlockDelete(
    vaultName,
    resourceGroupName,
    resourceGuardProxyName,
    parameters
  );
  console.log(result);
}

unlockDeleteResourceGuardProxy().catch(console.error);
