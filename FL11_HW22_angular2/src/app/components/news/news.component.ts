import { Component, OnInit, Input } from '@angular/core';

import { NewsService } from '../../services/news.service';
import { News } from 'src/app/models/News';
import { Source } from 'src/app/models/Source';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input() myStringFromNews: string;

  public newsList: News[];
  public sourceList: Source[];
  public source: Source[];
  public sourceFilter: number;

  constructor(public newsService: NewsService) { }

  ngOnInit() {

    debugger
    // this.newsService.getNews().subscribe(news => {
    //   this.newsList = news;
    // });
    this.newsList = this.newsService.news;
    this.newsService.getFireNews().subscribe(news => {
      debugger
      this.newsService.news = news;
      this.newsList = news;
    });

  }


}
