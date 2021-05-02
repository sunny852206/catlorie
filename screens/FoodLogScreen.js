import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const FoodLogScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Food Log Screen!</Text>
      <Button
        title="LOG Button(WIP)!"
        onPress={() => {
          //props.navigation.navigate({ routeName: "MealDetail" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FoodLogScreen;
