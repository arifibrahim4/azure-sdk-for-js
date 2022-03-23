/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ClusterExtensionType } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SourceControlConfigurationClient } from "../sourceControlConfigurationClient";
import {
  Enum0,
  Enum1,
  ClusterExtensionTypeGetOptionalParams,
  ClusterExtensionTypeGetResponse
} from "../models";

/** Class containing ClusterExtensionType operations. */
export class ClusterExtensionTypeImpl implements ClusterExtensionType {
  private readonly client: SourceControlConfigurationClient;

  /**
   * Initialize a new instance of the class ClusterExtensionType class.
   * @param client Reference to the service client
   */
  constructor(client: SourceControlConfigurationClient) {
    this.client = client;
  }

  /**
   * Get Extension Type details
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - either Microsoft.ContainerService (for AKS clusters) or
   *                  Microsoft.Kubernetes (for OnPrem K8S clusters).
   * @param clusterResourceName The Kubernetes cluster resource name - either managedClusters (for AKS
   *                            clusters) or connectedClusters (for OnPrem K8S clusters).
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionTypeName Extension type name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterRp: Enum0,
    clusterResourceName: Enum1,
    clusterName: string,
    extensionTypeName: string,
    options?: ClusterExtensionTypeGetOptionalParams
  ): Promise<ClusterExtensionTypeGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterRp,
        clusterResourceName,
        clusterName,
        extensionTypeName,
        options
      },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/extensionTypes/{extensionTypeName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExtensionType
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
    Parameters.clusterRp,
    Parameters.clusterResourceName,
    Parameters.clusterName,
    Parameters.extensionTypeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
