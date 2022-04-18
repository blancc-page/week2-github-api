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

  searchUser(userName: string){
    return this.http.get(`${environment.API_URL}/users/${userName}`);
  }

  getInfo(userInfo: string){
    return this.http.get(`${environment.API_URL}/users/${userInfo}`);
  }

  initialUser(){
    return this.http.get(`${environment.API_URL}/users/blancc-page`);
  }

  getInitialRepos(repos: any[]){
    return this.http.get(`${environment.API_URL}/users/blancc-page/repos?sort=created`);
  }

  getRepos(repos: any[], username: any){
    return this.http.get(`${environment.API_URL}/users/${username}/repos?sort=created`);
  }
}
