import {Component, inject, signal, viewChild} from '@angular/core';
import {FileIngestionComponent} from "../../../ingestion/components/file-ingestion/file-ingestion.component";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {IngestionService} from "../../../ingestion/services/ingestion.service";
import {switchMap} from "rxjs";
import {MeetingService} from "../../services/meeting.service";
import {MarkdownComponent} from "ngx-markdown";

@Component({
  selector: 'app-meeting-page',
  standalone: true,
  imports: [
    FileIngestionComponent,
    MatButton,
    MatIcon,
    MarkdownComponent
  ],
  templateUrl: './meeting-page.component.html',
  styleUrl: './meeting-page.component.scss'
})
export default class MeetingPageComponent {
  fileInput = viewChild('fileInput');
  files: File[] | null = null;

  ingestionService = inject(IngestionService);
  meetingService = inject(MeetingService)

  summary = signal<string|null>(null);


  onFilesChanged() {
    const selectedFiles: { [key: string]: File } = (this.fileInput() as any).nativeElement.files;
    this.files = Object.values(selectedFiles);
    this.summary.set(null);
  }


  handleMeeting() {
    this.ingestionService.ingestFiles(this.files || []).pipe(
        switchMap(() => this.meetingService.summarize())
    ).subscribe(
        data => this.summary.set(data.summary || null)
    );
  }
}
