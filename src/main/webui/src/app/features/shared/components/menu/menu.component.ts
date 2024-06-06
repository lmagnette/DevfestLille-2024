import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
    imports: [
        MatIcon,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export default class MenuComponent {
  menu:MenuEntry[] = [
    {
      label:'Chat',
      url:'./chat',
      iconName:'chat'
    },
    {
      label:'Ingest',
      url:'./ingest',
      iconName:'cloud_download'
    },
    {
      label:'Meeting',
      url:'./meeting',
      iconName:'groups'
    }
  ];
}


export interface MenuEntry {
  label:string;
  url:string;
  iconName:string;
}
