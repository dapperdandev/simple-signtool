# Simple Signtool
A simple wrapper around signtool using node exec

## Installation
`npm install simple-signtool --save-dev`

## Usage
First import `simple-signtool` into your project:  
```javascript
import * as signtool from 'simple-signtool';
```

## Documentation
* [sign](#sign)

### sign
```typescript 
sign(target: string, target: string): void
```

#### Description
Sign a specified file with given signtool options

#### Arguments
|Argument   |Type   |Description|
|---        |---    |---|
|**target** |string |The target file that will be signed|
|**options**|string |Sign options|  

  
#### Example
```typescript
import * as signtool from 'simple-signtool';

const file = path.join(__dirname, 'installer.exe');
const options = `/a /t http://timestamp.verisign.com/scripts/timstamp.dll /v`

signtool.sign(file, options);
```

## License
MIT, please see [LICENSE.md](LICENSE.md) for details.