import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/containers/home-page/home.component';
import { FindUsersPageComponent } from './user/containers/find-users-page/find-users-page.component';
import { ViewUserDetailsPageComponent } from './user/containers/view-user-details-page/view-user-details-page.component';

const routes: Routes = [ {
  path: 'home',
  component: HomeComponent
}, {
  path: 'users-list',
  component: FindUsersPageComponent
}, {
  path: 'user-detail/:id',
  component: ViewUserDetailsPageComponent
}, {
  path: '**',
  redirectTo: 'users-list'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
