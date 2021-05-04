import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

const HomeScreen = (props) => {
  console.log(props);
  return (
    <View style={styles.screen}>
      <Text>The Home Screen!</Text>
      <Button
        title="My pets"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
        }}
      />
      <Button
        title="Food"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
        }}
      />
      <Button
        title="Calender"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
        }}
      />
      <Button
        title="Moment"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
        }}
      />
    </View>
  );
};

HomeScreen.navigationOptions = (navData) => {
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

// HomeScreen.navigationOptions = (navData) => {
//   return {
//     headerTitle: "Meal Categories",
//     headerLeft: (
//       <HeaderButtons HeaderButtonComponent={HeaderButton}>
//         <Item
//           title="Menu"
//           iconName="ios-menu"
//           onPress={() => {
//             navData.navigation.toggleDrawer();
//           }}
//         />
//       </HeaderButtons>
//     ),
//   };
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
