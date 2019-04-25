import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent {

  articles;

  constructor(private apiService: ApiService) {}

  ionViewDidEnter() {

    this.apiService.getNewsScience().subscribe((data) => {
      console.log(data);
      this.articles = data['articles'];
    });
  }
}
