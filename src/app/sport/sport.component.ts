import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent {

  articles;

  constructor(private apiService: ApiService) {}

  ionViewDidEnter() {

    this.apiService.getNewsSport().subscribe((data) => {
      console.log(data);
      this.articles = data['articles'];
    });
  }
}
