# Simple Signtool
A simple wrapper around signtool using node exec

## Installation
`npm install simple-signtool --save-dev`

## Usage
First, import `simple-signtool` into your project:  
```javascript
import * as signtool from 'simple-signtool';
```

## Documentation
* [sign](#sign)

### sign
```typescript 
sign(target: string, signOptions: ISignOptions): void
```

#### Description
Sign a specified file with given signtool options

#### Arguments
|Argument       |Type   |Description
|---            |---    |---
|**target**     |string |The target file that will be signed
|**signOptions**|ISignOptions |Sign options

##### ISignOptions
|Property               |Type       |Flag   |Description
|---                    |---        |---    |---
|**rawString?**         |string     |       |Raw string of arguments (simple-signtool won't provide flags)
|**rfcTimeStampUrl?**   |string     |/tr    |Specifies the URL of the RFC 3161 time stamp server


  
#### Example
```typescript
import * as signtool from 'simple-signtool';


const file = path.join(__dirname, 'mathlib.js');

signtool.sign(file, {
    rawString: '/d mydescription',
    rfcTimeStampUrl: 'http://sha1timestamp.ws.symantec.com/sha1/timestamp'
});

signtool.sign(file, options);
```

## Development
### Adding Sign Options
- Add optional option to `ISignOptions`
- Add the flag representation to `SignOptionsFlag`
  - `boolean` if no arguments get passed after the flag, e.g., `/f`
  - `string` if options are passed after the flag, e.g., `/b bar`
- Write a test

## License
MIT, please see [LICENSE.md](LICENSE.md) for details.