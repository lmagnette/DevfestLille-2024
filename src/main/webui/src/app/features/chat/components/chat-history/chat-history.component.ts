import {Component, inject, model, OnInit, signal} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {ChatHistoryService} from "../../services/chat-history.service";
import {ChatService} from "../../services/chat.service";

@Component({
  selector: 'app-chat-history',
  standalone: true,
    imports: [
        MatIcon,
        MatIconButton
    ],
  templateUrl: './chat-history.component.html',
  styleUrl: './chat-history.component.scss'
})
export class ChatHistoryComponent implements OnInit{

    collapsed = model.required<boolean>();

    chatHistoryService = inject(ChatHistoryService);
    chatService = inject(ChatService);
    chats = this.chatHistoryService.chats;

    menuDisplayed = signal<boolean>(true);

    ngOnInit(): void {
        this.createNewChat();
    }

    createNewChat(){
        this.chatHistoryService.createNewChat().subscribe( data => this.chatService.currentChatId.set(data.id));
    }

    toggleMenu() {
        this.collapsed.update( value => !value);
    }
}
