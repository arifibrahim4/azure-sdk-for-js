/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { APIKeys } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApplicationInsightsManagementClient } from "../applicationInsightsManagementClient";
import {
  ApplicationInsightsComponentAPIKey,
  APIKeysListOptionalParams,
  APIKeysListResponse,
  APIKeyRequest,
  APIKeysCreateOptionalParams,
  APIKeysCreateResponse,
  APIKeysDeleteOptionalParams,
  APIKeysDeleteResponse,
  APIKeysGetOptionalParams,
  APIKeysGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing APIKeys operations. */
export class APIKeysImpl implements APIKeys {
  private readonly client: ApplicationInsightsManagementClient;

  /**
   * Initialize a new instance of the class APIKeys class.
   * @param client Reference to the service client
   */
  constructor(client: ApplicationInsightsManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of API keys of an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    resourceName: string,
    options?: APIKeysListOptionalParams
  ): PagedAsyncIterableIterator<ApplicationInsightsComponentAPIKey> {
    const iter = this.listPagingAll(resourceGroupName, resourceName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, resourceName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    resourceName: string,
    options?: APIKeysListOptionalParams
  ): AsyncIterableIterator<ApplicationInsightsComponentAPIKey[]> {
    let result = await this._list(resourceGroupName, resourceName, options);
    yield result.value || [];
  }

  private async *listPagingAll(
    resourceGroupName: string,
    resourceName: string,
    options?: APIKeysListOptionalParams
  ): AsyncIterableIterator<ApplicationInsightsComponentAPIKey> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      resourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of API keys of an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    resourceName: string,
    options?: APIKeysListOptionalParams
  ): Promise<APIKeysListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listOperationSpec
    );
  }

  /**
   * Create an API Key of an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param aPIKeyProperties Properties that need to be specified to create an API key of a Application
   *                         Insights component.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    resourceName: string,
    aPIKeyProperties: APIKeyRequest,
    options?: APIKeysCreateOptionalParams
  ): Promise<APIKeysCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, aPIKeyProperties, options },
      createOperationSpec
    );
  }

  /**
   * Delete an API Key of an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param keyId The API Key ID. This is unique within a Application Insights component.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    keyId: string,
    options?: APIKeysDeleteOptionalParams
  ): Promise<APIKeysDeleteResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, keyId, options },
      deleteOperationSpec
    );
  }

  /**
   * Get the API Key for this key id.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param keyId The API Key ID. This is unique within a Application Insights component.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    keyId: string,
    options?: APIKeysGetOptionalParams
  ): Promise<APIKeysGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, keyId, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/ApiKeys",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentAPIKeyListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/ApiKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentAPIKey
    }
  },
  requestBody: Parameters.aPIKeyProperties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/APIKeys/{keyId}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentAPIKey
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.keyId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/APIKeys/{keyId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentAPIKey
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.keyId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
