package be.lmagnette.tools;

import be.lmagnette.entities.Action;
import dev.langchain4j.agent.tool.Tool;
import jakarta.enterprise.context.ApplicationScoped;

import java.time.LocalDateTime;

@ApplicationScoped
public class ActionService {

    @Tool("create action")
    public void createAction(String content) {
        var action = new Action(content, LocalDateTime.now());
        action.persist();
    }
}
