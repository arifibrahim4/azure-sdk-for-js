/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  IotHubDescription,
  IotHubResourceListBySubscriptionOptionalParams,
  IotHubResourceListByResourceGroupOptionalParams,
  IotHubSkuDescription,
  IotHubResourceGetValidSkusOptionalParams,
  EventHubConsumerGroupInfo,
  IotHubResourceListEventHubConsumerGroupsOptionalParams,
  JobResponse,
  IotHubResourceListJobsOptionalParams,
  IotHubQuotaMetricInfo,
  IotHubResourceGetQuotaMetricsOptionalParams,
  EndpointHealthData,
  IotHubResourceGetEndpointHealthOptionalParams,
  SharedAccessSignatureAuthorizationRule,
  IotHubResourceListKeysOptionalParams,
  IotHubResourceGetOptionalParams,
  IotHubResourceGetResponse,
  IotHubResourceCreateOrUpdateOptionalParams,
  IotHubResourceCreateOrUpdateResponse,
  TagsResource,
  IotHubResourceUpdateOptionalParams,
  IotHubResourceUpdateResponse,
  IotHubResourceDeleteOptionalParams,
  IotHubResourceDeleteResponse,
  IotHubResourceGetStatsOptionalParams,
  IotHubResourceGetStatsResponse,
  IotHubResourceGetEventHubConsumerGroupOptionalParams,
  IotHubResourceGetEventHubConsumerGroupResponse,
  EventHubConsumerGroupBodyDescription,
  IotHubResourceCreateEventHubConsumerGroupOptionalParams,
  IotHubResourceCreateEventHubConsumerGroupResponse,
  IotHubResourceDeleteEventHubConsumerGroupOptionalParams,
  IotHubResourceGetJobOptionalParams,
  IotHubResourceGetJobResponse,
  OperationInputs,
  IotHubResourceCheckNameAvailabilityOptionalParams,
  IotHubResourceCheckNameAvailabilityResponse,
  TestAllRoutesInput,
  IotHubResourceTestAllRoutesOptionalParams,
  IotHubResourceTestAllRoutesResponse,
  TestRouteInput,
  IotHubResourceTestRouteOptionalParams,
  IotHubResourceTestRouteResponse,
  IotHubResourceGetKeysForKeyNameOptionalParams,
  IotHubResourceGetKeysForKeyNameResponse,
  ExportDevicesRequest,
  IotHubResourceExportDevicesOptionalParams,
  IotHubResourceExportDevicesResponse,
  ImportDevicesRequest,
  IotHubResourceImportDevicesOptionalParams,
  IotHubResourceImportDevicesResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a IotHubResource. */
