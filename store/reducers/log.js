import LogItem from "../../models/log-item";
import { ADD_TO_LOG, REMOVE_FROM_LOG } from "../actions/log";

const initialState = {
  items: {},
  totalCalorie: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case add to log
    case ADD_TO_LOG:
      const addedMeal = action.meal;
      const mCalorie = addedMeal.calorie;
      const mBrand = addedMeal.brand;

      let updateOrNewLogItem;

      if (state.items[addedMeal.id]) {
        // meal already added in the log
        updateOrNewLogItem = new LogItem(
          state.items[addedMeal.id].quantity + 1,
          mCalorie,
          mBrand,
          state.items[addedMeal.id].sum + mCalorie
        );
      } else {
        updateOrNewLogItem = new LogItem(1, mCalorie, mBrand, mCalorie);
      }
      return {
        ...state,
        items: { ...state.items, [addedMeal.id]: updateOrNewLogItem },
        totalCalorie: state.totalCalorie + mCalorie,
      };

    //case remove from log
    case REMOVE_FROM_LOG:
      const selectedLogItem = state.items[action.mid];
      const currentQty = selectedLogItem.quantity;

      let updatedLogItems;

      if (currentQty > 1) {
        const updatedLogItem = new LogItem(
          selectedLogItem.quantity - 1,
          selectedLogItem.mealCalorie,
          selectedLogItem.mealBrand,
          selectedLogItem.sum - selectedLogItem.mealCalorie
        );
        updatedLogItems = { ...state.items, [action.mid]: updatedLogItem };
      } else {
        updatedLogItems = { ...state.items };
        delete updatedLogItems[action.mid];
      }
      return {
        ...state,
        items: updatedLogItems,
        totalCalorie: state.totalCalorie - selectedLogItem.mealCalorie,
      };
  }
  return state;
};
