package be.lmagnette.ai;

import dev.langchain4j.service.SystemMessage;
import dev.langchain4j.service.UserMessage;
import io.quarkiverse.langchain4j.RegisterAiService;

@RegisterAiService
public interface DocumentTitleAiService {

    @SystemMessage("""
            You're an expert a generating meaningful title based on a given text.
            Those title have a max length of 100 characters and are human readable.
            """)
    @UserMessage("""
            You will return only the generated title for {text}
            """)
    String getTitle(String text);
}
