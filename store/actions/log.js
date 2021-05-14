export const ADD_TO_LOG = "ADD_TO_LOG";

export const addToLog = (meal) => {
  return { type: ADD_TO_LOG, meal: meal };
};
