import {
  NEW_PREFERREDBEHAVIOR,
  NEW_NONPREFERREDBEHAVIOR,
  FETCH_NONPREFERREDBEHAVIOR,
  FETCH_PREFERREDBEHAVIOR,
} from "./types";

export const getNonPreferredBehavior = () => (dispatch) => {
  fetch("./behaviorState/nonPreferredBehaviors.json")
    .then((res) => res.json())
    .then((nonPreferredBehaviors) =>
      dispatch({
        type: FETCH_NONPREFERREDBEHAVIOR,
        payload: nonPreferredBehaviors,
      })
    );
};
export const getPreferredBehavior = () => (dispatch) => {
  fetch("./behaviorState/preferredBehaviors.json")
    .then((res) => res.json())
    .then((preferredBehaviors) =>
      dispatch({
        type: FETCH_PREFERREDBEHAVIOR,
        payload: preferredBehaviors,
      })
    );
};
export const createNonPreferredBehavior = (nonPreferredBehaviorData) => (
  dispatch
) => {
  fetch("./behaviorState/nonPreferredBehaviors.json", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(nonPreferredBehaviorData),
  })
    .then((res) => res.json())
    .then((nonPreferredBehavior) =>
      dispatch({
        type: NEW_NONPREFERREDBEHAVIOR,
        payload: nonPreferredBehavior,
      })
    );
};
export const createPreferredBehavior = (preferredBehaviorData) => (
  dispatch
) => {
  fetch("./behaviorState/preferredBehaviors.json", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(preferredBehaviorData),
  })
    .then((res) => res.json())
    .then((preferredBehavior) =>
      dispatch({
        type: NEW_PREFERREDBEHAVIOR,
        payload: preferredBehavior,
      })
    );
};
