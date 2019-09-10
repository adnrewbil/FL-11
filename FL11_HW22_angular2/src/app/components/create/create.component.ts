import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title: string;
  description: string;
  text: string;
  date: string;
  author: string;
  url: string;

  constructor() { }

  ngOnInit() {
  }

  addNews() {
    console.log(`
      News was saved
      Tile: ${this.title}
      Description: ${this.description}
      Text: ${this.text}
      Date: ${this.date}
      Author: ${this.author}
      Url: ${this.url}`
    );
  }
}
