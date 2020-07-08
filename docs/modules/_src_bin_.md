[@nju33/jsonbin-api](../README.md) › [Globals](../globals.md) › ["src/bin"](_src_bin_.md)

# Module: "src/bin"

## Index

### Classes

* [Bin](../classes/_src_bin_.bin.md)

### Interfaces

* [DeleteResultMetadata](../interfaces/_src_bin_.deleteresultmetadata.md)
* [GetResultMetadata](../interfaces/_src_bin_.getresultmetadata.md)
* [PostResultMetadata](../interfaces/_src_bin_.postresultmetadata.md)
* [PutResultMetadata](../interfaces/_src_bin_.putresultmetadata.md)
* [ResultBin](../interfaces/_src_bin_.resultbin.md)
* [TraitBin](../interfaces/_src_bin_.traitbin.md)

### Type aliases

* [DeleteResultBin](_src_bin_.md#deleteresultbin)
* [FetchFn](_src_bin_.md#fetchfn)
* [GetResultBin](_src_bin_.md#getresultbin)
* [PostResultBin](_src_bin_.md#postresultbin)
* [PutResultBin](_src_bin_.md#putresultbin)
* [UpdateStrategyFn](_src_bin_.md#updatestrategyfn)

### Variables

* [JSON_BIN_BASE_URL](_src_bin_.md#const-json_bin_base_url)

## Type aliases

###  DeleteResultBin

Ƭ **DeleteResultBin**: *Omit‹[ResultBin](../interfaces/_src_bin_.resultbin.md)‹[DeleteResultMetadata](../interfaces/_src_bin_.deleteresultmetadata.md), unknown›, "record"› & object*

*Defined in [src/bin.ts:51](https://github.com/nju33/jsonbin-api/blob/e00ecf8/src/bin.ts#L51)*

___

###  FetchFn

Ƭ **FetchFn**: *typeof fetch*

*Defined in [src/bin.ts:56](https://github.com/nju33/jsonbin-api/blob/e00ecf8/src/bin.ts#L56)*

___

###  GetResultBin

Ƭ **GetResultBin**: *[ResultBin](../interfaces/_src_bin_.resultbin.md)‹[GetResultMetadata](../interfaces/_src_bin_.getresultmetadata.md), R›*

*Defined in [src/bin.ts:49](https://github.com/nju33/jsonbin-api/blob/e00ecf8/src/bin.ts#L49)*

___

###  PostResultBin

Ƭ **PostResultBin**: *[ResultBin](../interfaces/_src_bin_.resultbin.md)‹[PostResultMetadata](../interfaces/_src_bin_.postresultmetadata.md), R›*

*Defined in [src/bin.ts:48](https://github.com/nju33/jsonbin-api/blob/e00ecf8/src/bin.ts#L48)*

___

###  PutResultBin

Ƭ **PutResultBin**: *[ResultBin](../interfaces/_src_bin_.resultbin.md)‹[PutResultMetadata](../interfaces/_src_bin_.putresultmetadata.md), R›*

*Defined in [src/bin.ts:50](https://github.com/nju33/jsonbin-api/blob/e00ecf8/src/bin.ts#L50)*

___

###  UpdateStrategyFn

Ƭ **UpdateStrategyFn**: *function*

*Defined in [src/bin.ts:58](https://github.com/nju33/jsonbin-api/blob/e00ecf8/src/bin.ts#L58)*

#### Type declaration:

▸ (`bin`: [GetResultBin](_src_bin_.md#getresultbin)‹R›): *R*

**Parameters:**

Name | Type |
------ | ------ |
`bin` | [GetResultBin](_src_bin_.md#getresultbin)‹R› |

## Variables

### `Const` JSON_BIN_BASE_URL

• **JSON_BIN_BASE_URL**: *"https://api.jsonbin.io/v3"* = "https://api.jsonbin.io/v3"

*Defined in [src/bin.ts:9](https://github.com/nju33/jsonbin-api/blob/e00ecf8/src/bin.ts#L9)*
