import { fromJS } from 'immutable';

const SEARCH_START = 'SEARCH_START';

const initialState = fromJS({
  search: 'zzz',
});

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_START:
      return state.set('locale', action.locale);
    default:
      return state;
  }
}

export default searchReducer;