package be.lmagnette.models;

public sealed abstract class IngestionRequest permits UrlIngestionRequest, FileIngestionRequest, LocalIngestRequest {

}
