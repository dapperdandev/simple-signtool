import { sign } from '../../src/sign';
import * as common from '../../src/common';
import * as path from 'path';

const signCommand = `${path.join(__dirname, '../../vendor/signtool.exe')} sign`;
const testFile = 'test.exe';
const spy = jest.spyOn(common, 'execute').mockImplementation((): null => null);

describe('SIGN', (): void => {
    test('Auto Option Produces Correct String', (): void => {
        const expectedResult = `${signCommand} /a ${testFile}`;

        sign(testFile, { auto: true });

        expect(spy).toHaveBeenCalledWith(expectedResult);
    });

    test('RFC Time Stamp URL Option Produces Correct String', (): void => {
        const url = 'https://www.example.com';
        const expectedResult = `${signCommand} /tr ${url} ${testFile}`;

        sign(testFile, { rfcTimeStampUrl: url });

        expect(spy).toHaveBeenCalledWith(expectedResult);
    });
});
