/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Result of the request to list Relay operations. It contains a list of operations and a URL link to get the next set of results. */
export interface OperationListResult {
  /**
   * List of Relay operations supported by resource provider.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Operation[];
  /**
   * URL to get the next set of operation list results if there are any.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** A Relay REST API operation. */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{operation}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /** The object that represents the operation. */
  display?: OperationDisplay;
}

/** The object that represents the operation. */
export interface OperationDisplay {
  /**
   * Service provider: Relay.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provider?: string;
  /**
   * Resource on which the operation is performed: Invoice, etc.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resource?: string;
  /**
   * Operation type: Read, write, delete, etc.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
}

/** Error reponse indicates Relay service is not able to process the incoming request. The reason is provided in the error message. */
export interface ErrorResponse {
  /** Error code. */
  code?: string;
  /** Error message indicating why the operation failed. */
  message?: string;
}

/** Description of the check name availability request properties. */
export interface CheckNameAvailability {
  /** The namespace name to check for availability. The namespace name can contain only letters, numbers, and hyphens. The namespace must start with a letter, and it must end with a letter or number. */
  name: string;
}

/** Description of the check name availability request properties. */
export interface CheckNameAvailabilityResult {
  /**
   * The detailed info regarding the reason associated with the namespace.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /** Value indicating namespace is available. Returns true if the namespace is available; otherwise, false. */
  nameAvailable?: boolean;
  /** The reason for unavailability of a namespace. */
  reason?: UnavailableReason;
}

/** The response from the list namespace operation. */
export interface RelayNamespaceListResult {
  /** Result of the list namespace operation. */
  value?: RelayNamespace[];
  /** Link to the next set of results. Not empty if value contains incomplete list of namespaces. */
  nextLink?: string;
}

/** SKU of the namespace. */
export interface Sku {
  /** Name of this SKU. */
  name: "Standard";
  /** The tier of this SKU. */
  tier?: "Standard";
}

/** The resource definition. */
export interface Resource {
  /**
   * Resource ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** The response from the list namespace operation. */
export interface AuthorizationRuleListResult {
  /** Result of the list authorization rules operation. */
  value?: AuthorizationRule[];
  /** Link to the next set of results. Not empty if value contains incomplete list of authorization rules. */
  nextLink?: string;
}

/** Namespace/Relay Connection String */
export interface AccessKeys {
  /** Primary connection string of the created namespace authorization rule. */
  primaryConnectionString?: string;
  /** Secondary connection string of the created namespace authorization rule. */
  secondaryConnectionString?: string;
  /** A base64-encoded 256-bit primary key for signing and validating the SAS token. */
  primaryKey?: string;
  /** A base64-encoded 256-bit secondary key for signing and validating the SAS token. */
  secondaryKey?: string;
  /** A string that describes the authorization rule. */
  keyName?: string;
}

/** Parameters supplied to the regenerate authorization rule operation, specifies which key neeeds to be reset. */
export interface RegenerateAccessKeyParameters {
  /** The access key to regenerate. */
  keyType: KeyType;
  /** Optional. If the key value is provided, this is set to key type, or autogenerated key value set for key type. */
  key?: string;
}

/** The response of the list hybrid connection operation. */
export interface HybridConnectionListResult {
  /** Result of the list hybrid connections. */
  value?: HybridConnection[];
  /** Link to the next set of results. Not empty if value contains incomplete list hybrid connection operation. */
  nextLink?: string;
}

/** The response of the list WCF relay operation. */
export interface WcfRelaysListResult {
  /** Result of the list WCF relay operation. */
  value?: WcfRelay[];
  /** Link to the next set of results. Not empty if value contains incomplete list of WCF relays. */
  nextLink?: string;
}

/** Definition of resource. */
export type TrackedResource = Resource & {
  /** Resource location. */
  location: string;
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
};

/** Definition of resource. */
export type ResourceNamespacePatch = Resource & {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
};

/** Description of a namespace authorization rule. */
export type AuthorizationRule = Resource & {
  /** The rights associated with the rule. */
  rights: AccessRights[];
};

/** Description of hybrid connection resource. */
export type HybridConnection = Resource & {
  /**
   * The time the hybrid connection was created.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdAt?: Date;
  /**
   * The time the namespace was updated.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly updatedAt?: Date;
  /**
   * The number of listeners for this hybrid connection. Note that min : 1 and max:25 are supported.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly listenerCount?: number;
  /** Returns true if client authorization is needed for this hybrid connection; otherwise, false. */
  requiresClientAuthorization?: boolean;
  /** The usermetadata is a placeholder to store user-defined string data for the hybrid connection endpoint. For example, it can be used to store descriptive data, such as a list of teams and their contact information. Also, user-defined configuration settings can be stored. */
  userMetadata?: string;
};

/** Description of the WCF relay resource. */
export type WcfRelay = Resource & {
  /**
   * Returns true if the relay is dynamic; otherwise, false.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isDynamic?: boolean;
  /**
   * The time the WCF relay was created.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdAt?: Date;
  /**
   * The time the namespace was updated.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly updatedAt?: Date;
  /**
   * The number of listeners for this relay. Note that min :1 and max:25 are supported.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly listenerCount?: number;
  /** WCF relay type. */
  relayType?: Relaytype;
  /** Returns true if client authorization is needed for this relay; otherwise, false. */
  requiresClientAuthorization?: boolean;
  /** Returns true if transport security is needed for this relay; otherwise, false. */
  requiresTransportSecurity?: boolean;
  /** The usermetadata is a placeholder to store user-defined string data for the WCF Relay endpoint. For example, it can be used to store descriptive data, such as list of teams and their contact information. Also, user-defined configuration settings can be stored. */
  userMetadata?: string;
};

/** Description of a namespace resource. */
export type RelayNamespace = TrackedResource & {
  /** SKU of the namespace. */
  sku?: Sku;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly provisioningState?: ProvisioningStateEnum;
  /**
   * The time the namespace was created.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdAt?: Date;
  /**
   * The time the namespace was updated.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly updatedAt?: Date;
  /**
   * Endpoint you can use to perform Service Bus operations.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly serviceBusEndpoint?: string;
  /**
   * Identifier for Azure Insights metrics.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly metricId?: string;
};

/** Description of a namespace resource. */
export type RelayUpdateParameters = ResourceNamespacePatch & {
  /** SKU of the namespace. */
  sku?: Sku;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly provisioningState?: ProvisioningStateEnum;
  /**
   * The time the namespace was created.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdAt?: Date;
  /**
   * The time the namespace was updated.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly updatedAt?: Date;
  /**
   * Endpoint you can use to perform Service Bus operations.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly serviceBusEndpoint?: string;
  /**
   * Identifier for Azure Insights metrics.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly metricId?: string;
};
/** Defines values for UnavailableReason. */
export type UnavailableReason =
  | "None"
  | "InvalidName"
  | "SubscriptionIsDisabled"
  | "NameInUse"
  | "NameInLockdown"
  | "TooManyNamespaceInCurrentSubscription";
/** Defines values for ProvisioningStateEnum. */
export type ProvisioningStateEnum =
  | "Created"
  | "Succeeded"
  | "Deleted"
  | "Failed"
  | "Updating"
  | "Unknown";
/** Defines values for AccessRights. */
export type AccessRights = "Manage" | "Send" | "Listen";
/** Defines values for KeyType. */
export type KeyType = "PrimaryKey" | "SecondaryKey";
/** Defines values for Relaytype. */
export type Relaytype = "NetTcp" | "Http";

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export interface NamespacesCheckNameAvailabilityOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the checkNameAvailability operation. */
export type NamespacesCheckNameAvailabilityResponse = CheckNameAvailabilityResult;

/** Optional parameters. */
export interface NamespacesListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type NamespacesListResponse = RelayNamespaceListResult;

/** Optional parameters. */
export interface NamespacesListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type NamespacesListByResourceGroupResponse = RelayNamespaceListResult;

/** Optional parameters. */
export interface NamespacesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type NamespacesCreateOrUpdateResponse = RelayNamespace;

/** Optional parameters. */
export interface NamespacesDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface NamespacesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type NamespacesGetResponse = RelayNamespace;

/** Optional parameters. */
export interface NamespacesUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type NamespacesUpdateResponse = RelayNamespace;

/** Optional parameters. */
export interface NamespacesListAuthorizationRulesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAuthorizationRules operation. */
export type NamespacesListAuthorizationRulesResponse = AuthorizationRuleListResult;

/** Optional parameters. */
export interface NamespacesCreateOrUpdateAuthorizationRuleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdateAuthorizationRule operation. */
export type NamespacesCreateOrUpdateAuthorizationRuleResponse = AuthorizationRule;

/** Optional parameters. */
export interface NamespacesDeleteAuthorizationRuleOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface NamespacesGetAuthorizationRuleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAuthorizationRule operation. */
export type NamespacesGetAuthorizationRuleResponse = AuthorizationRule;

/** Optional parameters. */
export interface NamespacesListKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listKeys operation. */
export type NamespacesListKeysResponse = AccessKeys;

/** Optional parameters. */
export interface NamespacesRegenerateKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the regenerateKeys operation. */
export type NamespacesRegenerateKeysResponse = AccessKeys;

/** Optional parameters. */
export interface NamespacesListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type NamespacesListNextResponse = RelayNamespaceListResult;

/** Optional parameters. */
export interface NamespacesListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type NamespacesListByResourceGroupNextResponse = RelayNamespaceListResult;

/** Optional parameters. */
export interface NamespacesListAuthorizationRulesNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAuthorizationRulesNext operation. */
export type NamespacesListAuthorizationRulesNextResponse = AuthorizationRuleListResult;

/** Optional parameters. */
export interface HybridConnectionsListByNamespaceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByNamespace operation. */
export type HybridConnectionsListByNamespaceResponse = HybridConnectionListResult;

/** Optional parameters. */
export interface HybridConnectionsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type HybridConnectionsCreateOrUpdateResponse = HybridConnection;

/** Optional parameters. */
export interface HybridConnectionsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HybridConnectionsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type HybridConnectionsGetResponse = HybridConnection;

/** Optional parameters. */
export interface HybridConnectionsListAuthorizationRulesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAuthorizationRules operation. */
export type HybridConnectionsListAuthorizationRulesResponse = AuthorizationRuleListResult;

/** Optional parameters. */
export interface HybridConnectionsCreateOrUpdateAuthorizationRuleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdateAuthorizationRule operation. */
export type HybridConnectionsCreateOrUpdateAuthorizationRuleResponse = AuthorizationRule;

/** Optional parameters. */
export interface HybridConnectionsDeleteAuthorizationRuleOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HybridConnectionsGetAuthorizationRuleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAuthorizationRule operation. */
export type HybridConnectionsGetAuthorizationRuleResponse = AuthorizationRule;

/** Optional parameters. */
export interface HybridConnectionsListKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listKeys operation. */
export type HybridConnectionsListKeysResponse = AccessKeys;

/** Optional parameters. */
export interface HybridConnectionsRegenerateKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the regenerateKeys operation. */
export type HybridConnectionsRegenerateKeysResponse = AccessKeys;

/** Optional parameters. */
export interface HybridConnectionsListByNamespaceNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByNamespaceNext operation. */
export type HybridConnectionsListByNamespaceNextResponse = HybridConnectionListResult;

/** Optional parameters. */
export interface HybridConnectionsListAuthorizationRulesNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAuthorizationRulesNext operation. */
export type HybridConnectionsListAuthorizationRulesNextResponse = AuthorizationRuleListResult;

/** Optional parameters. */
export interface WCFRelaysListByNamespaceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByNamespace operation. */
export type WCFRelaysListByNamespaceResponse = WcfRelaysListResult;

/** Optional parameters. */
export interface WCFRelaysCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type WCFRelaysCreateOrUpdateResponse = WcfRelay;

/** Optional parameters. */
export interface WCFRelaysDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface WCFRelaysGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type WCFRelaysGetResponse = WcfRelay;

/** Optional parameters. */
export interface WCFRelaysListAuthorizationRulesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAuthorizationRules operation. */
export type WCFRelaysListAuthorizationRulesResponse = AuthorizationRuleListResult;

/** Optional parameters. */
export interface WCFRelaysCreateOrUpdateAuthorizationRuleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdateAuthorizationRule operation. */
export type WCFRelaysCreateOrUpdateAuthorizationRuleResponse = AuthorizationRule;

/** Optional parameters. */
export interface WCFRelaysDeleteAuthorizationRuleOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface WCFRelaysGetAuthorizationRuleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAuthorizationRule operation. */
export type WCFRelaysGetAuthorizationRuleResponse = AuthorizationRule;

/** Optional parameters. */
export interface WCFRelaysListKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listKeys operation. */
export type WCFRelaysListKeysResponse = AccessKeys;

/** Optional parameters. */
export interface WCFRelaysRegenerateKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the regenerateKeys operation. */
export type WCFRelaysRegenerateKeysResponse = AccessKeys;

/** Optional parameters. */
export interface WCFRelaysListByNamespaceNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByNamespaceNext operation. */
export type WCFRelaysListByNamespaceNextResponse = WcfRelaysListResult;

/** Optional parameters. */
export interface WCFRelaysListAuthorizationRulesNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAuthorizationRulesNext operation. */
export type WCFRelaysListAuthorizationRulesNextResponse = AuthorizationRuleListResult;

/** Optional parameters. */
export interface RelayAPIOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
