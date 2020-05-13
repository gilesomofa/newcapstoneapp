import { FETCH_STUDENTS, NEW_STUDENT, NEW_BEHAVIOR } from "../actions/types";

const initialState = {
  items: [],
  item: {},
  behavior: [],
  newBehavior: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_STUDENTS:
      return {
        ...state,
        items: action.payload,
      };
    case NEW_STUDENT:
      return {
        ...state,
        item: action.payload,
      };
    case CREATE_BEHAVIOR:
      return {
        ...state,
        behavior: action.payload,
      };
    case NEW_BEHAVIOR:
      return {
        ...state,
        newBehavior: action.payload,
      };
    default:
      return state;
  }
}
