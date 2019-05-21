export interface ISignOptions {
    /** Raw string of arguments (simple-signtool won't provide flags) */
    rawString?: string;
    
    /**
     * Selects the best signing certificate automatically. If this option is not present, SignTool expects to find only one valid signing certificate.
     */
    auto?: boolean;

    /**
     * RFC Time Stamp. If this option or `timeStampUrl` (TODO) is not present, the signed file will not be time stamped.
     */
    rfcTimeStampUrl?: IRFCTimeStamp;

    /**
     * Sign Cert File
     */
    signCertFile?: ISignCertFile;
}

interface IRFCTimeStamp {
    /**
     * Specifies the RFC 3161 time stamp server's URL.
     */
    url: string;

    /**
     * Used with the `rfcTimeStampUrl.url` option to request a digest algorithm used by the RFC 3161 time stamp server.
     */
    digestAlgorithm?: 'sha256';
}

interface ISignCertFile {
    /**
     * Specifies the signing certificate in a file.
     * 
     * **Example:**
     * ```typescript
    * const options: ISignOptions = {
    *     rawString: `${signOptions} /d ${exe}`,
    *     signCertFile: {
    *         file: '\"C:\\My Certs\\mycert.pfx\"',
    *         password: 'password'
    *     }
    * };
    * ```
    */
    file: string;

    /**
     * Use if the file is in Personal Information Exchange (PFX) format and protected by a password.
     */
    password?: string;
}
