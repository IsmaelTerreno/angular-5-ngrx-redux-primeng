import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'ng-e-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() users: User[];
  @Output() userIsSelected = new EventEmitter<User>();
  selectedUser: User;
  onRowSelect(event) {
    this.userIsSelected.emit(this.selectedUser);
  }
}
