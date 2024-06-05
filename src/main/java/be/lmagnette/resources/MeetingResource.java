package be.lmagnette.resources;

import be.lmagnette.ai.CompanyAiService;
import be.lmagnette.ai.MeetingAiService;
import be.lmagnette.models.MeetingSummary;
import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
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
        return Response.ok(new MeetingSummary(meeting.description(),summary)).build();
    }
}
