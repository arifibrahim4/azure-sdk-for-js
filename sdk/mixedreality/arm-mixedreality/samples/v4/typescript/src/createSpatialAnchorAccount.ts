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
 * This sample demonstrates how to Creating or Updating a Spatial Anchors Account.
 *
 * @summary Creating or Updating a Spatial Anchors Account.
 * x-ms-original-file: specification/mixedreality/resource-manager/Microsoft.MixedReality/stable/2021-01-01/examples/spatial-anchors/Put.json
 */
import {
  SpatialAnchorsAccount,
  MixedRealityClient
} from "@azure/arm-mixedreality";
import { DefaultAzureCredential } from "@azure/identity";

async function createSpatialAnchorAccount() {
  const subscriptionId = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";
  const resourceGroupName = "MyResourceGroup";
  const accountName = "MyAccount";
  const spatialAnchorsAccount: SpatialAnchorsAccount = {
    location: "eastus2euap"
  };
  const credential = new DefaultAzureCredential();
  const client = new MixedRealityClient(credential, subscriptionId);
  const result = await client.spatialAnchorsAccounts.create(
    resourceGroupName,
    accountName,
    spatialAnchorsAccount
  );
  console.log(result);
}

createSpatialAnchorAccount().catch(console.error);
