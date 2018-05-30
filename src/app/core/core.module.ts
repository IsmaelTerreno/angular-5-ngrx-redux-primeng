import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppService } from './services/app.service';
import { UserModule } from '../user/user.module';
import { HomeModule } from '../home/home.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UserModule,
    HomeModule
  ],
  providers: [
    AppService
  ]
})
export class CoreModule { }
