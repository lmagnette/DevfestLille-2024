import { Component } from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {WebPageIngestionComponent} from "../web-page-ingestion/web-page-ingestion.component";
import {FileIngestionComponent} from "../file-ingestion/file-ingestion.component";
import {LocalFilesIngestionComponent} from "../local-files-ingestion/local-files-ingestion.component";
import {SourcesListComponent} from "../sources-list/sources-list.component";

@Component({
  selector: 'app-ingestion-page',
  standalone: true,
    imports: [
        MatTabGroup,
        MatTab,
        WebPageIngestionComponent,
        FileIngestionComponent,
        LocalFilesIngestionComponent,
        SourcesListComponent
    ],
  templateUrl: './ingestion-page.component.html',
  styleUrl: './ingestion-page.component.scss'
})
export default class IngestionPageComponent {

}
