[simple-signtool](../README.md) > [ISignCertFile](../interfaces/isigncertfile.md)

# Interface: ISignCertFile

## Hierarchy

**ISignCertFile**

## Index

### Properties

* [file](isigncertfile.md#file)
* [password](isigncertfile.md#password)

---

## Properties

<a id="file"></a>

###  file

**● file**: *`string`*

*Defined in sign/signoptions.interface.ts:48*

Specifies the signing certificate in a file.

**Example:**

```typescript
const options: ISignOptions = {
    rawString: `${signOptions} /d ${exe}`,
    signCertFile: {
        file: '\"C:\\My Certs\\mycert.pfx\"',
        password: 'password'
    }
};
```

___
<a id="password"></a>

### `<Optional>` password

**● password**: *`undefined` \| `string`*

*Defined in sign/signoptions.interface.ts:53*

Use if the file is in Personal Information Exchange (PFX) format and protected by a password.

___

