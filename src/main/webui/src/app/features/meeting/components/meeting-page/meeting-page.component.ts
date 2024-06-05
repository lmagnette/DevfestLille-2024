import {Component, inject, signal, viewChild} from '@angular/core';
import {FileIngestionComponent} from "../../../ingestion/components/file-ingestion/file-ingestion.component";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {IngestionService} from "../../../ingestion/services/ingestion.service";
import {switchMap} from "rxjs";
import {MeetingService} from "../../services/meeting.service";
import {MarkdownComponent} from "ngx-markdown";
import {DatePipe} from "@angular/common";
import {
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell, MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {toSignal} from "@angular/core/rxjs-interop";



@Component({
    selector: 'app-meeting-page',
    standalone: true,
    imports: [
        FileIngestionComponent,
        MatButton,
        MatIcon,
        MarkdownComponent,
        DatePipe,
        MatCell,
        MatCellDef,
        MatColumnDef,
        MatHeaderCell,
        MatHeaderRow,
        MatHeaderRowDef,
        MatRow,
        MatRowDef,
        MatTable,
        MatHeaderCellDef,
        MatIconButton
    ],
    templateUrl: './meeting-page.component.html',
    styleUrl: './meeting-page.component.scss'
})
export default class MeetingPageComponent {

    meetingService = inject(MeetingService)

    dataSource = toSignal(this.meetingService.list());
    displayedColumns = ['title','url', 'category', 'ingestionDate','actions'];

    summary = signal<string | null>(null);

    summarize(id:number){
        this.meetingService.summarizeById(id).subscribe(
            data => this.summary.set(data)
        );
    }

}
