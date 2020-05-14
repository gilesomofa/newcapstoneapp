
export const createNonPreferredBehavior 
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
        type: NEW_NONPEFERREDBEHAVIOR,
        payload: nonPreferredBehavior,
      })
    );


export const createPreferredBehavior = (preferredBehaviorData) => (dispatch) => {
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
