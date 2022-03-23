/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Operations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { VMwareCloudSimple } from "../vMwareCloudSimple";
import {
  AvailableOperation,
  OperationsListNextOptionalParams,
  OperationsListOptionalParams,
  OperationsListResponse,
  OperationsGetOptionalParams,
  OperationsGetResponse,
  OperationsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Operations operations. */
export class OperationsImpl implements Operations {
  private readonly client: VMwareCloudSimple;

  /**
   * Initialize a new instance of the class Operations class.
   * @param client Reference to the service client
   */
  constructor(client: VMwareCloudSimple) {
    this.client = client;
  }

  /**
   * Return list of operations
   * @param options The options parameters.
   */
  public list(
    options?: OperationsListOptionalParams
  ): PagedAsyncIterableIterator<AvailableOperation> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: OperationsListOptionalParams
  ): AsyncIterableIterator<AvailableOperation[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: OperationsListOptionalParams
  ): AsyncIterableIterator<AvailableOperation> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Return list of operations
   * @param options The options parameters.
   */
  private _list(
    options?: OperationsListOptionalParams
  ): Promise<OperationsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Return an async operation
   * @param regionId The region Id (westus, eastus)
   * @param operationId operation id
   * @param options The options parameters.
   */
  get(
    regionId: string,
    operationId: string,
    options?: OperationsGetOptionalParams
  ): Promise<OperationsGetResponse> {
    return this.client.sendOperationRequest(
      { regionId, operationId, options },
      getOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: OperationsListNextOptionalParams
  ): Promise<OperationsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.VMwareCloudSimple/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailableOperationsListResponse
    },
    default: {
      bodyMapper: Mappers.CsrpError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/operationResults/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationResource
    },
    202: {
      headersMapper: Mappers.OperationsGetHeaders
    },
    204: {},
    default: {
      bodyMapper: Mappers.CsrpError,
      headersMapper: Mappers.OperationsGetExceptionHeaders
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.regionId,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept, Parameters.referer],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailableOperationsListResponse
    },
    default: {
      bodyMapper: Mappers.CsrpError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
