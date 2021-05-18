import MEALS from "../../data/dummy-data";

const initialState = {
  availableMeals: MEALS,
  userMeals: MEALS.filter((prod) => prod.ownerId === "u1"),
};

export default (state = initialState, action) => {
  return state;
};
