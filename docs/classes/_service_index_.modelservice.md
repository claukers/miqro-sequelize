[@miqro/database](../README.md) › [Globals](../globals.md) › ["service/index"](../modules/_service_index_.md) › [ModelService](_service_index_.modelservice.md)

# Class: ModelService

## Hierarchy

* [AbstractModelService](_index_.abstractmodelservice.md)

  ↳ **ModelService**

## Implements

* [IModelService](../interfaces/_index_.imodelservice.md)

## Index

### Constructors

* [constructor](_service_index_.modelservice.md#constructor)

### Properties

* [model](_service_index_.modelservice.md#protected-model)

### Methods

* [delete](_service_index_.modelservice.md#delete)
* [get](_service_index_.modelservice.md#get)
* [patch](_service_index_.modelservice.md#patch)
* [post](_service_index_.modelservice.md#post)
* [put](_service_index_.modelservice.md#put)

## Constructors

###  constructor

\+ **new ModelService**(`model`: any): *[ModelService](_service_index_.modelservice.md)*

*Defined in [src/service/model.ts:4](https://github.com/claukers/miqro-sequelize/blob/9318ec9/src/service/model.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`model` | any |

**Returns:** *[ModelService](_service_index_.modelservice.md)*

## Properties

### `Protected` model

• **model**: *any*

*Defined in [src/service/model.ts:5](https://github.com/claukers/miqro-sequelize/blob/9318ec9/src/service/model.ts#L5)*

## Methods

###  delete

▸ **delete**(`__namedParameters`: object, `transaction?`: any): *Promise‹any›*

*Overrides [AbstractModelService](_index_.abstractmodelservice.md).[delete](_index_.abstractmodelservice.md#delete)*

*Defined in [src/service/model.ts:142](https://github.com/claukers/miqro-sequelize/blob/9318ec9/src/service/model.ts#L142)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`body` | ISimpleMap‹any› |
`params` | ISimpleMap‹any› |
`query` | ISimpleMap‹any› |
`session` | ISession |

▪`Optional`  **transaction**: *any*

**Returns:** *Promise‹any›*

___

###  get

▸ **get**(`__namedParameters`: object, `transaction?`: any, `skipLocked?`: boolean): *Promise‹any›*

*Overrides [AbstractModelService](_index_.abstractmodelservice.md).[get](_index_.abstractmodelservice.md#get)*

*Defined in [src/service/model.ts:9](https://github.com/claukers/miqro-sequelize/blob/9318ec9/src/service/model.ts#L9)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`body` | ISimpleMap‹any› |
`params` | ISimpleMap‹any› |
`query` | ISimpleMap‹any› |
`session` | ISession |

▪`Optional`  **transaction**: *any*

▪`Optional`  **skipLocked**: *boolean*

**Returns:** *Promise‹any›*

___

###  patch

▸ **patch**(`__namedParameters`: object, `transaction?`: any): *Promise‹any›*

*Overrides [AbstractModelService](_index_.abstractmodelservice.md).[patch](_index_.abstractmodelservice.md#patch)*

*Defined in [src/service/model.ts:122](https://github.com/claukers/miqro-sequelize/blob/9318ec9/src/service/model.ts#L122)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`body` | ISimpleMap‹any› |
`params` | ISimpleMap‹any› |
`query` | ISimpleMap‹any› |
`session` | ISession |

▪`Optional`  **transaction**: *any*

**Returns:** *Promise‹any›*

___

###  post

▸ **post**(`__namedParameters`: object, `transaction?`: any): *Promise‹any›*

*Overrides [AbstractModelService](_index_.abstractmodelservice.md).[post](_index_.abstractmodelservice.md#post)*

*Defined in [src/service/model.ts:110](https://github.com/claukers/miqro-sequelize/blob/9318ec9/src/service/model.ts#L110)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`body` | ISimpleMap‹any› |
`params` | ISimpleMap‹any› |
`query` | ISimpleMap‹any› |
`session` | ISession |

▪`Optional`  **transaction**: *any*

**Returns:** *Promise‹any›*

___

###  put

▸ **put**(`options`: IServiceArgs): *Promise‹any›*

*Inherited from [AbstractModelService](_index_.abstractmodelservice.md).[put](_index_.abstractmodelservice.md#put)*

*Defined in [src/service/common/amodel.ts:16](https://github.com/claukers/miqro-sequelize/blob/9318ec9/src/service/common/amodel.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | IServiceArgs |

**Returns:** *Promise‹any›*
