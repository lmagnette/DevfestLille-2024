package be.lmagnette.resources;

import be.lmagnette.ai.CompanyAiService;
import be.lmagnette.models.ChatExchange;
import be.lmagnette.models.Resource;
import dev.langchain4j.model.embedding.EmbeddingModel;
import io.quarkiverse.langchain4j.pgvector.PgVectorEmbeddingStore;
import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("chat")
public class ChatResource {

    @Inject
    CompanyAiService companyAiService;

    @Inject
    PgVectorEmbeddingStore store;

    @Inject
    EmbeddingModel model;

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response sendMessage(ChatExchange request) {
        var relevant = store.findRelevant(model.embed(request.prompt()).content(), 3, 0.1);
        var sources = relevant.stream().map(r -> new Resource(r.score(), r.embedded().metadata("SOURCE"))).toList();
        var response = companyAiService.chat(request.id(), request.prompt());
        return Response.ok(new ChatExchange(request.id(),request.prompt(), response, sources)).build();
    }
}
