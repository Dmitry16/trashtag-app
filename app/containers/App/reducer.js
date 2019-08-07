/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
} from './constants';

// The initial state of the App
const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: null,
  },
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return {
        ...state,
        loading: true
      };
    case LOAD_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        username: action.username,
        userData: {
          repositories: action.repos
        }
      };
    case LOAD_REPOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default appReducer;
