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
        const digestAlgorithm = 'sha256';
        const expectedResult = buildSignCommand(`/tr ${url} /td sha256`, target);

        sign(target, { rfcTimeStampUrl: { url: url, digestAlgorithm: digestAlgorithm } });

        expect(spy).toHaveBeenCalledWith(expectedResult);
    });

    test('Sign Cert File Option Produces Correct String', (): void => {
        const file = 'mycert.pfx';
        const password = 'password';
        const expectedResult = buildSignCommand(`/f ${file} /p ${password}`, target);

        sign(target, { signCertFile: { file: file, password: password } });

        expect(spy).toHaveBeenCalledWith(expectedResult);
    });

    test('Description Option Produces Correct String', (): void => {
        const description = 'lorem ipsum';
        const expectedResult = buildSignCommand(`/d ${description}`, target);

        sign(target, { description });

        expect(spy).toHaveBeenCalledWith(expectedResult);
    });

    test('Expanded Description Option Produces Correct String', (): void => {
        const url = 'http://myproduct.com/info.html';
        const expectedResult = buildSignCommand(`/du ${url}`, target);

        sign(target, { expandedDescription: url });

        expect(spy).toHaveBeenCalledWith(expectedResult);
    });

    test('RJ Demo', (): void => {
        expect(true).toBeFalsy();
    })
});
