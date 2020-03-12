[@miqro/database](../README.md) › [Globals](../globals.md) › ["index"](../modules/_index_.md) › [IModelService](_index_.imodelservice.md)

# Interface: IModelService

## Hierarchy

* **IModelService**

## Implemented by

* [AbstractModelService](../classes/_index_.abstractmodelservice.md)
* [AbstractModelService](../classes/_service_common_amodel_.abstractmodelservice.md)
* [AbstractModelService](../classes/_service_common_index_.abstractmodelservice.md)
* [AbstractModelService](../classes/_service_index_.abstractmodelservice.md)
* [FakeDeleteModelService](../classes/_index_.fakedeletemodelservice.md)
* [FakeDeleteModelService](../classes/_service_deleted_.fakedeletemodelservice.md)
* [FakeDeleteModelService](../classes/_service_index_.fakedeletemodelservice.md)
* [ModelService](../classes/_index_.modelservice.md)
* [ModelService](../classes/_service_index_.modelservice.md)
* [ModelService](../classes/_service_model_.modelservice.md)
* [PostListModelService](../classes/_index_.postlistmodelservice.md)
* [PostListModelService](../classes/_service_index_.postlistmodelservice.md)
* [PostListModelService](../classes/_service_postlist_.postlistmodelservice.md)

## Index

### Methods

* [delete](_index_.imodelservice.md#delete)
* [get](_index_.imodelservice.md#get)
* [patch](_index_.imodelservice.md#patch)
* [post](_index_.imodelservice.md#post)
* [put](_index_.imodelservice.md#put)

## Methods

###  delete

▸ **delete**(`options`: IServiceArgs, `transaction?`: any): *Promise‹any›*

*Defined in [src/service/common/model.ts:15](https://github.com/claukers/miqro-sequelize/blob/9318ec9/src/service/common/model.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | IServiceArgs |
`transaction?` | any |

**Returns:** *Promise‹any›*

___

###  get

▸ **get**(`options`: IServiceArgs, `transaction?`: any, `skipLocked?`: boolean): *Promise‹any›*

*Defined in [src/service/common/model.ts:7](https://github.com/claukers/miqro-sequelize/blob/9318ec9/src/service/common/model.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | IServiceArgs |
`transaction?` | any |
`skipLocked?` | boolean |

**Returns:** *Promise‹any›*

___

###  patch

▸ **patch**(`options`: IServiceArgs, `transaction?`: any): *Promise‹any›*

*Defined in [src/service/common/model.ts:13](https://github.com/claukers/miqro-sequelize/blob/9318ec9/src/service/common/model.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | IServiceArgs |
`transaction?` | any |

**Returns:** *Promise‹any›*

___

###  post

▸ **post**(`options`: IServiceArgs, `transaction?`: any): *Promise‹any›*

*Defined in [src/service/common/model.ts:9](https://github.com/claukers/miqro-sequelize/blob/9318ec9/src/service/common/model.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | IServiceArgs |
`transaction?` | any |

**Returns:** *Promise‹any›*

___

###  put

▸ **put**(`options`: IServiceArgs, `transaction?`: any): *Promise‹any›*

*Defined in [src/service/common/model.ts:11](https://github.com/claukers/miqro-sequelize/blob/9318ec9/src/service/common/model.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | IServiceArgs |
`transaction?` | any |

**Returns:** *Promise‹any›*
