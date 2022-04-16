import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    const API_URL = environment.API_URL;
    const API_KEY = environment.API_KEY;
  }

  searchUser(userName: string, API_URL: string){
    return this.http.get(`${API_URL}${userName}&per_page=10`);
  }
}
