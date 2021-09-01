import { BookmarkService } from './bookmark.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.sass']
})
export class BookmarkComponent implements OnInit {
  bookmarks:any = []
  constructor(private service: BookmarkService) { }

  ngOnInit(): void {
    this.listBookmarks()
  }
  listBookmarks() {
    this.service.getBookmarks()
    .subscribe(response => {
      console.log('respotaa qui',response);
      this.bookmarks = response
    })
  }
}
