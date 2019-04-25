import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {

  articles;

  constructor(private apiService: ApiService) {}

  ionViewDidEnter() {

    this.apiService.getNewsHealth().subscribe((data) => {
      console.log(data);
      this.articles = data['articles'];
    });
  }
}
