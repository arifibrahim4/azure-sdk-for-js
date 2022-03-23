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
import { UsageManagementClient } from "../src/usageManagementClient";

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

describe("Commerce test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: UsageManagementClient;
  let location: string;
  let resourceGroup: string;

  beforeEach(async function() {
    recorder = record(this, recorderEnvSetup);
    subscriptionId = env.SUBSCRIPTION_ID;
    // This is an example of how the environment variables are used
    const credential = new ClientSecretCredential(
      env.AZURE_TENANT_ID,
      env.AZURE_CLIENT_ID,
      env.AZURE_CLIENT_SECRET
    );
    client = new UsageManagementClient(credential, subscriptionId);
    location = "eastus";
    resourceGroup = "myjstest";
  });

  afterEach(async function() {
    await recorder.stop();
  });

  it("rateCard get test", async function() {
    const res = await client.rateCard.get("OfferDurableId eq 'MS-AZR-0062P' and Currency eq 'USD' and Locale eq 'en-US' and RegionInfo eq 'US'");
    assert.notEqual(res.meters?.length,0)
  });
});
