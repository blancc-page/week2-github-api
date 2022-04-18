import { Component, OnInit, ViewChildren } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Data, Router } from '@angular/router';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users: any[] = [];
  repos: any[] = [];
  repo: any[] = [];
  html_url: any[] = [];
  responseArr: any [] = [];
  iLogin!: string;
  sLogin!: string;
  avatar!: string;
  name!: string;
  sName!:string;
  photo!: string;
  bio!: string;
  following!: string;
  followers!: string;
  public_repos!: number;

  constructor( private http: HttpClient, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.initialUser()
    .subscribe((response: any) => {
      this.users = response; 
      this.iLogin = response.login;
      this.name = response.name;
      this.photo = response.avatar_url;
      this.bio = response.bio;
      this.followers = response.followers;
      this.following = response.following;
      this.public_repos = response.public_repos;
      console.log(this.users);  
    });

    this.dataService.getRepos(this.repos)
    .subscribe((response: any) => {
      this.responseArr = response;
      this.responseArr.slice(0, 10).forEach((response) => {
        this.repo.push(response.name);
        this.html_url.push(response.html_url)
      });
      console.log(this.repo);
      console.log(this.html_url);
    });

    
    
  }

  userSearch(form: NgForm){
    this.router.navigate([""], { fragment: "search" });
    let {userName} = form.value;
    this.dataService.searchUser(userName)
    .subscribe((response: any) => {
      // set JSON response to the gifs array
            this.users = response; 
            this.avatar = response.avatar_url;
            this.sLogin = response.login;   
            this.sName = response.name;
    });
  }

  onSelect(){
    this.router.navigate(["/", this.sLogin]);
  }
  
}
