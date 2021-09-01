import { SearchbarService } from './../searchbar/searchbar.service';
import { searchBarPost } from './../app.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoViewService } from './video-view.service';
@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.sass']
})
export class VideoViewComponent implements OnInit, OnDestroy {
  private post: searchBarPost = {
    url: ""
  }
  private postSub: Subscription = new Subscription;
  public flag: boolean = false
  public treatedLink: string = '';
  urlSafe: SafeResourceUrl;

  constructor(public SearchbarService: SearchbarService,
    private sanitizer: DomSanitizer,
    private service: VideoViewService) {
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.post.url);
    }

  ngOnInit() {
    this.postSub = this.SearchbarService.getPostUpdateListener()
    .subscribe((post: searchBarPost) => {
      this.post = post;
      this.treatLink();
    });
  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }
  treatLink() {
    this.treatedLink = this.post.url.replace('watch?v=','embed/')
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.treatedLink);
  }
  /*
  patchBookmark() {
    this.service.patchBookmark()
  }
  */
}
