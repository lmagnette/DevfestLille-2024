import {Component, signal} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
    imports: [
        MatToolbar,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  collapsed = signal<boolean>(false);

  onCollapse(collapsed: boolean) {
    this.collapsed.set(collapsed);
  }
}
