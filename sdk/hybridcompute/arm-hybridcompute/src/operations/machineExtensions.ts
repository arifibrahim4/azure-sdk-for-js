/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { MachineExtensions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HybridComputeManagementClient } from "../hybridComputeManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  MachineExtension,
  MachineExtensionsListNextOptionalParams,
  MachineExtensionsListOptionalParams,
  MachineExtensionsCreateOrUpdateOptionalParams,
  MachineExtensionsCreateOrUpdateResponse,
  MachineExtensionUpdate,
  MachineExtensionsUpdateOptionalParams,
  MachineExtensionsUpdateResponse,
  MachineExtensionsDeleteOptionalParams,
  MachineExtensionsGetOptionalParams,
  MachineExtensionsGetResponse,
  MachineExtensionsListResponse,
  MachineExtensionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing MachineExtensions operations. */
export class MachineExtensionsImpl implements MachineExtensions {
  private readonly client: HybridComputeManagementClient;

  /**
   * Initialize a new instance of the class MachineExtensions class.
   * @param client Reference to the service client
   */
  constructor(client: HybridComputeManagementClient) {
    this.client = client;
  }

  /**
   * The operation to get all extensions of a non-Azure machine
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the machine containing the extension.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    machineName: string,
    options?: MachineExtensionsListOptionalParams
  ): PagedAsyncIterableIterator<MachineExtension> {
    const iter = this.listPagingAll(resourceGroupName, machineName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, machineName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    machineName: string,
    options?: MachineExtensionsListOptionalParams
  ): AsyncIterableIterator<MachineExtension[]> {
    let result = await this._list(resourceGroupName, machineName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        machineName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    machineName: string,
    options?: MachineExtensionsListOptionalParams
  ): AsyncIterableIterator<MachineExtension> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      machineName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * The operation to create or update the extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the machine where the extension should be created or updated.
   * @param extensionName The name of the machine extension.
   * @param extensionParameters Parameters supplied to the Create Machine Extension operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    machineName: string,
    extensionName: string,
    extensionParameters: MachineExtension,
    options?: MachineExtensionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<MachineExtensionsCreateOrUpdateResponse>,
      MachineExtensionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<MachineExtensionsCreateOrUpdateResponse> => {
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
        resourceGroupName,
        machineName,
        extensionName,
        extensionParameters,
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
   * The operation to create or update the extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the machine where the extension should be created or updated.
   * @param extensionName The name of the machine extension.
   * @param extensionParameters Parameters supplied to the Create Machine Extension operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    machineName: string,
    extensionName: string,
    extensionParameters: MachineExtension,
    options?: MachineExtensionsCreateOrUpdateOptionalParams
  ): Promise<MachineExtensionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      machineName,
      extensionName,
      extensionParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to create or update the extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the machine where the extension should be created or updated.
   * @param extensionName The name of the machine extension.
   * @param extensionParameters Parameters supplied to the Create Machine Extension operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    machineName: string,
    extensionName: string,
    extensionParameters: MachineExtensionUpdate,
    options?: MachineExtensionsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<MachineExtensionsUpdateResponse>,
      MachineExtensionsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<MachineExtensionsUpdateResponse> => {
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
        resourceGroupName,
        machineName,
        extensionName,
        extensionParameters,
        options
      },
      updateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * The operation to create or update the extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the machine where the extension should be created or updated.
   * @param extensionName The name of the machine extension.
   * @param extensionParameters Parameters supplied to the Create Machine Extension operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    machineName: string,
    extensionName: string,
    extensionParameters: MachineExtensionUpdate,
    options?: MachineExtensionsUpdateOptionalParams
  ): Promise<MachineExtensionsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      machineName,
      extensionName,
      extensionParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to delete the extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the machine where the extension should be deleted.
   * @param extensionName The name of the machine extension.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    machineName: string,
    extensionName: string,
    options?: MachineExtensionsDeleteOptionalParams
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
      { resourceGroupName, machineName, extensionName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * The operation to delete the extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the machine where the extension should be deleted.
   * @param extensionName The name of the machine extension.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    machineName: string,
    extensionName: string,
    options?: MachineExtensionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      machineName,
      extensionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to get the extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the machine containing the extension.
   * @param extensionName The name of the machine extension.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    machineName: string,
    extensionName: string,
    options?: MachineExtensionsGetOptionalParams
  ): Promise<MachineExtensionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, machineName, extensionName, options },
      getOperationSpec
    );
  }

  /**
   * The operation to get all extensions of a non-Azure machine
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the machine containing the extension.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    machineName: string,
    options?: MachineExtensionsListOptionalParams
  ): Promise<MachineExtensionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, machineName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the machine containing the extension.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    machineName: string,
    nextLink: string,
    options?: MachineExtensionsListNextOptionalParams
  ): Promise<MachineExtensionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, machineName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/extensions/{extensionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.MachineExtension
    },
    201: {
      bodyMapper: Mappers.MachineExtension
    },
    202: {
      bodyMapper: Mappers.MachineExtension
    },
    204: {
      bodyMapper: Mappers.MachineExtension
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.extensionParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.machineName,
    Parameters.extensionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/extensions/{extensionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.MachineExtension
    },
    201: {
      bodyMapper: Mappers.MachineExtension
    },
    202: {
      bodyMapper: Mappers.MachineExtension
    },
    204: {
      bodyMapper: Mappers.MachineExtension
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.extensionParameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.machineName,
    Parameters.extensionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/extensions/{extensionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.machineName,
    Parameters.extensionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/extensions/{extensionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MachineExtension
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
    Parameters.machineName,
    Parameters.extensionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/extensions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MachineExtensionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.machineName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MachineExtensionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.machineName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
