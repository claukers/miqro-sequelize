[miqro-sequelize](../README.md) › [Globals](../globals.md) › ["index"](../modules/_index_.md) › [FakeDeleteModelService](_index_.fakedeletemodelservice.md)

# Class: FakeDeleteModelService

## Hierarchy

  ↳ [PostListModelService](_index_.postlistmodelservice.md)

  ↳ **FakeDeleteModelService**

## Implements

* [IModelService](../interfaces/_index_.imodelservice.md)

## Index

### Constructors

* [constructor](_index_.fakedeletemodelservice.md#constructor)

### Properties

* [model](_index_.fakedeletemodelservice.md#protected-model)
* [modelIsDeletedAttribute](_index_.fakedeletemodelservice.md#protected-modelisdeletedattribute)

### Methods

* [delete](_index_.fakedeletemodelservice.md#delete)
* [get](_index_.fakedeletemodelservice.md#get)
* [patch](_index_.fakedeletemodelservice.md#patch)
* [post](_index_.fakedeletemodelservice.md#post)
* [put](_index_.fakedeletemodelservice.md#put)

## Constructors

###  constructor

\+ **new FakeDeleteModelService**(`model`: any): *[FakeDeleteModelService](_index_.fakedeletemodelservice.md)*

*Inherited from [ModelService](_index_.modelservice.md).[constructor](_index_.modelservice.md#constructor)*

*Defined in [src/service/model.ts:4](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/service/model.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`model` | any |

**Returns:** *[FakeDeleteModelService](_index_.fakedeletemodelservice.md)*

## Properties

### `Protected` model

• **model**: *any*

*Inherited from [ModelService](_index_.modelservice.md).[model](_index_.modelservice.md#protected-model)*

*Defined in [src/service/model.ts:5](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/service/model.ts#L5)*

___

### `Protected` modelIsDeletedAttribute

• **modelIsDeletedAttribute**: *string* = "deleted"

*Defined in [src/service/deleted.ts:6](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/service/deleted.ts#L6)*

## Methods

###  delete

▸ **delete**(`args`: any): *Promise‹any›*

*Overrides [ModelService](_index_.modelservice.md).[delete](_index_.modelservice.md#delete)*

*Defined in [src/service/deleted.ts:12](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/service/deleted.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |

**Returns:** *Promise‹any›*

___

###  get

▸ **get**(`args`: any): *Promise‹any›*

*Overrides [ModelService](_index_.modelservice.md).[get](_index_.modelservice.md#get)*

*Defined in [src/service/deleted.ts:7](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/service/deleted.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |

**Returns:** *Promise‹any›*

___

###  patch

▸ **patch**(`args`: any): *Promise‹any›*

*Overrides [ModelService](_index_.modelservice.md).[patch](_index_.modelservice.md#patch)*

*Defined in [src/service/deleted.ts:17](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/service/deleted.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |

**Returns:** *Promise‹any›*

___

###  post

▸ **post**(`args`: any): *Promise‹any›*

*Overrides [PostListModelService](_index_.postlistmodelservice.md).[post](_index_.postlistmodelservice.md#post)*

*Defined in [src/service/deleted.ts:24](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/service/deleted.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |

**Returns:** *Promise‹any›*

___

###  put

▸ **put**(`options`: IServiceArgs): *Promise‹any›*

*Inherited from [AbstractModelService](_index_.abstractmodelservice.md).[put](_index_.abstractmodelservice.md#put)*

*Defined in [src/service/common/amodel.ts:16](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/service/common/amodel.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | IServiceArgs |

**Returns:** *Promise‹any›*
