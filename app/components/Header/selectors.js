/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHeader = (state) => state ? state.get('header') : null;

const makeSelectLocale = () => createSelector(
  selectHeader,
  (headerState) => headerState ? headerState.locale : null
);
const makeSelectSearch = () => createSelector(
  selectHeader,
  (headerState) => headerState ? headerState.search : null
);
const makeSelectMenu = () => createSelector(
  selectHeader,
  (headerState) => headerState ? headerState.menu : null
);

export {
  selectHeader,
  makeSelectLocale,
  makeSelectSearch,
  makeSelectMenu,
};