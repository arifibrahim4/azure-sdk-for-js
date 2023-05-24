/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ClientGroup,
  ClientGroupsListByNamespaceOptionalParams,
  ClientGroupsGetOptionalParams,
  ClientGroupsGetResponse,
  ClientGroupsCreateOrUpdateOptionalParams,
  ClientGroupsCreateOrUpdateResponse,
  ClientGroupsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ClientGroups. */
export interface ClientGroups {
  /**
   * Get all the client groups under a namespace.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param options The options parameters.
   */
  listByNamespace(
    resourceGroupName: string,
    namespaceName: string,
    options?: ClientGroupsListByNamespaceOptionalParams
  ): PagedAsyncIterableIterator<ClientGroup>;
  /**
   * Get properties of a client group.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param clientGroupName Name of the client group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    clientGroupName: string,
    options?: ClientGroupsGetOptionalParams
  ): Promise<ClientGroupsGetResponse>;
  /**
   * Create or update a client group with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param clientGroupName The client group name.
   * @param clientGroupInfo Client group information.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    namespaceName: string,
    clientGroupName: string,
    clientGroupInfo: ClientGroup,
    options?: ClientGroupsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ClientGroupsCreateOrUpdateResponse>,
      ClientGroupsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a client group with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param clientGroupName The client group name.
   * @param clientGroupInfo Client group information.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    namespaceName: string,
    clientGroupName: string,
    clientGroupInfo: ClientGroup,
    options?: ClientGroupsCreateOrUpdateOptionalParams
  ): Promise<ClientGroupsCreateOrUpdateResponse>;
  /**
   * Delete an existing client group.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param clientGroupName Name of the client group.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    namespaceName: string,
    clientGroupName: string,
    options?: ClientGroupsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete an existing client group.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param clientGroupName Name of the client group.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    namespaceName: string,
    clientGroupName: string,
    options?: ClientGroupsDeleteOptionalParams
  ): Promise<void>;
}