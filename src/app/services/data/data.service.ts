import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms'; 
import { SearchComponent } from 'src/app/components/search/search.component';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    const API_URL = environment.API_URL;
    const API_KEY = environment.API_KEY;
  }

  searchUser(userName: string){
    return this.http.get(`${environment.API_URL}/search/users?q=${userName}`);
  }

  getInfo(userInfo: string){
    return this.http.get(`${environment.API_URL}/users/${userInfo}`);
  }

  initialUser(){
    return this.http.get(`${environment.API_URL}/users/blancc-page`);
  }

  getRepos(repos: any[]){
    return this.http.get(`${environment.API_URL}/users/blancc-page/repos?sort=created`);
  }
}
