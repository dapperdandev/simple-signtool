export interface ISignOptions {
    rawString?: string;
    auto?: boolean;
    rfcTimeStampUrl?: string;
}

export enum SignOptionsFlag {
    auto = '/a',
    rfcTimeStampUrl = '/tr'
}
