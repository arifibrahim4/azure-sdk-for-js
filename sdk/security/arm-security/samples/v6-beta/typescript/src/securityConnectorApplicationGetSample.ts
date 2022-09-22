/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get a specific application for the requested scope by applicationId
 *
 * @summary Get a specific application for the requested scope by applicationId
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2022-07-01-preview/examples/Applications/GetSecurityConnectorApplication_example.json
 */
async function getSecurityApplicationsBySpecificApplicationId() {
  const subscriptionId = "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const resourceGroupName = "gcpResourceGroup";
  const securityConnectorName = "gcpconnector";
  const applicationId = "ad9a8e26-29d9-4829-bb30-e597a58cdbb8";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.securityConnectorApplication.get(
    resourceGroupName,
    securityConnectorName,
    applicationId
  );
  console.log(result);
}

getSecurityApplicationsBySpecificApplicationId().catch(console.error);
