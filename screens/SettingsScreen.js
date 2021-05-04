import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SettingsScreen = (props) => {
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

SettingsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Home",
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

export default SettingsScreen;
