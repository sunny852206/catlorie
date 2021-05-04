import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
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

FoodLogScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Food Log",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FoodLogScreen;
