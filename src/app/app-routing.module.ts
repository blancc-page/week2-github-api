import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

// create route paths for my components
const routes: Routes = [
  {path: "", component: SearchComponent},
  {path: ":user-info", component: UserInfoComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  SearchComponent,
  UserInfoComponent,
]
