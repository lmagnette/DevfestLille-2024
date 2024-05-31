package be.lmagnette.ai;

import dev.langchain4j.data.document.Document;
import dev.langchain4j.model.embedding.EmbeddingModel;
import dev.langchain4j.store.embedding.EmbeddingStoreIngestor;
import io.quarkiverse.langchain4j.pgvector.PgVectorEmbeddingStore;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;


import java.util.List;

import static dev.langchain4j.data.document.splitter.DocumentSplitters.recursive;

@ApplicationScoped
public class DocumentIngestor {

    @Inject
    PgVectorEmbeddingStore store;

    @Inject
    EmbeddingModel embeddingModel;

    public void ingest(List<Document> documents) {
        getIngestor().ingest(documents);
    }

    public void ingest(Document document) {
        getIngestor().ingest(document);
    }

    private EmbeddingStoreIngestor getIngestor(){
        return EmbeddingStoreIngestor.builder()
                .embeddingModel(embeddingModel)
                .embeddingStore(store)
                .documentSplitter(recursive(500,100))
                .build();
    }

}
