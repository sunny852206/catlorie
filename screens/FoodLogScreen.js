import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import Colors from "../constants/Colors";
import LogItem from "../components/log/LogItem";

import FoodLogItem from "../components/FoodLogItem";
import FoodLogList from "../components/FoodLogList";
import AddMealScreen from "../screens/AddMealScreen";
import HeaderButton from "../components/HeaderButton";

const FoodLogScreen = (props) => {
  const logTotalCalorie = useSelector((state) => state.log.totalCalorie);
  const logItems = useSelector((state) => {
    const transformedLogItems = [];
    for (const key in state.log.items) {
      transformedLogItems.push({
        mealId: key,
        mealBrand: state.log.items[key].mealBrand,
        mealCalorie: state.log.items[key].mealCalorie,
        quantity: state.log.items[key].quantity,
        sum: state.log.items[key].sum,
      });
    }
    return transformedLogItems;
  });

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Calories:
          <Text style={styles.totalCalorie}> {logTotalCalorie} kcal</Text>
        </Text>
        <Button
          title="Add Meal"
          onPress={() => {
            props.navigation.navigate({ routeName: "AddMeal" });
          }}
          color={Colors.buttonColor}
        />
      </View>
      <View>
        <FlatList
          data={logItems}
          keyExtractor={(item) => item.mealId}
          renderItem={(itemData) => (
            <LogItem
              quantity={itemData.item.quantity}
              brand={itemData.item.mealBrand}
              calorie={itemData.item.sum}
              onRemove={() => {}}
            />
          )}
        />
      </View>
    </View>
  );
};

// mealId: key,
// mealBrand: state.log.items[key].mealBrand,
// mealCalorie: state.log.items[key].mealCalorie,
// quantity: state.log.items[key].quantity,
// sum: state.log.items[key].sum,

FoodLogScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Food Log",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,

    // padding: 50,
    // // flex: 1,
    // // justifyContent: "center",
    // // alignItems: "center",
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 15,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 1.5,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
  totalCalorie: {
    color: Colors.primaryColor,
  },
});

export default FoodLogScreen;
