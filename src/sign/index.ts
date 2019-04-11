import { ISignOptions, SignOptionsFlag } from './signoptions';
import { execute, signtool, Operations } from '../common';

/**
 * Sign a specified file with given signtool options
 * @param target The target file that will be signed
 * @param signOptions Sign options
 */
export function sign(target: string, signOptions: ISignOptions): void {
    const options: Array<string> = [];

    if (signOptions.rawString)
        options.push(signOptions.rawString);

    Object.keys(signOptions).forEach((k: string) => {
        if (signOptions[k] && k !== 'rawString') {
            const pair: [string, string] = [SignOptionsFlag[k], signOptions[k]];
            options.push(...pair);
        }
    });

    const command = `${signtool} ${Operations.sign} ${options.join(' ')} ${target}`;
    execute(command);
}
    