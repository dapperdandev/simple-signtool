[simple-signtool](../README.md) > [ISignOptions](../interfaces/isignoptions.md)

# Interface: ISignOptions

## Hierarchy

**ISignOptions**

## Index

### Properties

* [auto](isignoptions.md#auto)
* [rawString](isignoptions.md#rawstring)
* [rfcTimeStampUrl](isignoptions.md#rfctimestampurl)

---

## Properties

<a id="auto"></a>

### `<Optional>` auto

**● auto**: *`undefined` \| `false` \| `true`*

*Defined in sign/signoptions.interface.ts:7*

Selects the best signing certificate automatically. If this option is not present, SignTool expects to find only one valid signing certificate.

___
<a id="rawstring"></a>

### `<Optional>` rawString

**● rawString**: *`undefined` \| `string`*

*Defined in sign/signoptions.interface.ts:3*

Raw string of arguments (simple-signtool won't provide flags)

___
<a id="rfctimestampurl"></a>

### `<Optional>` rfcTimeStampUrl

**● rfcTimeStampUrl**: *`undefined` \| `string`*

*Defined in sign/signoptions.interface.ts:13*

Specifies the RFC 3161 time stamp server's URL. If this option (or /t) is not specified, the signed file will not be time stamped. A warning is generated if time stamping fails. This switch cannot be used with the /t switch.

Windows Vista and earlier: This flag is not supported.

___

