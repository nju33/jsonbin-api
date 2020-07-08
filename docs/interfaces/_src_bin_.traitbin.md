[@nju33/jsonbin-api](../README.md) › [Globals](../globals.md) › ["src/bin"](../modules/_src_bin_.md) › [TraitBin](_src_bin_.traitbin.md)

# Interface: TraitBin

## Hierarchy

* **TraitBin**

## Implemented by

* [Bin](../classes/_src_bin_.bin.md)

## Index

### Properties

* [delete](_src_bin_.traitbin.md#delete)
* [get](_src_bin_.traitbin.md#get)
* [post](_src_bin_.traitbin.md#post)
* [put](_src_bin_.traitbin.md#put)
* [update](_src_bin_.traitbin.md#update)

## Properties

###  delete

• **delete**: *function*

*Defined in [src/bin.ts:64](https://github.com/nju33/jsonbin-api/blob/e00ecf8/src/bin.ts#L64)*

削除

#### Type declaration:

▸ (`options`: object): *TaskEither‹ReturnType‹typeof handleFetchError›, [DeleteResultBin](../modules/_src_bin_.md#deleteresultbin)›*

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`id` | string |
`secretKey` | string |

___

###  get

• **get**: *function*

*Defined in [src/bin.ts:72](https://github.com/nju33/jsonbin-api/blob/e00ecf8/src/bin.ts#L72)*

取得

#### Type declaration:

▸ ‹**R**›(`options`: object): *TaskEither‹ReturnType‹typeof handleFetchError›, [GetResultBin](../modules/_src_bin_.md#getresultbin)‹R››*

**Type parameters:**

▪ **R**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`id` | string |
`secretKey` | string |

___

###  post

• **post**: *function*

*Defined in [src/bin.ts:80](https://github.com/nju33/jsonbin-api/blob/e00ecf8/src/bin.ts#L80)*

作成

#### Type declaration:

▸ ‹**R**›(`options`: object): *TaskEither‹ReturnType‹typeof handleFetchError›, [PostResultBin](../modules/_src_bin_.md#postresultbin)‹R››*

**Type parameters:**

▪ **R**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`binPrivate?` | undefined &#124; false &#124; true |
`collectionId?` | undefined &#124; string |
`record` | R |
`secretKey` | string |

___

###  put

• **put**: *function*

*Defined in [src/bin.ts:90](https://github.com/nju33/jsonbin-api/blob/e00ecf8/src/bin.ts#L90)*

更新

#### Type declaration:

▸ ‹**R**›(`options`: object): *TaskEither‹ReturnType‹typeof handleFetchError›, [PutResultBin](../modules/_src_bin_.md#putresultbin)‹R››*

**Type parameters:**

▪ **R**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`binVersioning?` | undefined &#124; false &#124; true |
`id` | string |
`record` | R |
`secretKey` | string |

___

###  update

• **update**: *function*

*Defined in [src/bin.ts:100](https://github.com/nju33/jsonbin-api/blob/e00ecf8/src/bin.ts#L100)*

取得を更新を一度に行う

#### Type declaration:

▸ ‹**R**›(`options`: object, `strategyFn`: [UpdateStrategyFn](../modules/_src_bin_.md#updatestrategyfn)‹R›): *TaskEither‹ReturnType‹typeof handleFetchError›, [PutResultBin](../modules/_src_bin_.md#putresultbin)‹R››*

**Type parameters:**

▪ **R**

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`binVersioning?` | undefined &#124; false &#124; true |
`id` | string |
`secretKey` | string |

▪ **strategyFn**: *[UpdateStrategyFn](../modules/_src_bin_.md#updatestrategyfn)‹R›*
