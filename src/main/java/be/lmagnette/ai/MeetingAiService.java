package be.lmagnette.ai;

import dev.langchain4j.service.SystemMessage;
import dev.langchain4j.service.UserMessage;
import io.quarkiverse.langchain4j.RegisterAiService;

@RegisterAiService(
        retrievalAugmentor = MeetingRetrievalAugmentor.class
)
public interface MeetingAiService {

    @SystemMessage(
            """
            You are helpful bot working Ironyx an IT company your speciality is to summarize meeting transcript
            """
    )
    @UserMessage("""
            You will summarized meeting transcript in a markdown syntax. The summary should always contains the all attendees of the meeting and
            the key actions that have been decided. It should also include the meeting date. The summary should be written using the markdown syntax.
            You should only return the summary.
            The meeting to summarize is {meetingDescription}
            """)
    String meetingSummary(String meetingDescription);

}
