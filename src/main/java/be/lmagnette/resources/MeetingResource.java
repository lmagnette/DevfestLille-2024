package be.lmagnette.resources;

import be.lmagnette.ai.CompanyAiService;
import be.lmagnette.ai.MeetingAiService;
import be.lmagnette.entities.Source;
import be.lmagnette.models.Category;
import be.lmagnette.models.MeetingSummary;
import dev.langchain4j.agent.tool.P;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("meeting")
public class MeetingResource {

    @Inject
    MeetingAiService meetingAiService;

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response summarize(MeetingSummary meeting) {
        var summary = meetingAiService.meetingSummary(meeting.description());
        return Response.ok(new MeetingSummary(meeting.description(), summary)).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.TEXT_PLAIN)
    public Response summarize(@PathParam("id") Long id) {
        Source source = Source.findById(id);
        if(source == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.ok(meetingAiService.meetingSummary(source.title)).build();
    }


    @GET
    @Path("/documents")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getMeetingDocuments() {
        return Response.ok(Source.findByCategory(Category.MEETING)).build();
    }
}
