import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import * as fromUsers from '../../../core/reducers/app.reducer';
import { Location } from '@angular/common';
@Component({
  selector: 'ng-e-view-user-details-page',
  templateUrl: './view-user-details-page.component.html',
  styleUrls: ['./view-user-details-page.component.scss']
})
export class ViewUserDetailsPageComponent implements OnInit {
  userDetails$: User;
  imageAvatar$: string;
  constructor(
    private store: Store<fromUsers.State>,
    private location: Location,
  ) {
      this.store.select(state => state.users.userDetails).subscribe((details) => {
          this.userDetails$ = details as User;
          this.imageAvatar$ = this.userDetails$.picture.large;
      }) ;
  }
  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }
}
