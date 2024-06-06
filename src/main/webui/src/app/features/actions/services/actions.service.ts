import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Action} from "../models/action";

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  private http = inject(HttpClient)
  getAllActions() {
    return this.http.get<Action[]>('/actions');
  }
}
