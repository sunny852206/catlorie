import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const StoredTreat = (props) => {
  return (
    // <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
    <TouchableOpacity>
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
    padding: 8,
    marginVertical: 8,
    backgroundColor: "#EEE",
    borderRadius: 5,
  },
});

export default StoredTreat;
