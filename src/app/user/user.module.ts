import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserApiService } from './services/user-api.service';
import { FindUsersPageComponent } from './containers/find-users-page/find-users-page.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { CardModule } from 'primeng/card';
import { ViewUserDetailsPageComponent } from './containers/view-user-details-page/view-user-details-page.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    ProgressBarModule,
    CardModule,
  ],
  declarations: [
    UserListComponent,
    FindUsersPageComponent,
    ViewUserDetailsPageComponent],
  exports: [UserListComponent, FindUsersPageComponent, ViewUserDetailsPageComponent],
  providers: [
    UserApiService
  ]
})
export class UserModule { }
