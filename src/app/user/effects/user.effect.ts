import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AsyncScheduler } from 'rxjs/scheduler/AsyncScheduler';
import { of } from 'rxjs/observable/of';
import { Scheduler } from 'rxjs/Scheduler';
import {
  catchError,
  debounceTime,
  map,
  switchMap,
} from 'rxjs/operators';

import { UserApiService } from '../services/user-api.service';
import {
  ActionTypes,
  SearchAllUserList,
  SearchAllUserListSuccess,
  SearchAllUserListFail,
} from '../actions/user.action';
import { User } from '../models/user.model';
import {IScheduler} from 'rxjs/src/Scheduler';

export const SEARCH_DEBOUNCE = new InjectionToken<number>('Search Debounce');
export const SEARCH_SCHEDULER = new InjectionToken<IScheduler>(
  'Search Scheduler'
);

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class UserEffects {
  @Effect()
  search$: Observable<Action> = this.actions$.pipe(
    ofType<SearchAllUserList>(ActionTypes.SEARCH_ALL_USER_LIST),
    map(action => action.payload),
    switchMap(() => {
      return this.userApiService
        .obtainListUsers()
        .pipe(
          map((users: User[]) => new SearchAllUserListSuccess(users)),
          catchError(err => of(new SearchAllUserListFail(err)))
        );
    })
  );

  constructor(
    private actions$: Actions,
    private userApiService: UserApiService
  ) {}
}
