import {Component, inject, signal, viewChild} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {IngestionService} from "../../services/ingestion.service";

@Component({
  selector: 'app-file-ingestion',
  standalone: true,
  imports: [
    MatButton,
    MatIcon
  ],
  templateUrl: './file-ingestion.component.html',
  styleUrl: './file-ingestion.component.scss'
})
export class FileIngestionComponent {

  fileInput = viewChild('fileInput');
  files= signal<File[] | null>(null);

  service = inject(IngestionService);


  onFilesChanged() {
    const selectedFiles: { [key: string]: File } = (this.fileInput() as any).nativeElement.files;
    this.files.set(Object.values(selectedFiles));
  }


  ingestFiles() {
    this.service.ingestFiles(this.files() || []).subscribe();
  }
}
