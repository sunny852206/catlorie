import { ActionSheetIOS } from "react-native";
import MEALS from "../../data/dummy-data";
import { ADD_TO_LOG } from "../actions/log";

const initialState = {
  items: {},
  totalCalorie: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LOG:
      const addedMeal = action.meal;
      const mCalrie = addedMeal.calorie;
      const mBrand = addedMeal.brand;
  }
  return state;
};
