import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  protected baseUrl = environment.api
  constructor(private http: HttpClient) { }

  getHistory (){
    const headers = new HttpHeaders()
    return this.http.get(this.baseUrl+'/history', {headers})
  }
}
