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
        retrievalAugmentor = DocumentRetrievalAugmentor.class,
        tools = {EmailService.class, DateService.class}
)
@ApplicationScoped
public interface CompanyAiService {

    @SystemMessage("""
            You are helpful bot answering questions about Ironyx an IT company. You will always answer using markdown syntax
            """)
    String chat(@MemoryId UUID id, @UserMessage String prompt);
}
