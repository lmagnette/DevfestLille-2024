import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MeetingSummary} from "../models/meeting-summary";
import {Source} from "../../ingestion/models/source";

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

    private http = inject(HttpClient);

    summarize(){
      return this.http.post<MeetingSummary>('/api/meeting', {description:'the weekly meeting of june 5 2024'});
    }

    summarizeById(id:number){
        return this.http.get<string>(`/api/meeting/${id}`, { responseType: 'text' as 'json' });
    }

    list(){
        return this.http.get<Source[]>('/api/meeting/documents');
    }
}
