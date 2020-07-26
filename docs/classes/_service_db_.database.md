[@miqro/database](../README.md) › [Globals](../globals.md) › ["service/db"](../modules/_service_db_.md) › [Database](_service_db_.database.md)

# Class: Database

## Hierarchy

* EventEmitter

  ↳ **Database**

## Index

### Constructors

* [constructor](_service_db_.database.md#constructor)

### Properties

* [Op](_service_db_.database.md#op)
* [models](_service_db_.database.md#models)
* [sequelize](_service_db_.database.md#sequelize)
* [state](_service_db_.database.md#private-state)
* [defaultMaxListeners](_service_db_.database.md#static-defaultmaxlisteners)
* [errorMonitor](_service_db_.database.md#static-errormonitor)
* [events](_service_db_.database.md#static-events)
* [instance](_service_db_.database.md#static-private-instance)

### Methods

* [addListener](_service_db_.database.md#addlistener)
* [emit](_service_db_.database.md#emit)
* [eventNames](_service_db_.database.md#eventnames)
* [getMaxListeners](_service_db_.database.md#getmaxlisteners)
* [listenerCount](_service_db_.database.md#listenercount)
* [listeners](_service_db_.database.md#listeners)
* [off](_service_db_.database.md#off)
* [on](_service_db_.database.md#on)
* [once](_service_db_.database.md#once)
* [prependListener](_service_db_.database.md#prependlistener)
* [prependOnceListener](_service_db_.database.md#prependoncelistener)
* [query](_service_db_.database.md#query)
* [rawListeners](_service_db_.database.md#rawlisteners)
* [removeAllListeners](_service_db_.database.md#removealllisteners)
* [removeListener](_service_db_.database.md#removelistener)
* [setMaxListeners](_service_db_.database.md#setmaxlisteners)
* [start](_service_db_.database.md#start)
* [stateChange](_service_db_.database.md#private-statechange)
* [stop](_service_db_.database.md#stop)
* [transaction](_service_db_.database.md#transaction)
* [getInstance](_service_db_.database.md#static-getinstance)
* [listenerCount](_service_db_.database.md#static-listenercount)

## Constructors

###  constructor

\+ **new Database**(): *[Database](_service_db_.database.md)*

*Overrides void*

*Defined in [src/service/db.ts:25](https://github.com/claukers/miqro-sequelize/blob/8158581/src/service/db.ts#L25)*

**Returns:** *[Database](_service_db_.database.md)*

## Properties

###  Op

• **Op**: *any*

*Defined in [src/service/db.ts:24](https://github.com/claukers/miqro-sequelize/blob/8158581/src/service/db.ts#L24)*

___

###  models

• **models**: *SimpleMap‹any›*

*Defined in [src/service/db.ts:22](https://github.com/claukers/miqro-sequelize/blob/8158581/src/service/db.ts#L22)*

___

###  sequelize

• **sequelize**: *any*

*Defined in [src/service/db.ts:23](https://github.com/claukers/miqro-sequelize/blob/8158581/src/service/db.ts#L23)*

___

### `Private` state

• **state**: *[DataBaseState](../modules/_service_db_.md#databasestate)* = "stopped"

*Defined in [src/service/db.ts:25](https://github.com/claukers/miqro-sequelize/blob/8158581/src/service/db.ts#L25)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [Database](_service_db_.database.md).[defaultMaxListeners](_service_db_.database.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:45

___

### `Static` errorMonitor

▪ **errorMonitor**: *keyof symbol*

*Inherited from [Database](_service_db_.database.md).[errorMonitor](_service_db_.database.md#static-errormonitor)*

Defined in node_modules/@types/node/events.d.ts:55

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

___

### `Static` events

▪ **events**: *[DataBaseState](../modules/_service_db_.md#databasestate)[]* = ["stopped", "starting", "started", "startstop", "error"]

*Defined in [src/service/db.ts:12](https://github.com/claukers/miqro-sequelize/blob/8158581/src/service/db.ts#L12)*

___

### `Static` `Private` instance

▪ **instance**: *[Database](_service_db_.database.md)* = null

*Defined in [src/service/db.ts:21](https://github.com/claukers/miqro-sequelize/blob/8158581/src/service/db.ts#L21)*

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Database](_service_db_.database.md).[addListener](_service_db_.database.md#addlistener)*

Defined in node_modules/@types/node/events.d.ts:62

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

*Inherited from [Database](_service_db_.database.md).[emit](_service_db_.database.md#emit)*

Defined in node_modules/@types/node/events.d.ts:72

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [Database](_service_db_.database.md).[eventNames](_service_db_.database.md#eventnames)*

Defined in node_modules/@types/node/events.d.ts:77

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [Database](_service_db_.database.md).[getMaxListeners](_service_db_.database.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:69

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [Database](_service_db_.database.md).[listenerCount](_service_db_.database.md#listenercount)*

Defined in node_modules/@types/node/events.d.ts:73

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [Database](_service_db_.database.md).[listeners](_service_db_.database.md#listeners)*

Defined in node_modules/@types/node/events.d.ts:70

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Database](_service_db_.database.md).[off](_service_db_.database.md#off)*

Defined in node_modules/@types/node/events.d.ts:66

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

*Inherited from [Database](_service_db_.database.md).[on](_service_db_.database.md#on)*

Defined in node_modules/@types/node/events.d.ts:63

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

*Inherited from [Database](_service_db_.database.md).[once](_service_db_.database.md#once)*

Defined in node_modules/@types/node/events.d.ts:64

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

*Inherited from [Database](_service_db_.database.md).[prependListener](_service_db_.database.md#prependlistener)*

Defined in node_modules/@types/node/events.d.ts:75

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

*Inherited from [Database](_service_db_.database.md).[prependOnceListener](_service_db_.database.md#prependoncelistener)*

Defined in node_modules/@types/node/events.d.ts:76

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

*Defined in [src/service/db.ts:60](https://github.com/claukers/miqro-sequelize/blob/8158581/src/service/db.ts#L60)*

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

*Inherited from [Database](_service_db_.database.md).[rawListeners](_service_db_.database.md#rawlisteners)*

Defined in node_modules/@types/node/events.d.ts:71

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [Database](_service_db_.database.md).[removeAllListeners](_service_db_.database.md#removealllisteners)*

Defined in node_modules/@types/node/events.d.ts:67

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Database](_service_db_.database.md).[removeListener](_service_db_.database.md#removelistener)*

Defined in node_modules/@types/node/events.d.ts:65

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

*Inherited from [Database](_service_db_.database.md).[setMaxListeners](_service_db_.database.md#setmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:68

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [src/service/db.ts:68](https://github.com/claukers/miqro-sequelize/blob/8158581/src/service/db.ts#L68)*

**Returns:** *Promise‹void›*

___

### `Private` stateChange

▸ **stateChange**(`state`: [DataBaseState](../modules/_service_db_.md#databasestate), `args?`: any): *void*

*Defined in [src/service/db.ts:113](https://github.com/claukers/miqro-sequelize/blob/8158581/src/service/db.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [DataBaseState](../modules/_service_db_.md#databasestate) |
`args?` | any |

**Returns:** *void*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [src/service/db.ts:96](https://github.com/claukers/miqro-sequelize/blob/8158581/src/service/db.ts#L96)*

**Returns:** *Promise‹void›*

___

###  transaction

▸ **transaction**(`transactionCB`: function): *Promise‹any›*

*Defined in [src/service/db.ts:53](https://github.com/claukers/miqro-sequelize/blob/8158581/src/service/db.ts#L53)*

**Parameters:**

▪ **transactionCB**: *function*

▸ (`t`: any): *PromiseLike‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`t` | any |

**Returns:** *Promise‹any›*

___

### `Static` getInstance

▸ **getInstance**(): *[Database](_service_db_.database.md)*

*Defined in [src/service/db.ts:14](https://github.com/claukers/miqro-sequelize/blob/8158581/src/service/db.ts#L14)*

**Returns:** *[Database](_service_db_.database.md)*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [Database](_service_db_.database.md).[listenerCount](_service_db_.database.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:44

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
