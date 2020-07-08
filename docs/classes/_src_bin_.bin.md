[@nju33/jsonbin-api](../README.md) › [Globals](../globals.md) › ["src/bin"](../modules/_src_bin_.md) › [Bin](_src_bin_.bin.md)

# Class: Bin

## Hierarchy

* **Bin**

## Implements

* [TraitBin](../interfaces/_src_bin_.traitbin.md)

## Index

### Constructors

* [constructor](_src_bin_.bin.md#constructor)

### Properties

* [fetch](_src_bin_.bin.md#private-readonly-fetch)

### Methods

* [delete](_src_bin_.bin.md#delete)
* [get](_src_bin_.bin.md#get)
* [post](_src_bin_.bin.md#post)
* [put](_src_bin_.bin.md#put)
* [update](_src_bin_.bin.md#update)

## Constructors

###  constructor

\+ **new Bin**(`fetch`: [FetchFn](../modules/_src_bin_.md#fetchfn)): *[Bin](_src_bin_.bin.md)*

*Defined in [src/bin.ts:110](https://github.com/nju33/jsonbin-api/blob/e00ecf8/src/bin.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`fetch` | [FetchFn](../modules/_src_bin_.md#fetchfn) |

**Returns:** *[Bin](_src_bin_.bin.md)*

## Properties

### `Private` `Readonly` fetch

• **fetch**: *[FetchFn](../modules/_src_bin_.md#fetchfn)*

*Defined in [src/bin.ts:111](https://github.com/nju33/jsonbin-api/blob/e00ecf8/src/bin.ts#L111)*

## Methods

###  delete

▸ **delete**(`__namedParameters`: object): *TaskEither‹ReturnType‹typeof handleFetchError›, [DeleteResultBin](../modules/_src_bin_.md#deleteresultbin)›*

*Defined in [src/bin.ts:113](https://github.com/nju33/jsonbin-api/blob/e00ecf8/src/bin.ts#L113)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`id` | string |
`secretKey` | string |

**Returns:** *TaskEither‹ReturnType‹typeof handleFetchError›, [DeleteResultBin](../modules/_src_bin_.md#deleteresultbin)›*

___

###  get

▸ **get**‹**R**›(`__namedParameters`: object): *TaskEither‹ReturnType‹typeof handleFetchError›, [GetResultBin](../modules/_src_bin_.md#getresultbin)‹R››*

*Defined in [src/bin.ts:142](https://github.com/nju33/jsonbin-api/blob/e00ecf8/src/bin.ts#L142)*

**Type parameters:**

▪ **R**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`id` | string |
`secretKey` | string |

**Returns:** *TaskEither‹ReturnType‹typeof handleFetchError›, [GetResultBin](../modules/_src_bin_.md#getresultbin)‹R››*

___

###  post

▸ **post**‹**R**›(`__namedParameters`: object): *TaskEither‹ReturnType‹typeof handleFetchError›, [PostResultBin](../modules/_src_bin_.md#postresultbin)‹R››*

*Defined in [src/bin.ts:171](https://github.com/nju33/jsonbin-api/blob/e00ecf8/src/bin.ts#L171)*

**Type parameters:**

▪ **R**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`binPrivate` | undefined &#124; false &#124; true |
`collectionId` | undefined &#124; string |
`record` | R |
`secretKey` | string |

**Returns:** *TaskEither‹ReturnType‹typeof handleFetchError›, [PostResultBin](../modules/_src_bin_.md#postresultbin)‹R››*

___

###  put

▸ **put**‹**R**›(`__namedParameters`: object): *TaskEither‹ReturnType‹typeof handleFetchError›, [PutResultBin](../modules/_src_bin_.md#putresultbin)‹R››*

*Defined in [src/bin.ts:213](https://github.com/nju33/jsonbin-api/blob/e00ecf8/src/bin.ts#L213)*

**Type parameters:**

▪ **R**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`binVersioning` | undefined &#124; false &#124; true |
`id` | string |
`record` | R |
`secretKey` | string |

**Returns:** *TaskEither‹ReturnType‹typeof handleFetchError›, [PutResultBin](../modules/_src_bin_.md#putresultbin)‹R››*

___

###  update

▸ **update**‹**R**›(`__namedParameters`: object, `strategyFn`: [UpdateStrategyFn](../modules/_src_bin_.md#updatestrategyfn)‹R›): *TaskEither‹ReturnType‹typeof handleFetchError›, [PutResultBin](../modules/_src_bin_.md#putresultbin)‹R››*

*Defined in [src/bin.ts:251](https://github.com/nju33/jsonbin-api/blob/e00ecf8/src/bin.ts#L251)*

**Type parameters:**

▪ **R**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`binVersioning` | undefined &#124; false &#124; true |
`id` | string |
`secretKey` | string |

▪ **strategyFn**: *[UpdateStrategyFn](../modules/_src_bin_.md#updatestrategyfn)‹R›*

**Returns:** *TaskEither‹ReturnType‹typeof handleFetchError›, [PutResultBin](../modules/_src_bin_.md#putresultbin)‹R››*
