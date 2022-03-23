/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  record,
  RecorderEnvironmentSetup,
  Recorder,
  delay,
  isPlaybackMode
} from "@azure-tools/test-recorder";
import * as assert from "assert";
import { ClientSecretCredential } from "@azure/identity";
import { AzureDatabricksManagementClient } from "../src/azureDatabricksManagementClient";

const recorderEnvSetup: RecorderEnvironmentSetup = {
  replaceableVariables: {
    AZURE_CLIENT_ID: "azure_client_id",
    AZURE_CLIENT_SECRET: "azure_client_secret",
    AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
    SUBSCRIPTION_ID: "azure_subscription_id"
  },
  customizationsOnRecordings: [
    (recording: any): any =>
      recording.replace(
        /"access_token":"[^"]*"/g,
        `"access_token":"access_token"`
      )
  ],
  queryParametersToSkip: []
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("Databricks test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: AzureDatabricksManagementClient;
  let location: string;
  let resourceGroup: string;
  let resourceGroup2: string;
  let workSpaceName: string;

  beforeEach(async function() {
    recorder = record(this, recorderEnvSetup);
    subscriptionId = env.SUBSCRIPTION_ID;
    // This is an example of how the environment variables are used
    const credential = new ClientSecretCredential(
      env.AZURE_TENANT_ID,
      env.AZURE_CLIENT_ID,
      env.AZURE_CLIENT_SECRET
    );
    client = new AzureDatabricksManagementClient(credential, subscriptionId);
    location = "eastus";
    resourceGroup = "myjstest";
    resourceGroup2 = "myjstest2";
    workSpaceName = "myworkspacexx";
  });

  afterEach(async function() {
    await recorder.stop();
  });

  it("workspaces create test", async function() {
    const res = await client.workspaces.beginCreateOrUpdateAndWait(resourceGroup,workSpaceName,{
      managedResourceGroupId: "/subscriptions/" + subscriptionId + "/resourceGroups/" + resourceGroup2,
        location: "westus",
        sku: {
            name: "Standard"
        }
    },testPollingOptions);
    assert.equal(res.name,workSpaceName);
  });

  it("workspaces get test", async function() {
    const res = await client.workspaces.get(resourceGroup,workSpaceName);
    assert.equal(res.name,workSpaceName);
  });

  it("workspaces list test", async function() {
    const resArray = new Array();
    for await (let item of client.operations.list()){
        resArray.push(item);
    }
  });

  it("workspaces update test", async function() {
    const res = await client.workspaces.beginUpdateAndWait(resourceGroup,workSpaceName,{tags: {mytag1: "value1"}},testPollingOptions);
    assert.equal(res.type,"Microsoft.Databricks/workspaces");
  });

  it("workspaces delete test", async function() {
    const res = await client.workspaces.beginDeleteAndWait(resourceGroup,workSpaceName,testPollingOptions);
  });
});
