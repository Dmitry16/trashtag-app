/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.home;

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState ? homeState.username : null
);

export {
  selectHome,
  makeSelectUsername,
};
