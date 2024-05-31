import {Component, inject, signal} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {ChatService} from "../../services/chat.service";
import {ChatExchange} from "../../models/chat-exchange";
import {DecimalPipe} from "@angular/common";
import {ChatBubbleComponent} from "../chat-bubble/chat-bubble.component";

@Component({
  selector: 'app-chat',
  standalone: true,
    imports: [
        MatFormField,
        MatIcon,
        MatIconButton,
        MatInput,
        MatLabel,
        FormsModule,
        DecimalPipe,
        MatButton,
        ChatBubbleComponent
    ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

    chatService = inject(ChatService);

    chatHistory = signal<ChatExchange[]>([]);
    loading = signal<boolean>(false);

    prompt:string = '';
    showRessources = signal<boolean>(false);

    sendMessage() {
        this.loading.set(true);
        const currentPrompt = this.prompt;
        this.prompt = '';
        this.chatService.chat(currentPrompt).subscribe(data => {
            this.loading.set(false);
            this.chatHistory.update(history => [...history, data]);

        });
    }


    toggleRessources() {
        this.showRessources.update( show => !show);
    }
}
