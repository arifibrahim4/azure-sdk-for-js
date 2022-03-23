/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AutoScaleVCores } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PowerBIDedicated } from "../powerBIDedicated";
import {
  AutoScaleVCore,
  AutoScaleVCoresListByResourceGroupOptionalParams,
  AutoScaleVCoresListBySubscriptionOptionalParams,
  AutoScaleVCoresGetOptionalParams,
  AutoScaleVCoresGetResponse,
  AutoScaleVCoresCreateOptionalParams,
  AutoScaleVCoresCreateResponse,
  AutoScaleVCoresDeleteOptionalParams,
  AutoScaleVCoreUpdateParameters,
  AutoScaleVCoresUpdateOptionalParams,
  AutoScaleVCoresUpdateResponse,
  AutoScaleVCoresListByResourceGroupResponse,
  AutoScaleVCoresListBySubscriptionResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AutoScaleVCores operations. */
export class AutoScaleVCoresImpl implements AutoScaleVCores {
  private readonly client: PowerBIDedicated;

  /**
   * Initialize a new instance of the class AutoScaleVCores class.
   * @param client Reference to the service client
   */
  constructor(client: PowerBIDedicated) {
    this.client = client;
  }

  /**
   * Gets all the auto scale v-cores for the given resource group.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: AutoScaleVCoresListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<AutoScaleVCore> {
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
    options?: AutoScaleVCoresListByResourceGroupOptionalParams
  ): AsyncIterableIterator<AutoScaleVCore[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: AutoScaleVCoresListByResourceGroupOptionalParams
  ): AsyncIterableIterator<AutoScaleVCore> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the auto scale v-cores for the given subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: AutoScaleVCoresListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<AutoScaleVCore> {
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
    options?: AutoScaleVCoresListBySubscriptionOptionalParams
  ): AsyncIterableIterator<AutoScaleVCore[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
  }

  private async *listBySubscriptionPagingAll(
    options?: AutoScaleVCoresListBySubscriptionOptionalParams
  ): AsyncIterableIterator<AutoScaleVCore> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets details about the specified auto scale v-core.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param vcoreName The name of the auto scale v-core. It must be a minimum of 3 characters, and a
   *                  maximum of 63.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vcoreName: string,
    options?: AutoScaleVCoresGetOptionalParams
  ): Promise<AutoScaleVCoresGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vcoreName, options },
      getOperationSpec
    );
  }

  /**
   * Provisions the specified auto scale v-core based on the configuration specified in the request.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param vcoreName The name of the auto scale v-core. It must be a minimum of 3 characters, and a
   *                  maximum of 63.
   * @param vCoreParameters Contains the information used to provision the auto scale v-core.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    vcoreName: string,
    vCoreParameters: AutoScaleVCore,
    options?: AutoScaleVCoresCreateOptionalParams
  ): Promise<AutoScaleVCoresCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vcoreName, vCoreParameters, options },
      createOperationSpec
    );
  }

  /**
   * Deletes the specified auto scale v-core.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param vcoreName The name of the auto scale v-core. It must be a minimum of 3 characters, and a
   *                  maximum of 63.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    vcoreName: string,
    options?: AutoScaleVCoresDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vcoreName, options },
      deleteOperationSpec
    );
  }

  /**
   * Updates the current state of the specified auto scale v-core.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param vcoreName The name of the auto scale v-core. It must be a minimum of 3 characters, and a
   *                  maximum of 63.
   * @param vCoreUpdateParameters Request object that contains the updated information for the auto scale
   *                              v-core.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    vcoreName: string,
    vCoreUpdateParameters: AutoScaleVCoreUpdateParameters,
    options?: AutoScaleVCoresUpdateOptionalParams
  ): Promise<AutoScaleVCoresUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vcoreName, vCoreUpdateParameters, options },
      updateOperationSpec
    );
  }

  /**
   * Gets all the auto scale v-cores for the given resource group.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: AutoScaleVCoresListByResourceGroupOptionalParams
  ): Promise<AutoScaleVCoresListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Lists all the auto scale v-cores for the given subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: AutoScaleVCoresListBySubscriptionOptionalParams
  ): Promise<AutoScaleVCoresListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/autoScaleVCores/{vcoreName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AutoScaleVCore
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vcoreName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/autoScaleVCores/{vcoreName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AutoScaleVCore
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.vCoreParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vcoreName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/autoScaleVCores/{vcoreName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vcoreName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/autoScaleVCores/{vcoreName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AutoScaleVCore
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.vCoreUpdateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vcoreName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/autoScaleVCores",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AutoScaleVCoreListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.PowerBIDedicated/autoScaleVCores",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AutoScaleVCoreListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
