import { combineReducers } from 'redux';
import localeReducer from 'components/Locale/reducer';
import menuReducer from 'components/Navigation/reducer';
import searchReducer from 'components/Search/reducer';

const headerReducer = combineReducers({
  menu: menuReducer,
  locale: localeReducer,
  search: searchReducer,
});

export default headerReducer;