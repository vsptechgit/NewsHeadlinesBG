import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {

  articles;

  constructor(private apiService: ApiService) {}

  ionViewDidEnter() {

    this.apiService.getNewsTechnology().subscribe((data) => {
      console.log(data);
      this.articles = data['articles'];
    });
  }
}
