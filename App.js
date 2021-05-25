import React, { useState, useEffect, useRef } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import ReduxThunk from "redux-thunk";
import Constants from "expo-constants";
import mealsReducer from "./store/reducers/meals";
import logReducer from "./store/reducers/log";
import HomeNavigator from "./navigation/HomeNavigator";

const rootReducer = combineReducers({
  meals: mealsReducer,
  log: logReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <Provider store={store}>
      <HomeNavigator />
    </Provider>
  );
}
