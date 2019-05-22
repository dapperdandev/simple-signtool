import { flatten } from '../../src/utils';
import { ISignOptions } from '../../src/sign/sign-options.interface';

describe('FLATTEN', (): void => {
    test('Produces Correct Keys for Nested Objects', (): void => {
        const foo: ISignOptions = {
            auto: true,
            signCertFile: {
                file: 'myfile',
                password: 'password'
            }
        };

        const result = flatten(foo);

        expect(result).toHaveProperty('auto');
        expect(result).toHaveProperty('signCertFile_file');
        expect(result).toHaveProperty('signCertFile_password');
    });
});
