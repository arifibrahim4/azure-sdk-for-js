/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/subscriptionsMappers";
import * as Parameters from "../models/parameters";
import { SubscriptionClientContext } from "../subscriptionClientContext";

/** Class representing a Subscriptions. */
export class Subscriptions {
  private readonly client: SubscriptionClientContext;

  /**
   * Create a Subscriptions.
   * @param {SubscriptionClientContext} client Reference to the service client.
   */
  constructor(client: SubscriptionClientContext) {
    this.client = client;
  }

  /**
   * This operation provides all the locations that are available for resource providers; however,
   * each resource provider may support a subset of this list.
   * @summary Gets all available geo-locations.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.SubscriptionsListLocationsResponse>
   */
  listLocations(subscriptionId: string, options?: Models.SubscriptionsListLocationsOptionalParams): Promise<Models.SubscriptionsListLocationsResponse>;
  /**
   * @param subscriptionId The ID of the target subscription.
   * @param callback The callback
   */
  listLocations(subscriptionId: string, callback: msRest.ServiceCallback<Models.LocationListResult>): void;
  /**
   * @param subscriptionId The ID of the target subscription.
   * @param options The optional parameters
   * @param callback The callback
   */
  listLocations(subscriptionId: string, options: Models.SubscriptionsListLocationsOptionalParams, callback: msRest.ServiceCallback<Models.LocationListResult>): void;
  listLocations(subscriptionId: string, options?: Models.SubscriptionsListLocationsOptionalParams | msRest.ServiceCallback<Models.LocationListResult>, callback?: msRest.ServiceCallback<Models.LocationListResult>): Promise<Models.SubscriptionsListLocationsResponse> {
    return this.client.sendOperationRequest(
      {
        subscriptionId,
        options
      },
      listLocationsOperationSpec,
      callback) as Promise<Models.SubscriptionsListLocationsResponse>;
  }

  /**
   * Gets details about a specified subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.SubscriptionsGetResponse>
   */
  get(subscriptionId: string, options?: msRest.RequestOptionsBase): Promise<Models.SubscriptionsGetResponse>;
  /**
   * @param subscriptionId The ID of the target subscription.
   * @param callback The callback
   */
  get(subscriptionId: string, callback: msRest.ServiceCallback<Models.Subscription>): void;
  /**
   * @param subscriptionId The ID of the target subscription.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(subscriptionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Subscription>): void;
  get(subscriptionId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Subscription>, callback?: msRest.ServiceCallback<Models.Subscription>): Promise<Models.SubscriptionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        subscriptionId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SubscriptionsGetResponse>;
  }

  /**
   * Gets all subscriptions for a tenant.
   * @param [options] The optional parameters
   * @returns Promise<Models.SubscriptionsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.SubscriptionsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.SubscriptionListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SubscriptionListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SubscriptionListResult>, callback?: msRest.ServiceCallback<Models.SubscriptionListResult>): Promise<Models.SubscriptionsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SubscriptionsListResponse>;
  }

  /**
   * Gets all subscriptions for a tenant.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SubscriptionsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SubscriptionsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SubscriptionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SubscriptionListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SubscriptionListResult>, callback?: msRest.ServiceCallback<Models.SubscriptionListResult>): Promise<Models.SubscriptionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.SubscriptionsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listLocationsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/locations",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.includeExtendedLocations
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.LocationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Subscription
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
