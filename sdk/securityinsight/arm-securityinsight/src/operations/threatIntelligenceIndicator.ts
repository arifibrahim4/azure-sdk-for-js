/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ThreatIntelligenceIndicator } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityInsights } from "../securityInsights";
import {
  ThreatIntelligenceInformationUnion,
  ThreatIntelligenceFilteringCriteria,
  ThreatIntelligenceIndicatorQueryIndicatorsNextOptionalParams,
  ThreatIntelligenceIndicatorQueryIndicatorsOptionalParams,
  ThreatIntelligenceIndicatorModel,
  ThreatIntelligenceIndicatorCreateIndicatorOptionalParams,
  ThreatIntelligenceIndicatorCreateIndicatorResponse,
  ThreatIntelligenceIndicatorGetOptionalParams,
  ThreatIntelligenceIndicatorGetResponse,
  ThreatIntelligenceIndicatorCreateOptionalParams,
  ThreatIntelligenceIndicatorCreateResponse,
  ThreatIntelligenceIndicatorDeleteOptionalParams,
  ThreatIntelligenceIndicatorQueryIndicatorsResponse,
  ThreatIntelligenceAppendTags,
  ThreatIntelligenceIndicatorAppendTagsOptionalParams,
  ThreatIntelligenceIndicatorReplaceTagsOptionalParams,
  ThreatIntelligenceIndicatorReplaceTagsResponse,
  ThreatIntelligenceIndicatorQueryIndicatorsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ThreatIntelligenceIndicator operations. */
export class ThreatIntelligenceIndicatorImpl
  implements ThreatIntelligenceIndicator {
  private readonly client: SecurityInsights;

  /**
   * Initialize a new instance of the class ThreatIntelligenceIndicator class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityInsights) {
    this.client = client;
  }

  /**
   * Query threat intelligence indicators as per filtering criteria.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param threatIntelligenceFilteringCriteria Filtering criteria for querying threat intelligence
   *                                            indicators.
   * @param options The options parameters.
   */
  public listQueryIndicators(
    resourceGroupName: string,
    workspaceName: string,
    threatIntelligenceFilteringCriteria: ThreatIntelligenceFilteringCriteria,
    options?: ThreatIntelligenceIndicatorQueryIndicatorsOptionalParams
  ): PagedAsyncIterableIterator<ThreatIntelligenceInformationUnion> {
    const iter = this.queryIndicatorsPagingAll(
      resourceGroupName,
      workspaceName,
      threatIntelligenceFilteringCriteria,
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
        return this.queryIndicatorsPagingPage(
          resourceGroupName,
          workspaceName,
          threatIntelligenceFilteringCriteria,
          options
        );
      }
    };
  }

  private async *queryIndicatorsPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    threatIntelligenceFilteringCriteria: ThreatIntelligenceFilteringCriteria,
    options?: ThreatIntelligenceIndicatorQueryIndicatorsOptionalParams
  ): AsyncIterableIterator<ThreatIntelligenceInformationUnion[]> {
    let result = await this._queryIndicators(
      resourceGroupName,
      workspaceName,
      threatIntelligenceFilteringCriteria,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._queryIndicatorsNext(
        resourceGroupName,
        workspaceName,
        threatIntelligenceFilteringCriteria,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *queryIndicatorsPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    threatIntelligenceFilteringCriteria: ThreatIntelligenceFilteringCriteria,
    options?: ThreatIntelligenceIndicatorQueryIndicatorsOptionalParams
  ): AsyncIterableIterator<ThreatIntelligenceInformationUnion> {
    for await (const page of this.queryIndicatorsPagingPage(
      resourceGroupName,
      workspaceName,
      threatIntelligenceFilteringCriteria,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Create a new threat intelligence indicator.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param threatIntelligenceProperties Properties of threat intelligence indicators to create and
   *                                     update.
   * @param options The options parameters.
   */
  createIndicator(
    resourceGroupName: string,
    workspaceName: string,
    threatIntelligenceProperties: ThreatIntelligenceIndicatorModel,
    options?: ThreatIntelligenceIndicatorCreateIndicatorOptionalParams
  ): Promise<ThreatIntelligenceIndicatorCreateIndicatorResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        threatIntelligenceProperties,
        options
      },
      createIndicatorOperationSpec
    );
  }

  /**
   * View a threat intelligence indicator by name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param name Threat intelligence indicator name field.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: ThreatIntelligenceIndicatorGetOptionalParams
  ): Promise<ThreatIntelligenceIndicatorGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, options },
      getOperationSpec
    );
  }

  /**
   * Update a threat Intelligence indicator.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param name Threat intelligence indicator name field.
   * @param threatIntelligenceProperties Properties of threat intelligence indicators to create and
   *                                     update.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    threatIntelligenceProperties: ThreatIntelligenceIndicatorModel,
    options?: ThreatIntelligenceIndicatorCreateOptionalParams
  ): Promise<ThreatIntelligenceIndicatorCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        name,
        threatIntelligenceProperties,
        options
      },
      createOperationSpec
    );
  }

  /**
   * Delete a threat intelligence indicator.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param name Threat intelligence indicator name field.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: ThreatIntelligenceIndicatorDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, options },
      deleteOperationSpec
    );
  }

  /**
   * Query threat intelligence indicators as per filtering criteria.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param threatIntelligenceFilteringCriteria Filtering criteria for querying threat intelligence
   *                                            indicators.
   * @param options The options parameters.
   */
  private _queryIndicators(
    resourceGroupName: string,
    workspaceName: string,
    threatIntelligenceFilteringCriteria: ThreatIntelligenceFilteringCriteria,
    options?: ThreatIntelligenceIndicatorQueryIndicatorsOptionalParams
  ): Promise<ThreatIntelligenceIndicatorQueryIndicatorsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        threatIntelligenceFilteringCriteria,
        options
      },
      queryIndicatorsOperationSpec
    );
  }

  /**
   * Append tags to a threat intelligence indicator.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param name Threat intelligence indicator name field.
   * @param threatIntelligenceAppendTags The threat intelligence append tags request body
   * @param options The options parameters.
   */
  appendTags(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    threatIntelligenceAppendTags: ThreatIntelligenceAppendTags,
    options?: ThreatIntelligenceIndicatorAppendTagsOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        name,
        threatIntelligenceAppendTags,
        options
      },
      appendTagsOperationSpec
    );
  }

  /**
   * Replace tags added to a threat intelligence indicator.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param name Threat intelligence indicator name field.
   * @param threatIntelligenceReplaceTags Tags in the threat intelligence indicator to be replaced.
   * @param options The options parameters.
   */
  replaceTags(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    threatIntelligenceReplaceTags: ThreatIntelligenceIndicatorModel,
    options?: ThreatIntelligenceIndicatorReplaceTagsOptionalParams
  ): Promise<ThreatIntelligenceIndicatorReplaceTagsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        name,
        threatIntelligenceReplaceTags,
        options
      },
      replaceTagsOperationSpec
    );
  }

  /**
   * QueryIndicatorsNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param threatIntelligenceFilteringCriteria Filtering criteria for querying threat intelligence
   *                                            indicators.
   * @param nextLink The nextLink from the previous successful call to the QueryIndicators method.
   * @param options The options parameters.
   */
  private _queryIndicatorsNext(
    resourceGroupName: string,
    workspaceName: string,
    threatIntelligenceFilteringCriteria: ThreatIntelligenceFilteringCriteria,
    nextLink: string,
    options?: ThreatIntelligenceIndicatorQueryIndicatorsNextOptionalParams
  ): Promise<ThreatIntelligenceIndicatorQueryIndicatorsNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        threatIntelligenceFilteringCriteria,
        nextLink,
        options
      },
      queryIndicatorsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createIndicatorOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/threatIntelligence/main/createIndicator",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ThreatIntelligenceInformation
    },
    201: {
      bodyMapper: Mappers.ThreatIntelligenceInformation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.threatIntelligenceProperties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/threatIntelligence/main/indicators/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ThreatIntelligenceInformation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/threatIntelligence/main/indicators/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ThreatIntelligenceInformation
    },
    201: {
      bodyMapper: Mappers.ThreatIntelligenceInformation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.threatIntelligenceProperties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/threatIntelligence/main/indicators/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const queryIndicatorsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/threatIntelligence/main/queryIndicators",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ThreatIntelligenceInformationList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.threatIntelligenceFilteringCriteria,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const appendTagsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/threatIntelligence/main/indicators/{name}/appendTags",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.threatIntelligenceAppendTags,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const replaceTagsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/threatIntelligence/main/indicators/{name}/replaceTags",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ThreatIntelligenceInformation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.threatIntelligenceReplaceTags,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const queryIndicatorsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ThreatIntelligenceInformationList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
