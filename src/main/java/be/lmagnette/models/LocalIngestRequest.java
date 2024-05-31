package be.lmagnette.models;

public final class LocalIngestRequest extends IngestionRequest{

    public final String path;

    public LocalIngestRequest(String path) {
        this.path = path;
    }
}
