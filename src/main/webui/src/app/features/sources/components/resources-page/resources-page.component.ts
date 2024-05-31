import {Component, inject, viewChild} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {HttpClient} from "@angular/common/http";
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";
import {IngestedResourcesComponent} from "../ingested-resources/ingested-resources.component";

@Component({
    selector: 'app-resources-page',
    standalone: true,
    imports: [
        MatFormField,
        MatLabel,
        MatInput,
        FormsModule,
        MatIcon,
        MatIconButton,
        MatCardTitle,
        MatCardContent,
        MatCard,
        MatCardActions,
        MatButton,
        IngestedResourcesComponent
    ],
    templateUrl: './resources-page.component.html',
    styleUrl: './resources-page.component.scss'
})
export default class ResourcesPageComponent {

    http = inject(HttpClient);

    fileInput = viewChild('fileInput');
    files: File[] | null = null;

    source: string = '';

    ingestWebPage() {
        this.http.post('ingest/url', this.source).subscribe();
    }

    onFilesChanged() {
        const selectedFiles: { [key: string]: File } = (this.fileInput() as any).nativeElement.files;
        this.files = Object.values(selectedFiles);
    }

    ingestFiles() {
        const formData = new FormData();
        for (let file of this.files || []) {
            formData.set('file', file)
        }
        this.http.post('ingest/file', formData).subscribe();
    }

    ingestLocal(){
        this.http.post('ingest/miam', '/Users/lma/sandbox/lab-ai/company-genie/src/main/resources/data').subscribe();
    }
}
