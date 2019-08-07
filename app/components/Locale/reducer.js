import { fromJS } from 'immutable';

const CHANGE_LOCALE = 'CHANGE_LOCALE';

const initialState = fromJS({
  locale: 'en',
});

function localeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return state.set('locale', action.locale);
    default:
      return state;
  }
}

export default localeReducer;