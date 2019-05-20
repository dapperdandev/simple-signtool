import { sign } from '../../src/sign';
import { buildSignCommand } from './sign.helpers';
import * as common from '../../src/common';

const spy = jest.spyOn(common, 'execute').mockImplementation((): null => null);
const target = 'test.exe';

describe('SIGN', (): void => {
    test('Auto Option Produces Correct String', (): void => {
        const expectedResult = buildSignCommand('/a', target);

        sign(target, { auto: true });

        expect(spy).toHaveBeenCalledWith(expectedResult);
    });

    test('RFC Time Stamp URL Option Produces Correct String', (): void => {
        const url = 'https://www.example.com';
        const expectedResult = buildSignCommand(`/tr ${url}`, target);

        sign(target, { rfcTimeStampUrl: url });

        expect(spy).toHaveBeenCalledWith(expectedResult);
    });
});
