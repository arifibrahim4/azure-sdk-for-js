/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { HybridConnections } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { RelayAPI } from "../relayAPI";
import {
  HybridConnection,
  HybridConnectionsListByNamespaceNextOptionalParams,
  HybridConnectionsListByNamespaceOptionalParams,
  AuthorizationRule,
  HybridConnectionsListAuthorizationRulesNextOptionalParams,
  HybridConnectionsListAuthorizationRulesOptionalParams,
  HybridConnectionsListByNamespaceResponse,
  HybridConnectionsCreateOrUpdateOptionalParams,
  HybridConnectionsCreateOrUpdateResponse,
  HybridConnectionsDeleteOptionalParams,
  HybridConnectionsGetOptionalParams,
  HybridConnectionsGetResponse,
  HybridConnectionsListAuthorizationRulesResponse,
  HybridConnectionsCreateOrUpdateAuthorizationRuleOptionalParams,
  HybridConnectionsCreateOrUpdateAuthorizationRuleResponse,
  HybridConnectionsDeleteAuthorizationRuleOptionalParams,
  HybridConnectionsGetAuthorizationRuleOptionalParams,
  HybridConnectionsGetAuthorizationRuleResponse,
  HybridConnectionsListKeysOptionalParams,
  HybridConnectionsListKeysResponse,
  RegenerateAccessKeyParameters,
  HybridConnectionsRegenerateKeysOptionalParams,
  HybridConnectionsRegenerateKeysResponse,
  HybridConnectionsListByNamespaceNextResponse,
  HybridConnectionsListAuthorizationRulesNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing HybridConnections operations. */
export class HybridConnectionsImpl implements HybridConnections {
  private readonly client: RelayAPI;

  /**
   * Initialize a new instance of the class HybridConnections class.
   * @param client Reference to the service client
   */
  constructor(client: RelayAPI) {
    this.client = client;
  }

  /**
   * Lists the hybrid connection within the namespace.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param options The options parameters.
   */
  public listByNamespace(
    resourceGroupName: string,
    namespaceName: string,
    options?: HybridConnectionsListByNamespaceOptionalParams
  ): PagedAsyncIterableIterator<HybridConnection> {
    const iter = this.listByNamespacePagingAll(
      resourceGroupName,
      namespaceName,
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
        return this.listByNamespacePagingPage(
          resourceGroupName,
          namespaceName,
          options
        );
      }
    };
  }

  private async *listByNamespacePagingPage(
    resourceGroupName: string,
    namespaceName: string,
    options?: HybridConnectionsListByNamespaceOptionalParams
  ): AsyncIterableIterator<HybridConnection[]> {
    let result = await this._listByNamespace(
      resourceGroupName,
      namespaceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByNamespaceNext(
        resourceGroupName,
        namespaceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByNamespacePagingAll(
    resourceGroupName: string,
    namespaceName: string,
    options?: HybridConnectionsListByNamespaceOptionalParams
  ): AsyncIterableIterator<HybridConnection> {
    for await (const page of this.listByNamespacePagingPage(
      resourceGroupName,
      namespaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Authorization rules for a hybrid connection.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param hybridConnectionName The hybrid connection name.
   * @param options The options parameters.
   */
  public listAuthorizationRules(
    resourceGroupName: string,
    namespaceName: string,
    hybridConnectionName: string,
    options?: HybridConnectionsListAuthorizationRulesOptionalParams
  ): PagedAsyncIterableIterator<AuthorizationRule> {
    const iter = this.listAuthorizationRulesPagingAll(
      resourceGroupName,
      namespaceName,
      hybridConnectionName,
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
        return this.listAuthorizationRulesPagingPage(
          resourceGroupName,
          namespaceName,
          hybridConnectionName,
          options
        );
      }
    };
  }

  private async *listAuthorizationRulesPagingPage(
    resourceGroupName: string,
    namespaceName: string,
    hybridConnectionName: string,
    options?: HybridConnectionsListAuthorizationRulesOptionalParams
  ): AsyncIterableIterator<AuthorizationRule[]> {
    let result = await this._listAuthorizationRules(
      resourceGroupName,
      namespaceName,
      hybridConnectionName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAuthorizationRulesNext(
        resourceGroupName,
        namespaceName,
        hybridConnectionName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAuthorizationRulesPagingAll(
    resourceGroupName: string,
    namespaceName: string,
    hybridConnectionName: string,
    options?: HybridConnectionsListAuthorizationRulesOptionalParams
  ): AsyncIterableIterator<AuthorizationRule> {
    for await (const page of this.listAuthorizationRulesPagingPage(
      resourceGroupName,
      namespaceName,
      hybridConnectionName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the hybrid connection within the namespace.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param options The options parameters.
   */
  private _listByNamespace(
    resourceGroupName: string,
    namespaceName: string,
    options?: HybridConnectionsListByNamespaceOptionalParams
  ): Promise<HybridConnectionsListByNamespaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, options },
      listByNamespaceOperationSpec
    );
  }

  /**
   * Creates or updates a service hybrid connection. This operation is idempotent.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param hybridConnectionName The hybrid connection name.
   * @param parameters Parameters supplied to create a hybrid connection.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    namespaceName: string,
    hybridConnectionName: string,
    parameters: HybridConnection,
    options?: HybridConnectionsCreateOrUpdateOptionalParams
  ): Promise<HybridConnectionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        hybridConnectionName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes a hybrid connection.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param hybridConnectionName The hybrid connection name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    namespaceName: string,
    hybridConnectionName: string,
    options?: HybridConnectionsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, hybridConnectionName, options },
      deleteOperationSpec
    );
  }

  /**
   * Returns the description for the specified hybrid connection.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param hybridConnectionName The hybrid connection name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    hybridConnectionName: string,
    options?: HybridConnectionsGetOptionalParams
  ): Promise<HybridConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, hybridConnectionName, options },
      getOperationSpec
    );
  }

  /**
   * Authorization rules for a hybrid connection.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param hybridConnectionName The hybrid connection name.
   * @param options The options parameters.
   */
  private _listAuthorizationRules(
    resourceGroupName: string,
    namespaceName: string,
    hybridConnectionName: string,
    options?: HybridConnectionsListAuthorizationRulesOptionalParams
  ): Promise<HybridConnectionsListAuthorizationRulesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, hybridConnectionName, options },
      listAuthorizationRulesOperationSpec
    );
  }

  /**
   * Creates or updates an authorization rule for a hybrid connection.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param hybridConnectionName The hybrid connection name.
   * @param authorizationRuleName The authorization rule name.
   * @param parameters The authorization rule parameters.
   * @param options The options parameters.
   */
  createOrUpdateAuthorizationRule(
    resourceGroupName: string,
    namespaceName: string,
    hybridConnectionName: string,
    authorizationRuleName: string,
    parameters: AuthorizationRule,
    options?: HybridConnectionsCreateOrUpdateAuthorizationRuleOptionalParams
  ): Promise<HybridConnectionsCreateOrUpdateAuthorizationRuleResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        hybridConnectionName,
        authorizationRuleName,
        parameters,
        options
      },
      createOrUpdateAuthorizationRuleOperationSpec
    );
  }

  /**
   * Deletes a hybrid connection authorization rule.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param hybridConnectionName The hybrid connection name.
   * @param authorizationRuleName The authorization rule name.
   * @param options The options parameters.
   */
  deleteAuthorizationRule(
    resourceGroupName: string,
    namespaceName: string,
    hybridConnectionName: string,
    authorizationRuleName: string,
    options?: HybridConnectionsDeleteAuthorizationRuleOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        hybridConnectionName,
        authorizationRuleName,
        options
      },
      deleteAuthorizationRuleOperationSpec
    );
  }

  /**
   * Hybrid connection authorization rule for a hybrid connection by name.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param hybridConnectionName The hybrid connection name.
   * @param authorizationRuleName The authorization rule name.
   * @param options The options parameters.
   */
  getAuthorizationRule(
    resourceGroupName: string,
    namespaceName: string,
    hybridConnectionName: string,
    authorizationRuleName: string,
    options?: HybridConnectionsGetAuthorizationRuleOptionalParams
  ): Promise<HybridConnectionsGetAuthorizationRuleResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        hybridConnectionName,
        authorizationRuleName,
        options
      },
      getAuthorizationRuleOperationSpec
    );
  }

  /**
   * Primary and secondary connection strings to the hybrid connection.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param hybridConnectionName The hybrid connection name.
   * @param authorizationRuleName The authorization rule name.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    namespaceName: string,
    hybridConnectionName: string,
    authorizationRuleName: string,
    options?: HybridConnectionsListKeysOptionalParams
  ): Promise<HybridConnectionsListKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        hybridConnectionName,
        authorizationRuleName,
        options
      },
      listKeysOperationSpec
    );
  }

  /**
   * Regenerates the primary or secondary connection strings to the hybrid connection.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param hybridConnectionName The hybrid connection name.
   * @param authorizationRuleName The authorization rule name.
   * @param parameters Parameters supplied to regenerate authorization rule.
   * @param options The options parameters.
   */
  regenerateKeys(
    resourceGroupName: string,
    namespaceName: string,
    hybridConnectionName: string,
    authorizationRuleName: string,
    parameters: RegenerateAccessKeyParameters,
    options?: HybridConnectionsRegenerateKeysOptionalParams
  ): Promise<HybridConnectionsRegenerateKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        hybridConnectionName,
        authorizationRuleName,
        parameters,
        options
      },
      regenerateKeysOperationSpec
    );
  }

  /**
   * ListByNamespaceNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param nextLink The nextLink from the previous successful call to the ListByNamespace method.
   * @param options The options parameters.
   */
  private _listByNamespaceNext(
    resourceGroupName: string,
    namespaceName: string,
    nextLink: string,
    options?: HybridConnectionsListByNamespaceNextOptionalParams
  ): Promise<HybridConnectionsListByNamespaceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, nextLink, options },
      listByNamespaceNextOperationSpec
    );
  }

  /**
   * ListAuthorizationRulesNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param hybridConnectionName The hybrid connection name.
   * @param nextLink The nextLink from the previous successful call to the ListAuthorizationRules method.
   * @param options The options parameters.
   */
  private _listAuthorizationRulesNext(
    resourceGroupName: string,
    namespaceName: string,
    hybridConnectionName: string,
    nextLink: string,
    options?: HybridConnectionsListAuthorizationRulesNextOptionalParams
  ): Promise<HybridConnectionsListAuthorizationRulesNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        hybridConnectionName,
        nextLink,
        options
      },
      listAuthorizationRulesNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByNamespaceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/hybridConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HybridConnectionListResult
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
    Parameters.namespaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/hybridConnections/{hybridConnectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.HybridConnection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.hybridConnectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/hybridConnections/{hybridConnectionName}",
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
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.hybridConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/hybridConnections/{hybridConnectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HybridConnection
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
    Parameters.namespaceName,
    Parameters.hybridConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAuthorizationRulesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/hybridConnections/{hybridConnectionName}/authorizationRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationRuleListResult
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
    Parameters.namespaceName,
    Parameters.hybridConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateAuthorizationRuleOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/hybridConnections/{hybridConnectionName}/authorizationRules/{authorizationRuleName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationRule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.authorizationRuleName,
    Parameters.hybridConnectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteAuthorizationRuleOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/hybridConnections/{hybridConnectionName}/authorizationRules/{authorizationRuleName}",
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
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.authorizationRuleName,
    Parameters.hybridConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getAuthorizationRuleOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/hybridConnections/{hybridConnectionName}/authorizationRules/{authorizationRuleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationRule
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
    Parameters.namespaceName,
    Parameters.authorizationRuleName,
    Parameters.hybridConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/hybridConnections/{hybridConnectionName}/authorizationRules/{authorizationRuleName}/listKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AccessKeys
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
    Parameters.namespaceName,
    Parameters.authorizationRuleName,
    Parameters.hybridConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const regenerateKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/hybridConnections/{hybridConnectionName}/authorizationRules/{authorizationRuleName}/regenerateKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AccessKeys
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.authorizationRuleName,
    Parameters.hybridConnectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByNamespaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HybridConnectionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAuthorizationRulesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationRuleListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.hybridConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
