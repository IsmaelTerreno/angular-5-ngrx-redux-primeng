import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { User } from '../../../user/models/user.model';
import { USER_DEMO_LOGIN } from '../../models/user.demo.login';

@Component({
  selector: 'ng-e-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  @Input() user: User;
  @Input() isLoggedIn: boolean;
  @Output() logOutUser = new EventEmitter<User>();
  @Output() logInUser = new EventEmitter<User>();
  constructor() { }

  ngOnInit() {
  }
  login() {
    this.user = USER_DEMO_LOGIN;
    this.logInUser.emit(this.user);
  }
  logout() {
    this.logOutUser.emit(this.user);
  }
}
