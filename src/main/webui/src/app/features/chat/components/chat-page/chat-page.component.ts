import {Component, inject} from '@angular/core';
import {ChatBoxComponent} from "../chat-box/chat-box.component";
import {ChatMessageComponent} from "../chat-message/chat-message.component";
import {ChatHistoryComponent} from "../chat-history/chat-history.component";
import {ChatService} from "../../services/chat.service";

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [
    ChatBoxComponent,
    ChatMessageComponent,
    ChatHistoryComponent
  ],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.scss'
})
export default class ChatPageComponent  {

  service = inject(ChatService);

  constructor() {
    this.service.initChat();
  }

}
