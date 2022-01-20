/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationsStatusGetOptionalParams,
  OperationsStatusGetResponse
} from "../models";

/** Interface representing a OperationsStatus. */
export interface OperationsStatus {
  /**
   * Gets the status of operation.
   * @param location The region the operation is in.
   * @param operationId The operation's unique identifier.
   * @param options The options parameters.
   */
  get(
    location: string,
    operationId: string,
    options?: OperationsStatusGetOptionalParams
  ): Promise<OperationsStatusGetResponse>;
}
