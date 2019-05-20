import { SignOptionsFlag } from './signOptionsFlag.enum';
import { ISignOptions } from './signoptions.interface';
import { execute, signtool, Operations } from '../common';
import { flatten } from '../utils/flatten';

/**
 * Sign a specified file with given signtool options
 * @param target The target file that will be signed
 * @param signOptions Sign options
 */
export function sign(target: string, signOptions: ISignOptions): void {
    const options: Array<string> = [];
    const flatSignOptions = flatten(signOptions);

    if (flatSignOptions.rawString)
        options.push(flatSignOptions.rawString);

    Object.keys(flatSignOptions).forEach((k: string): void => {
        if (flatSignOptions[k] && k !== 'rawString') {
            const flag = SignOptionsFlag[k];
            const arg = (typeof flatSignOptions[k] === 'string') ? flatSignOptions[k] : null;
            const pair: [string, string] = [flag, arg];

            options.push(...pair.filter((o): string => o)); // prevents extra space
        }
    });

    const command = `${signtool} ${Operations.sign} ${options.join(' ')} "${target}"`;
    execute(command);
}
