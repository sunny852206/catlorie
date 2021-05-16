export const ADD_TO_LOG = "ADD_TO_LOG";
export const REMOVE_FROM_LOG = "REMOVE_FROM_LOG";

export const addToLog = (meal) => {
  return { type: ADD_TO_LOG, meal: meal };
};

export const removeFromLog = (mealId) => {
  return { type: REMOVE_FROM_LOG, mid: mealId };
};
