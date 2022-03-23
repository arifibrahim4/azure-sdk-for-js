/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Jobs } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorSimple8000SeriesManagementClient } from "../storSimple8000SeriesManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Job,
  JobsListByDeviceNextOptionalParams,
  JobsListByDeviceOptionalParams,
  JobsListByManagerNextOptionalParams,
  JobsListByManagerOptionalParams,
  JobsListByDeviceResponse,
  JobsGetOptionalParams,
  JobsGetResponse,
  JobsCancelOptionalParams,
  JobsListByManagerResponse,
  JobsListByDeviceNextResponse,
  JobsListByManagerNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Jobs operations. */
export class JobsImpl implements Jobs {
  private readonly client: StorSimple8000SeriesManagementClient;

  /**
   * Initialize a new instance of the class Jobs class.
   * @param client Reference to the service client
   */
  constructor(client: StorSimple8000SeriesManagementClient) {
    this.client = client;
  }

  /**
   * Gets all the jobs for specified device. With optional OData query parameters, a filtered set of jobs
   * is returned.
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  public listByDevice(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: JobsListByDeviceOptionalParams
  ): PagedAsyncIterableIterator<Job> {
    const iter = this.listByDevicePagingAll(
      deviceName,
      resourceGroupName,
      managerName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByDevicePagingPage(
          deviceName,
          resourceGroupName,
          managerName,
          options
        );
      }
    };
  }

  private async *listByDevicePagingPage(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: JobsListByDeviceOptionalParams
  ): AsyncIterableIterator<Job[]> {
    let result = await this._listByDevice(
      deviceName,
      resourceGroupName,
      managerName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByDeviceNext(
        deviceName,
        resourceGroupName,
        managerName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByDevicePagingAll(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: JobsListByDeviceOptionalParams
  ): AsyncIterableIterator<Job> {
    for await (const page of this.listByDevicePagingPage(
      deviceName,
      resourceGroupName,
      managerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all the jobs for the specified manager. With optional OData query parameters, a filtered set of
   * jobs is returned.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  public listByManager(
    resourceGroupName: string,
    managerName: string,
    options?: JobsListByManagerOptionalParams
  ): PagedAsyncIterableIterator<Job> {
    const iter = this.listByManagerPagingAll(
      resourceGroupName,
      managerName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByManagerPagingPage(
          resourceGroupName,
          managerName,
          options
        );
      }
    };
  }

  private async *listByManagerPagingPage(
    resourceGroupName: string,
    managerName: string,
    options?: JobsListByManagerOptionalParams
  ): AsyncIterableIterator<Job[]> {
    let result = await this._listByManager(
      resourceGroupName,
      managerName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByManagerNext(
        resourceGroupName,
        managerName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByManagerPagingAll(
    resourceGroupName: string,
    managerName: string,
    options?: JobsListByManagerOptionalParams
  ): AsyncIterableIterator<Job> {
    for await (const page of this.listByManagerPagingPage(
      resourceGroupName,
      managerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all the jobs for specified device. With optional OData query parameters, a filtered set of jobs
   * is returned.
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  private _listByDevice(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: JobsListByDeviceOptionalParams
  ): Promise<JobsListByDeviceResponse> {
    return this.client.sendOperationRequest(
      { deviceName, resourceGroupName, managerName, options },
      listByDeviceOperationSpec
    );
  }

  /**
   * Gets the details of the specified job name.
   * @param deviceName The device name
   * @param jobName The job Name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  get(
    deviceName: string,
    jobName: string,
    resourceGroupName: string,
    managerName: string,
    options?: JobsGetOptionalParams
  ): Promise<JobsGetResponse> {
    return this.client.sendOperationRequest(
      { deviceName, jobName, resourceGroupName, managerName, options },
      getOperationSpec
    );
  }

  /**
   * Cancels a job on the device.
   * @param deviceName The device name
   * @param jobName The jobName.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  async beginCancel(
    deviceName: string,
    jobName: string,
    resourceGroupName: string,
    managerName: string,
    options?: JobsCancelOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { deviceName, jobName, resourceGroupName, managerName, options },
      cancelOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Cancels a job on the device.
   * @param deviceName The device name
   * @param jobName The jobName.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  async beginCancelAndWait(
    deviceName: string,
    jobName: string,
    resourceGroupName: string,
    managerName: string,
    options?: JobsCancelOptionalParams
  ): Promise<void> {
    const poller = await this.beginCancel(
      deviceName,
      jobName,
      resourceGroupName,
      managerName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets all the jobs for the specified manager. With optional OData query parameters, a filtered set of
   * jobs is returned.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  private _listByManager(
    resourceGroupName: string,
    managerName: string,
    options?: JobsListByManagerOptionalParams
  ): Promise<JobsListByManagerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managerName, options },
      listByManagerOperationSpec
    );
  }

  /**
   * ListByDeviceNext
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param nextLink The nextLink from the previous successful call to the ListByDevice method.
   * @param options The options parameters.
   */
  private _listByDeviceNext(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    nextLink: string,
    options?: JobsListByDeviceNextOptionalParams
  ): Promise<JobsListByDeviceNextResponse> {
    return this.client.sendOperationRequest(
      { deviceName, resourceGroupName, managerName, nextLink, options },
      listByDeviceNextOperationSpec
    );
  }

  /**
   * ListByManagerNext
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param nextLink The nextLink from the previous successful call to the ListByManager method.
   * @param options The options parameters.
   */
  private _listByManagerNext(
    resourceGroupName: string,
    managerName: string,
    nextLink: string,
    options?: JobsListByManagerNextOptionalParams
  ): Promise<JobsListByManagerNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managerName, nextLink, options },
      listByManagerNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDeviceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/jobs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobList
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/jobs/{jobName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Job
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const cancelOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/jobs/{jobName}/cancel",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.jobName
  ],
  serializer
};
const listByManagerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/jobs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobList
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByDeviceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobList
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByManagerNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobList
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
