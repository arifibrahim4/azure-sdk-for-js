/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PlanDataResource, PlansListOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Plans. */
export interface Plans {
  /**
   * List plans data
   * @param options The options parameters.
   */
  list(
    options?: PlansListOptionalParams
  ): PagedAsyncIterableIterator<PlanDataResource>;
}