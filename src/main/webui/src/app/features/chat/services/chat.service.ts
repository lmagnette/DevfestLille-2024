import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {ChatExchange} from "../model/chat-exchange";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private httpClient = inject(HttpClient);

  private _chatHistory = signal<ChatExchange[]>([]);
  chatHistory = this._chatHistory.asReadonly()
  currentChatId = signal<string>('');
  loading = signal<boolean>(false);

  chat(prompt:string):Observable<ChatExchange>{
    this.loading.set(true);
    return this.httpClient.post<ChatExchange>('/api/chat',{id:this.currentChatId(),prompt}).pipe(
        tap(
            data => {
              this._chatHistory.update( history => [...history, data]);
              this.loading.set(false);
            }
        )
    );
  }

  initChat(){
    this.httpClient.get<{id:string,name:string}>('/history/new').subscribe(
      data =>
      this.currentChatId.set(data.id)
    )
  }



}
