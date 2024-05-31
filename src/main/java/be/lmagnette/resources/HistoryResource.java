package be.lmagnette.resources;

import be.lmagnette.models.ChatHistoryEntry;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.UUID;

@Path("/history")
public class HistoryResource {


    @GET
    @Path("new")
    @Produces(MediaType.APPLICATION_JSON)
    public Response createHistoryEntry() {
        return Response.ok(new ChatHistoryEntry(UUID.randomUUID(),"New chat")).build();
    }
}
