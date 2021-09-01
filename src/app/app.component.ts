import { Component } from '@angular/core';
import { searchBarPost } from './app.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'frontend';
  bkmFlag = false
  hstFlag = false

  toggleBookmarks() {
    if (this.hstFlag) {
      this.toggleHistory()
    }
    this.bkmFlag = !this.bkmFlag;
  }

  toggleHistory() {
    if (this.bkmFlag) {
      this.toggleBookmarks()
    }
    this.hstFlag = !this.hstFlag;
  }
}
