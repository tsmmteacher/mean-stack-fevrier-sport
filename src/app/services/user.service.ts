import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loginUrl ='http://localhost:3000';
  constructor(private httpClient:HttpClient) { }//c'est le "post MAN"
  login(user:any){
    return this.httpClient.post(`${this.loginUrl}/login`, user);  }
  signup(user:any){
    return this.httpClient.post<{message:string}>(`${this.loginUrl}/signup`, user);  }
  }

