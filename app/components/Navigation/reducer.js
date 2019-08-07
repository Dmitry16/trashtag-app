import { fromJS } from 'immutable';

const MENU_CLICK = 'CHANGE_LOCALE';

const initialState = fromJS({
  menu: 'home',
});

function menuReducer(state = initialState, action) {
  switch (action.type) {
    case MENU_CLICK:
      return state.set('menu', action.menu);
    default:
      return state;
  }
}

export default menuReducer;