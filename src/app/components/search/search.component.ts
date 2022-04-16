import { Component, OnInit, ViewChildren } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users: any[] = [];

  constructor(private dataService: DataService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  userSearch(form: NgForm){
    let {userName} = form.value;
    return this.http.get(`${environment.API_URL}${userName}`)
    .subscribe((response: any) => {
      // set JSON response to the gifs array
            this.users = response.items; 
            console.log(this.users);
            
    });
  }
  
}
