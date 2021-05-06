import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  TouchableHighlight,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import FoodQuickAdd from "../components/FoodQuickAdd";
import { Ionicons } from "@expo/vector-icons";

const FoodLogInput = (props) => {
  // const [enteredFood, setEnteredFood] = useState("");
  const [isAddMode, setIsAddMode] = useState(false);
  const [quickFoodList, setQuickFoodList] = useState([]);
  const [selectedValue, setSelectedValue] = useState("Food1");

  const foodInputHandler = (enteredFood) => {
    setEnteredFood(enteredFood);
  };

  // const addFoodHandler = () => {
  //   props.onAddFood(enteredFood);
  //   setEnteredFood("");
  // };

  const addQuickFoodHandler = (foodId) => {
    setQuickFoodList((currentQuickFood) => [
      ...currentQuickFood,
      { id: Math.random().toString(), value: foodId },
    ]);
    setIsAddMode(false);
    props.onAddFood(foodId);
  };

  const addDropDownFoodHandler = () => {
    props.onAddFood(selectedValue);
  };

  const cancelFoodHandler = () => {
    setIsAddMode(false);
  };

  // const data = [
  //   {
  //     value: "Banana",
  //   },
  //   {
  //     value: "Mango",
  //   },
  //   {
  //     value: "Pear",
  //   },
  // ];

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        {/* <Button title="Quick Add" onPress={() => setIsAddMode(true)} /> */}
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {
            setIsAddMode(true);
          }}
        >
          <Ionicons name="add-circle-outline" size={25} style={styles.icon}>
            <Text style={styles.text}>Quick Add</Text>
          </Ionicons>
        </TouchableHighlight>

        <FoodQuickAdd
          visible={isAddMode}
          onAddQuickFood={addQuickFoodHandler}
          onCancel={cancelFoodHandler}
        />
        <View style={styles.container}>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 200, width: 350 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Food1" value="food1" />
            <Picker.Item label="Food2" value="food2" />
            <Picker.Item label="Food3" value="food3" />
            <Picker.Item label="Food4" value="food4" />
            <Picker.Item label="Food5" value="food5" />
            <Picker.Item label="Food6" value="food6" />
            <Picker.Item label="Food7" value="food7" />
            <Picker.Item label="Food8" value="food8" />
          </Picker>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addDropDownFoodHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  container: {
    paddingBottom: 100,
    alignItems: "center",
  },
});

export default FoodLogInput;
