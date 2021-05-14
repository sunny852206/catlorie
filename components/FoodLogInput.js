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
import { Picker } from "@react-native-picker/picker";
import FoodQuickAdd from "../components/FoodQuickAdd";
import { Ionicons } from "@expo/vector-icons";
import { MEAL } from "../data/dummy-data";
import { TREAT } from "../data/dummy-data";

import StoredMeal from "../components/StoredMeal";
import StoredTreat from "../components/StoredTreat";

const FoodLogInput = (props) => {
  const [isAddMode, setIsAddMode] = useState(false);
  const [quickFoodList, setQuickFoodList] = useState([]);
  const [selectedValue, setSelectedValue] = useState({
    title: "dummy_food",
    calorie: 10,
  });

  const foodInputHandler = (enteredFood) => {
    setEnteredFood(enteredFood);
  };

  const addQuickFoodHandler = (foodId) => {
    setQuickFoodList((currentQuickFood) => [
      ...currentQuickFood,
      { id: Math.random().toString(), value: foodId },
    ]);
    setIsAddMode(false);
    props.onAddQuickFood(foodId);
    console.log(foodId);
  };

  const addDropDownFoodHandler = () => {
    props.onAddFood(selectedValue);
    console.log(selectedValue);
  };

  const cancelFoodHandler = () => {
    setIsAddMode(false);
  };

  return (
    // <Modal visible={props.visible} animationType="slide">
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
            <Text>Quick Add</Text>
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
        <View style={styles.mealList}>
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
        </View>
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
    // </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
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

export default FoodLogInput;
