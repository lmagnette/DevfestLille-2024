import {Component, signal} from '@angular/core';
import {ChatHistoryComponent} from "../chat-history/chat-history.component";
import {ChatComponent} from "../chat/chat.component";

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [
    ChatHistoryComponent,
    ChatComponent
  ],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.scss'
})
export default class ChatPageComponent {
  collapsed = signal<boolean>(false);

  onCollapse(collapsed: boolean) {
    this.collapsed.set(collapsed);
  }
}
