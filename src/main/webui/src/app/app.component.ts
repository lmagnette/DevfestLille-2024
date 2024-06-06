import {AfterViewChecked, AfterViewInit, Component, effect, inject, Signal, viewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import MenuComponent from "./features/shared/components/menu/menu.component";
import {IngestionService} from "./features/ingestion/services/ingestion.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIcon, MatToolbar, MatIconButton, MatDrawerContainer, MatDrawerContent, MatDrawer, MatButton, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'company-genie-front';
  drawer: Signal<MatDrawer | undefined> = viewChild('drawer');
  service = inject(IngestionService)

  constructor() {
    effect(() => {
      if(this.drawer()){

        (this.drawer() as any as MatDrawer).toggle();
      }
    })
  }

  initClassifier() {
    this.service.initClassifier().subscribe();
  }
}
