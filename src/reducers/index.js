import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
import behaviorReducer from "./behaviorReducer";

export default combineReducers({
  students: studentReducer,
  behaviors: behaviorReducer,
});
