/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Capacities } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PowerBIDedicated } from "../powerBIDedicated";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DedicatedCapacity,
  CapacitiesListByResourceGroupOptionalParams,
  CapacitiesListOptionalParams,
  CapacitiesGetDetailsOptionalParams,
  CapacitiesGetDetailsResponse,
  CapacitiesCreateOptionalParams,
  CapacitiesCreateResponse,
  CapacitiesDeleteOptionalParams,
  DedicatedCapacityUpdateParameters,
  CapacitiesUpdateOptionalParams,
  CapacitiesUpdateResponse,
  CapacitiesSuspendOptionalParams,
  CapacitiesResumeOptionalParams,
  CapacitiesListByResourceGroupResponse,
  CapacitiesListResponse,
  CapacitiesListSkusOptionalParams,
  CapacitiesListSkusResponse,
  CapacitiesListSkusForCapacityOptionalParams,
  CapacitiesListSkusForCapacityResponse,
  CheckCapacityNameAvailabilityParameters,
  CapacitiesCheckNameAvailabilityOptionalParams,
  CapacitiesCheckNameAvailabilityResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Capacities operations. */
export class CapacitiesImpl implements Capacities {
  private readonly client: PowerBIDedicated;

  /**
   * Initialize a new instance of the class Capacities class.
   * @param client Reference to the service client
   */
  constructor(client: PowerBIDedicated) {
    this.client = client;
  }

