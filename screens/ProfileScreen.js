import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ProfileScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Pet Profile Screen!</Text>
      <Button
        title="(WIP)!"
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

export default ProfileScreen;
