import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  TouchableHighlight,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";

import MealItem from "../components/log/MealItem";

import { Picker } from "@react-native-picker/picker";
import FoodQuickAdd from "../components/FoodQuickAdd";
import { Ionicons } from "@expo/vector-icons";
import { MEAL } from "../data/dummy-data";
import { TREAT } from "../data/dummy-data";

import StoredMeal from "../components/StoredMeal";
import StoredTreat from "../components/StoredTreat";
import FoodLogInput from "../components/FoodLogInput";

const AddMealScreen = (props) => {
  const meals = useSelector((state) => state.meals.availableMeals);

  const [quickFoodList, setQuickFoodList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [foodList, setFoodList] = useState([]);

  // const addFoodHandler = (enteredFood) => {
  //   setFoodList((currentFood) => [
  //     ...currentFood,
  //     {
  //       id: Math.random().toString(),
  //       calorie: enteredFood.calorie,
  //       title: enteredFood.title,
  //       // test: enteredFood,
  //     },
  //   ]);
  //   // setIsAddMode(false);
  //   // setFoodList([...foodlist, enteredFood]);
  //   console.log("Added food:", enteredFood);
  // };

  const addQuickFoodHandler = (foodId) => {
    setQuickFoodList((currentQuickFood) => [
      ...currentQuickFood,
      { id: Math.random().toString(), value: foodId },
    ]);
    setIsAddMode(false);
    props.onAddQuickFood(foodId);
    console.log("Added Quick food!:", foodId);
  };

  const addDropDownFoodHandler = () => {
    props.onAddFood(selectedValue);
    console.log(selectedValue);
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
      {/* <Button title="Quick Add" onPress={() => setIsAddMode(true)} /> */}
      <View style={styles.quickAdd}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {
            setIsAddMode(true);
          }}
        >
          <Ionicons name="add-circle-outline" size={20} style={styles.icon}>
            <Text>Quick Add!</Text>
          </Ionicons>
        </TouchableHighlight>

        <FoodQuickAdd
          visible={isAddMode}
          onAddQuickFood={addQuickFoodHandler}
          onCancel={cancelFoodHandler}
        />
      </View>
      {/* flatlist */}
      <View>
        {/* <View style={styles.mealList}>
          <Text style={styles.listTitle}>Meal</Text>
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={MEAL}
            renderItem={(itemData) => (
              <StoredMeal
                id={itemData.item.id}
                // onDelete={removeFoodHandler}
                calorie={itemData.item.calorie}
                name={itemData.item.title}
                // test={itemData.item.test}
              />
            )}
          />
        </View>
        <View style={styles.treatList}>
          <Text style={styles.listTitle}>Treat</Text>
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={TREAT}
            renderItem={(itemData) => (
              <StoredTreat
                id={itemData.item.id}
                // onDelete={removeFoodHandler}
                calorie={itemData.item.calorie}
                name={itemData.item.title}
                // test={itemData.item.test}
              />
            )}
          />
        </View> */}
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
              onAddToCart={() => {}}
            />
          )}
        />
      </View>

      {/* /// */}
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="CANCEL" color="red" onPress={props.onCancel} />
        </View>
        <View style={styles.button}>
          <Button title="ADD" onPress={addDropDownFoodHandler} />
        </View>
      </View>
    </View>
  );
};

AddMealScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Add Meal",
    // headerLeft: () => (
    //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item
    //       title="Menu"
    //       iconName="ios-menu"
    //       onPress={() => {
    //         navData.navigation.toggleDrawer();
    //       }}
    //     />
    //   </HeaderButtons>
    // ),
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
