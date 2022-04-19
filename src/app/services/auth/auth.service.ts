import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
// gets token from local storage
  getToken(){
    return localStorage.getItem("token");
  }
}
