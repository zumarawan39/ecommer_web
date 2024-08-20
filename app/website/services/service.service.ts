import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private api="http://localhost:3000";
  constructor(private http:HttpClient) { }
 showUsers():Observable<any>{
  return this.http.get(`${this.api}/userAll`)
 }
}
