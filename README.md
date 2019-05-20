# Simple Signtool
A simple wrapper around signtool using node `exec`. 

## Installation
`npm install simple-signtool --save-dev`

## Usage
First, import `simple-signtool` into your project:  
```javascript
import * as signtool from 'simple-signtool';
```

## Development
### Adding Sign Options
- Add optional option to `ISignOptions`
- Add the flag representation to `SignOptionsFlag`
  - `boolean` if no arguments get passed after the flag, e.g., `/f`
  - `string` if options are passed after the flag, e.g., `/b bar`
- Write tests
- Add your documentation to the README

## License
MIT, please see [LICENSE.md](LICENSE.md) for details.
