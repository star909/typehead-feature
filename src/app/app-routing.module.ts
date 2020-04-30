import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoTypeheadComponent } from './module/repo-typehead/repo-typehead.component';
import { UserTypeheadComponent } from './module/user-typehead/user-typehead.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'repo/list', pathMatch: 'full'
  },
  {
    path: 'repo/list', component: RepoTypeheadComponent
  },
  {
    path: 'repo/user', component: UserTypeheadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
