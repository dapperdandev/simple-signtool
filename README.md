# Simple Signtool
A simple wrapper around signtool using node `exec`.

## Documentation
Documentation can be found [here](docs/README.md)

## Installation
`npm install simple-signtool --save-dev`

## Usage
First, import `simple-signtool` into your project:  
```javascript
import * as signtool from 'simple-signtool';
```

## Contributing
### Adding Sign Options Example
- Add optional option to `ISignOptions`
- Add the flag representation to `SignOptionsFlag`
  - `boolean` if no arguments get passed after the flag, e.g., `/f`
  - `string` if options are passed after the flag, e.g., `/b bar`
- Write tests
- Run `npm test`, `npm run lint`, and `npm run docs`

## License
MIT, please see [LICENSE.md](LICENSE.md) for details.
