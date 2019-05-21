# Simple Signtool
A simple wrapper around signtool using node `exec`.

## Documentation
- [Project Documentation](docs/README.md)
- [MS Signtool Documentation](https://docs.microsoft.com/en-us/windows/desktop/seccrypto/signtool)

## Installation
`npm install simple-signtool --save-dev`

## Usage
First, import `simple-signtool` into your project:  
```javascript
import * as signtool from 'simple-signtool';
```

### Example
```typescript
import * as signtool from 'simple-signtool';

const file = path.join(__dirname, 'my.exe');

signtool.sign(file, {
    rawString: '/d mydescription',
    rfcTimeStampUrl: {
        url: 'http://sha1timestamp.ws.symantec.com/sha1/timestamp',
        digestAlgorithm: 'sha256'
    }
});

signtool.sign(file, options);
```

## Contributing
### Guidelines
- Independent options should be in the top-level options interface, e.g., `rawString`
- Options that depend on each other should be in their own interface.  
  **Example:**
  ```typescript
  export interface ISignOptions {
      rfcTimeStampUrl?: IRFCTimeStamp;
  }

  interface IRFCTimeStamp {
      url: string;
      digestAlgorithm?: 'sha256'; // depends on 'url'
  }
  ```

### Steps
1. Fork this repository
2. Write/edit code
3. Add documentation using [typedoc doc comments](https://typedoc.org/guides/doccomments/)
3. Write tests
4. Run `npm run lint` to verify code linting is passing and make updates to your code as linter suggests
5. Run `npm test` to verify tests are passing
6. Open a pull request

## License
MIT, please see [LICENSE.md](LICENSE.md) for details.
