import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

const SettingsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Settings Screen!</Text>
      {/* <View>
        <Button
          title="Trigger Notification"
          onPress={triggerNotificationHandler}
        />
      </View> */}
    </View>
  );
};

SettingsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Settings",
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
