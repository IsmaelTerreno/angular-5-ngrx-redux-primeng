import { ActionsUnion, ActionTypes } from '../actions/user.action';
import { User } from '../models/user.model';

export interface State {
  userList: User[];
  isWorking: boolean;
  userDetails: User;
  currentUser: User;
}

const initialState: State = {
  userList: null,
  isWorking: false,
  userDetails: null,
  currentUser: null,
};

/**
 * Users reducer.
 * @param {State} state
 * @param {Actions} action
 * @returns {State}
 */
export function reducer(
  state: State = initialState,
  action: ActionsUnion
): State {
  switch (action.type) {
    case ActionTypes.SEARCH_ALL_USER_LIST:
      return {
        ...state,
        isWorking: true,
      };
    case ActionTypes.SEARCH_ALL_USER_LIST_FAIL:
      return {
        ...state,
        isWorking: false,
      };
    case ActionTypes.SEARCH_ALL_USER_LIST_SUCCESS:
      return {
        ...state,
        userList: action.payload as User[] || null,
        isWorking: false,
      };
    case ActionTypes.VIEW_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload || null,
      };
    case ActionTypes.LOGIN_USER:
      return {
        ...state,
        isWorking: true,
      };
    case ActionTypes.LOGOUT_USER:
      return {
        ...state,
        isWorking: true,
      };
    case ActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload || null,
        isWorking: false,
      };
    default:
      return state;
  }
}

/**
 * Selector for user list.
 * @param {State} state
 * @returns {User[]}
 */
export const getUserList = (state: State) => state.userList;
/**
 * Selector for "is working" when make a service call or
 * a process is running.
 * @param {State} state
 * @returns {boolean}
 */
export const getIsWorking = (state: State) => state.isWorking;

