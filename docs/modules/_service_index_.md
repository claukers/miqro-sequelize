[miqro-sequelize](../README.md) › [Globals](../globals.md) › ["service/index"](_service_index_.md)

# Module: "service/index"

## Index

### Classes

* [AbstractModelService](../classes/_service_index_.abstractmodelservice.md)
* [FakeDeleteModelService](../classes/_service_index_.fakedeletemodelservice.md)
* [ModelService](../classes/_service_index_.modelservice.md)
* [PostListModelService](../classes/_service_index_.postlistmodelservice.md)

### Interfaces

* [IModelService](../interfaces/_service_index_.imodelservice.md)

### Variables

* [Op](_service_index_.md#const-op)

### Functions

* [parseIncludeQuery](_service_index_.md#const-parseincludequery)

## Variables

### `Const` Op

• **Op**: *object*

Defined in node_modules/sequelize/types/lib/operators.d.ts:4

object that holds all operator symbols

#### Type declaration:

* **adjacent**: *keyof symbol*

* **all**: *keyof symbol*

* **and**: *keyof symbol*

* **any**: *keyof symbol*

* **between**: *keyof symbol*

* **col**: *keyof symbol*

* **contained**: *keyof symbol*

* **contains**: *keyof symbol*

* **endsWith**: *keyof symbol*

* **eq**: *keyof symbol*

* **gt**: *keyof symbol*

* **gte**: *keyof symbol*

* **iLike**: *keyof symbol*

* **iRegexp**: *keyof symbol*

* **in**: *keyof symbol*

* **is**: *keyof symbol*

* **like**: *keyof symbol*

* **lt**: *keyof symbol*

* **lte**: *keyof symbol*

* **ne**: *keyof symbol*

* **noExtendLeft**: *keyof symbol*

* **noExtendRight**: *keyof symbol*

* **not**: *keyof symbol*

* **notBetween**: *keyof symbol*

* **notILike**: *keyof symbol*

* **notIRegexp**: *keyof symbol*

* **notIn**: *keyof symbol*

* **notLike**: *keyof symbol*

* **notRegexp**: *keyof symbol*

* **or**: *keyof symbol*

* **overlap**: *keyof symbol*

* **placeholder**: *keyof symbol*

* **regexp**: *keyof symbol*

* **startsWith**: *keyof symbol*

* **strictLeft**: *keyof symbol*

* **strictRight**: *keyof symbol*

* **substring**: *keyof symbol*

* **values**: *keyof symbol*

## Functions

### `Const` parseIncludeQuery

▸ **parseIncludeQuery**(`includeQuery`: any[]): *any[]*

*Defined in [src/service/common/model.ts:18](https://github.com/claukers/miqro-sequelize/blob/8846d04/src/service/common/model.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`includeQuery` | any[] |

**Returns:** *any[]*
