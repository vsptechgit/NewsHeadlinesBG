import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent {

  articles;

  constructor(private apiService: ApiService) {}

  ionViewDidEnter() {

    this.apiService.getNewsEntertainment().subscribe((data) => {
      console.log(data);
      this.articles = data['articles'];
    });
  }
}
