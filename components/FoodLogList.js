import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
  Modal,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import FoodLogItem from "../components/FoodLogItem";
import FoodLogInput from "../components/FoodLogInput";
import AddMealScreen from "../screens/AddMealScreen";

const FoodLogList = (props) => {
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
    // setIsAddMode(false);
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
    console.log("Added Quick food?:", enteredFood);
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
      {/* <Button title="Add Food" onPress={() => setIsAddMode(true)} />
    
          <Button
            title="Food"
            onPress={() => {
              props.navigation.navigate({ routeName: "AddMeal" });
            }}
          /> */}
      {/* <AddFoodScreen
            visible={isAddMode}
            onAddFood={addFoodHandler}
            onAddQuickFood={addQuickFoodHandler}
            onCancel={cancelFoodHandler}
          /> */}
      <Modal visible={false}>
        <AddMealScreen
          onAddFood={addFoodHandler}
          onAddQuickFood={addQuickFoodHandler}
          onCancel={cancelFoodHandler}
        />
      </Modal>
      {/* <AddMealScreen
        onAddFood={addFoodHandler}
        onAddQuickFood={addQuickFoodHandler}
        onCancel={cancelFoodHandler}
      /> */}
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
      {/* {foodList.map((food) => (
              <View key={food} style={styles.listItem}>
                <Text>{food}</Text>
              </View>
            ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default FoodLogList;
