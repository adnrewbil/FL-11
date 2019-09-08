import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-source',
  templateUrl: './news-source.component.html',
  styleUrls: ['./news-source.component.css']
})

export class NewsSourceComponent implements OnInit {


  constructor(public service: NewsService) {
  }

  ngOnInit() {}

  onClick(val: string) {
    this.service.filterValue = val;
  }
}
