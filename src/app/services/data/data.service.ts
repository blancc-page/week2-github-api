import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    const API_URL = environment.API_URL;
    const API_KEY = environment.API_KEY;
  }
// gets searched user profile info
  searchUser(userName: string){
    return this.http.get(`${environment.API_URL}/users/${userName}`);
  }
// gets user profile info on loadup
  getInfo(userInfo: string){
    return this.http.get(`${environment.API_URL}/users/${userInfo}`);
  }
// gets my user info
  initialUser(){
    return this.http.get(`${environment.API_URL}/users/blancc-page`);
  }
// gets my repo info
  getInitialRepos(repos: any[]){
    return this.http.get(`${environment.API_URL}/users/blancc-page/repos?sort=created`);
  }
// gets searched user repo info on loadup
  getRepos(repos: any[], username: any){
    return this.http.get(`${environment.API_URL}/users/${username}/repos?sort=created`);
  }
}
