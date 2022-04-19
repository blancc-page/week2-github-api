import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  public users!: any[];
  public userLogin!: string;
  repos: any[] = [];
  repo: any[] = [];
  html_url: any[] = [];
  responseArr: any [] = [];
  name!: string;
  photo!: string;
  bio!: string;
  followers!: string;
  following!: string;
  public_repos!: string;
  constructor(private dataService: DataService,  private route: ActivatedRoute) { }


  ngOnInit(): void {
// takes a snapshot of the route params and gets the search term (user-info)
    let login = String(this.route.snapshot.paramMap.get("user-info")!);
    this.userLogin = login;

// on loadup the page calls an api to get the searched github profile info
    this.dataService.getInfo(this.userLogin)
    .subscribe((response: any) => {
      this.users = response;
      this.name = response.name;
      this.photo = response.avatar_url;
      this.bio = response.bio;
      this.followers = response.followers;
      this.following = response.following;
      this.public_repos = response.public_repos;

      // console.log(this.users);
    });
// on loadup the page calls an api to get the searched github repo info
    this.dataService.getRepos(this.repos, this.userLogin)
    .subscribe((response: any) => {
      this.responseArr = response;
      console.log(response)
      this.responseArr.slice(0, 10).forEach((response) => {
        this.repo.push(response.name);
        this.html_url.push(response.html_url);
      });
      // console.log(this.userLogin);
      // console.log(this.html_url);
    });
  }
}
