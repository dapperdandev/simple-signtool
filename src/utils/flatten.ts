import { ISignOptions } from '../sign/signoptions.interface';

export function flatten(obj: ISignOptions, parentKey?: string, flatObj: { rawString?: string} = {}): { rawString?: string } {
    Object.keys(obj).forEach((k): void => {
        if (typeof obj[k] !== 'object') {
            const keyName = parentKey ? `${parentKey}_${k}` : k;
            flatObj[keyName] = obj[k];
        } else {
            flatten(obj[k], k, flatObj);
        }
    });
    return flatObj;
};
