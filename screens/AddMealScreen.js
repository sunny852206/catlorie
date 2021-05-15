import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Platform,
  TouchableHighlight,
  FlatList,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/UI/HeaderButton";
import MealItem from "../components/log/MealItem";
import * as logActions from "../store/actions/log";
import Colors from "../constants/Colors";

import { Picker } from "@react-native-picker/picker";
import FoodQuickAdd from "../components/FoodQuickAdd";
import { Ionicons } from "@expo/vector-icons";
import { MEAL } from "../data/dummy-data";
import { TREAT } from "../data/dummy-data";

const AddMealScreen = (props) => {
  const meals = useSelector((state) => state.meals.availableMeals);
  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View>
        <FlatList
          data={meals}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <MealItem
              image={itemData.item.imageUrl}
              brand={itemData.item.brand}
              calorie={itemData.item.calorie}
              flavor={itemData.item.flavor}
              onViewDetail={() => {
                props.navigation.navigate("MealDetail", {
                  mealId: itemData.item.id,
                  mealBrand: itemData.item.brand,
                });
              }}
              onAddToLog={() => {
                dispatch(logActions.addToLog(itemData.item));
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

AddMealScreen.navigationOptions = (props) => {
  // return {
  //   headerTitle: "Add Meal",
  //   // headerLeft: () => (
  //   //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
  //   //     <Item
  //   //       title="Menu"
  //   //       iconName="ios-menu"
  //   //       onPress={() => {
  //   //         navData.navigation.toggleDrawer();
  //   //       }}
  //   //     />
  //   //   </HeaderButtons>
  //   // ),
  // };
  return {
    headerTitle: "Add Meal",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === "android" ? "md-cart" : "add-circle"}
          color={Colors.buttonColor}
          onPress={() => {
            props.navigation.navigate("QuickAdd");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    padding: 40,
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
  },
  listTitle: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: "600",
  },
  mealList: {
    maxHeight: "45%",
  },
  treatList: {
    maxHeight: "45%",
  },
  quickAdd: {
    fontSize: 15,
    fontWeight: "600",
    alignItems: "flex-end",
  },
});

export default AddMealScreen;
