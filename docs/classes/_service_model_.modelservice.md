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

*Defined in [src/service/model.ts:4](https://github.com/claukers/miqro-sequelize/blob/3348ef6/src/service/model.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`model` | any |

**Returns:** *[ModelService](_service_model_.modelservice.md)*

## Properties

### `Protected` model

• **model**: *any*

*Defined in [src/service/model.ts:6](https://github.com/claukers/miqro-sequelize/blob/3348ef6/src/service/model.ts#L6)*

## Methods

###  delete

▸ **delete**(`__namedParameters`: object, `transaction?`: any): *Promise‹any›*

*Overrides [AbstractModelService](_service_common_amodel_.abstractmodelservice.md).[delete](_service_common_amodel_.abstractmodelservice.md#delete)*

*Defined in [src/service/model.ts:143](https://github.com/claukers/miqro-sequelize/blob/3348ef6/src/service/model.ts#L143)*

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

*Defined in [src/service/model.ts:11](https://github.com/claukers/miqro-sequelize/blob/3348ef6/src/service/model.ts#L11)*

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

*Defined in [src/service/model.ts:125](https://github.com/claukers/miqro-sequelize/blob/3348ef6/src/service/model.ts#L125)*

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

*Defined in [src/service/model.ts:112](https://github.com/claukers/miqro-sequelize/blob/3348ef6/src/service/model.ts#L112)*

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

*Defined in [src/service/common/amodel.ts:17](https://github.com/claukers/miqro-sequelize/blob/3348ef6/src/service/common/amodel.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ModelServiceArgsInterface](../interfaces/_service_common_model_.modelserviceargsinterface.md) |

**Returns:** *Promise‹any›*
