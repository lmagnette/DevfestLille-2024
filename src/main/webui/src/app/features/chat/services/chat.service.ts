import {inject, Injectable, signal} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {ChatExchange} from "../models/chat-exchange";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private httpClient = inject(HttpClient);

  currentChatId = signal<String|null>(null);
  
  chat(prompt:string):Observable<ChatExchange>{
    return this.httpClient.post<ChatExchange>('chat',{id:this.currentChatId(),prompt});
  }

}
