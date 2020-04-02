[@miqro/database](../README.md) › [Globals](../globals.md) › ["service/postlist"](../modules/_service_postlist_.md) › [PostListModelService](_service_postlist_.postlistmodelservice.md)

# Class: PostListModelService

## Hierarchy

  ↳ [ModelService](_service_model_.modelservice.md)

  ↳ **PostListModelService**

  ↳ [FakeDeleteModelService](_service_deleted_.fakedeletemodelservice.md)

## Implements

* [IModelService](../interfaces/_service_common_model_.imodelservice.md)

## Index

### Constructors

* [constructor](_service_postlist_.postlistmodelservice.md#constructor)

### Properties

* [model](_service_postlist_.postlistmodelservice.md#protected-model)

### Methods

* [delete](_service_postlist_.postlistmodelservice.md#delete)
* [get](_service_postlist_.postlistmodelservice.md#get)
* [patch](_service_postlist_.postlistmodelservice.md#patch)
* [post](_service_postlist_.postlistmodelservice.md#post)
* [put](_service_postlist_.postlistmodelservice.md#put)

## Constructors

###  constructor

\+ **new PostListModelService**(`model`: any): *[PostListModelService](_service_postlist_.postlistmodelservice.md)*

*Inherited from [ModelService](_service_model_.modelservice.md).[constructor](_service_model_.modelservice.md#constructor)*

*Defined in [src/service/model.ts:4](https://github.com/claukers/miqro-sequelize/blob/fbcb301/src/service/model.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`model` | any |

**Returns:** *[PostListModelService](_service_postlist_.postlistmodelservice.md)*

## Properties

### `Protected` model

• **model**: *any*

*Inherited from [ModelService](_service_model_.modelservice.md).[model](_service_model_.modelservice.md#protected-model)*

*Defined in [src/service/model.ts:5](https://github.com/claukers/miqro-sequelize/blob/fbcb301/src/service/model.ts#L5)*

## Methods

###  delete

▸ **delete**(`__namedParameters`: object, `transaction?`: any): *Promise‹any›*

*Inherited from [ModelService](_service_model_.modelservice.md).[delete](_service_model_.modelservice.md#delete)*

*Overrides [AbstractModelService](_service_common_amodel_.abstractmodelservice.md).[delete](_service_common_amodel_.abstractmodelservice.md#delete)*

*Defined in [src/service/model.ts:142](https://github.com/claukers/miqro-sequelize/blob/fbcb301/src/service/model.ts#L142)*

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

*Inherited from [ModelService](_service_model_.modelservice.md).[get](_service_model_.modelservice.md#get)*

*Overrides [AbstractModelService](_service_common_amodel_.abstractmodelservice.md).[get](_service_common_amodel_.abstractmodelservice.md#get)*

*Defined in [src/service/model.ts:9](https://github.com/claukers/miqro-sequelize/blob/fbcb301/src/service/model.ts#L9)*

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

*Inherited from [ModelService](_service_model_.modelservice.md).[patch](_service_model_.modelservice.md#patch)*

*Overrides [AbstractModelService](_service_common_amodel_.abstractmodelservice.md).[patch](_service_common_amodel_.abstractmodelservice.md#patch)*

*Defined in [src/service/model.ts:122](https://github.com/claukers/miqro-sequelize/blob/fbcb301/src/service/model.ts#L122)*

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

▸ **post**(`args`: any, `transaction?`: any): *Promise‹any›*

*Overrides [ModelService](_service_model_.modelservice.md).[post](_service_model_.modelservice.md#post)*

*Defined in [src/service/postlist.ts:9](https://github.com/claukers/miqro-sequelize/blob/fbcb301/src/service/postlist.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`transaction?` | any |

**Returns:** *Promise‹any›*

___

###  put

▸ **put**(`options`: IServiceArgs): *Promise‹any›*

*Inherited from [AbstractModelService](_service_common_amodel_.abstractmodelservice.md).[put](_service_common_amodel_.abstractmodelservice.md#put)*

*Defined in [src/service/common/amodel.ts:16](https://github.com/claukers/miqro-sequelize/blob/fbcb301/src/service/common/amodel.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | IServiceArgs |

**Returns:** *Promise‹any›*
