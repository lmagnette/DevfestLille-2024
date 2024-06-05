import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'contentType',
    standalone: true
})
export class ContentTypePipe implements PipeTransform {

    private readonly contentTypeMappings: { [key: string]: string } = {
        "application/json": "JSON Format",
        "application/xml": "XML Format",
        "text/html": "HTML Document",
        "text/plain": "Plain Text",
        "text/css": "CSS Stylesheet",
        "text/csv": "CSV Document",
        "text/javascript": "JavaScript File",
        "image/jpeg": "JPEG Image",
        "image/png": "PNG Image",
        "image/gif": "GIF Image",
        "image/svg+xml": "SVG Image",
        "application/pdf": "PDF Document",
        "application/zip": "ZIP Archive",
        "application/gzip": "GZIP Archive",
        "application/x-tar": "TAR Archive",
        "application/msword": "Microsoft Word Document",
        "application/vnd.ms-excel": "Microsoft Excel Document",
        "application/vnd.ms-powerpoint": "Microsoft PowerPoint Presentation",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "Microsoft Excel Spreadsheet (XLSX)",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "Microsoft Word Document (DOCX)",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation": "Microsoft PowerPoint Presentation (PPTX)",
        "audio/mpeg": "MP3 Audio",
        "audio/wav": "WAV Audio",
        "audio/ogg": "OGG Audio",
        "audio/aac": "AAC Audio",
        "video/mp4": "MP4 Video",
        "video/x-msvideo": "AVI Video",
        "video/mpeg": "MPEG Video",
        "video/webm": "WEBM Video",
        "application/x-www-form-urlencoded": "Form URL Encoded",
        "multipart/form-data": "Form Data",
        "application/octet-stream": "Binary Data",
        "application/rtf": "Rich Text Format (RTF)",
        "application/javascript": "JavaScript File",
        "application/x-shockwave-flash": "Flash File",
        "application/x-7z-compressed": "7-Zip Archive",
        "application/vnd.rar": "RAR Archive",
        "application/x-bzip": "Bzip Archive",
        "application/x-bzip2": "Bzip2 Archive",
        // Add more mappings as needed
    };


    transform(value: string): string {
        const contentType = value.split(";")[0];
        return this.contentTypeMappings[contentType] || "Unknown Content Type";
    }

}
