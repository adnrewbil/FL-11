import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/models/News';
import { NewsService } from 'src/app/services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public newItem: News = {
    img: 'https://picsum.photos/200',
    title: '',
    shortDescription: '',
    content: '',
    date: '',
    author: '',
    url: ''
  };

  constructor(public newService: NewsService, public router: Router) {

  }


  ngOnInit() {

  }


  onSubmit() {
    if (this.newItem.title !== '' && this.newItem.url !== '') {
      this.newService.addItem(this.newItem);

      this.newItem.title = '';
      this.newItem.shortDescription = '';
      this.newItem.content = '';
      this.newItem.date = '';
      this.newItem.author = '';
      this.newItem.url = '';
    }


  }
}
// console.log(`
//       News was saved
//       Tile: ${this.newItem.title}
//       Description: ${this.newItem.shortDescription}
//       Text: ${this.newItem.content}
//       Date: ${this.newItem.date}
//       Author: ${this.newItem.author}
//       Url: ${this.newItem.url}`
//     );
