
#  simple-signtool

## Index

### Enumerations

* [SignOptionsFlag](enums/signoptionsflag.md)

### Interfaces

* [IRFCTimeStamp](interfaces/irfctimestamp.md)
* [ISignCertFile](interfaces/isigncertfile.md)
* [ISignOptions](interfaces/isignoptions.md)

### Functions

* [sign](#sign)

---

## Functions

<a id="sign"></a>

###  sign

▸ **sign**(target: *`string`*, signOptions: *[ISignOptions](interfaces/isignoptions.md)*): `void`

*Defined in [sign/sign.ts:11](https://github.com/djbreen7/simple-signtool/blob/866a0b7/src/sign/sign.ts#L11)*

Sign a specified file with given signtool options

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| target | `string` |  The target file that will be signed |
| signOptions | [ISignOptions](interfaces/isignoptions.md) |  Sign options |

**Returns:** `void`

___

