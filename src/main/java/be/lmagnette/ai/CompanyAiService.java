package be.lmagnette.ai;

import be.lmagnette.tools.DateService;
import be.lmagnette.tools.EmailService;
import dev.langchain4j.service.MemoryId;
import dev.langchain4j.service.SystemMessage;
import dev.langchain4j.service.UserMessage;
import io.quarkiverse.langchain4j.RegisterAiService;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.UUID;

@RegisterAiService(
        retrievalAugmentor = DocumentRetrievalAugmentor.class
)
@ApplicationScoped
public interface CompanyAiService {

    @SystemMessage("""
            You are helpful bot answering questions about Ironyx an IT company. You will always answer using markdown syntax
            """)
    String chat(@MemoryId UUID id, @UserMessage String prompt);

    @SystemMessage(
            """
            You are helpful bot working Ironyx an IT company your speciality is to summarize meeting transcript
            """
    )
    @UserMessage("""
            You will summarized meeting transcript in a markdown syntax. The summary should always contains the all attendees of the meeting and
            the key actions that have been decided. It should also include the meeting date. The summary should be written using the markdown syntax.
            The meeting to summarize is {meetingDescription}
            """)
    String meetingSummary(String meetingDescription);


}
