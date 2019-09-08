import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Source } from '../models/Source';

@Injectable({
  providedIn: 'root'
})
export class SourceService {
  sourceUrl: string = '../../assets/source.json';
  constructor(private http:HttpClient) { }

  getSource():Observable<Source[]> {
    return this.http.get<Source[]>(this.sourceUrl);
  }
}
