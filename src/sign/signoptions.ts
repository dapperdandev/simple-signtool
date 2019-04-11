export interface ISignOptions {
    rawString?: string;
    rfcTimeStampUrl?: string;
}

export enum SignOptionsFlag {
    rfcTimeStampUrl = '/tr'
}
