/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  SecurityPINsGetOptionalParams,
  SecurityPINsGetResponse
} from "../models";

/** Interface representing a SecurityPINs. */
export interface SecurityPINs {
  /**
   * Get the security PIN.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  get(
    vaultName: string,
    resourceGroupName: string,
    options?: SecurityPINsGetOptionalParams
  ): Promise<SecurityPINsGetResponse>;
}
