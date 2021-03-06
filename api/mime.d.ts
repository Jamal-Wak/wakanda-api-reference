/// <reference path="./blob.d.ts" />
/// <reference path="./image.d.ts" />

interface MIMEMessage {
    /**
     * nth part of the multipart MIME message.
     */
    [n: number]: MIMEMessagePart;
    /**
     * Boundary tag used to delimit the parts.
     */
    boundary: String;
    /**
     * Number of parts.
     */
    count: Number;
    /**
     * Encoding type: 'multipart/form-data' or 'application/x-www-form-urlencoded'.
     */
    encoding: String;
    /**
     * Number of parts.
     */
    length: Number;
    /**
     * Returns the MIME message as a Blob object.
     */
    toBlob(mimeType?: String): WAKBlobInstance;
    /**
     * Returns the MIME message as a Buffer object.
     */
    toBuffer(): WAKBufferInstance;
}

interface MIMEMessagePart {
    /**
     * Body as a BLOB.
     */
    asBlob: WAKBlobInstance;
    /**
     * Body as an image.
     */
    asPicture: Image;
    /**
     * Body as a Text string.
     */
    asText: String;
    /**
     * Name of the uploaded file.
     */
    fileName: String;
    /**
     * Content-type of the part.
     */
    mediaType: String;
    /**
     * Input field name.
     */
    name: String;
    /**
     * Size of the body (in bytes).
     */
    size: Number;
    /**
     * Saves the body of the part in the file whose path is passed in filePath.
     */
    save(filePath: String, overWrite?: Boolean): void;
}