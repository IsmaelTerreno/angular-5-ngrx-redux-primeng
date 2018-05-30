import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { User } from '../../models/user.model';
import * as fromUsers from '../../../core/reducers/app.reducer';
import { Store } from '@ngrx/store';
import { SearchAllUserList, ViewUserDetails } from '../../actions/user.action';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-e-find-users-page',
  templateUrl: './find-users-page.component.html',
  styleUrls: ['./find-users-page.component.scss'],
})
export class FindUsersPageComponent implements OnInit {
  usersList$: User[];
  isWorking$: boolean;
  constructor(
    private store: Store<fromUsers.State>,
    private router: Router,
    ) {
    this.store.select(state => state.users.userList).subscribe((results) => {
      this.usersList$ = results as User[];
    }) ;
    this.store.select(state => state.users.isWorking).subscribe((workingStatus) => {
      this.isWorking$ = workingStatus as boolean;
    });
  }
  ngOnInit() {
  }
  search() {
    this.store.dispatch(new SearchAllUserList(''));
  }
  viewUserDetails($event) {
    const userToView: User = $event as User;
    this.store.dispatch(new ViewUserDetails(userToView));
    this.router.navigate(['user-detail/'.concat(userToView.id)]);
  }
}
