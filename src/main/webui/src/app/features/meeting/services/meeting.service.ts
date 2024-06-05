import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MeetingSummary} from "../models/meeting-summary";

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

    private http = inject(HttpClient);

    summarize(){
      return this.http.post<MeetingSummary>('/meeting', {description:'the weekly meeting of june 5 2024'});
    }
}
