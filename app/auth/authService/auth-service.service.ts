import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl = 'http://localhost:4000';
  constructor(private http:  HttpClient) { }

  signup_fundata(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseUrl}/SignUp`, data);
  }
  logindatafun(loginData: any): Observable<any> {
  console.log(loginData);
    
    return this.http.post(`${this.baseUrl}/login`, loginData);
  }
}
