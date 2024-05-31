import { Routes } from '@angular/router';
import ChatPageComponent from "./features/chat/components/chat-page/chat-page.component";
import ResourcesPageComponent from "./features/sources/components/resources-page/resources-page.component";

export const routes: Routes = [
    {
        path:'chat',
        loadComponent:() => ChatPageComponent
    },
    {
        path:'resources',
        loadComponent: () => ResourcesPageComponent
    },
    { path: '**', redirectTo:'chat' },
    {
        path:'',
        pathMatch:'full',
        redirectTo:'chat'
    }
];
