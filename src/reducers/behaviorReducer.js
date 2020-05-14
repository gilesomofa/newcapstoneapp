import {
  FETCH_PREFERREDBEHAVIOR,
  FETCH_NONPREFERREDBEHAVIOR,
  NEW_PREFERREDBEHAVIOR,
  NEW_NONPREFERREDBEHAVIOR,
} from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PREFERREDBEHAVIOR:
      return {
        ...state,
        items: action.payload,
      };
    case FETCH_NONPREFERREDBEHAVIOR:
      return {
        ...state,
        items: action.payload,
      };
    case NEW_PREFERREDBEHAVIOR:
      return {
        ...state,
        item: action.payload,
      };
    case NEW_NONPREFERREDBEHAVIOR:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}
