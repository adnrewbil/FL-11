import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Source } from '../../models/Source';

@Component({
  selector: 'app-news-source',
  templateUrl: './news-source.component.html',
  styleUrls: ['./news-source.component.css']
})

export class NewsSourceComponent implements OnInit {

  public sourceList: Source[];

  constructor(public service: NewsService ) {

  }

  ngOnInit() {
    this.service.getSource().subscribe(src => {
      this.sourceList = src;
    });
    console.log(this.sourceList);
  }

  onClick(val: string) {
    this.service.filterValue = val;
  }
}
