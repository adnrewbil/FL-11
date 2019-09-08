import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/models/News';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  @Input() newsItem: News;

  constructor() { }

  ngOnInit() {
  }

}
