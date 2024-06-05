import {Component, computed, input, signal} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {MarkdownComponent} from "ngx-markdown";
import {ResponseResource} from "../../model/response-resource";
import {ChatMessageSourcesComponent} from "../chat-message-sources/chat-message-sources.component";

@Component({
  selector: 'app-chat-message',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardActions,
        MatButton,
        NgOptimizedImage,
        MarkdownComponent,
        ChatMessageSourcesComponent
    ],
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.scss'
})
export class ChatMessageComponent {

  user  = input<'user'|'bot'>('user');
  userImage = computed(() => `assets/icons/${this.user()}.png`);
  content = input.required<string>();
  sources = input<ResponseResource[]>([]);
  showSources = signal<boolean>(false);

  toggleSource(){
    this.showSources.update( show => !show);
  }
}
