import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

const routes: Routes = [
  {path: "", component: SearchComponent,
  children:[
    {path: ":api.github.com", component: UserInfoComponent},
  ]},
  {path: ":api.github.com", component: UserInfoComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
