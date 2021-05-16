import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import ProgressCircle from "react-native-progress-circle";

import { useSelector, useDispatch } from "react-redux";

const HomeScreen = (props) => {
  const logTotalCalorie = useSelector((state) => state.log.totalCalorie);
  const totalCalorie = Math.round(logTotalCalorie.toFixed(0) * 100) / 100;
  const targetCalorie = 250;
  const consumedCalorie = (totalCalorie / targetCalorie) * 100;
  return (
    <View style={styles.screen}>
      {/* <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn.pixabay.com/photo/2017/03/24/08/24/cat-2170494_1280.jpg",
          }}
        />
      </View> */}
      <ProgressCircle
        percent={consumedCalorie}
        radius={130}
        borderWidth={25}
        color="#3399FF"
        shadowColor="#999"
        bgColor="#fff"
      >
        <Text style={{ fontSize: 25 }}>{consumedCalorie + "%"}</Text>
      </ProgressCircle>
      <View>
        <Text style={styles.totalCalorie}>{totalCalorie}kcal consumed</Text>
      </View>

      {/* <Button
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
      /> */}
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
  image: {
    width: 500,
    height: 300,
    // flex: 1,
  },
});

export default HomeScreen;
