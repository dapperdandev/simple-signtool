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

### sign(target: string, options: string): void

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
