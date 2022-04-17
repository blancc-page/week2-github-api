import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
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
  constructor(private dataService: DataService,  private route: ActivatedRoute) { }


  ngOnInit(): void {
    let login = String(this.route.snapshot.paramMap.get("user-info")!);
    this.userLogin = login;
    console.log(this.userLogin);
    
    this.dataService.getInfo(this.userLogin)
    .subscribe((response: any) => {
      this.users = response;
      console.log(this.users);
    })
  }
}