export interface IotHubResource {
  /**
   * Get all the IoT hubs in a subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: IotHubResourceListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<IotHubDescription>;
  /**
   * Get all the IoT hubs in a resource group.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: IotHubResourceListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<IotHubDescription>;
  /**
   * Get the list of valid SKUs for an IoT hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The options parameters.
   */
  listValidSkus(
    resourceGroupName: string,
    resourceName: string,
    options?: IotHubResourceGetValidSkusOptionalParams
  ): PagedAsyncIterableIterator<IotHubSkuDescription>;
  /**
   * Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT
   * hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param eventHubEndpointName The name of the Event Hub-compatible endpoint.
   * @param options The options parameters.
   */
  listEventHubConsumerGroups(
    resourceGroupName: string,
    resourceName: string,
    eventHubEndpointName: string,
    options?: IotHubResourceListEventHubConsumerGroupsOptionalParams
  ): PagedAsyncIterableIterator<EventHubConsumerGroupInfo>;
  /**
   * Get a list of all the jobs in an IoT hub. For more information, see:
   * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The options parameters.
   */
  listJobs(
    resourceGroupName: string,
    resourceName: string,
    options?: IotHubResourceListJobsOptionalParams
  ): PagedAsyncIterableIterator<JobResponse>;
  /**
   * Get the quota metrics for an IoT hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The options parameters.
   */
  listQuotaMetrics(
    resourceGroupName: string,
    resourceName: string,
    options?: IotHubResourceGetQuotaMetricsOptionalParams
  ): PagedAsyncIterableIterator<IotHubQuotaMetricInfo>;
  /**
   * Get the health for routing endpoints.
   * @param resourceGroupName
   * @param iotHubName
   * @param options The options parameters.
   */
  listEndpointHealth(
    resourceGroupName: string,
    iotHubName: string,
    options?: IotHubResourceGetEndpointHealthOptionalParams
  ): PagedAsyncIterableIterator<EndpointHealthData>;
  /**
   * Get the security metadata for an IoT hub. For more information, see:
   * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    resourceName: string,
    options?: IotHubResourceListKeysOptionalParams
  ): PagedAsyncIterableIterator<SharedAccessSignatureAuthorizationRule>;
  /**
   * Get the non-security related metadata of an IoT hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    options?: IotHubResourceGetOptionalParams
  ): Promise<IotHubResourceGetResponse>;
  /**
   * Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve
   * the IoT hub metadata and security metadata, and then combine them with the modified values in a new
   * body to update the IoT hub. If certain properties are missing in the JSON, updating IoT Hub may
   * cause these values to fallback to default, which may lead to unexpected behavior.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param iotHubDescription The IoT hub metadata and security metadata.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    iotHubDescription: IotHubDescription,
    options?: IotHubResourceCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<IotHubResourceCreateOrUpdateResponse>,
      IotHubResourceCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve
   * the IoT hub metadata and security metadata, and then combine them with the modified values in a new
   * body to update the IoT hub. If certain properties are missing in the JSON, updating IoT Hub may
   * cause these values to fallback to default, which may lead to unexpected behavior.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param iotHubDescription The IoT hub metadata and security metadata.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    iotHubDescription: IotHubDescription,
    options?: IotHubResourceCreateOrUpdateOptionalParams
  ): Promise<IotHubResourceCreateOrUpdateResponse>;
  /**
   * Update an existing IoT Hub tags. to update other fields use the CreateOrUpdate method
   * @param resourceGroupName Resource group identifier.
   * @param resourceName Name of iot hub to update.
   * @param iotHubTags Updated tag information to set into the iot hub instance.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    resourceName: string,
    iotHubTags: TagsResource,
    options?: IotHubResourceUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<IotHubResourceUpdateResponse>,
      IotHubResourceUpdateResponse
    >
  >;
  /**
   * Update an existing IoT Hub tags. to update other fields use the CreateOrUpdate method
   * @param resourceGroupName Resource group identifier.
   * @param resourceName Name of iot hub to update.
   * @param iotHubTags Updated tag information to set into the iot hub instance.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    iotHubTags: TagsResource,
    options?: IotHubResourceUpdateOptionalParams
  ): Promise<IotHubResourceUpdateResponse>;
  /**
   * Delete an IoT hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    resourceName: string,
    options?: IotHubResourceDeleteOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<IotHubResourceDeleteResponse>,
      IotHubResourceDeleteResponse
    >
  >;
  /**
   * Delete an IoT hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    resourceName: string,
    options?: IotHubResourceDeleteOptionalParams
  ): Promise<IotHubResourceDeleteResponse>;
  /**
   * Get the statistics from an IoT hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The options parameters.
   */
  getStats(
    resourceGroupName: string,
    resourceName: string,
    options?: IotHubResourceGetStatsOptionalParams
  ): Promise<IotHubResourceGetStatsResponse>;
  /**
   * Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param eventHubEndpointName The name of the Event Hub-compatible endpoint in the IoT hub.
   * @param name The name of the consumer group to retrieve.
   * @param options The options parameters.
   */
  getEventHubConsumerGroup(
    resourceGroupName: string,
    resourceName: string,
    eventHubEndpointName: string,
    name: string,
    options?: IotHubResourceGetEventHubConsumerGroupOptionalParams
  ): Promise<IotHubResourceGetEventHubConsumerGroupResponse>;
  /**
   * Add a consumer group to an Event Hub-compatible endpoint in an IoT hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param eventHubEndpointName The name of the Event Hub-compatible endpoint in the IoT hub.
   * @param name The name of the consumer group to add.
   * @param consumerGroupBody The consumer group to add.
   * @param options The options parameters.
   */
  createEventHubConsumerGroup(
    resourceGroupName: string,
    resourceName: string,
    eventHubEndpointName: string,
    name: string,
    consumerGroupBody: EventHubConsumerGroupBodyDescription,
    options?: IotHubResourceCreateEventHubConsumerGroupOptionalParams
  ): Promise<IotHubResourceCreateEventHubConsumerGroupResponse>;
  /**
   * Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param eventHubEndpointName The name of the Event Hub-compatible endpoint in the IoT hub.
   * @param name The name of the consumer group to delete.
   * @param options The options parameters.
   */
  deleteEventHubConsumerGroup(
    resourceGroupName: string,
    resourceName: string,
    eventHubEndpointName: string,
    name: string,
    options?: IotHubResourceDeleteEventHubConsumerGroupOptionalParams
  ): Promise<void>;
  /**
   * Get the details of a job from an IoT hub. For more information, see:
   * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param jobId The job identifier.
   * @param options The options parameters.
   */
  getJob(
    resourceGroupName: string,
    resourceName: string,
    jobId: string,
    options?: IotHubResourceGetJobOptionalParams
  ): Promise<IotHubResourceGetJobResponse>;
  /**
   * Check if an IoT hub name is available.
   * @param operationInputs Set the name parameter in the OperationInputs structure to the name of the
   *                        IoT hub to check.
   * @param options The options parameters.
   */
  checkNameAvailability(
    operationInputs: OperationInputs,
    options?: IotHubResourceCheckNameAvailabilityOptionalParams
  ): Promise<IotHubResourceCheckNameAvailabilityResponse>;
  /**
   * Test all routes configured in this Iot Hub
   * @param iotHubName IotHub to be tested
   * @param resourceGroupName resource group which Iot Hub belongs to
   * @param input Input for testing all routes
   * @param options The options parameters.
   */
  testAllRoutes(
    iotHubName: string,
    resourceGroupName: string,
    input: TestAllRoutesInput,
    options?: IotHubResourceTestAllRoutesOptionalParams
  ): Promise<IotHubResourceTestAllRoutesResponse>;
  /**
   * Test the new route for this Iot Hub
   * @param iotHubName IotHub to be tested
   * @param resourceGroupName resource group which Iot Hub belongs to
   * @param input Route that needs to be tested
   * @param options The options parameters.
   */
  testRoute(
    iotHubName: string,
    resourceGroupName: string,
    input: TestRouteInput,
    options?: IotHubResourceTestRouteOptionalParams
  ): Promise<IotHubResourceTestRouteResponse>;
  /**
   * Get a shared access policy by name from an IoT hub. For more information, see:
   * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param keyName The name of the shared access policy.
   * @param options The options parameters.
   */
  getKeysForKeyName(
    resourceGroupName: string,
    resourceName: string,
    keyName: string,
    options?: IotHubResourceGetKeysForKeyNameOptionalParams
  ): Promise<IotHubResourceGetKeysForKeyNameResponse>;
  /**
   * Exports all the device identities in the IoT hub identity registry to an Azure Storage blob
   * container. For more information, see:
   * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param exportDevicesParameters The parameters that specify the export devices operation.
   * @param options The options parameters.
   */
  exportDevices(
    resourceGroupName: string,
    resourceName: string,
    exportDevicesParameters: ExportDevicesRequest,
    options?: IotHubResourceExportDevicesOptionalParams
  ): Promise<IotHubResourceExportDevicesResponse>;
  /**
   * Import, update, or delete device identities in the IoT hub identity registry from a blob. For more
   * information, see:
   * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param importDevicesParameters The parameters that specify the import devices operation.
   * @param options The options parameters.
   */
  importDevices(
    resourceGroupName: string,
    resourceName: string,
    importDevicesParameters: ImportDevicesRequest,
    options?: IotHubResourceImportDevicesOptionalParams
  ): Promise<IotHubResourceImportDevicesResponse>;
}
