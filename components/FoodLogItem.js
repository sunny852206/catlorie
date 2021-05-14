import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const FoodLogItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>
          {props.name} {props.calorie}
        </Text>
        {/* <Text>{props.id}</Text> */}
        {/* <Text>{props.test}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#ddd",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 20,
  },
});

export default FoodLogItem;
