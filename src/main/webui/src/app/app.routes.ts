import {Routes} from '@angular/router';
import ChatPageComponent from "./features/chat/components/chat-page/chat-page.component";
import IngestionPageComponent from "./features/ingestion/components/ingestion-page/ingestion-page.component";
import MeetingPageComponent from "./features/meeting/components/meeting-page/meeting-page.component";
import {ActionsPageComponent} from "./features/actions/components/actions-page/actions-page.component";

export const routes: Routes = [
  {
    path: 'chat',
    loadComponent: () => ChatPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'ingest',
    loadComponent: () => IngestionPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'meeting',
    loadComponent: () => MeetingPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'actions',
    loadComponent: () => ActionsPageComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'chat'
  }
];
