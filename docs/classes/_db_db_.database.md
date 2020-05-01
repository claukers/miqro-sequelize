[@miqro/database](../README.md) › [Globals](../globals.md) › ["db/db"](../modules/_db_db_.md) › [Database](_db_db_.database.md)

# Class: Database

## Hierarchy

* EventEmitter

  ↳ **Database**

## Index

### Constructors

* [constructor](_db_db_.database.md#constructor)

### Properties

* [models](_db_db_.database.md#models)
* [sequelize](_db_db_.database.md#sequelize)
* [state](_db_db_.database.md#private-state)
* [defaultMaxListeners](_db_db_.database.md#static-defaultmaxlisteners)
* [events](_db_db_.database.md#static-events)
* [instance](_db_db_.database.md#static-private-instance)

### Methods

* [addListener](_db_db_.database.md#addlistener)
* [emit](_db_db_.database.md#emit)
* [eventNames](_db_db_.database.md#eventnames)
* [getMaxListeners](_db_db_.database.md#getmaxlisteners)
* [listenerCount](_db_db_.database.md#listenercount)
* [listeners](_db_db_.database.md#listeners)
* [off](_db_db_.database.md#off)
* [on](_db_db_.database.md#on)
* [once](_db_db_.database.md#once)
* [prependListener](_db_db_.database.md#prependlistener)
* [prependOnceListener](_db_db_.database.md#prependoncelistener)
* [query](_db_db_.database.md#query)
* [rawListeners](_db_db_.database.md#rawlisteners)
* [removeAllListeners](_db_db_.database.md#removealllisteners)
* [removeListener](_db_db_.database.md#removelistener)
* [setMaxListeners](_db_db_.database.md#setmaxlisteners)
* [start](_db_db_.database.md#start)
* [stateChange](_db_db_.database.md#private-statechange)
* [stop](_db_db_.database.md#stop)
* [transaction](_db_db_.database.md#transaction)
* [getInstance](_db_db_.database.md#static-getinstance)
* [listenerCount](_db_db_.database.md#static-listenercount)

## Constructors

###  constructor

\+ **new Database**(): *[Database](_db_db_.database.md)*

*Overrides void*

*Defined in [src/db/db.ts:27](https://github.com/claukers/miqro-sequelize/blob/af574dd/src/db/db.ts#L27)*

**Returns:** *[Database](_db_db_.database.md)*

## Properties

###  models

• **models**: *[IModelMap](../modules/_db_db_.md#imodelmap)*

*Defined in [src/db/db.ts:25](https://github.com/claukers/miqro-sequelize/blob/af574dd/src/db/db.ts#L25)*

___

###  sequelize

• **sequelize**: *Sequelize*

*Defined in [src/db/db.ts:26](https://github.com/claukers/miqro-sequelize/blob/af574dd/src/db/db.ts#L26)*

___

### `Private` state

• **state**: *[DataBaseState](../modules/_db_db_.md#databasestate)* = "stopped"

*Defined in [src/db/db.ts:27](https://github.com/claukers/miqro-sequelize/blob/af574dd/src/db/db.ts#L27)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [Database](_db_db_.database.md).[defaultMaxListeners](_db_db_.database.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:45

___

### `Static` events

▪ **events**: *[DataBaseState](../modules/_db_db_.md#databasestate)[]* = ["stopped", "starting", "started", "startstop", "error"]

*Defined in [src/db/db.ts:15](https://github.com/claukers/miqro-sequelize/blob/af574dd/src/db/db.ts#L15)*

___

### `Static` `Private` instance

▪ **instance**: *[Database](_db_db_.database.md)* = null

*Defined in [src/db/db.ts:24](https://github.com/claukers/miqro-sequelize/blob/af574dd/src/db/db.ts#L24)*

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Database](_db_db_.database.md).[addListener](_db_db_.database.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:554

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [Database](_db_db_.database.md).[emit](_db_db_.database.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:564

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [Database](_db_db_.database.md).[eventNames](_db_db_.database.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:569

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [Database](_db_db_.database.md).[getMaxListeners](_db_db_.database.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:561

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [Database](_db_db_.database.md).[listenerCount](_db_db_.database.md#listenercount)*

Defined in node_modules/@types/node/globals.d.ts:565

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [Database](_db_db_.database.md).[listeners](_db_db_.database.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:562

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Database](_db_db_.database.md).[off](_db_db_.database.md#off)*

Defined in node_modules/@types/node/globals.d.ts:558

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Database](_db_db_.database.md).[on](_db_db_.database.md#on)*

Defined in node_modules/@types/node/globals.d.ts:555

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Database](_db_db_.database.md).[once](_db_db_.database.md#once)*

Defined in node_modules/@types/node/globals.d.ts:556

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Database](_db_db_.database.md).[prependListener](_db_db_.database.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:567

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Database](_db_db_.database.md).[prependOnceListener](_db_db_.database.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:568

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  query

▸ **query**(`q`: object, `t?`: any): *Promise‹any›*

*Defined in [src/db/db.ts:55](https://github.com/claukers/miqro-sequelize/blob/af574dd/src/db/db.ts#L55)*

**Parameters:**

▪ **q**: *object*

Name | Type |
------ | ------ |
`query` | string |
`values` | any[] |

▪`Optional`  **t**: *any*

**Returns:** *Promise‹any›*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [Database](_db_db_.database.md).[rawListeners](_db_db_.database.md#rawlisteners)*

Defined in node_modules/@types/node/globals.d.ts:563

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [Database](_db_db_.database.md).[removeAllListeners](_db_db_.database.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:559

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Database](_db_db_.database.md).[removeListener](_db_db_.database.md#removelistener)*

Defined in node_modules/@types/node/globals.d.ts:557

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [Database](_db_db_.database.md).[setMaxListeners](_db_db_.database.md#setmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:560

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [src/db/db.ts:63](https://github.com/claukers/miqro-sequelize/blob/af574dd/src/db/db.ts#L63)*

**Returns:** *Promise‹void›*

___

### `Private` stateChange

▸ **stateChange**(`state`: [DataBaseState](../modules/_db_db_.md#databasestate), `args?`: any): *void*

*Defined in [src/db/db.ts:108](https://github.com/claukers/miqro-sequelize/blob/af574dd/src/db/db.ts#L108)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [DataBaseState](../modules/_db_db_.md#databasestate) |
`args?` | any |

**Returns:** *void*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [src/db/db.ts:91](https://github.com/claukers/miqro-sequelize/blob/af574dd/src/db/db.ts#L91)*

**Returns:** *Promise‹void›*

___

###  transaction

▸ **transaction**(`transactionCB`: function): *Promise‹any›*

*Defined in [src/db/db.ts:49](https://github.com/claukers/miqro-sequelize/blob/af574dd/src/db/db.ts#L49)*

**Parameters:**

▪ **transactionCB**: *function*

▸ (`t`: Transaction): *PromiseLike‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`t` | Transaction |

**Returns:** *Promise‹any›*

___

### `Static` getInstance

▸ **getInstance**(): *[Database](_db_db_.database.md)*

*Defined in [src/db/db.ts:17](https://github.com/claukers/miqro-sequelize/blob/af574dd/src/db/db.ts#L17)*

**Returns:** *[Database](_db_db_.database.md)*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [Database](_db_db_.database.md).[listenerCount](_db_db_.database.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:44

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
