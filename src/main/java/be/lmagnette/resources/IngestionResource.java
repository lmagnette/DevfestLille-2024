package be.lmagnette.resources;

import be.lmagnette.entities.Source;
import be.lmagnette.models.FileIngestionRequest;
import be.lmagnette.models.FileUploadInput;
import be.lmagnette.models.LocalIngestRequest;
import be.lmagnette.models.UrlIngestionRequest;
import be.lmagnette.service.IngestionService;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import org.jboss.resteasy.reactive.RestResponse;

import java.util.List;

@Path("/ingest")
public class IngestionResource {


    @Inject
    IngestionService ingestionService;


    @POST
    @Path("miam")
    @Consumes(MediaType.TEXT_PLAIN)
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
    public RestResponse<Object> ingest(String path){
        ingestionService.ingest(new LocalIngestRequest(path));
        return RestResponse.ResponseBuilder.ok().build();
    }

    @POST
    @Path("url")
    @Consumes(MediaType.TEXT_PLAIN)
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
    public RestResponse<Object> ingestUrl(String url){
        ingestionService.ingest(new UrlIngestionRequest(url));
        return RestResponse.ResponseBuilder.ok().build();
    }

    @POST
    @Path("file")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
    public RestResponse<Object> ingestFile(FileUploadInput input){
        input.files.stream().map(FileIngestionRequest::new).forEach(ingestionService::ingest);
        return RestResponse.ResponseBuilder.ok().build();

    }

    @GET
    @Path("sources")
    @Produces(MediaType.APPLICATION_JSON)
    public RestResponse<List<PanacheEntityBase>> getSources(){

        var entities = Source.listAll();
        return RestResponse.ResponseBuilder.ok(entities).build();
    }


}
