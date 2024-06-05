import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {IngestionService} from "../../services/ingestion.service";

@Component({
  selector: 'app-local-files-ingestion',
  standalone: true,
  imports: [
    MatButton,
    MatIcon
  ],
  templateUrl: './local-files-ingestion.component.html',
  styleUrl: './local-files-ingestion.component.scss'
})
export class LocalFilesIngestionComponent {

  service = inject(IngestionService);

  ingestLocal() {
    this.service.ingestLocal().subscribe();
  }
}
