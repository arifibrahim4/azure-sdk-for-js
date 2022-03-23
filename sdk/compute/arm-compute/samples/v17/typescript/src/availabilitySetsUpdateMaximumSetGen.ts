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
 * This sample demonstrates how to Update an availability set.
 *
 * @summary Update an availability set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/compute/AvailabilitySets_Update_MaximumSet_Gen.json
 */
import {
  AvailabilitySetUpdate,
  ComputeManagementClient
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

async function availabilitySetsUpdateMaximumSetGen() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "rgcompute";
  const availabilitySetName = "aaaaaaaaaaaaaaaaaaa";
  const parameters: AvailabilitySetUpdate = {
    platformFaultDomainCount: 2,
    platformUpdateDomainCount: 20,
    proximityPlacementGroup: {
      id:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}"
    },
    sku: { name: "DSv3-Type1", capacity: 7, tier: "aaa" },
    tags: { key2574: "aaaaaaaa" },
    virtualMachines: [
      {
        id:
          "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}"
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.availabilitySets.update(
    resourceGroupName,
    availabilitySetName,
    parameters
  );
  console.log(result);
}

availabilitySetsUpdateMaximumSetGen().catch(console.error);
