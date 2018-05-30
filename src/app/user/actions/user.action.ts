import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

export enum ActionTypes {
  SEARCH_ALL_USER_LIST = '[User] Search all list.',
  SEARCH_ALL_USER_LIST_SUCCESS = '[User] Search all list success.',
  SEARCH_ALL_USER_LIST_FAIL = '[User] Search all list fail.',
  VIEW_USER_DETAILS = '[User] View details.',
  LOGIN_USER = '[User] Login.',
  LOGOUT_USER = '[User] Logout.',
  SET_CURRENT_USER = '[User] Set Current'
}

export class SearchAllUserList implements Action {
  readonly type = ActionTypes.SEARCH_ALL_USER_LIST;
  constructor(public payload: string) { }
}
export class SearchAllUserListSuccess implements Action {
  readonly type = ActionTypes.SEARCH_ALL_USER_LIST_SUCCESS;
  constructor(public payload: User[]) { }
}
export class SearchAllUserListFail implements Action {
  readonly type = ActionTypes.SEARCH_ALL_USER_LIST_FAIL;
  constructor(public payload: string) { }
}
export class LogInUser implements Action {
  readonly type = ActionTypes.LOGIN_USER;
  constructor(public payload: User) { }
}
export class LogOutUser implements Action {
  readonly type = ActionTypes.LOGOUT_USER;
  constructor(public payload: User) { }
}
export class SetCurrentUser implements Action {
  readonly type = ActionTypes.SET_CURRENT_USER;
  constructor(public payload: User) { }
}
export class ViewUserDetails implements Action {
  readonly type = ActionTypes.VIEW_USER_DETAILS;
  constructor(public payload: User) { }
}
export type ActionsUnion =
  SearchAllUserList |
  SearchAllUserListSuccess |
  SearchAllUserListFail |
  ViewUserDetails |
  LogInUser |
  LogOutUser |
  SetCurrentUser;
