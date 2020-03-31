[@miqro/database](../README.md) › [Globals](../globals.md) › ["service/deleted"](../modules/_service_deleted_.md) › [FakeDeleteModelService](_service_deleted_.fakedeletemodelservice.md)

# Class: FakeDeleteModelService

## Hierarchy

  ↳ [PostListModelService](_service_postlist_.postlistmodelservice.md)

  ↳ **FakeDeleteModelService**

## Implements

* [IModelService](../interfaces/_service_common_model_.imodelservice.md)

## Index

### Constructors

* [constructor](_service_deleted_.fakedeletemodelservice.md#constructor)

### Properties

* [model](_service_deleted_.fakedeletemodelservice.md#protected-model)
* [modelIsDeletedAttribute](_service_deleted_.fakedeletemodelservice.md#protected-modelisdeletedattribute)

### Methods

* [delete](_service_deleted_.fakedeletemodelservice.md#delete)
* [get](_service_deleted_.fakedeletemodelservice.md#get)
* [patch](_service_deleted_.fakedeletemodelservice.md#patch)
* [post](_service_deleted_.fakedeletemodelservice.md#post)
* [put](_service_deleted_.fakedeletemodelservice.md#put)

## Constructors

###  constructor

\+ **new FakeDeleteModelService**(`model`: any): *[FakeDeleteModelService](_service_deleted_.fakedeletemodelservice.md)*

*Inherited from [ModelService](_service_model_.modelservice.md).[constructor](_service_model_.modelservice.md#constructor)*

*Defined in [src/service/model.ts:4](https://github.com/claukers/miqro-sequelize/blob/aaa7286/src/service/model.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`model` | any |

**Returns:** *[FakeDeleteModelService](_service_deleted_.fakedeletemodelservice.md)*

## Properties

### `Protected` model

• **model**: *any*

*Inherited from [ModelService](_service_model_.modelservice.md).[model](_service_model_.modelservice.md#protected-model)*

*Defined in [src/service/model.ts:5](https://github.com/claukers/miqro-sequelize/blob/aaa7286/src/service/model.ts#L5)*

___

### `Protected` modelIsDeletedAttribute

• **modelIsDeletedAttribute**: *string* = "deleted"

*Defined in [src/service/deleted.ts:6](https://github.com/claukers/miqro-sequelize/blob/aaa7286/src/service/deleted.ts#L6)*

## Methods

###  delete

▸ **delete**(`args`: any): *Promise‹any›*

*Overrides [ModelService](_service_model_.modelservice.md).[delete](_service_model_.modelservice.md#delete)*

*Defined in [src/service/deleted.ts:12](https://github.com/claukers/miqro-sequelize/blob/aaa7286/src/service/deleted.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |

**Returns:** *Promise‹any›*

___

###  get

▸ **get**(`args`: any): *Promise‹any›*

*Overrides [ModelService](_service_model_.modelservice.md).[get](_service_model_.modelservice.md#get)*

*Defined in [src/service/deleted.ts:7](https://github.com/claukers/miqro-sequelize/blob/aaa7286/src/service/deleted.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |

**Returns:** *Promise‹any›*

___

###  patch

▸ **patch**(`args`: any): *Promise‹any›*

*Overrides [ModelService](_service_model_.modelservice.md).[patch](_service_model_.modelservice.md#patch)*

*Defined in [src/service/deleted.ts:17](https://github.com/claukers/miqro-sequelize/blob/aaa7286/src/service/deleted.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |

**Returns:** *Promise‹any›*

___

###  post

▸ **post**(`args`: any): *Promise‹any›*

*Overrides [PostListModelService](_service_postlist_.postlistmodelservice.md).[post](_service_postlist_.postlistmodelservice.md#post)*

*Defined in [src/service/deleted.ts:24](https://github.com/claukers/miqro-sequelize/blob/aaa7286/src/service/deleted.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |

**Returns:** *Promise‹any›*

___

###  put

▸ **put**(`options`: IServiceArgs): *Promise‹any›*

*Inherited from [AbstractModelService](_service_common_amodel_.abstractmodelservice.md).[put](_service_common_amodel_.abstractmodelservice.md#put)*

*Defined in [src/service/common/amodel.ts:16](https://github.com/claukers/miqro-sequelize/blob/aaa7286/src/service/common/amodel.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | IServiceArgs |

**Returns:** *Promise‹any›*
