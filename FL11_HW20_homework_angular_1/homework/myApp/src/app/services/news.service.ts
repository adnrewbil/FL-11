import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from 'src/app/models/News';
import { Source } from 'src/app/models/Source';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsUrl: string = '../../assets/news.json';
  sourceUrl: string = '../../assets/source.json';

  filterValue: string = '';

  constructor(private http:HttpClient) { }

  getNews():Observable<News[]> {
    return this.http.get<News[]>(this.newsUrl);
  }
  getSource():Observable<Source[]> {
    return this.http.get<Source[]>(this.sourceUrl);
  }

}
