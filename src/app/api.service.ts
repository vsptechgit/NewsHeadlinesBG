import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = 'e40d07f00b094602953cc3bf8537477e';

  constructor(private httpClient: HttpClient) { }

  getNewsBusiness() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=bg&category=business&apiKey=20581375e8c54a169a6c581215a43e0f`);
  }
  getNewsEntertainment() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=bg&category=entertainment&apiKey=20581375e8c54a169a6c581215a43e0f`);
  }
  getNewsHealth() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=bg&category=health&apiKey=20581375e8c54a169a6c581215a43e0f`);
  }
  getNewsScience() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=bg&category=science&apiKey=20581375e8c54a169a6c581215a43e0f`);
  }
  getNewsSport() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=bg&category=sports&apiKey=20581375e8c54a169a6c581215a43e0f`);
  }
  getNewsTechnology() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=bg&category=technology&apiKey=20581375e8c54a169a6c581215a43e0f`);
  }
}
