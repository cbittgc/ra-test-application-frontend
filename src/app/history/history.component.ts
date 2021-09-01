import { Component, OnInit } from '@angular/core';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent implements OnInit {
  histories:any = [];
  constructor(private service: HistoryService) { }

  ngOnInit(): void {
    this.listHistory()
  }
  listHistory() {
    this.service.getHistory()
    .subscribe(response => {
      this.histories = response
    })
  }
}
