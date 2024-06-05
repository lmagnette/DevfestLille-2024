import {Component, inject} from '@angular/core';
import {ChatExchange} from "../../model/chat-exchange";
import {ChatMessageComponent} from "../chat-message/chat-message.component";
import {ChatService} from "../../services/chat.service";

@Component({
  selector: 'app-chat-history',
  standalone: true,
  imports: [
    ChatMessageComponent
  ],
  templateUrl: './chat-history.component.html',
  styleUrl: './chat-history.component.scss'
})
export class ChatHistoryComponent {

  protected chat = inject(ChatService).chatHistory;
  protected loading = inject(ChatService).loading;


}
