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
 * This sample demonstrates how to Creates or updates a SimPolicy.
 *
 * @summary Creates or updates a SimPolicy.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/preview/2022-01-01-preview/examples/SimPolicyCreate.json
 */
import {
  SimPolicy,
  MobileNetworkManagementClient
} from "@azure/arm-mobilenetwork";
import { DefaultAzureCredential } from "@azure/identity";

async function createSimPolicy() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const mobileNetworkName = "testMobileNetwork";
  const simPolicyName = "testPolicy";
  const parameters: SimPolicy = {
    defaultSlice: {
      id:
        "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.MobileNetwork/mobileNetworks/testMobileNetwork/slices/testSlice"
    },
    location: "eastus",
    registrationTimer: 3240,
    sliceConfigurations: [
      {
        dataNetworkConfigurations: [
          {
            fiveQi: 9,
            additionalAllowedSessionTypes: [],
            allocationAndRetentionPriorityLevel: 9,
            allowedServices: [
              {
                id:
                  "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.MobileNetwork/mobileNetworks/testMobileNetwork/services/testService"
              }
            ],
            dataNetwork: {
              id:
                "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.MobileNetwork/mobileNetworks/testMobileNetwork/dataNetworks/testdataNetwork"
            },
            defaultSessionType: "IPv4",
            preemptionCapability: "NotPreempt",
            preemptionVulnerability: "Preemptable",
            sessionAmbr: { downlink: "1 Gbps", uplink: "500 Mbps" }
          }
        ],
        defaultDataNetwork: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.MobileNetwork/mobileNetworks/testMobileNetwork/dataNetworks/testdataNetwork"
        },
        slice: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.MobileNetwork/mobileNetworks/testMobileNetwork/slices/testSlice"
        }
      }
    ],
    ueAmbr: { downlink: "1 Gbps", uplink: "500 Mbps" }
  };
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const result = await client.simPolicies.beginCreateOrUpdateAndWait(
    resourceGroupName,
    mobileNetworkName,
    simPolicyName,
    parameters
  );
  console.log(result);
}

createSimPolicy().catch(console.error);
