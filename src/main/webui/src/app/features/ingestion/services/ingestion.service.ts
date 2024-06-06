import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Source} from "../models/source";
import {toSignal} from "@angular/core/rxjs-interop";
import {switchMap, tap} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class IngestionService {

    private _sources = signal<Source[]>([]);
    private http = inject(HttpClient);
    sources = this._sources.asReadonly();

    initClassifier(){
        return this.http.get('ingest/classify')
    }

    ingestWebPage(source: string) {
        return this.http.post('ingest/url', source).pipe(switchMap( () => this.listSources()))
    }


    ingestFiles(files: File[]) {
        const formData = new FormData();
        for (let file of files || []) {
            formData.set('file', file)
        }
        return this.http.post('ingest/file', formData).pipe(
            switchMap( v => this.listSources())
        )
    }

    ingestLocal() {
        return this.http.post('ingest/miam', '/Users/lma/sandbox/lab-ai/company-genie/src/main/resources/data').pipe(
            switchMap( v => this.listSources())
        )
    }

    listSources() {
        return this.http.get<Source[]>('ingest/sources').pipe(
            tap(
                data => this._sources.set(data)
            )
        );
    }

}
