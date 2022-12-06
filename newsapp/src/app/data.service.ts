import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=819b763010e64f5790392a15d2b28047')
  }

  addNews(article: any) {
    return this.http.post(`${environment.apiUrl}/favorites`, article);
  }

  getFavorites(){
    return this.http.get(`${environment.apiUrl}/favorites`);
  }

  login(cred: any){
    return this.http.post(`${environment.apiUrl}/login`, cred);
  }
  
}
