import {Component, input, signal} from '@angular/core';
import {DatePipe, DecimalPipe, PercentPipe} from "@angular/common";
import {
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell, MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {ResponseResource} from "../../model/response-resource";

@Component({
  selector: 'app-chat-message-sources',
  standalone: true,
    imports: [
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
        DecimalPipe,
        PercentPipe
    ],
  templateUrl: './chat-message-sources.component.html',
  styleUrl: './chat-message-sources.component.scss'
})
export class ChatMessageSourcesComponent {
    dataSource = input.required<ResponseResource[]>();
    displayedColumns=['source','score'];

}
