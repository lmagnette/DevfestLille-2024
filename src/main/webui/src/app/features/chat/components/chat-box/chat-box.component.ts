import {Component, inject} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {ChatService} from "../../services/chat.service";

@Component({
  selector: 'app-chat-box',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatFabButton,
    MatLabel,
    MatIcon
  ],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.scss'
})
export class ChatBoxComponent {

  service = inject(ChatService);
  prompt = '';


  onSubmit() {
    this.service.chat(this.prompt).subscribe();
  }
}
