package be.lmagnette.models;

public final class UrlIngestionRequest extends IngestionRequest {

    public final String url;

    public UrlIngestionRequest(String url) {
        this.url = url;
    }

}
