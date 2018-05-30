import { Component, OnInit } from '@angular/core';
import { User } from '../../../user/models/user.model';
import { Store } from '@ngrx/store';
import * as fromUsers from '../../../core/reducers/app.reducer';
import {
  LogInUser,
  LogOutUser,
  SetCurrentUser
} from '../../../user/actions/user.action';

@Component({
  selector: 'ng-e-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser$: User;
  isLoggedIn$: boolean;
  constructor(
    private store: Store<fromUsers.State>,
  ) {
    this.store.select(state => state.users.currentUser).subscribe((details) => {
      this.currentUser$ = details as User;
      this.isLoggedIn$ = !!(this.currentUser$);
    }) ;
  }
  ngOnInit() {
  }
  loginUser($event) {
    const userToLogin: User = $event as User;
    this.store.dispatch(new LogInUser(userToLogin));
    this.store.dispatch(new SetCurrentUser(userToLogin));
  }
  logoutUser($event) {
    const userToLogout: User = $event as User;
    this.store.dispatch(new LogOutUser(userToLogout));
    this.store.dispatch(new SetCurrentUser(null));
  }
}
