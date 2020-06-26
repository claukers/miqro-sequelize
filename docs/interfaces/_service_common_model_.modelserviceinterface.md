[@miqro/database](../README.md) › [Globals](../globals.md) › ["service/common/model"](../modules/_service_common_model_.md) › [ModelServiceInterface](_service_common_model_.modelserviceinterface.md)

# Interface: ModelServiceInterface

## Hierarchy

* **ModelServiceInterface**

## Implemented by

* [AbstractModelService](../classes/_service_common_amodel_.abstractmodelservice.md)
* [FakeDeleteModelService](../classes/_service_deleted_.fakedeletemodelservice.md)
* [ModelService](../classes/_service_model_.modelservice.md)
* [PostListModelService](../classes/_service_postlist_.postlistmodelservice.md)

## Index

### Methods

* [delete](_service_common_model_.modelserviceinterface.md#delete)
* [get](_service_common_model_.modelserviceinterface.md#get)
* [patch](_service_common_model_.modelserviceinterface.md#patch)
* [post](_service_common_model_.modelserviceinterface.md#post)
* [put](_service_common_model_.modelserviceinterface.md#put)

## Methods

###  delete

▸ **delete**(`options`: [ModelServiceArgsInterface](_service_common_model_.modelserviceargsinterface.md), `transaction?`: any): *Promise‹any›*

*Defined in [src/service/common/model.ts:20](https://github.com/claukers/miqro-sequelize/blob/3348ef6/src/service/common/model.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ModelServiceArgsInterface](_service_common_model_.modelserviceargsinterface.md) |
`transaction?` | any |

**Returns:** *Promise‹any›*

___

###  get

▸ **get**(`options`: [ModelServiceArgsInterface](_service_common_model_.modelserviceargsinterface.md), `transaction?`: any, `skipLocked?`: boolean): *Promise‹any›*

*Defined in [src/service/common/model.ts:12](https://github.com/claukers/miqro-sequelize/blob/3348ef6/src/service/common/model.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ModelServiceArgsInterface](_service_common_model_.modelserviceargsinterface.md) |
`transaction?` | any |
`skipLocked?` | boolean |

**Returns:** *Promise‹any›*

___

###  patch

▸ **patch**(`options`: [ModelServiceArgsInterface](_service_common_model_.modelserviceargsinterface.md), `transaction?`: any): *Promise‹any›*

*Defined in [src/service/common/model.ts:18](https://github.com/claukers/miqro-sequelize/blob/3348ef6/src/service/common/model.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ModelServiceArgsInterface](_service_common_model_.modelserviceargsinterface.md) |
`transaction?` | any |

**Returns:** *Promise‹any›*

___

###  post

▸ **post**(`options`: [ModelServiceArgsInterface](_service_common_model_.modelserviceargsinterface.md), `transaction?`: any): *Promise‹any›*

*Defined in [src/service/common/model.ts:14](https://github.com/claukers/miqro-sequelize/blob/3348ef6/src/service/common/model.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ModelServiceArgsInterface](_service_common_model_.modelserviceargsinterface.md) |
`transaction?` | any |

**Returns:** *Promise‹any›*

___

###  put

▸ **put**(`options`: [ModelServiceArgsInterface](_service_common_model_.modelserviceargsinterface.md), `transaction?`: any): *Promise‹any›*

*Defined in [src/service/common/model.ts:16](https://github.com/claukers/miqro-sequelize/blob/3348ef6/src/service/common/model.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ModelServiceArgsInterface](_service_common_model_.modelserviceargsinterface.md) |
`transaction?` | any |

**Returns:** *Promise‹any›*
