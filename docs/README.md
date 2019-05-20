
#  simple-signtool

## Index

### Interfaces

* [IRFCTimeStamp](interfaces/irfctimestamp.md)
* [ISignCertFile](interfaces/isigncertfile.md)
* [ISignOptions](interfaces/isignoptions.md)

### Functions

* [flatten](#flatten)
* [sign](#sign)

---

## Functions

<a id="flatten"></a>

###  flatten

▸ **flatten**(obj: *[ISignOptions](interfaces/isignoptions.md)*, parentKey?: *`undefined` \| `string`*, flatObj?: *`object`*): `object`

*Defined in utils/flatten.ts:3*

**Parameters:**

**obj: [ISignOptions](interfaces/isignoptions.md)**

**`Optional` parentKey: `undefined` \| `string`**

**`Default value` flatObj: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` rawString | `undefined` \| `string` |

**Returns:** `object`

___
<a id="sign"></a>

###  sign

▸ **sign**(target: *`string`*, signOptions: *[ISignOptions](interfaces/isignoptions.md)*): `void`

*Defined in [sign/index.ts:11](https://github.com/djbreen7/simple-signtool/blob/f3f0140/src/sign/index.ts#L11)*

Sign a specified file with given signtool options

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| target | `string` |  The target file that will be signed |
| signOptions | [ISignOptions](interfaces/isignoptions.md) |  Sign options |

**Returns:** `void`

___

