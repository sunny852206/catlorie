import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
const FoodLogInput = (props) => {
  const [enteredFood, setEnteredFood] = useState("");

  const foodInputHandler = (enteredFood) => {
    setEnteredFood(enteredFood);
  };

  const addFoodHandler = () => {
    props.onAddQuickFood(enteredFood);
    setEnteredFood("");
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
        <TextInput
          placeholder="Choose a food"
          style={styles.input}
          onChangeText={foodInputHandler}
          value={enteredFood}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addFoodHandler} />
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
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
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
