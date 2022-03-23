/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { StorageAccountCredentials } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorSimpleManagementClient } from "../storSimpleManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  StorageAccountCredential,
  StorageAccountCredentialsListByManagerOptionalParams,
  StorageAccountCredentialsListByManagerResponse,
  StorageAccountCredentialsGetOptionalParams,
  StorageAccountCredentialsGetResponse,
  StorageAccountCredentialsCreateOrUpdateOptionalParams,
  StorageAccountCredentialsCreateOrUpdateResponse,
  StorageAccountCredentialsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing StorageAccountCredentials operations. */
export class StorageAccountCredentialsImpl
  implements StorageAccountCredentials {
  private readonly client: StorSimpleManagementClient;

  /**
   * Initialize a new instance of the class StorageAccountCredentials class.
   * @param client Reference to the service client
   */
  constructor(client: StorSimpleManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves all the storage account credentials in a manager.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  public listByManager(
    resourceGroupName: string,
    managerName: string,
    options?: StorageAccountCredentialsListByManagerOptionalParams
  ): PagedAsyncIterableIterator<StorageAccountCredential> {
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
    options?: StorageAccountCredentialsListByManagerOptionalParams
  ): AsyncIterableIterator<StorageAccountCredential[]> {
    let result = await this._listByManager(
      resourceGroupName,
      managerName,
      options
    );
    yield result.value || [];
  }

  private async *listByManagerPagingAll(
    resourceGroupName: string,
    managerName: string,
    options?: StorageAccountCredentialsListByManagerOptionalParams
  ): AsyncIterableIterator<StorageAccountCredential> {
    for await (const page of this.listByManagerPagingPage(
      resourceGroupName,
      managerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves all the storage account credentials in a manager.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  private _listByManager(
    resourceGroupName: string,
    managerName: string,
    options?: StorageAccountCredentialsListByManagerOptionalParams
  ): Promise<StorageAccountCredentialsListByManagerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managerName, options },
      listByManagerOperationSpec
    );
  }

  /**
   * Returns the properties of the specified storage account credential name.
   * @param credentialName The name of storage account credential to be fetched.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  get(
    credentialName: string,
    resourceGroupName: string,
    managerName: string,
    options?: StorageAccountCredentialsGetOptionalParams
  ): Promise<StorageAccountCredentialsGetResponse> {
    return this.client.sendOperationRequest(
      { credentialName, resourceGroupName, managerName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates the storage account credential
   * @param credentialName The credential name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param storageAccount The storage account credential to be added or updated.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    credentialName: string,
    resourceGroupName: string,
    managerName: string,
    storageAccount: StorageAccountCredential,
    options?: StorageAccountCredentialsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<StorageAccountCredentialsCreateOrUpdateResponse>,
      StorageAccountCredentialsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<StorageAccountCredentialsCreateOrUpdateResponse> => {
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
      {
        credentialName,
        resourceGroupName,
        managerName,
        storageAccount,
        options
      },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Creates or updates the storage account credential
   * @param credentialName The credential name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param storageAccount The storage account credential to be added or updated.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    credentialName: string,
    resourceGroupName: string,
    managerName: string,
    storageAccount: StorageAccountCredential,
    options?: StorageAccountCredentialsCreateOrUpdateOptionalParams
  ): Promise<StorageAccountCredentialsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      credentialName,
      resourceGroupName,
      managerName,
      storageAccount,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the storage account credential
   * @param credentialName The name of the storage account credential.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  async beginDelete(
    credentialName: string,
    resourceGroupName: string,
    managerName: string,
    options?: StorageAccountCredentialsDeleteOptionalParams
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
      { credentialName, resourceGroupName, managerName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes the storage account credential
   * @param credentialName The name of the storage account credential.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    credentialName: string,
    resourceGroupName: string,
    managerName: string,
    options?: StorageAccountCredentialsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      credentialName,
      resourceGroupName,
      managerName,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByManagerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/storageAccountCredentials",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageAccountCredentialList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/storageAccountCredentials/{credentialName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageAccountCredential
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.credentialName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/storageAccountCredentials/{credentialName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.StorageAccountCredential
    },
    201: {
      bodyMapper: Mappers.StorageAccountCredential
    },
    202: {
      bodyMapper: Mappers.StorageAccountCredential
    },
    204: {
      bodyMapper: Mappers.StorageAccountCredential
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.storageAccount,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.credentialName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/storageAccountCredentials/{credentialName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.credentialName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
