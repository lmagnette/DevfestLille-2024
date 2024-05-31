package be.lmagnette.tools;

import dev.langchain4j.agent.tool.Tool;
import jakarta.enterprise.context.ApplicationScoped;

import java.time.LocalDateTime;

@ApplicationScoped
public class DateService {

    @Tool("Give the current date")
    public LocalDateTime getCurrentDate() {
        return LocalDateTime.now();
    }
}
