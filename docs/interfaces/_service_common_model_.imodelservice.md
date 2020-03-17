[@miqro/database](../README.md) › [Globals](../globals.md) › ["service/common/model"](../modules/_service_common_model_.md) › [IModelService](_service_common_model_.imodelservice.md)

# Interface: IModelService

## Hierarchy

* **IModelService**

## Implemented by

* [AbstractModelService](../classes/_service_common_amodel_.abstractmodelservice.md)
* [FakeDeleteModelService](../classes/_service_deleted_.fakedeletemodelservice.md)
* [ModelService](../classes/_service_model_.modelservice.md)
* [PostListModelService](../classes/_service_postlist_.postlistmodelservice.md)

## Index

### Methods

* [delete](_service_common_model_.imodelservice.md#delete)
* [get](_service_common_model_.imodelservice.md#get)
* [patch](_service_common_model_.imodelservice.md#patch)
* [post](_service_common_model_.imodelservice.md#post)
* [put](_service_common_model_.imodelservice.md#put)

## Methods

###  delete

▸ **delete**(`options`: IServiceArgs, `transaction?`: any): *Promise‹any›*

*Defined in [src/service/common/model.ts:15](https://github.com/claukers/miqro-sequelize/blob/4b86ec0/src/service/common/model.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | IServiceArgs |
`transaction?` | any |

**Returns:** *Promise‹any›*

___

###  get

▸ **get**(`options`: IServiceArgs, `transaction?`: any, `skipLocked?`: boolean): *Promise‹any›*

*Defined in [src/service/common/model.ts:7](https://github.com/claukers/miqro-sequelize/blob/4b86ec0/src/service/common/model.ts#L7)*

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

*Defined in [src/service/common/model.ts:13](https://github.com/claukers/miqro-sequelize/blob/4b86ec0/src/service/common/model.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | IServiceArgs |
`transaction?` | any |

**Returns:** *Promise‹any›*

___

###  post

▸ **post**(`options`: IServiceArgs, `transaction?`: any): *Promise‹any›*

*Defined in [src/service/common/model.ts:9](https://github.com/claukers/miqro-sequelize/blob/4b86ec0/src/service/common/model.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | IServiceArgs |
`transaction?` | any |

**Returns:** *Promise‹any›*

___

###  put

▸ **put**(`options`: IServiceArgs, `transaction?`: any): *Promise‹any›*

*Defined in [src/service/common/model.ts:11](https://github.com/claukers/miqro-sequelize/blob/4b86ec0/src/service/common/model.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | IServiceArgs |
`transaction?` | any |

**Returns:** *Promise‹any›*
