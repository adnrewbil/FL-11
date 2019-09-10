import { Component, OnInit} from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Source } from '../../models/Source';
import { News } from 'src/app/models/News';

@Component({
  selector: 'app-news-source',
  templateUrl: './news-source.component.html',
  styleUrls: ['./news-source.component.css']
})

export class NewsSourceComponent implements OnInit {

  public selectedOption: number;
  public sourceList: Source[];
  public newsList: News[];
  public heading: string = 'Source name';
  public news: News[];

  constructor(public service: NewsService ) {

  }

  ngOnInit() {
    this.service.getSource().subscribe(src => {
      this.sourceList = src;
    });

    this.service.getFireNews().subscribe(news => {
      console.log(news);
    });
  }

  onClick(val: string) {
    this.service.filterValue = val;
  }

  select() {
    this.sourceList.map(s => {
      if (+this.selectedOption === s.sourceId) {
        this.heading = s.sourceName;
      }
    });
    this.service.setSelected(this.selectedOption);
  }

}
