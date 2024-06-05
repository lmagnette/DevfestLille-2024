import {Component, inject, OnInit} from '@angular/core';
import {
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef, MatHeaderRow,
    MatHeaderRowDef, MatRow, MatRowDef,
    MatTable
} from "@angular/material/table";
import {toSignal} from "@angular/core/rxjs-interop";
import {IngestionService} from "../../services/ingestion.service";
import {Source} from "../../models/source";
import {DatePipe} from "@angular/common";

@Component({
    selector: 'app-sources-list',
    standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    DatePipe
  ],
    templateUrl: './sources-list.component.html',
    styleUrl: './sources-list.component.scss'
})
export class SourcesListComponent implements OnInit {

    service = inject(IngestionService)
    dataSource = this.service.sources;
    displayedColumns = ['name', 'category', 'ingestionDate'];

    ngOnInit(): void {
      this.service.listSources().subscribe();
    }

}
