import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HistoryComponent } from './history/history.component';
import { VideoViewComponent } from './video-view/video-view.component';
import { BookmarkComponent } from './bookmark/bookmark.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    HistoryComponent,
    VideoViewComponent,
    BookmarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
