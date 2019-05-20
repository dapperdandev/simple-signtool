import * as path from 'path';

export const buildSignCommand = (optionPair: string, target: string): string => {
    const signCommand = `${path.join(__dirname, '../../vendor/signtool.exe')} sign`;
    
    return `${signCommand} ${optionPair} "${target}"`;
};
