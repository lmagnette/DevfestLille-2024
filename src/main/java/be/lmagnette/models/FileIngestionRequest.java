package be.lmagnette.models;

import org.jboss.resteasy.reactive.multipart.FileUpload;


public final class FileIngestionRequest extends IngestionRequest {

    public final FileUpload file;

    public FileIngestionRequest(FileUpload file) {
        this.file = file;
    }

}
