[@miqro/database](../README.md) › [Globals](../globals.md) › ["service/model"](../modules/_service_model_.md) › [ModelService](_service_model_.modelservice.md)

# Class: ModelService

## Hierarchy

* [AbstractModelService](_service_common_amodel_.abstractmodelservice.md)

  ↳ **ModelService**

  ↳ [PostListModelService](_service_postlist_.postlistmodelservice.md)

## Implements

* [ModelServiceInterface](../interfaces/_service_common_model_.modelserviceinterface.md)

## Index

### Constructors

* [constructor](_service_model_.modelservice.md#constructor)

### Properties

* [model](_service_model_.modelservice.md#protected-model)

### Methods

* [delete](_service_model_.modelservice.md#delete)
* [get](_service_model_.modelservice.md#get)
* [patch](_service_model_.modelservice.md#patch)
* [post](_service_model_.modelservice.md#post)
* [put](_service_model_.modelservice.md#put)

## Constructors

###  constructor

\+ **new ModelService**(`model`: any): *[ModelService](_service_model_.modelservice.md)*

*Defined in [src/service/model.ts:4](https://github.com/claukers/miqro-sequelize/blob/af574dd/src/service/model.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`model` | any |

**Returns:** *[ModelService](_service_model_.modelservice.md)*

## Properties

### `Protected` model

• **model**: *any*

*Defined in [src/service/model.ts:5](https://github.com/claukers/miqro-sequelize/blob/af574dd/src/service/model.ts#L5)*

## Methods

###  delete

▸ **delete**(`__namedParameters`: object, `transaction?`: any): *Promise‹any›*

*Overrides [AbstractModelService](_service_common_amodel_.abstractmodelservice.md).[delete](_service_common_amodel_.abstractmodelservice.md#delete)*

*Defined in [src/service/model.ts:140](https://github.com/claukers/miqro-sequelize/blob/af574dd/src/service/model.ts#L140)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`body` | SimpleMapInterface‹any› |
`params` | SimpleMapInterface‹string› |
`query` | SimpleMapInterface‹string› |

▪`Optional`  **transaction**: *any*

**Returns:** *Promise‹any›*

___

###  get

▸ **get**(`__namedParameters`: object, `transaction?`: any, `skipLocked?`: boolean): *Promise‹any›*

*Overrides [AbstractModelService](_service_common_amodel_.abstractmodelservice.md).[get](_service_common_amodel_.abstractmodelservice.md#get)*

*Defined in [src/service/model.ts:9](https://github.com/claukers/miqro-sequelize/blob/af574dd/src/service/model.ts#L9)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`body` | SimpleMapInterface‹any› |
`params` | SimpleMapInterface‹string› |
`query` | SimpleMapInterface‹string› |

▪`Optional`  **transaction**: *any*

▪`Optional`  **skipLocked**: *boolean*

**Returns:** *Promise‹any›*

___

###  patch

▸ **patch**(`__namedParameters`: object, `transaction?`: any): *Promise‹any›*

*Overrides [AbstractModelService](_service_common_amodel_.abstractmodelservice.md).[patch](_service_common_amodel_.abstractmodelservice.md#patch)*

*Defined in [src/service/model.ts:122](https://github.com/claukers/miqro-sequelize/blob/af574dd/src/service/model.ts#L122)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`body` | SimpleMapInterface‹any› |
`params` | SimpleMapInterface‹string› |
`query` | SimpleMapInterface‹string› |

▪`Optional`  **transaction**: *any*

**Returns:** *Promise‹any›*

___

###  post

▸ **post**(`__namedParameters`: object, `transaction?`: any): *Promise‹any›*

*Overrides [AbstractModelService](_service_common_amodel_.abstractmodelservice.md).[post](_service_common_amodel_.abstractmodelservice.md#post)*

*Defined in [src/service/model.ts:110](https://github.com/claukers/miqro-sequelize/blob/af574dd/src/service/model.ts#L110)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`body` | SimpleMapInterface‹any› |
`params` | SimpleMapInterface‹string› |
`query` | SimpleMapInterface‹string› |

▪`Optional`  **transaction**: *any*

**Returns:** *Promise‹any›*

___

###  put

▸ **put**(`options`: [ModelServiceArgsInterface](../interfaces/_service_common_model_.modelserviceargsinterface.md)): *Promise‹any›*

*Inherited from [AbstractModelService](_service_common_amodel_.abstractmodelservice.md).[put](_service_common_amodel_.abstractmodelservice.md#put)*

*Defined in [src/service/common/amodel.ts:17](https://github.com/claukers/miqro-sequelize/blob/af574dd/src/service/common/amodel.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ModelServiceArgsInterface](../interfaces/_service_common_model_.modelserviceargsinterface.md) |

**Returns:** *Promise‹any›*
