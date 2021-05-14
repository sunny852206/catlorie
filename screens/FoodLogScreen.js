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

import FoodLogItem from "../components/FoodLogItem";
import FoodLogList from "../components/FoodLogList";
import AddMealScreen from "../screens/AddMealScreen";
import HeaderButton from "../components/HeaderButton";

const FoodLogScreen = (props) => {
  const [foodList, setFoodList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addFoodHandler = (enteredFood) => {
    setFoodList((currentFood) => [
      ...currentFood,
      {
        id: Math.random().toString(),
        calorie: enteredFood.calorie,
        title: enteredFood.title,
        // test: enteredFood,
      },
    ]);
    setIsAddMode(false);
    // setFoodList([...foodlist, enteredFood]);
    console.log("Added food:", enteredFood);
  };

  const addQuickFoodHandler = (enteredFood) => {
    setFoodList((currentFood) => [
      ...currentFood,
      {
        id: Math.random().toString(),
        calorie: enteredFood,
        title: "quick add",
        // test: enteredFood,
      },
    ]);
    setIsAddMode(false);
    // setFoodList([...foodlist, enteredFood]);
    console.log("Added Quick food:", enteredFood);
  };

  const removeFoodHandler = (foodId) => {
    setFoodList((currentFood) => {
      return currentFood.filter((food) => food.id !== foodId);
    });
  };

  const cancelFoodHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <View>
        <Button title="Add Food" onPress={() => setIsAddMode(true)} />

        <Button
          title="Food"
          onPress={() => {
            props.navigation.navigate({ routeName: "AddMeal" });
          }}
        />
      </View>
      {/* <AddMealScreen
        // visible={isAddMode}
        onAddFood={addFoodHandler}
        onAddQuickFood={addQuickFoodHandler}
        onCancel={cancelFoodHandler}
      /> */}

      {/* <FoodLogInput
        visible={isAddMode}
        onAddFood={addFoodHandler}
        onAddQuickFood={addQuickFoodHandler}
        onCancel={cancelFoodHandler}
      /> */}
      <View>
        <FoodLogList />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={foodList}
          renderItem={(itemData) => (
            <FoodLogItem
              id={itemData.item.id}
              onDelete={removeFoodHandler}
              calorie={itemData.item.calorie}
              name={itemData.item.title}

              // test={itemData.item.test}
            />
          )}
        />
      </View>
      {/* {foodList.map((food) => (
          <View key={food} style={styles.listItem}>
            <Text>{food}</Text>
          </View>
        ))} */}
    </View>
  );
};

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
    padding: 50,
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default FoodLogScreen;
