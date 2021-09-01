import { SearchbarService } from './searchbar.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent {
  constructor(public SearchbarService: SearchbarService) { }

  onAddPost(form: NgForm) {
    this.SearchbarService.querySearchBarPost(form.value.url);
    form.resetForm();
  }
}
