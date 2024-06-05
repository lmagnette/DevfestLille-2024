import {Routes} from '@angular/router';
import ChatPageComponent from "./features/chat/components/chat-page/chat-page.component";
import IngestionPageComponent from "./features/ingestion/components/ingestion-page/ingestion-page.component";

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
    path: '**',
    redirectTo: 'chat'
  }
];
