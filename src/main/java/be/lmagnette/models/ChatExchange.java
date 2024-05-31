package be.lmagnette.models;

import java.util.List;
import java.util.UUID;

public record ChatExchange(UUID id, String prompt, String response, List<Resource> resources) {
}
