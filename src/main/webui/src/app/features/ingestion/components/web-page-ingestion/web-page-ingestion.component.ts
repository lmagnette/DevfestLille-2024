import {Component, inject, model} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {IngestionService} from "../../services/ingestion.service";

@Component({
  selector: 'app-web-page-ingestion',
  standalone: true,
  imports: [
    MatFormField,
    MatIcon,
    MatInput,
    MatButton,
    MatLabel,
    FormsModule
  ],
  templateUrl: './web-page-ingestion.component.html',
  styleUrl: './web-page-ingestion.component.scss'
})
export class WebPageIngestionComponent {
  source= model<string>('');

  service = inject(IngestionService);


  ingestWebPage() {
    this.service.ingestWebPage(this.source()).subscribe();
  }
}
