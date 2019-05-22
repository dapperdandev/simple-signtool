[simple-signtool](../README.md) > [ISignOptions](../interfaces/isignoptions.md)

# Interface: ISignOptions

## Hierarchy

**ISignOptions**

## Index

### Properties

* [auto](isignoptions.md#auto)
* [rawString](isignoptions.md#rawstring)
* [rfcTimeStampUrl](isignoptions.md#rfctimestampurl)
* [signCertFile](isignoptions.md#signcertfile)

---

## Properties

<a id="auto"></a>

### `<Optional>` auto

**● auto**: *`undefined` \| `false` \| `true`*

*Defined in sign/sign-options.interface.ts:8*

Selects the best signing certificate automatically. If this option is not present, SignTool expects to find only one valid signing certificate.

___
<a id="rawstring"></a>

### `<Optional>` rawString

**● rawString**: *`undefined` \| `string`*

*Defined in sign/sign-options.interface.ts:3*

Raw string of arguments (simple-signtool won't provide flags)

___
<a id="rfctimestampurl"></a>

### `<Optional>` rfcTimeStampUrl

**● rfcTimeStampUrl**: *[IRFCTimeStamp](irfctimestamp.md)*

*Defined in sign/sign-options.interface.ts:13*

RFC Time Stamp. If this option or `timeStampUrl` (TODO) is not present, the signed file will not be time stamped.

___
<a id="signcertfile"></a>

### `<Optional>` signCertFile

**● signCertFile**: *[ISignCertFile](isigncertfile.md)*

*Defined in sign/sign-options.interface.ts:18*

Sign Cert File

___