  /**
   * Gets all the Dedicated capacities for the given resource group.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: CapacitiesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<DedicatedCapacity> {
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
    options?: CapacitiesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DedicatedCapacity[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: CapacitiesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DedicatedCapacity> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the Dedicated capacities for the given subscription.
   * @param options The options parameters.
   */
  public list(
    options?: CapacitiesListOptionalParams
  ): PagedAsyncIterableIterator<DedicatedCapacity> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: CapacitiesListOptionalParams
  ): AsyncIterableIterator<DedicatedCapacity[]> {
    let result = await this._list(options);
    yield result.value || [];
  }

  private async *listPagingAll(
    options?: CapacitiesListOptionalParams
  ): AsyncIterableIterator<DedicatedCapacity> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets details about the specified dedicated capacity.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the dedicated capacity. It must be a minimum of 3
   *                              characters, and a maximum of 63.
   * @param options The options parameters.
   */
  getDetails(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    options?: CapacitiesGetDetailsOptionalParams
  ): Promise<CapacitiesGetDetailsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dedicatedCapacityName, options },
      getDetailsOperationSpec
    );
  }

  /**
   * Provisions the specified Dedicated capacity based on the configuration specified in the request.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the Dedicated capacity. It must be a minimum of 3
   *                              characters, and a maximum of 63.
   * @param capacityParameters Contains the information used to provision the Dedicated capacity.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    capacityParameters: DedicatedCapacity,
    options?: CapacitiesCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CapacitiesCreateResponse>,
      CapacitiesCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CapacitiesCreateResponse> => {
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
      { resourceGroupName, dedicatedCapacityName, capacityParameters, options },
      createOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Provisions the specified Dedicated capacity based on the configuration specified in the request.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the Dedicated capacity. It must be a minimum of 3
   *                              characters, and a maximum of 63.
   * @param capacityParameters Contains the information used to provision the Dedicated capacity.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    capacityParameters: DedicatedCapacity,
    options?: CapacitiesCreateOptionalParams
  ): Promise<CapacitiesCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      dedicatedCapacityName,
      capacityParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the specified Dedicated capacity.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the Dedicated capacity. It must be at least 3 characters in
   *                              length, and no more than 63.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    options?: CapacitiesDeleteOptionalParams
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
      { resourceGroupName, dedicatedCapacityName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes the specified Dedicated capacity.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the Dedicated capacity. It must be at least 3 characters in
   *                              length, and no more than 63.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    options?: CapacitiesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      dedicatedCapacityName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates the current state of the specified Dedicated capacity.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the Dedicated capacity. It must be at least 3 characters in
   *                              length, and no more than 63.
   * @param capacityUpdateParameters Request object that contains the updated information for the
   *                                 capacity.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    capacityUpdateParameters: DedicatedCapacityUpdateParameters,
    options?: CapacitiesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CapacitiesUpdateResponse>,
      CapacitiesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CapacitiesUpdateResponse> => {
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
        dedicatedCapacityName,
        capacityUpdateParameters,
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
   * Updates the current state of the specified Dedicated capacity.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the Dedicated capacity. It must be at least 3 characters in
   *                              length, and no more than 63.
   * @param capacityUpdateParameters Request object that contains the updated information for the
   *                                 capacity.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    capacityUpdateParameters: DedicatedCapacityUpdateParameters,
    options?: CapacitiesUpdateOptionalParams
  ): Promise<CapacitiesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      dedicatedCapacityName,
      capacityUpdateParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Suspends operation of the specified dedicated capacity instance.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the Dedicated capacity. It must be at least 3 characters in
   *                              length, and no more than 63.
   * @param options The options parameters.
   */
  async beginSuspend(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    options?: CapacitiesSuspendOptionalParams
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
      { resourceGroupName, dedicatedCapacityName, options },
      suspendOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Suspends operation of the specified dedicated capacity instance.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the Dedicated capacity. It must be at least 3 characters in
   *                              length, and no more than 63.
   * @param options The options parameters.
   */
  async beginSuspendAndWait(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    options?: CapacitiesSuspendOptionalParams
  ): Promise<void> {
    const poller = await this.beginSuspend(
      resourceGroupName,
      dedicatedCapacityName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Resumes operation of the specified Dedicated capacity instance.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the Dedicated capacity. It must be at least 3 characters in
   *                              length, and no more than 63.
   * @param options The options parameters.
   */
  async beginResume(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    options?: CapacitiesResumeOptionalParams
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
      { resourceGroupName, dedicatedCapacityName, options },
      resumeOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Resumes operation of the specified Dedicated capacity instance.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the Dedicated capacity. It must be at least 3 characters in
   *                              length, and no more than 63.
   * @param options The options parameters.
   */
  async beginResumeAndWait(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    options?: CapacitiesResumeOptionalParams
  ): Promise<void> {
    const poller = await this.beginResume(
      resourceGroupName,
      dedicatedCapacityName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets all the Dedicated capacities for the given resource group.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: CapacitiesListByResourceGroupOptionalParams
  ): Promise<CapacitiesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Lists all the Dedicated capacities for the given subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: CapacitiesListOptionalParams
  ): Promise<CapacitiesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Lists eligible SKUs for PowerBI Dedicated resource provider.
   * @param options The options parameters.
   */
  listSkus(
    options?: CapacitiesListSkusOptionalParams
  ): Promise<CapacitiesListSkusResponse> {
    return this.client.sendOperationRequest({ options }, listSkusOperationSpec);
  }

  /**
   * Lists eligible SKUs for a PowerBI Dedicated resource.
   * @param resourceGroupName The name of the Azure Resource group of which a given PowerBIDedicated
   *                          capacity is part. This name must be at least 1 character in length, and no more than 90.
   * @param dedicatedCapacityName The name of the Dedicated capacity. It must be at least 3 characters in
   *                              length, and no more than 63.
   * @param options The options parameters.
   */
  listSkusForCapacity(
    resourceGroupName: string,
    dedicatedCapacityName: string,
    options?: CapacitiesListSkusForCapacityOptionalParams
  ): Promise<CapacitiesListSkusForCapacityResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dedicatedCapacityName, options },
      listSkusForCapacityOperationSpec
    );
  }

  /**
   * Check the name availability in the target location.
   * @param location The region name which the operation will lookup into.
   * @param capacityParameters The name of the capacity.
   * @param options The options parameters.
   */
  checkNameAvailability(
    location: string,
    capacityParameters: CheckCapacityNameAvailabilityParameters,
    options?: CapacitiesCheckNameAvailabilityOptionalParams
  ): Promise<CapacitiesCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { location, capacityParameters, options },
      checkNameAvailabilityOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getDetailsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities/{dedicatedCapacityName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedCapacity
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.dedicatedCapacityName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities/{dedicatedCapacityName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedCapacity
    },
    201: {
      bodyMapper: Mappers.DedicatedCapacity
    },
    202: {
      bodyMapper: Mappers.DedicatedCapacity
    },
    204: {
      bodyMapper: Mappers.DedicatedCapacity
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.capacityParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.dedicatedCapacityName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities/{dedicatedCapacityName}",
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
    Parameters.resourceGroupName,
    Parameters.dedicatedCapacityName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities/{dedicatedCapacityName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedCapacity
    },
    201: {
      bodyMapper: Mappers.DedicatedCapacity
    },
    202: {
      bodyMapper: Mappers.DedicatedCapacity
    },
    204: {
      bodyMapper: Mappers.DedicatedCapacity
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.capacityUpdateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.dedicatedCapacityName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const suspendOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities/{dedicatedCapacityName}/suspend",
  httpMethod: "POST",
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
    Parameters.resourceGroupName,
    Parameters.dedicatedCapacityName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const resumeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities/{dedicatedCapacityName}/resume",
  httpMethod: "POST",
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
    Parameters.resourceGroupName,
    Parameters.dedicatedCapacityName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedCapacities
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
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.PowerBIDedicated/capacities",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedCapacities
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
const listSkusOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.PowerBIDedicated/skus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SkuEnumerationForNewResourceResult
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
const listSkusForCapacityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities/{dedicatedCapacityName}/skus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SkuEnumerationForExistingResourceResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.dedicatedCapacityName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.PowerBIDedicated/locations/{location}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckCapacityNameAvailabilityResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.capacityParameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
