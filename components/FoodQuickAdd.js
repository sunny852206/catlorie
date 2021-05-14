import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
const FoodLogInput = (props) => {
  const [enteredFood, setEnteredFood] = useState("");
  const foodInputHandler = (enteredFood) => {
    setEnteredFood(enteredFood);
  };

  const addQuickFoodHandler = () => {
    props.onAddQuickFood(enteredFood);
    setEnteredFood("");
    console.log("Quick Food Added");
  };

  const cancelQuickFoodHandler = () => {
    props.onCancel();
    setEnteredFood("");
    console.log("Quick Food Canceled");
  };

  const modalHeader = (
    <View style={styles.modalHeader}>
      <Text style={styles.title}>Quick Add</Text>
      <View style={styles.divider}></View>
    </View>
  );

  const modalBody = (
    <View style={styles.modalBody}>
      <TextInput
        placeholder="Enter calorie amount"
        placeholderTextColor="#BBB"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={foodInputHandler}
        value={enteredFood}
      />
    </View>
  );

  const modalFooter = (
    <View style={styles.modalFooter}>
      <View style={styles.divider}></View>
      <View style={{ flexDirection: "row-reverse", margin: 10 }}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <TouchableOpacity
              style={{ ...styles.actions, backgroundColor: "#db2828" }}
              // onPressIn={}
              onPress={cancelQuickFoodHandler}
            >
              <Text style={styles.actionText}>CANCEL</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={{ ...styles.actions, backgroundColor: "#21ba45" }}
              onPress={addQuickFoodHandler}
            >
              <Text style={styles.actionText}>ADD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  const modalContainer = (
    <View style={styles.modalContainer}>
      {modalHeader}
      {modalBody}
      {modalFooter}
    </View>
  );

  return (
    <View>
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.modal}>
          <View>{modalContainer}</View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#ddd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    textAlign: "center",
    borderColor: "#FF9800",
    backgroundColor: "#fff",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    width: "50%",
    marginHorizontal: 10,
    // paddingVertical: 10,
    // paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // paddingBottom: 100,
    // alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 15,
    color: "#000",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgray",
  },
  modalBody: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#f9fafb",
    width: "80%",
    borderRadius: 5,
  },
  actions: {
    borderRadius: 5,
    marginHorizontal: 35,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  actionText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default FoodLogInput;
