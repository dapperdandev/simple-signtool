import { SignOptionsFlag } from './signOptionsFlag.enum';
import { ISignOptions } from './signoptions.interface';
import { execute, signtool, Operations } from '../common';

/**
 * Sign a specified file with given signtool options
 * @param target The target file that will be signed
 * @param signOptions Sign options
 */
export function sign(target: string, signOptions: ISignOptions): void {
    let options: Array<string> = [];

    if (signOptions.rawString)
        options.push(signOptions.rawString);

    Object.keys(signOptions).forEach((k: string): void => {
        if (signOptions[k] && k !== 'rawString') {
            const flag = SignOptionsFlag[k];
            const arg = (typeof signOptions[k] === 'string') ? signOptions[k] : null;
            const pair: [string, string] = [flag, arg];

            options.push(...pair.filter((o): string => o)); // prevents extra space
        }
    });

    const command = `${signtool} ${Operations.sign} ${options.join(' ')} ${target}`;
    execute(command);
}
