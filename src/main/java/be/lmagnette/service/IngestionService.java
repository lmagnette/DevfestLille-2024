package be.lmagnette.service;


import be.lmagnette.ai.DocumentIngestor;
import be.lmagnette.entities.Source;
import be.lmagnette.exceptions.IngestionException;
import be.lmagnette.models.*;
import dev.langchain4j.data.document.Document;
import dev.langchain4j.data.document.DocumentLoader;
import dev.langchain4j.data.document.DocumentParser;
import dev.langchain4j.data.document.Metadata;
import dev.langchain4j.data.document.parser.TextDocumentParser;
import dev.langchain4j.data.document.source.UrlSource;
import dev.langchain4j.data.document.transformer.HtmlTextExtractor;
import io.quarkus.logging.Log;
import io.quarkus.tika.TikaContent;
import io.quarkus.tika.TikaParser;
import io.quarkus.virtual.threads.VirtualThreads;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Stream;

@ApplicationScoped
public class IngestionService {

    public static final String CATEGORY = "CATEGORY";
    public static final String SOURCE = "SOURCE";
    @Inject
    DocumentIngestor ingestor;

    @Inject
    TikaParser tikaParser;


    @VirtualThreads
    public void ingest(IngestionRequest request) {
        var documents = switch (request) {
            case UrlIngestionRequest url -> ingestUrl(url);
            case FileIngestionRequest file -> ingestFile(file);
            case LocalIngestRequest local -> ingestFiles(local);
        };

        saveSourceList(documents);
    }

    private List<Document> ingestFile(FileIngestionRequest request) {
        Log.info("Ingesting "+request.file.fileName());
        var document = this.getDocument(request.file.uploadedFile());
        document.ifPresentOrElse(ingestor::ingest,() -> {throw new IngestionException("An error occured while ingesting " + request.file.fileName());});
        return document.map(List::of).orElse(Collections.emptyList());
    }


    private List<Document> ingestUrl(UrlIngestionRequest request) {
        try {
            Log.info("Ingesting webpage "+ request.url);
            var document = this.getContentFromUrl(request.url);
            var category = this.ingestor.getClassifier().classify(document.text());
            document.metadata().put(CATEGORY, category.getFirst().name());
            Log.info("Ingested webpage "+ document.metadata().asMap().toString());
            ingestor.ingest(document);
            return List.of(document);
        } catch (MalformedURLException e) {
            throw new IngestionException("An error occured while ingesting " + request.url, e.getCause());
        }
    }

    public List<Document> ingestFiles(LocalIngestRequest request){
        Path dirPath = Paths.get(request.path);
        if (!Files.exists(dirPath)) return Collections.emptyList();
        var documents = getDocuments(dirPath);
        ingestor.ingest(documents);
        return documents;
    }

    private List<Document> getDocuments(Path dirPath) {
        if (Files.isDirectory(dirPath)) {
            return getDirectoryDocuments(dirPath);
        }
        var documents = getDocument(dirPath).map(Collections::singletonList).orElse(Collections.emptyList());
        documents.forEach(document -> Log.info("Metadata :" + document.metadata().toMap()));
        return documents;
    }

    private List<Document> getDirectoryDocuments(Path dirPath) {
        try {
            return Files.list(dirPath)
                    .filter(Files::isRegularFile)
                    .map(this::getDocument)
                    .filter(Optional::isPresent)
                    .map(Optional::get)
                    .toList();
        } catch (IOException e) {
            return Collections.emptyList();
        }
    }

    private Optional<Document> getDocument(Path path) {
        try (var inputStream = path.toUri().toURL().openStream()) {
            TikaContent content = tikaParser.parse(inputStream);
            var category = this.ingestor.getClassifier().classify(content.getText());
            saveDocument(category, content);
            var metadata = Metadata.from(Map.of(
                    SOURCE, path.getFileName().toAbsolutePath().toString(),
                    CATEGORY, category.getFirst().name()
            ));
            Log.info("Medata document" + path.getFileName());
            var document = Document.document(content.getText(), metadata);

            return Optional.of(document);
        } catch (IOException e) {
            return Optional.empty();
        }
    }

    private void saveDocument(List<Category> category, TikaContent content) {

    }

    private Document getContentFromUrl(String webPageUrl) throws MalformedURLException {
        UrlSource urlSource = new UrlSource(URI.create(webPageUrl).toURL());

        DocumentParser documentParser = new TextDocumentParser();
        Document document = DocumentLoader.load(urlSource, documentParser);
        document.metadata().put(SOURCE,webPageUrl);
        document.metadata().put(CATEGORY,this.ingestor.getClassifier().classify(document.text()).getFirst().name());


        HtmlTextExtractor htmlTextExtractor = new HtmlTextExtractor();
        return htmlTextExtractor.transform(document);

    }


    private void saveSourceList(List<Document> documents){
        var cats = documents.stream().map(d -> d.metadata().getString(CATEGORY)).toList();
        var sources = documents.stream().map(d -> d.metadata().getString(SOURCE)).toList();
        var list = documents.stream()
                .map(d -> new Source(d.metadata().getString(SOURCE), LocalDateTime.now(), Category.valueOf(d.metadata().getString(CATEGORY)))).toList();
        list.forEach( s -> s.persist());
        Log.info("Saved "+Source.count());
    }


}
