import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppContentComponent} from './components/app-content/app-content.component';
import { HomeComponent } from './containers/home-page/home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [ AppHeaderComponent, AppContentComponent, HomeComponent ],
  exports: [ AppHeaderComponent, AppContentComponent, HomeComponent ],
  providers: []
})
export class HomeModule { }
