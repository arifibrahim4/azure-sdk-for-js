/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  AdminKeysGetOptionalParams,
  AdminKeysGetResponse,
  AdminKeyKind,
  AdminKeysRegenerateOptionalParams,
  AdminKeysRegenerateResponse
} from "../models";

/** Interface representing a AdminKeys. */
export interface AdminKeys {
  /**
   * Gets the primary and secondary admin API keys for the specified Azure Cognitive Search service.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   *                          specified resource group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    searchServiceName: string,
    options?: AdminKeysGetOptionalParams
  ): Promise<AdminKeysGetResponse>;
  /**
   * Regenerates either the primary or secondary admin API key. You can only regenerate one key at a
   * time.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   *                          specified resource group.
   * @param keyKind Specifies which key to regenerate. Valid values include 'primary' and 'secondary'.
   * @param options The options parameters.
   */
  regenerate(
    resourceGroupName: string,
    searchServiceName: string,
    keyKind: AdminKeyKind,
    options?: AdminKeysRegenerateOptionalParams
  ): Promise<AdminKeysRegenerateResponse>;
}
