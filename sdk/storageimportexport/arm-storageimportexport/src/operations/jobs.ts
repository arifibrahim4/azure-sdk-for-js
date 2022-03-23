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
import { StorageImportExport } from "../storageImportExport";
import {
  JobResponse,
  JobsListBySubscriptionNextOptionalParams,
  JobsListBySubscriptionOptionalParams,
  JobsListByResourceGroupNextOptionalParams,
  JobsListByResourceGroupOptionalParams,
  JobsListBySubscriptionResponse,
  JobsListByResourceGroupResponse,
  JobsGetOptionalParams,
  JobsGetResponse,
  UpdateJobParameters,
  JobsUpdateOptionalParams,
  JobsUpdateResponse,
  PutJobParameters,
  JobsCreateOptionalParams,
  JobsCreateResponse,
  JobsDeleteOptionalParams,
  JobsListBySubscriptionNextResponse,
  JobsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Jobs operations. */
export class JobsImpl implements Jobs {
  private readonly client: StorageImportExport;

  /**
   * Initialize a new instance of the class Jobs class.
   * @param client Reference to the service client
   */
  constructor(client: StorageImportExport) {
    this.client = client;
  }

  /**
   * Returns all active and completed jobs in a subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: JobsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<JobResponse> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: JobsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<JobResponse[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: JobsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<JobResponse> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Returns all active and completed jobs in a resource group.
   * @param resourceGroupName The resource group name uniquely identifies the resource group within the
   *                          user subscription.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: JobsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<JobResponse> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: JobsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<JobResponse[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: JobsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<JobResponse> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns all active and completed jobs in a subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: JobsListBySubscriptionOptionalParams
  ): Promise<JobsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Returns all active and completed jobs in a resource group.
   * @param resourceGroupName The resource group name uniquely identifies the resource group within the
   *                          user subscription.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: JobsListByResourceGroupOptionalParams
  ): Promise<JobsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Gets information about an existing job.
   * @param jobName The name of the import/export job.
   * @param resourceGroupName The resource group name uniquely identifies the resource group within the
   *                          user subscription.
   * @param options The options parameters.
   */
  get(
    jobName: string,
    resourceGroupName: string,
    options?: JobsGetOptionalParams
  ): Promise<JobsGetResponse> {
    return this.client.sendOperationRequest(
      { jobName, resourceGroupName, options },
      getOperationSpec
    );
  }

  /**
   * Updates specific properties of a job. You can call this operation to notify the Import/Export
   * service that the hard drives comprising the import or export job have been shipped to the Microsoft
   * data center. It can also be used to cancel an existing job.
   * @param jobName The name of the import/export job.
   * @param resourceGroupName The resource group name uniquely identifies the resource group within the
   *                          user subscription.
   * @param body The parameters to update in the job
   * @param options The options parameters.
   */
  update(
    jobName: string,
    resourceGroupName: string,
    body: UpdateJobParameters,
    options?: JobsUpdateOptionalParams
  ): Promise<JobsUpdateResponse> {
    return this.client.sendOperationRequest(
      { jobName, resourceGroupName, body, options },
      updateOperationSpec
    );
  }

  /**
   * Creates a new job or updates an existing job in the specified subscription.
   * @param jobName The name of the import/export job.
   * @param resourceGroupName The resource group name uniquely identifies the resource group within the
   *                          user subscription.
   * @param body The parameters used for creating the job
   * @param options The options parameters.
   */
  create(
    jobName: string,
    resourceGroupName: string,
    body: PutJobParameters,
    options?: JobsCreateOptionalParams
  ): Promise<JobsCreateResponse> {
    return this.client.sendOperationRequest(
      { jobName, resourceGroupName, body, options },
      createOperationSpec
    );
  }

  /**
   * Deletes an existing job. Only jobs in the Creating or Completed states can be deleted.
   * @param jobName The name of the import/export job.
   * @param resourceGroupName The resource group name uniquely identifies the resource group within the
   *                          user subscription.
   * @param options The options parameters.
   */
  delete(
    jobName: string,
    resourceGroupName: string,
    options?: JobsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { jobName, resourceGroupName, options },
      deleteOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: JobsListBySubscriptionNextOptionalParams
  ): Promise<JobsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The resource group name uniquely identifies the resource group within the
   *                          user subscription.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: JobsListByResourceGroupNextOptionalParams
  ): Promise<JobsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.ImportExport/jobs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListJobsResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept, Parameters.acceptLanguage],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ImportExport/jobs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListJobsResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.acceptLanguage],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ImportExport/jobs/{jobName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept, Parameters.acceptLanguage],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ImportExport/jobs/{jobName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.JobResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.acceptLanguage,
    Parameters.contentType
  ],
  mediaType: "json",
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ImportExport/jobs/{jobName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.JobResponse
    },
    201: {
      bodyMapper: Mappers.JobResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.acceptLanguage,
    Parameters.contentType,
    Parameters.clientTenantId
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ImportExport/jobs/{jobName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept, Parameters.acceptLanguage],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListJobsResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept, Parameters.acceptLanguage],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListJobsResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept, Parameters.acceptLanguage],
  serializer
};
