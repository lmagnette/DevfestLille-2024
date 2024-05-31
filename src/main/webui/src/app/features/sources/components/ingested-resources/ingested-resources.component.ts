import {Component, inject, OnInit, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Source} from "../../models/source";
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatNoDataRow,
  MatTable
} from "@angular/material/table";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-ingested-resources',
  standalone: true,
  imports: [
    MatCardTitle,
    MatCard,
    MatCardContent,
    MatColumnDef,
    MatHeaderCell,
    MatTable,
    MatCell,
    MatNoDataRow,
    MatCellDef,
    MatHeaderCellDef,
    MatCardActions,
    MatButton,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './ingested-resources.component.html',
  styleUrl: './ingested-resources.component.scss'
})
export class IngestedResourcesComponent implements OnInit{

  http = inject(HttpClient);

  sources = signal<Source[]>([]);


  ngOnInit(): void {
    this.loadSources();
  }

  refresh(){
    this.loadSources();
  }

  loadSources(){
    this.http.get<Source[]>('ingest/sources').subscribe(data => {
      this.sources.set(data);
    })
  }
}
