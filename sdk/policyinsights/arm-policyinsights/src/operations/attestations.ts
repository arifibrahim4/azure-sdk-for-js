/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Attestations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PolicyInsightsClient } from "../policyInsightsClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Attestation,
  AttestationsListForSubscriptionNextOptionalParams,
  AttestationsListForSubscriptionOptionalParams,
  AttestationsListForResourceGroupNextOptionalParams,
  AttestationsListForResourceGroupOptionalParams,
  AttestationsListForResourceNextOptionalParams,
  AttestationsListForResourceOptionalParams,
  AttestationsListForSubscriptionResponse,
  AttestationsCreateOrUpdateAtSubscriptionOptionalParams,
  AttestationsCreateOrUpdateAtSubscriptionResponse,
  AttestationsGetAtSubscriptionOptionalParams,
  AttestationsGetAtSubscriptionResponse,
  AttestationsDeleteAtSubscriptionOptionalParams,
  AttestationsListForResourceGroupResponse,
  AttestationsCreateOrUpdateAtResourceGroupOptionalParams,
  AttestationsCreateOrUpdateAtResourceGroupResponse,
  AttestationsGetAtResourceGroupOptionalParams,
  AttestationsGetAtResourceGroupResponse,
  AttestationsDeleteAtResourceGroupOptionalParams,
  AttestationsListForResourceResponse,
  AttestationsCreateOrUpdateAtResourceOptionalParams,
  AttestationsCreateOrUpdateAtResourceResponse,
  AttestationsGetAtResourceOptionalParams,
  AttestationsGetAtResourceResponse,
  AttestationsDeleteAtResourceOptionalParams,
  AttestationsListForSubscriptionNextResponse,
  AttestationsListForResourceGroupNextResponse,
  AttestationsListForResourceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Attestations operations. */
export class AttestationsImpl implements Attestations {
  private readonly client: PolicyInsightsClient;

  /**
   * Initialize a new instance of the class Attestations class.
   * @param client Reference to the service client
   */
  constructor(client: PolicyInsightsClient) {
    this.client = client;
  }

