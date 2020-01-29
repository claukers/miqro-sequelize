[miqro-sequelize](../README.md) › [Globals](../globals.md) › ["db/index"](../modules/_db_index_.md) › [Database](_db_index_.database.md)

# Class: Database

## Hierarchy

* EventEmitter

  ↳ **Database**

## Index

### Constructors

* [constructor](_db_index_.database.md#constructor)

### Properties

* [models](_db_index_.database.md#models)
* [sequelize](_db_index_.database.md#sequelize)
* [state](_db_index_.database.md#private-state)
* [defaultMaxListeners](_db_index_.database.md#static-defaultmaxlisteners)
* [events](_db_index_.database.md#static-events)
* [instance](_db_index_.database.md#static-private-instance)

### Methods

* [addListener](_db_index_.database.md#addlistener)
* [emit](_db_index_.database.md#emit)
* [eventNames](_db_index_.database.md#eventnames)
* [getMaxListeners](_db_index_.database.md#getmaxlisteners)
* [listenerCount](_db_index_.database.md#listenercount)
* [listeners](_db_index_.database.md#listeners)
* [off](_db_index_.database.md#off)
* [on](_db_index_.database.md#on)
* [once](_db_index_.database.md#once)
* [prependListener](_db_index_.database.md#prependlistener)
* [prependOnceListener](_db_index_.database.md#prependoncelistener)
* [query](_db_index_.database.md#query)
* [rawListeners](_db_index_.database.md#rawlisteners)
* [removeAllListeners](_db_index_.database.md#removealllisteners)
* [removeListener](_db_index_.database.md#removelistener)
* [setMaxListeners](_db_index_.database.md#setmaxlisteners)
* [start](_db_index_.database.md#start)
* [stateChange](_db_index_.database.md#private-statechange)
* [stop](_db_index_.database.md#stop)
* [transaction](_db_index_.database.md#transaction)
* [getInstance](_db_index_.database.md#static-getinstance)
* [listenerCount](_db_index_.database.md#static-listenercount)

## Constructors

###  constructor

\+ **new Database**(): *[Database](_db_index_.database.md)*

*Defined in [src/db/db.ts:26](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/db/db.ts#L26)*

**Returns:** *[Database](_db_index_.database.md)*

## Properties

###  models

• **models**: *[IModelMap](../interfaces/_db_db_.imodelmap.md)*

*Defined in [src/db/db.ts:24](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/db/db.ts#L24)*

___

###  sequelize

• **sequelize**: *Sequelize*

*Defined in [src/db/db.ts:25](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/db/db.ts#L25)*

___

### `Private` state

• **state**: *[DataBaseState](../modules/_db_db_.md#databasestate)* = "stopped"

*Defined in [src/db/db.ts:26](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/db/db.ts#L26)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [Database](_db_db_.database.md).[defaultMaxListeners](_db_db_.database.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:19

___

### `Static` events

▪ **events**: *[DataBaseState](../modules/_db_db_.md#databasestate)[]* = ["stopped", "starting", "started", "startstop", "error"]

*Defined in [src/db/db.ts:16](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/db/db.ts#L16)*

___

### `Static` `Private` instance

▪ **instance**: *[Database](_db_db_.database.md)* = null

*Defined in [src/db/db.ts:23](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/db/db.ts#L23)*

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Database](_db_db_.database.md).[addListener](_db_db_.database.md#addlistener)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:21

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

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:33

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

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:34

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [Database](_db_db_.database.md).[getMaxListeners](_db_db_.database.md#getmaxlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:30

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [Database](_db_db_.database.md).[listenerCount](_db_db_.database.md#static-listenercount)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:35

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [Database](_db_db_.database.md).[listeners](_db_db_.database.md#listeners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Database](_db_db_.database.md).[off](_db_db_.database.md#off)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:27

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

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:22

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

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:23

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

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:24

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

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:25

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

*Defined in [src/db/db.ts:51](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/db/db.ts#L51)*

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

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [Database](_db_db_.database.md).[removeAllListeners](_db_db_.database.md#removealllisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Database](_db_db_.database.md).[removeListener](_db_db_.database.md#removelistener)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:26

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

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:29

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [src/db/db.ts:58](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/db/db.ts#L58)*

**Returns:** *Promise‹void›*

___

### `Private` stateChange

▸ **stateChange**(`state`: [DataBaseState](../modules/_db_db_.md#databasestate), `args?`: any): *void*

*Defined in [src/db/db.ts:103](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/db/db.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [DataBaseState](../modules/_db_db_.md#databasestate) |
`args?` | any |

**Returns:** *void*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [src/db/db.ts:86](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/db/db.ts#L86)*

**Returns:** *Promise‹void›*

___

###  transaction

▸ **transaction**(`transactionCB`: function): *Promise‹void›*

*Defined in [src/db/db.ts:46](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/db/db.ts#L46)*

**Parameters:**

▪ **transactionCB**: *function*

▸ (`t`: Transaction): *PromiseLike‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`t` | Transaction |

**Returns:** *Promise‹void›*

___

### `Static` getInstance

▸ **getInstance**(): *[Database](_db_db_.database.md)*

*Defined in [src/db/db.ts:17](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/db/db.ts#L17)*

**Returns:** *[Database](_db_db_.database.md)*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [Database](_db_db_.database.md).[listenerCount](_db_db_.database.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:18

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
