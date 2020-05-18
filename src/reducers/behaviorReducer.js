import {
  FETCH_PREFERREDBEHAVIOR,
  FETCH_NONPREFERREDBEHAVIOR,
  NEW_PREFERREDBEHAVIOR,
  NEW_NONPREFERREDBEHAVIOR,
} from "../actions/types";
import preferredBehaviors from "../behaviorState/preferredBehaviors.json";

const initialState = {
  items: preferredBehaviors,
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
      console.log("fetching");
      return {
        ...state,
        items: action.payload,
      };
    case NEW_PREFERREDBEHAVIOR:
      console.log("fetching");
      return [...state, action.payload];

    case NEW_NONPREFERREDBEHAVIOR:
      return [...state, action.payload];
    default:
      return state;
  }
}
