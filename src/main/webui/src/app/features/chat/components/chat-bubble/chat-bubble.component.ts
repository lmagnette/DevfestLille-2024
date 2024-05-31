import {Component, input, signal} from '@angular/core';
import {DecimalPipe} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {ResponseResource} from "../../models/response-resource";
import {MarkdownComponent} from "ngx-markdown";

@Component({
  selector: 'app-chat-bubble',
  standalone: true,
    imports: [
        DecimalPipe,
        MatButton,
        MarkdownComponent
    ],
  templateUrl: './chat-bubble.component.html',
  styleUrl: './chat-bubble.component.scss'
})
export class ChatBubbleComponent {

    userName = input.required<string>();
    message = input.required<string>();
    resources = input<ResponseResource[]>([]);
    side = input<'left'|'right'>('left');

    showRessources = signal<boolean>(false);
    toggleRessources() {
        this.showRessources.update( show => !show);
    }

}
