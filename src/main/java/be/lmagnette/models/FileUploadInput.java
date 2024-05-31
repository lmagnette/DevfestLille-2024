package be.lmagnette.models;

import org.jboss.resteasy.reactive.multipart.FileUpload;
import jakarta.ws.rs.FormParam;

import java.util.List;

public class FileUploadInput {

        @FormParam("file")
        public List<FileUpload> files;

}
