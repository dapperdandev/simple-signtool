export interface ISignOptions {
    /** Raw string of arguments (simple-signtool won't provide flags) */
    rawString?: string;
    /**
     * Selects the best signing certificate automatically. If this option is not present, SignTool expects to find only one valid signing certificate.
     */
    auto?: boolean;
    /**
     * Specifies the RFC 3161 time stamp server's URL. If this option (or /t) is not specified, the signed file will not be time stamped. A warning is generated if time stamping fails. This switch cannot be used with the /t switch.
     * 
     * Windows Vista and earlier: This flag is not supported.
     */
    rfcTimeStampUrl?: string;
}
