import {Component, inject} from '@angular/core';
import {ContentTypePipe} from "../../../shared/content-type.pipe";
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
import {MatChip} from "@angular/material/chips";
import {IngestionService} from "../../../ingestion/services/ingestion.service";
import {ActionsService} from "../../services/actions.service";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-actions-page',
  standalone: true,
    imports: [
        ContentTypePipe,
        DatePipe,
        MatCell,
        MatCellDef,
        MatChip,
        MatColumnDef,
        MatHeaderCell,
        MatHeaderRow,
        MatHeaderRowDef,
        MatRow,
        MatRowDef,
        MatTable,
        MatHeaderCellDef
    ],
  templateUrl: './actions-page.component.html',
  styleUrl: './actions-page.component.scss'
})
export class ActionsPageComponent {

    service = inject(ActionsService);
    dataSource = toSignal(this.service.getAllActions())
    displayedColumns = ['id','name', 'creationDate'];

}
