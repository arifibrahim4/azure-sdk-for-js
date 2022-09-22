/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { GovernanceRule, GovernanceRuleListOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a GovernanceRuleOperations. */
export interface GovernanceRuleOperations {
  /**
   * Get a list of all relevant governanceRules over a subscription level scope
   * @param options The options parameters.
   */
  list(
    options?: GovernanceRuleListOptionalParams
  ): PagedAsyncIterableIterator<GovernanceRule>;
}
