/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.global;

const selectRoute = (state) => state.route;

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState ? globalState.currentUser : null
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState ? globalState.loading : null
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState ? globalState.error : null
);

const makeSelectRepos = () => createSelector(
  selectGlobal,
  (globalState) => globalState ? globalState.userData.repositories : null
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.location
);

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
};
