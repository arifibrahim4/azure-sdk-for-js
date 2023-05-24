/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  EventImpactedResource,
  ImpactedResourcesListBySubscriptionIdAndEventIdOptionalParams,
  ImpactedResourcesListByTenantIdAndEventIdOptionalParams,
  ImpactedResourcesGetOptionalParams,
  ImpactedResourcesGetResponse,
  ImpactedResourcesGetByTenantIdOptionalParams,
  ImpactedResourcesGetByTenantIdResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ImpactedResources. */
export interface ImpactedResources {
  /**
   * Lists impacted resources in the subscription by an event.
   * @param eventTrackingId Event Id which uniquely identifies ServiceHealth event.
   * @param options The options parameters.
   */
  listBySubscriptionIdAndEventId(
    eventTrackingId: string,
    options?: ImpactedResourcesListBySubscriptionIdAndEventIdOptionalParams
  ): PagedAsyncIterableIterator<EventImpactedResource>;
  /**
   * Lists impacted resources in the tenant by an event.
   * @param eventTrackingId Event Id which uniquely identifies ServiceHealth event.
   * @param options The options parameters.
   */
  listByTenantIdAndEventId(
    eventTrackingId: string,
    options?: ImpactedResourcesListByTenantIdAndEventIdOptionalParams
  ): PagedAsyncIterableIterator<EventImpactedResource>;
  /**
   * Gets the specific impacted resource in the subscription by an event.
   * @param eventTrackingId Event Id which uniquely identifies ServiceHealth event.
   * @param impactedResourceName Name of the Impacted Resource.
   * @param options The options parameters.
   */
  get(
    eventTrackingId: string,
    impactedResourceName: string,
    options?: ImpactedResourcesGetOptionalParams
  ): Promise<ImpactedResourcesGetResponse>;
  /**
   * Gets the specific impacted resource in the tenant by an event.
   * @param eventTrackingId Event Id which uniquely identifies ServiceHealth event.
   * @param impactedResourceName Name of the Impacted Resource.
   * @param options The options parameters.
   */
  getByTenantId(
    eventTrackingId: string,
    impactedResourceName: string,
    options?: ImpactedResourcesGetByTenantIdOptionalParams
  ): Promise<ImpactedResourcesGetByTenantIdResponse>;
}