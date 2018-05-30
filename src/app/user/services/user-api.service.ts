import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable()
export class UserApiService {
  private _userEndPoint = 'https://randomuser.me/api/';
  private _requestListUsers = '?inc=name,email,phone,picture&results=20';
  constructor(private http: HttpClient) { }
  /**
   * Obtain users list with a maximum of 20.
   * @returns {Observable<User>}
   */
  obtainListUsers(): Observable<User[]> {
    return this.http
      .get<{ results: User[] }>(this._userEndPoint + this._requestListUsers)
      .pipe(
        map(users => this.processIdUsers(users.results) || [])
      );
  }
  private processIdUsers(users): User[] {
    const usersCopy = users;
    return usersCopy.map( user => {
      const userWithId = user;
      user.id = this.uuid();
      return userWithId;
    });
  }
  private uuid(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}