  /**
   * Gets all attestations for the subscription.
   * @param options The options parameters.
   */
  public listForSubscription(
    options?: AttestationsListForSubscriptionOptionalParams
  ): PagedAsyncIterableIterator<Attestation> {
    const iter = this.listForSubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listForSubscriptionPagingPage(options);
      }
    };
  }

  private async *listForSubscriptionPagingPage(
    options?: AttestationsListForSubscriptionOptionalParams
  ): AsyncIterableIterator<Attestation[]> {
    let result = await this._listForSubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listForSubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listForSubscriptionPagingAll(
    options?: AttestationsListForSubscriptionOptionalParams
  ): AsyncIterableIterator<Attestation> {
    for await (const page of this.listForSubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets all attestations for the resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listForResourceGroup(
    resourceGroupName: string,
    options?: AttestationsListForResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Attestation> {
    const iter = this.listForResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listForResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listForResourceGroupPagingPage(
    resourceGroupName: string,
    options?: AttestationsListForResourceGroupOptionalParams
  ): AsyncIterableIterator<Attestation[]> {
    let result = await this._listForResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listForResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listForResourceGroupPagingAll(
    resourceGroupName: string,
    options?: AttestationsListForResourceGroupOptionalParams
  ): AsyncIterableIterator<Attestation> {
    for await (const page of this.listForResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all attestations for a resource.
   * @param resourceId Resource ID.
   * @param options The options parameters.
   */
  public listForResource(
    resourceId: string,
    options?: AttestationsListForResourceOptionalParams
  ): PagedAsyncIterableIterator<Attestation> {
    const iter = this.listForResourcePagingAll(resourceId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listForResourcePagingPage(resourceId, options);
      }
    };
  }

  private async *listForResourcePagingPage(
    resourceId: string,
    options?: AttestationsListForResourceOptionalParams
  ): AsyncIterableIterator<Attestation[]> {
    let result = await this._listForResource(resourceId, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listForResourceNext(
        resourceId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listForResourcePagingAll(
    resourceId: string,
    options?: AttestationsListForResourceOptionalParams
  ): AsyncIterableIterator<Attestation> {
    for await (const page of this.listForResourcePagingPage(
      resourceId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all attestations for the subscription.
   * @param options The options parameters.
   */
  private _listForSubscription(
    options?: AttestationsListForSubscriptionOptionalParams
  ): Promise<AttestationsListForSubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listForSubscriptionOperationSpec
    );
  }

  /**
   * Creates or updates an attestation at subscription scope.
   * @param attestationName The name of the attestation.
   * @param parameters The attestation parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAtSubscription(
    attestationName: string,
    parameters: Attestation,
    options?: AttestationsCreateOrUpdateAtSubscriptionOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AttestationsCreateOrUpdateAtSubscriptionResponse>,
      AttestationsCreateOrUpdateAtSubscriptionResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AttestationsCreateOrUpdateAtSubscriptionResponse> => {
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
      { attestationName, parameters, options },
      createOrUpdateAtSubscriptionOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Creates or updates an attestation at subscription scope.
   * @param attestationName The name of the attestation.
   * @param parameters The attestation parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAtSubscriptionAndWait(
    attestationName: string,
    parameters: Attestation,
    options?: AttestationsCreateOrUpdateAtSubscriptionOptionalParams
  ): Promise<AttestationsCreateOrUpdateAtSubscriptionResponse> {
    const poller = await this.beginCreateOrUpdateAtSubscription(
      attestationName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets an existing attestation at subscription scope.
   * @param attestationName The name of the attestation.
   * @param options The options parameters.
   */
  getAtSubscription(
    attestationName: string,
    options?: AttestationsGetAtSubscriptionOptionalParams
  ): Promise<AttestationsGetAtSubscriptionResponse> {
    return this.client.sendOperationRequest(
      { attestationName, options },
      getAtSubscriptionOperationSpec
    );
  }

  /**
   * Deletes an existing attestation at subscription scope.
   * @param attestationName The name of the attestation.
   * @param options The options parameters.
   */
  deleteAtSubscription(
    attestationName: string,
    options?: AttestationsDeleteAtSubscriptionOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { attestationName, options },
      deleteAtSubscriptionOperationSpec
    );
  }

  /**
   * Gets all attestations for the resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listForResourceGroup(
    resourceGroupName: string,
    options?: AttestationsListForResourceGroupOptionalParams
  ): Promise<AttestationsListForResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listForResourceGroupOperationSpec
    );
  }

  /**
   * Creates or updates an attestation at resource group scope.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param attestationName The name of the attestation.
   * @param parameters The attestation parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAtResourceGroup(
    resourceGroupName: string,
    attestationName: string,
    parameters: Attestation,
    options?: AttestationsCreateOrUpdateAtResourceGroupOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AttestationsCreateOrUpdateAtResourceGroupResponse>,
      AttestationsCreateOrUpdateAtResourceGroupResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AttestationsCreateOrUpdateAtResourceGroupResponse> => {
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
      { resourceGroupName, attestationName, parameters, options },
      createOrUpdateAtResourceGroupOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Creates or updates an attestation at resource group scope.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param attestationName The name of the attestation.
   * @param parameters The attestation parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAtResourceGroupAndWait(
    resourceGroupName: string,
    attestationName: string,
    parameters: Attestation,
    options?: AttestationsCreateOrUpdateAtResourceGroupOptionalParams
  ): Promise<AttestationsCreateOrUpdateAtResourceGroupResponse> {
    const poller = await this.beginCreateOrUpdateAtResourceGroup(
      resourceGroupName,
      attestationName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets an existing attestation at resource group scope.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param attestationName The name of the attestation.
   * @param options The options parameters.
   */
  getAtResourceGroup(
    resourceGroupName: string,
    attestationName: string,
    options?: AttestationsGetAtResourceGroupOptionalParams
  ): Promise<AttestationsGetAtResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, attestationName, options },
      getAtResourceGroupOperationSpec
    );
  }

  /**
   * Deletes an existing attestation at resource group scope.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param attestationName The name of the attestation.
   * @param options The options parameters.
   */
  deleteAtResourceGroup(
    resourceGroupName: string,
    attestationName: string,
    options?: AttestationsDeleteAtResourceGroupOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, attestationName, options },
      deleteAtResourceGroupOperationSpec
    );
  }

  /**
   * Gets all attestations for a resource.
   * @param resourceId Resource ID.
   * @param options The options parameters.
   */
  private _listForResource(
    resourceId: string,
    options?: AttestationsListForResourceOptionalParams
  ): Promise<AttestationsListForResourceResponse> {
    return this.client.sendOperationRequest(
      { resourceId, options },
      listForResourceOperationSpec
    );
  }

  /**
   * Creates or updates an attestation at resource scope.
   * @param resourceId Resource ID.
   * @param attestationName The name of the attestation.
   * @param parameters The attestation parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAtResource(
    resourceId: string,
    attestationName: string,
    parameters: Attestation,
    options?: AttestationsCreateOrUpdateAtResourceOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AttestationsCreateOrUpdateAtResourceResponse>,
      AttestationsCreateOrUpdateAtResourceResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AttestationsCreateOrUpdateAtResourceResponse> => {
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
      { resourceId, attestationName, parameters, options },
      createOrUpdateAtResourceOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Creates or updates an attestation at resource scope.
   * @param resourceId Resource ID.
   * @param attestationName The name of the attestation.
   * @param parameters The attestation parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAtResourceAndWait(
    resourceId: string,
    attestationName: string,
    parameters: Attestation,
    options?: AttestationsCreateOrUpdateAtResourceOptionalParams
  ): Promise<AttestationsCreateOrUpdateAtResourceResponse> {
    const poller = await this.beginCreateOrUpdateAtResource(
      resourceId,
      attestationName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets an existing attestation at resource scope.
   * @param resourceId Resource ID.
   * @param attestationName The name of the attestation.
   * @param options The options parameters.
   */
  getAtResource(
    resourceId: string,
    attestationName: string,
    options?: AttestationsGetAtResourceOptionalParams
  ): Promise<AttestationsGetAtResourceResponse> {
    return this.client.sendOperationRequest(
      { resourceId, attestationName, options },
      getAtResourceOperationSpec
    );
  }

  /**
   * Deletes an existing attestation at individual resource scope.
   * @param resourceId Resource ID.
   * @param attestationName The name of the attestation.
   * @param options The options parameters.
   */
  deleteAtResource(
    resourceId: string,
    attestationName: string,
    options?: AttestationsDeleteAtResourceOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceId, attestationName, options },
      deleteAtResourceOperationSpec
    );
  }

  /**
   * ListForSubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListForSubscription method.
   * @param options The options parameters.
   */
  private _listForSubscriptionNext(
    nextLink: string,
    options?: AttestationsListForSubscriptionNextOptionalParams
  ): Promise<AttestationsListForSubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listForSubscriptionNextOperationSpec
    );
  }

  /**
   * ListForResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListForResourceGroup method.
   * @param options The options parameters.
   */
  private _listForResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: AttestationsListForResourceGroupNextOptionalParams
  ): Promise<AttestationsListForResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listForResourceGroupNextOperationSpec
    );
  }

  /**
   * ListForResourceNext
   * @param resourceId Resource ID.
   * @param nextLink The nextLink from the previous successful call to the ListForResource method.
   * @param options The options parameters.
   */
  private _listForResourceNext(
    resourceId: string,
    nextLink: string,
    options?: AttestationsListForResourceNextOptionalParams
  ): Promise<AttestationsListForResourceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceId, nextLink, options },
      listForResourceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listForSubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/attestations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AttestationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated2
    }
  },
  queryParameters: [Parameters.top, Parameters.filter, Parameters.apiVersion4],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateAtSubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Attestation
    },
    201: {
      bodyMapper: Mappers.Attestation
    },
    202: {
      bodyMapper: Mappers.Attestation
    },
    204: {
      bodyMapper: Mappers.Attestation
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated2
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.attestationName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getAtSubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Attestation
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated2
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.attestationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteAtSubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated2
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.attestationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listForResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/attestations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AttestationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated2
    }
  },
  queryParameters: [Parameters.top, Parameters.filter, Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateAtResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Attestation
    },
    201: {
      bodyMapper: Mappers.Attestation
    },
    202: {
      bodyMapper: Mappers.Attestation
    },
    204: {
      bodyMapper: Mappers.Attestation
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated2
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1,
    Parameters.attestationName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getAtResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Attestation
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated2
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1,
    Parameters.attestationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteAtResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated2
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1,
    Parameters.attestationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listForResourceOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceId}/providers/Microsoft.PolicyInsights/attestations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AttestationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated2
    }
  },
  queryParameters: [Parameters.top, Parameters.filter, Parameters.apiVersion4],
  urlParameters: [Parameters.$host, Parameters.resourceId],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateAtResourceOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceId}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Attestation
    },
    201: {
      bodyMapper: Mappers.Attestation
    },
    202: {
      bodyMapper: Mappers.Attestation
    },
    204: {
      bodyMapper: Mappers.Attestation
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated2
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceId,
    Parameters.attestationName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getAtResourceOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceId}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Attestation
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated2
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceId,
    Parameters.attestationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteAtResourceOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceId}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated2
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceId,
    Parameters.attestationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listForSubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AttestationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated2
    }
  },
  queryParameters: [Parameters.top, Parameters.filter, Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listForResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AttestationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated2
    }
  },
  queryParameters: [Parameters.top, Parameters.filter, Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceGroupName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listForResourceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AttestationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated2
    }
  },
  queryParameters: [Parameters.top, Parameters.filter, Parameters.apiVersion4],
  urlParameters: [Parameters.$host, Parameters.resourceId, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
