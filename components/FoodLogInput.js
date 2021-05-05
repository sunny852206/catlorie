import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const FoodLogInput = (props) => {
  const [enteredFood, setEnteredFood] = useState("");

  const foodInputHandler = (enteredFood) => {
    setEnteredFood(enteredFood);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Food Log"
        style={styles.input}
        onChangeText={foodInputHandler}
        value={enteredFood}
      />
      <Button title="ADD" onPress={props.onAddFood.bind(this, enteredFood)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

export default FoodLogInput;
