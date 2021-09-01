import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  protected baseUrl = environment.api
  constructor(private http: HttpClient) { }
  getBookmarks () {
    const headers = new HttpHeaders()
    const res  = this.http.get(this.baseUrl+'/bookmark', {headers})
    return res;
  }
}
