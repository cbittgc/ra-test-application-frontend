import { searchBarPost } from '../app.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class SearchbarService {
  private post: searchBarPost = {
    url:""
  };
  private postUpdated = new Subject<searchBarPost>();

  constructor(private http: HttpClient) { }

  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }

  querySearchBarPost(url: string) {
    const post: searchBarPost = { url: url }
    this.http
    .post<{message: string}>('http://localhost:8000/api/history', post)
    .subscribe(responseData => {
      console.log(responseData.message)
      this.post = post
      this.postUpdated.next(this.post)
    })
  }
}
