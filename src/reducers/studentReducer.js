import { FETCH_STUDENTS, NEW_STUDENT } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_STUDENTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_STUDENT:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
