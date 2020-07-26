[@miqro/database](../README.md) › [Globals](../globals.md) › ["service/model"](../modules/_service_model_.md) › [ModelServiceInterface](_service_model_.modelserviceinterface.md)

# Interface: ModelServiceInterface

## Hierarchy

* **ModelServiceInterface**

## Implemented by

* [AbstractModelService](../classes/_service_amodel_.abstractmodelservice.md)
* [FakeDeleteModelService](../classes/_service_deleted_.fakedeletemodelservice.md)
* [ModelService](../classes/_service_smodel_.modelservice.md)
* [PostListModelService](../classes/_service_postlist_.postlistmodelservice.md)

## Index

### Methods

* [delete](_service_model_.modelserviceinterface.md#delete)
* [get](_service_model_.modelserviceinterface.md#get)
* [patch](_service_model_.modelserviceinterface.md#patch)
* [post](_service_model_.modelserviceinterface.md#post)
* [put](_service_model_.modelserviceinterface.md#put)

## Methods

###  delete

▸ **delete**(`options`: [ModelServiceArgs](_service_model_.modelserviceargs.md), `transaction?`: any): *Promise‹any›*

*Defined in [src/service/model.ts:19](https://github.com/claukers/miqro-sequelize/blob/373bc8c/src/service/model.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ModelServiceArgs](_service_model_.modelserviceargs.md) |
`transaction?` | any |

**Returns:** *Promise‹any›*

___

###  get

▸ **get**(`options`: [ModelServiceArgs](_service_model_.modelserviceargs.md), `transaction?`: any, `skipLocked?`: boolean): *Promise‹any›*

*Defined in [src/service/model.ts:11](https://github.com/claukers/miqro-sequelize/blob/373bc8c/src/service/model.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ModelServiceArgs](_service_model_.modelserviceargs.md) |
`transaction?` | any |
`skipLocked?` | boolean |

**Returns:** *Promise‹any›*

___

###  patch

▸ **patch**(`options`: [ModelServiceArgs](_service_model_.modelserviceargs.md), `transaction?`: any): *Promise‹any›*

*Defined in [src/service/model.ts:17](https://github.com/claukers/miqro-sequelize/blob/373bc8c/src/service/model.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ModelServiceArgs](_service_model_.modelserviceargs.md) |
`transaction?` | any |

**Returns:** *Promise‹any›*

___

###  post

▸ **post**(`options`: [ModelServiceArgs](_service_model_.modelserviceargs.md), `transaction?`: any): *Promise‹any›*

*Defined in [src/service/model.ts:13](https://github.com/claukers/miqro-sequelize/blob/373bc8c/src/service/model.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ModelServiceArgs](_service_model_.modelserviceargs.md) |
`transaction?` | any |

**Returns:** *Promise‹any›*

___

###  put

▸ **put**(`options`: [ModelServiceArgs](_service_model_.modelserviceargs.md), `transaction?`: any): *Promise‹any›*

*Defined in [src/service/model.ts:15](https://github.com/claukers/miqro-sequelize/blob/373bc8c/src/service/model.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ModelServiceArgs](_service_model_.modelserviceargs.md) |
`transaction?` | any |

**Returns:** *Promise‹any›*
