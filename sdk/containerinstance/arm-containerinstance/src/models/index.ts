/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** The container group list response that contains the container group properties. */
export interface ContainerGroupListResult {
  /** The list of container groups. */
  value?: ContainerGroup[];
  /** The URI to fetch the next page of container groups. */
  nextLink?: string;
}

/** Identity for the container group. */
export interface ContainerGroupIdentity {
  /**
   * The principal id of the container group identity. This property will only be provided for a system assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The tenant id associated with the container group. This property will only be provided for a system assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
  /** The type of identity used for the container group. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the container group. */
  type?: ResourceIdentityType;
  /** The list of user identities associated with the container group. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
  userAssignedIdentities?: {
    [propertyName: string]: Components10Wh5UdSchemasContainergroupidentityPropertiesUserassignedidentitiesAdditionalproperties;
  };
}

export interface Components10Wh5UdSchemasContainergroupidentityPropertiesUserassignedidentitiesAdditionalproperties {
  /**
   * The principal id of user assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The client id of user assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly clientId?: string;
}

/** A container instance. */
export interface Container {
  /** The user-provided name of the container instance. */
  name: string;
  /** The name of the image used to create the container instance. */
  image: string;
  /** The commands to execute within the container instance in exec form. */
  command?: string[];
  /** The exposed ports on the container instance. */
  ports?: ContainerPort[];
  /** The environment variables to set in the container instance. */
  environmentVariables?: EnvironmentVariable[];
  /**
   * The instance view of the container instance. Only valid in response.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly instanceView?: ContainerPropertiesInstanceView;
  /** The resource requirements of the container instance. */
  resources: ResourceRequirements;
  /** The volume mounts available to the container instance. */
  volumeMounts?: VolumeMount[];
  /** The liveness probe. */
  livenessProbe?: ContainerProbe;
  /** The readiness probe. */
  readinessProbe?: ContainerProbe;
}

/** The port exposed on the container instance. */
export interface ContainerPort {
  /** The protocol associated with the port. */
  protocol?: ContainerNetworkProtocol;
  /** The port number exposed within the container group. */
  port: number;
}

/** The environment variable to set within the container instance. */
export interface EnvironmentVariable {
  /** The name of the environment variable. */
  name: string;
  /** The value of the environment variable. */
  value?: string;
  /** The value of the secure environment variable. */
  secureValue?: string;
}

/** The instance view of the container instance. Only valid in response. */
export interface ContainerPropertiesInstanceView {
  /**
   * The number of times that the container instance has been restarted.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly restartCount?: number;
  /**
   * Current container instance state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly currentState?: ContainerState;
  /**
   * Previous container instance state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly previousState?: ContainerState;
  /**
   * The events of the container instance.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly events?: Event[];
}

/** The container instance state. */
export interface ContainerState {
  /**
   * The state of the container instance.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly state?: string;
  /**
   * The date-time when the container instance state started.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly startTime?: Date;
  /**
   * The container instance exit codes correspond to those from the `docker run` command.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly exitCode?: number;
  /**
   * The date-time when the container instance state finished.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly finishTime?: Date;
  /**
   * The human-readable status of the container instance state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly detailStatus?: string;
}

/** A container group or container instance event. */
export interface Event {
  /**
   * The count of the event.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly count?: number;
  /**
   * The date-time of the earliest logged event.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly firstTimestamp?: Date;
  /**
   * The date-time of the latest logged event.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastTimestamp?: Date;
  /**
   * The event name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The event message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The event type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** The resource requirements. */
export interface ResourceRequirements {
  /** The resource requests of this container instance. */
  requests: ResourceRequests;
  /** The resource limits of this container instance. */
  limits?: ResourceLimits;
}

/** The resource requests. */
export interface ResourceRequests {
  /** The memory request in GB of this container instance. */
  memoryInGB: number;
  /** The CPU request of this container instance. */
  cpu: number;
  /** The GPU request of this container instance. */
  gpu?: GpuResource;
}

/** The GPU resource. */
export interface GpuResource {
  /** The count of the GPU resource. */
  count: number;
  /** The SKU of the GPU resource. */
  sku: GpuSku;
}

/** The resource limits. */
export interface ResourceLimits {
  /** The memory limit in GB of this container instance. */
  memoryInGB?: number;
  /** The CPU limit of this container instance. */
  cpu?: number;
  /** The GPU limit of this container instance. */
  gpu?: GpuResource;
}

/** The properties of the volume mount. */
export interface VolumeMount {
  /** The name of the volume mount. */
  name: string;
  /** The path within the container where the volume should be mounted. Must not contain colon (:). */
  mountPath: string;
  /** The flag indicating whether the volume mount is read-only. */
  readOnly?: boolean;
}

/** The container probe, for liveness or readiness */
export interface ContainerProbe {
  /** The execution command to probe */
  exec?: ContainerExec;
  /** The Http Get settings to probe */
  httpGet?: ContainerHttpGet;
  /** The initial delay seconds. */
  initialDelaySeconds?: number;
  /** The period seconds. */
  periodSeconds?: number;
  /** The failure threshold. */
  failureThreshold?: number;
  /** The success threshold. */
  successThreshold?: number;
  /** The timeout seconds. */
  timeoutSeconds?: number;
}

/** The container execution command, for liveness or readiness probe */
export interface ContainerExec {
  /** The commands to execute within the container. */
  command?: string[];
}

/** The container Http Get settings, for liveness or readiness probe */
export interface ContainerHttpGet {
  /** The path to probe. */
  path?: string;
  /** The port number to probe. */
  port: number;
  /** The scheme. */
  scheme?: Scheme;
  /** The HTTP headers. */
  httpHeaders?: HttpHeader[];
}

/** The HTTP header. */
export interface HttpHeader {
  /** The header name. */
  name?: string;
  /** The header value. */
  value?: string;
}

/** Image registry credential. */
export interface ImageRegistryCredential {
  /** The Docker image registry server without a protocol such as "http" and "https". */
  server: string;
  /** The username for the private registry. */
  username: string;
  /** The password for the private registry. */
  password?: string;
  /** The identity for the private registry. */
  identity?: string;
  /** The identity URL for the private registry. */
  identityUrl?: string;
}

/** IP address for the container group. */
export interface IpAddress {
  /** The list of ports exposed on the container group. */
  ports: Port[];
  /** Specifies if the IP is exposed to the public internet or private VNET. */
  type: ContainerGroupIpAddressType;
  /** The IP exposed to the public internet. */
  ip?: string;
  /** The Dns name label for the IP. */
  dnsNameLabel?: string;
  /**
   * The FQDN for the IP.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly fqdn?: string;
}

/** The port exposed on the container group. */
export interface Port {
  /** The protocol associated with the port. */
  protocol?: ContainerGroupNetworkProtocol;
  /** The port number. */
  port: number;
}

/** The properties of the volume. */
export interface Volume {
  /** The name of the volume. */
  name: string;
  /** The Azure File volume. */
  azureFile?: AzureFileVolume;
  /** The empty directory volume. */
  emptyDir?: Record<string, unknown>;
  /** The secret volume. */
  secret?: { [propertyName: string]: string };
  /** The git repo volume. */
  gitRepo?: GitRepoVolume;
}

/** The properties of the Azure File volume. Azure File shares are mounted as volumes. */
export interface AzureFileVolume {
  /** The name of the Azure File share to be mounted as a volume. */
  shareName: string;
  /** The flag indicating whether the Azure File shared mounted as a volume is read-only. */
  readOnly?: boolean;
  /** The name of the storage account that contains the Azure File share. */
  storageAccountName: string;
  /** The storage account access key used to access the Azure File share. */
  storageAccountKey?: string;
}

/** Represents a volume that is populated with the contents of a git repository */
export interface GitRepoVolume {
  /** Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name. */
  directory?: string;
  /** Repository URL */
  repository: string;
  /** Commit hash for the specified revision. */
  revision?: string;
}

/** The instance view of the container group. Only valid in response. */
export interface ContainerGroupPropertiesInstanceView {
  /**
   * The events of this container group.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly events?: Event[];
  /**
   * The state of the container group. Only valid in response.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly state?: string;
}

/** Container group diagnostic information. */
export interface ContainerGroupDiagnostics {
  /** Container group log analytics information. */
  logAnalytics?: LogAnalytics;
}

/** Container group log analytics information. */
export interface LogAnalytics {
  /** The workspace id for log analytics */
  workspaceId: string;
  /** The workspace key for log analytics */
  workspaceKey: string;
  /** The log type to be used. */
  logType?: LogAnalyticsLogType;
  /** Metadata for log analytics. */
  metadata?: { [propertyName: string]: string };
  /** The workspace resource id for log analytics */
  workspaceResourceId?: string;
}

/** Container group subnet information. */
export interface ContainerGroupSubnetId {
  /** Resource ID of virtual network and subnet. */
  id: string;
  /** Friendly name for the subnet. */
  name?: string;
}

/** DNS configuration for the container group. */
export interface DnsConfiguration {
  /** The DNS servers for the container group. */
  nameServers: string[];
  /** The DNS search domains for hostname lookup in the container group. */
  searchDomains?: string;
  /** The DNS options for the container group. */
  options?: string;
}

/** The container group encryption properties. */
export interface EncryptionProperties {
  /** The keyvault base url. */
  vaultBaseUrl: string;
  /** The encryption key name. */
  keyName: string;
  /** The encryption key version. */
  keyVersion: string;
}

/** The init container definition. */
export interface InitContainerDefinition {
  /** The name for the init container. */
  name: string;
  /** The image of the init container. */
  image?: string;
  /** The command to execute within the init container in exec form. */
  command?: string[];
  /** The environment variables to set in the init container. */
  environmentVariables?: EnvironmentVariable[];
  /**
   * The instance view of the init container. Only valid in response.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly instanceView?: InitContainerPropertiesDefinitionInstanceView;
  /** The volume mounts available to the init container. */
  volumeMounts?: VolumeMount[];
}

/** The instance view of the init container. Only valid in response. */
export interface InitContainerPropertiesDefinitionInstanceView {
  /**
   * The number of times that the init container has been restarted.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly restartCount?: number;
  /**
   * The current state of the init container.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly currentState?: ContainerState;
  /**
   * The previous state of the init container.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly previousState?: ContainerState;
  /**
   * The events of the init container.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly events?: Event[];
}

/** The Resource model definition. */
export interface Resource {
  /**
   * The resource id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** The resource location. */
  location?: string;
  /** The resource tags. */
  tags?: { [propertyName: string]: string };
  /** The zones for the container group. */
  zones?: string[];
}

/** An error response from the Container Instance service. */
export interface CloudError {
  /** An error response from the Container Instance service. */
  error?: CloudErrorBody;
}

/** An error response from the Container Instance service. */
export interface CloudErrorBody {
  /** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
  code?: string;
  /** A message describing the error, intended to be suitable for display in a user interface. */
  message?: string;
  /** The target of the particular error. For example, the name of the property in error. */
  target?: string;
  /** A list of additional details about the error. */
  details?: CloudErrorBody[];
}

/** The operation list response that contains all operations for Azure Container Instance service. */
export interface OperationListResult {
  /** The list of operations. */
  value?: Operation[];
  /** The URI to fetch the next page of operations. */
  nextLink?: string;
}

/** An operation for Azure Container Instance service. */
export interface Operation {
  /** The name of the operation. */
  name: string;
  /** The display information of the operation. */
  display: OperationDisplay;
  /** The additional properties. */
  properties?: Record<string, unknown>;
  /** The intended executor of the operation. */
  origin?: ContainerInstanceOperationsOrigin;
}

/** The display information of the operation. */
export interface OperationDisplay {
  /** The name of the provider of the operation. */
  provider?: string;
  /** The name of the resource type of the operation. */
  resource?: string;
  /** The friendly name of the operation. */
  operation?: string;
  /** The description of the operation. */
  description?: string;
}

/** The response containing the usage data */
export interface UsageListResult {
  /**
   * The usage data.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Usage[];
}

/** A single usage result */
export interface Usage {
  /**
   * Unit of the usage result
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly unit?: string;
  /**
   * The current usage of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly currentValue?: number;
  /**
   * The maximum permitted usage of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly limit?: number;
  /**
   * The name object of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: UsageName;
}

/** The name object of the resource */
export interface UsageName {
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: string;
  /**
   * The localized name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly localizedValue?: string;
}

/** The logs. */
export interface Logs {
  /** The content of the log. */
  content?: string;
}

/** The container exec request. */
export interface ContainerExecRequest {
  /** The command to be executed. */
  command?: string;
  /** The size of the terminal. */
  terminalSize?: ContainerExecRequestTerminalSize;
}

/** The size of the terminal. */
export interface ContainerExecRequestTerminalSize {
  /** The row size of the terminal */
  rows?: number;
  /** The column size of the terminal */
  cols?: number;
}

/** The information for the container exec command. */
export interface ContainerExecResponse {
  /** The uri for the exec websocket. */
  webSocketUri?: string;
  /** The password to start the exec command. */
  password?: string;
}

/** The information for the output stream from container attach. */
export interface ContainerAttachResponse {
  /** The uri for the output stream from the attach. */
  webSocketUri?: string;
  /** The password to the output stream from the attach. Send as an Authorization header value when connecting to the websocketUri. */
  password?: string;
}

/** The response containing cached images. */
export interface CachedImagesListResult {
  /** The list of cached images. */
  value?: CachedImages[];
  /** The URI to fetch the next page of cached images. */
  nextLink?: string;
}

/** The cached image and OS type. */
export interface CachedImages {
  /** The OS type of the cached image. */
  osType: string;
  /** The cached image name. */
  image: string;
}

/** The response containing list of capabilities. */
export interface CapabilitiesListResult {
  /** The list of capabilities. */
  value?: Capabilities[];
  /** The URI to fetch the next page of capabilities. */
  nextLink?: string;
}

/** The regional capabilities. */
export interface Capabilities {
  /**
   * The resource type that this capability describes.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resourceType?: string;
  /**
   * The OS type that this capability describes.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly osType?: string;
  /**
   * The resource location.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly location?: string;
  /**
   * The ip address type that this capability describes.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly ipAddressType?: string;
  /**
   * The GPU sku that this capability describes.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly gpu?: string;
  /**
   * The supported capabilities.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly capabilities?: CapabilitiesCapabilities;
}

/** The supported capabilities. */
export interface CapabilitiesCapabilities {
  /**
   * The maximum allowed memory request in GB.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly maxMemoryInGB?: number;
  /**
   * The maximum allowed CPU request in cores.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly maxCpu?: number;
  /**
   * The maximum allowed GPU count.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly maxGpuCount?: number;
}

/** A container group. */
export type ContainerGroup = Resource & {
  /** The identity of the container group, if configured. */
  identity?: ContainerGroupIdentity;
  /**
   * The provisioning state of the container group. This only appears in the response.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: string;
  /** The containers within the container group. */
  containers: Container[];
  /** The image registry credentials by which the container group is created from. */
  imageRegistryCredentials?: ImageRegistryCredential[];
  /**
   * Restart policy for all containers within the container group.
   * - `Always` Always restart
   * - `OnFailure` Restart on failure
   * - `Never` Never restart
   *
   */
  restartPolicy?: ContainerGroupRestartPolicy;
  /** The IP address type of the container group. */
  ipAddress?: IpAddress;
  /** The operating system type required by the containers in the container group. */
  osType: OperatingSystemTypes;
  /** The list of volumes that can be mounted by containers in this container group. */
  volumes?: Volume[];
  /**
   * The instance view of the container group. Only valid in response.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly instanceView?: ContainerGroupPropertiesInstanceView;
  /** The diagnostic information for a container group. */
  diagnostics?: ContainerGroupDiagnostics;
  /** The subnet resource IDs for a container group. */
  subnetIds?: ContainerGroupSubnetId[];
  /** The DNS config information for a container group. */
  dnsConfig?: DnsConfiguration;
  /** The SKU for a container group. */
  sku?: ContainerGroupSku;
  /** The encryption properties for a container group. */
  encryptionProperties?: EncryptionProperties;
  /** The init containers for a container group. */
  initContainers?: InitContainerDefinition[];
};

/** Known values of {@link ContainerNetworkProtocol} that the service accepts. */
export enum KnownContainerNetworkProtocol {
  TCP = "TCP",
  UDP = "UDP"
}

/**
 * Defines values for ContainerNetworkProtocol. \
 * {@link KnownContainerNetworkProtocol} can be used interchangeably with ContainerNetworkProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **TCP** \
 * **UDP**
 */
export type ContainerNetworkProtocol = string;

/** Known values of {@link GpuSku} that the service accepts. */
export enum KnownGpuSku {
  K80 = "K80",
  P100 = "P100",
  V100 = "V100"
}

/**
 * Defines values for GpuSku. \
 * {@link KnownGpuSku} can be used interchangeably with GpuSku,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **K80** \
 * **P100** \
 * **V100**
 */
export type GpuSku = string;

/** Known values of {@link Scheme} that the service accepts. */
export enum KnownScheme {
  Http = "http",
  Https = "https"
}

/**
 * Defines values for Scheme. \
 * {@link KnownScheme} can be used interchangeably with Scheme,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **http** \
 * **https**
 */
export type Scheme = string;

/** Known values of {@link ContainerGroupRestartPolicy} that the service accepts. */
export enum KnownContainerGroupRestartPolicy {
  Always = "Always",
  OnFailure = "OnFailure",
  Never = "Never"
}

/**
 * Defines values for ContainerGroupRestartPolicy. \
 * {@link KnownContainerGroupRestartPolicy} can be used interchangeably with ContainerGroupRestartPolicy,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Always** \
 * **OnFailure** \
 * **Never**
 */
export type ContainerGroupRestartPolicy = string;

/** Known values of {@link ContainerGroupNetworkProtocol} that the service accepts. */
export enum KnownContainerGroupNetworkProtocol {
  TCP = "TCP",
  UDP = "UDP"
}

/**
 * Defines values for ContainerGroupNetworkProtocol. \
 * {@link KnownContainerGroupNetworkProtocol} can be used interchangeably with ContainerGroupNetworkProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **TCP** \
 * **UDP**
 */
export type ContainerGroupNetworkProtocol = string;

/** Known values of {@link ContainerGroupIpAddressType} that the service accepts. */
export enum KnownContainerGroupIpAddressType {
  Public = "Public",
  Private = "Private"
}

/**
 * Defines values for ContainerGroupIpAddressType. \
 * {@link KnownContainerGroupIpAddressType} can be used interchangeably with ContainerGroupIpAddressType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Public** \
 * **Private**
 */
export type ContainerGroupIpAddressType = string;

/** Known values of {@link OperatingSystemTypes} that the service accepts. */
export enum KnownOperatingSystemTypes {
  Windows = "Windows",
  Linux = "Linux"
}

/**
 * Defines values for OperatingSystemTypes. \
 * {@link KnownOperatingSystemTypes} can be used interchangeably with OperatingSystemTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Windows** \
 * **Linux**
 */
export type OperatingSystemTypes = string;

/** Known values of {@link LogAnalyticsLogType} that the service accepts. */
export enum KnownLogAnalyticsLogType {
  ContainerInsights = "ContainerInsights",
  ContainerInstanceLogs = "ContainerInstanceLogs"
}

/**
 * Defines values for LogAnalyticsLogType. \
 * {@link KnownLogAnalyticsLogType} can be used interchangeably with LogAnalyticsLogType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ContainerInsights** \
 * **ContainerInstanceLogs**
 */
export type LogAnalyticsLogType = string;

/** Known values of {@link ContainerGroupSku} that the service accepts. */
export enum KnownContainerGroupSku {
  Standard = "Standard",
  Dedicated = "Dedicated"
}

/**
 * Defines values for ContainerGroupSku. \
 * {@link KnownContainerGroupSku} can be used interchangeably with ContainerGroupSku,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard** \
 * **Dedicated**
 */
export type ContainerGroupSku = string;

/** Known values of {@link ContainerInstanceOperationsOrigin} that the service accepts. */
export enum KnownContainerInstanceOperationsOrigin {
  User = "User",
  System = "System"
}

/**
 * Defines values for ContainerInstanceOperationsOrigin. \
 * {@link KnownContainerInstanceOperationsOrigin} can be used interchangeably with ContainerInstanceOperationsOrigin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **System**
 */
export type ContainerInstanceOperationsOrigin = string;
/** Defines values for ResourceIdentityType. */
export type ResourceIdentityType =
  | "SystemAssigned"
  | "UserAssigned"
  | "SystemAssigned, UserAssigned"
  | "None";

/** Optional parameters. */
export interface ContainerGroupsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type ContainerGroupsListResponse = ContainerGroupListResult;

/** Optional parameters. */
export interface ContainerGroupsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type ContainerGroupsListByResourceGroupResponse = ContainerGroupListResult;

/** Optional parameters. */
export interface ContainerGroupsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ContainerGroupsGetResponse = ContainerGroup;

/** Optional parameters. */
export interface ContainerGroupsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type ContainerGroupsCreateOrUpdateResponse = ContainerGroup;

/** Optional parameters. */
export interface ContainerGroupsUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type ContainerGroupsUpdateResponse = ContainerGroup;

/** Optional parameters. */
export interface ContainerGroupsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the delete operation. */
export type ContainerGroupsDeleteResponse = ContainerGroup;

/** Optional parameters. */
export interface ContainerGroupsRestartOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface ContainerGroupsStopOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ContainerGroupsStartOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface ContainerGroupsGetOutboundNetworkDependenciesEndpointsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getOutboundNetworkDependenciesEndpoints operation. */
export type ContainerGroupsGetOutboundNetworkDependenciesEndpointsResponse = {
  /** The parsed response body. */
  body: string[];
};

/** Optional parameters. */
export interface ContainerGroupsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type ContainerGroupsListNextResponse = ContainerGroupListResult;

/** Optional parameters. */
export interface ContainerGroupsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type ContainerGroupsListByResourceGroupNextResponse = ContainerGroupListResult;

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
export interface LocationListUsageOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listUsage operation. */
export type LocationListUsageResponse = UsageListResult;

/** Optional parameters. */
export interface LocationListCachedImagesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listCachedImages operation. */
export type LocationListCachedImagesResponse = CachedImagesListResult;

/** Optional parameters. */
export interface LocationListCapabilitiesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listCapabilities operation. */
export type LocationListCapabilitiesResponse = CapabilitiesListResult;

/** Optional parameters. */
export interface LocationListCachedImagesNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listCachedImagesNext operation. */
export type LocationListCachedImagesNextResponse = CachedImagesListResult;

/** Optional parameters. */
export interface LocationListCapabilitiesNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listCapabilitiesNext operation. */
export type LocationListCapabilitiesNextResponse = CapabilitiesListResult;

/** Optional parameters. */
export interface ContainersListLogsOptionalParams
  extends coreClient.OperationOptions {
  /** The number of lines to show from the tail of the container instance log. If not provided, all available logs are shown up to 4mb. */
  tail?: number;
  /** If true, adds a timestamp at the beginning of every line of log output. If not provided, defaults to false. */
  timestamps?: boolean;
}

/** Contains response data for the listLogs operation. */
export type ContainersListLogsResponse = Logs;

/** Optional parameters. */
export interface ContainersExecuteCommandOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the executeCommand operation. */
export type ContainersExecuteCommandResponse = ContainerExecResponse;

/** Optional parameters. */
export interface ContainersAttachOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the attach operation. */
export type ContainersAttachResponse = ContainerAttachResponse;

/** Optional parameters. */
export interface ContainerInstanceManagementClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
