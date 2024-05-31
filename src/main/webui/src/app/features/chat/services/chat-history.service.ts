import {inject, Injectable, signal} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {ChatHistoryEntry} from "../models/chat-history-entry";

@Injectable({
  providedIn: 'root'
})
export class ChatHistoryService {


  private httpClient = inject(HttpClient);
  private _chats = signal<ChatHistoryEntry[]>([]);
  public chats = this._chats.asReadonly();

  createNewChat():Observable<ChatHistoryEntry>{
    return this.httpClient.get<ChatHistoryEntry>('/history/new').pipe(
        tap( entry => this._chats.update(chats => [...chats, entry])));

  }

}
