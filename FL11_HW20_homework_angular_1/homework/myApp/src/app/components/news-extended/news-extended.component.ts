import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-news-extended',
  templateUrl: './news-extended.component.html',
  styleUrls: ['./news-extended.component.css']
})
export class NewsExtendedComponent implements OnInit {
  public id: number;
  routeObserverable: Subscription;
  constructor(private route: ActivatedRoute) {
    console.log('Called Constructor');
  }
  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    this.routeObserverable = this.route.queryParams.subscribe(params => {
        this.id = params.id;
        console.log(params);
    });
  }

}
