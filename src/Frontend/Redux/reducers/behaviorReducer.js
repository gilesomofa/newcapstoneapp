import {
  FETCH_PREFERREDBEHAVIOR,
  FETCH_NONPREFERREDBEHAVIOR,
  NEW_PREFERREDBEHAVIOR,
  NEW_NONPREFERREDBEHAVIOR,
} from "../actions/types";
import nonPreferredBehaviors from "../behaviorState/nonPreferredBehaviors.json";

import preferredBehaviors from "../behaviorState/preferredBehaviors.json";
const initialState = {
  items: preferredBehaviors || nonPreferredBehaviors,
  //I need to figure out how to have this by dynamic
  //where it can set the initialState of both arrays
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_NONPREFERREDBEHAVIOR:
      return [...state, action.payload];
    case FETCH_PREFERREDBEHAVIOR:
      return [...state, action.payload];

    case NEW_PREFERREDBEHAVIOR:
      return [...state, action.payload];

    case NEW_NONPREFERREDBEHAVIOR:
      return [...state, action.payload];
    default:
      return state;
  }
}
