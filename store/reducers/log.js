import LogItem from "../../models/log-item";
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

      let updateOrNewLogItem;

      if (state.items[addedMeal.id]) {
        // meal already added in the log
        updateOrNewLogItem = new LogItem(
          state.items[addedMeal.id].quantity + 1,
          mCalrie,
          mBrand,
          state.items[addedMeal.id].sum + mCalrie
        );
      } else {
        updateOrNewLogItem = new LogItem(1, mCalrie, mBrand, mCalrie);
      }
      return {
        ...state,
        items: { ...state.items, [addedMeal.id]: updateOrNewLogItem },
        totalCalorie: state.totalCalorie + mCalrie,
      };
  }
  return state;
};
