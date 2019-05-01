import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  appRoute = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getData() {
    return this.http.get(`${this.appRoute}/people`);
  }
}
