/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      }
    }
  }
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameAvailability: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameAvailability",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameAvailabilityResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityResult",
    modelProperties: {
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      nameAvailable: {
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "Enum",
          allowedValues: [
            "None",
            "InvalidName",
            "SubscriptionIsDisabled",
            "NameInUse",
            "NameInLockdown",
            "TooManyNamespaceInCurrentSubscription"
          ]
        }
      }
    }
  }
};

export const RelayNamespaceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RelayNamespaceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RelayNamespace"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Sku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        defaultValue: "Standard",
        isConstant: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tier: {
        defaultValue: "Standard",
        isConstant: true,
        serializedName: "tier",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AuthorizationRuleListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AuthorizationRuleListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AuthorizationRule"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AccessKeys: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AccessKeys",
    modelProperties: {
      primaryConnectionString: {
        serializedName: "primaryConnectionString",
        type: {
          name: "String"
        }
      },
      secondaryConnectionString: {
        serializedName: "secondaryConnectionString",
        type: {
          name: "String"
        }
      },
      primaryKey: {
        serializedName: "primaryKey",
        type: {
          name: "String"
        }
      },
      secondaryKey: {
        serializedName: "secondaryKey",
        type: {
          name: "String"
        }
      },
      keyName: {
        serializedName: "keyName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RegenerateAccessKeyParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RegenerateAccessKeyParameters",
    modelProperties: {
      keyType: {
        serializedName: "keyType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["PrimaryKey", "SecondaryKey"]
        }
      },
      key: {
        serializedName: "key",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HybridConnectionListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "HybridConnectionListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "HybridConnection"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WcfRelaysListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WcfRelaysListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "WcfRelay"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrackedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const ResourceNamespacePatch: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceNamespacePatch",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const AuthorizationRule: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AuthorizationRule",
    modelProperties: {
      ...Resource.type.modelProperties,
      rights: {
        constraints: {
          UniqueItems: true
        },
        serializedName: "properties.rights",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Enum",
              allowedValues: ["Manage", "Send", "Listen"]
            }
          }
        }
      }
    }
  }
};

export const HybridConnection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "HybridConnection",
    modelProperties: {
      ...Resource.type.modelProperties,
      createdAt: {
        serializedName: "properties.createdAt",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        serializedName: "properties.updatedAt",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      listenerCount: {
        constraints: {
          InclusiveMaximum: 25,
          InclusiveMinimum: 0
        },
        serializedName: "properties.listenerCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      requiresClientAuthorization: {
        serializedName: "properties.requiresClientAuthorization",
        type: {
          name: "Boolean"
        }
      },
      userMetadata: {
        serializedName: "properties.userMetadata",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WcfRelay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WcfRelay",
    modelProperties: {
      ...Resource.type.modelProperties,
      isDynamic: {
        serializedName: "properties.isDynamic",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      createdAt: {
        serializedName: "properties.createdAt",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        serializedName: "properties.updatedAt",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      listenerCount: {
        constraints: {
          InclusiveMaximum: 25,
          InclusiveMinimum: 0
        },
        serializedName: "properties.listenerCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      relayType: {
        serializedName: "properties.relayType",
        type: {
          name: "Enum",
          allowedValues: ["NetTcp", "Http"]
        }
      },
      requiresClientAuthorization: {
        serializedName: "properties.requiresClientAuthorization",
        type: {
          name: "Boolean"
        }
      },
      requiresTransportSecurity: {
        serializedName: "properties.requiresTransportSecurity",
        type: {
          name: "Boolean"
        }
      },
      userMetadata: {
        serializedName: "properties.userMetadata",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RelayNamespace: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RelayNamespace",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Created",
            "Succeeded",
            "Deleted",
            "Failed",
            "Updating",
            "Unknown"
          ]
        }
      },
      createdAt: {
        serializedName: "properties.createdAt",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        serializedName: "properties.updatedAt",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      serviceBusEndpoint: {
        serializedName: "properties.serviceBusEndpoint",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      metricId: {
        serializedName: "properties.metricId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RelayUpdateParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RelayUpdateParameters",
    modelProperties: {
      ...ResourceNamespacePatch.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Created",
            "Succeeded",
            "Deleted",
            "Failed",
            "Updating",
            "Unknown"
          ]
        }
      },
      createdAt: {
        serializedName: "properties.createdAt",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        serializedName: "properties.updatedAt",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      serviceBusEndpoint: {
        serializedName: "properties.serviceBusEndpoint",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      metricId: {
        serializedName: "properties.metricId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};
