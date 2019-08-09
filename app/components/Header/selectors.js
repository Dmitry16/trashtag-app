/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';


const selectHeader = (state) => { 
  // console.log('Header selectors::', state.get('header'))
  return state.get('header') };

const makeSelectLocale = () => createSelector(
  selectHeader,
  (headerState) => {
    // console.log('headerState:::', headerState)
    return headerState.locale.get('locale')}
);
const makeSelectSearch = () => createSelector(
  selectHeader,
  (headerState) => headerState.search.get('search')
);
const makeSelectMenu = () => createSelector(
  selectHeader,
  (headerState) => headerState.menu.get('menu')
);

export {
  selectHeader,
  makeSelectLocale,
  makeSelectSearch,
  makeSelectMenu,
};