[miqro-sequelize](../README.md) › [Globals](../globals.md) › ["index"](_index_.md)

# Module: "index"

## Index

### Classes

* [AbstractModelService](../classes/_index_.abstractmodelservice.md)
* [Database](../classes/_index_.database.md)
* [FakeDeleteModelService](../classes/_index_.fakedeletemodelservice.md)
* [ModelService](../classes/_index_.modelservice.md)
* [PostListModelService](../classes/_index_.postlistmodelservice.md)

### Interfaces

* [IModelService](../interfaces/_index_.imodelservice.md)

### Variables

* [Op](_index_.md#const-op)

### Functions

* [makemigrations](_index_.md#const-makemigrations)
* [migrate](_index_.md#const-migrate)
* [parseIncludeQuery](_index_.md#const-parseincludequery)
* [seed](_index_.md#const-seed)

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

### `Const` makemigrations

▸ **makemigrations**(): *string*

*Defined in [src/db/migrations.ts:9](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/db/migrations.ts#L9)*

**Returns:** *string*

___

### `Const` migrate

▸ **migrate**(): *void*

*Defined in [src/db/migrations.ts:17](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/db/migrations.ts#L17)*

**Returns:** *void*

___

### `Const` parseIncludeQuery

▸ **parseIncludeQuery**(`includeQuery`: any[]): *any[]*

*Defined in [src/service/common/model.ts:18](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/service/common/model.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`includeQuery` | any[] |

**Returns:** *any[]*

___

### `Const` seed

▸ **seed**(): *void*

*Defined in [src/db/migrations.ts:36](https://github.com/claukers/miqro-sequelize/blob/a92aa7e/src/db/migrations.ts#L36)*

**Returns:** *void*
