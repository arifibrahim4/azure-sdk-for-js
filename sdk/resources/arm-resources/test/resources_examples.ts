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
import { ResourceManagementClient } from "../src/resourceManagementClient";

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

describe("Resources test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: ResourceManagementClient;
  let location: string;
  let resourceGroup: string;
  let tagName: string;
  let scope: string;

  beforeEach(async function() {
    recorder = record(this, recorderEnvSetup);
    subscriptionId = env.SUBSCRIPTION_ID;
    // This is an example of how the environment variables are used
    const credential = new ClientSecretCredential(
      env.AZURE_TENANT_ID,
      env.AZURE_CLIENT_ID,
      env.AZURE_CLIENT_SECRET
    );
    client = new ResourceManagementClient(credential, subscriptionId);
    location = "eastus";
    resourceGroup = "myjstest";
    tagName = "tagyyy";
    scope = "subscriptions/" + subscriptionId + "/resourcegroups/" + resourceGroup;
  });

  afterEach(async function() {
    await recorder.stop();
  });

  it("tagsOperations create test", async function() {
    const res = await client.tagsOperations.createOrUpdate(tagName);
    assert.equal(res.tagName,tagName);
  });

  it("tagsOperations get test", async function() {
    const res = await client.tagsOperations.getAtScope(scope);
    assert.equal(res.name,"default");
  });

  it("tagsOperations list test", async function() {
    const resArray = new Array();
    for await (let item of client.tagsOperations.list()){
      resArray.push(item);
    }
    assert.notEqual(resArray.length,0);
  });

  it("tagsOperations update test", async function() {
    const res = await client.tagsOperations.updateAtScope(scope,{
      operation: "Delete",
      properties: {
        tags: {
          tagkey1: "tagvalue1"
        }
      }
    })
    assert.equal(res.type,"Microsoft.Resources/tags");
  });

  it("tagsOperations delete test", async function() {
    const res = await client.tagsOperations.deleteAtScope(scope);
    const resArray = new Array();
    for await (let item of client.tagsOperations.list()){
      resArray.push(item);
    }
    assert.equal(resArray.length,19);
  });

  it("resourceGroups create test", async function() {
    const res = await client.resourceGroups.createOrUpdate(resourceGroup,{
      location: location,
      tags: {
        tag1: "value1"
      }
    })
    assert.equal(res.name,resourceGroup)
  });

  it("resourceGroups get test", async function() {
    const res = await client.resourceGroups.get(resourceGroup);
    assert.equal(res.name,resourceGroup);
  });

  it("resourceGroups list test", async function() {
    const resArray = new Array();
    for await (let item of client.resourceGroups.list()){
      resArray.push(item);
    }
    assert.notEqual(resArray.length,0);
  });

  it("resourceGroups update test", async function() {
    const res = await client.resourceGroups.update(resourceGroup,{
      tags: {
        tag1: "value1",
        tag2: "value2"
      }
    })
    assert.equal(res.type,"Microsoft.Resources/resourceGroups");
  });

  it("resourceGroups delete test", async function() {
    const res = await client.resourceGroups.beginDeleteAndWait(resourceGroup,testPollingOptions);
    const resArray = new Array();
    for await (let item of client.resourceGroups.list()){
      resArray.push(item);
    }
    assert.notEqual(resArray.length,0);
  });
});
