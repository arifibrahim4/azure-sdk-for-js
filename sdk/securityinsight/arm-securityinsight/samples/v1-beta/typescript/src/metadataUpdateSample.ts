/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MetadataPatch, SecurityInsights } from "@azure/arm-securityinsight";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Update an existing Metadata.
 *
 * @summary Update an existing Metadata.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-01-01-preview/examples/metadata/PatchMetadata.json
 */
async function updateMetadata() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const metadataName = "metadataName";
  const metadataPatch: MetadataPatch = {
    author: { name: "User Name", email: "email@microsoft.com" }
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.metadata.update(
    resourceGroupName,
    workspaceName,
    metadataName,
    metadataPatch
  );
  console.log(result);
}

updateMetadata().catch(console.error);
