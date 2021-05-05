import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import FoodLogItem from "../components/FoodLogItem";
import FoodLogInput from "../components/FoodLogInput";
import HeaderButton from "../components/HeaderButton";

const FoodLogScreen = (props) => {
  const [foodList, setFoodList] = useState([]);

  const addFoodHandler = (enteredFood) => {
    setFoodList((currentFood) => [
      ...currentFood,
      { id: Math.random().toString(), value: enteredFood },
    ]);
    // setFoodList([...foodlist, enteredFood]);
    console.log(enteredFood);
  };

  return (
    <View style={styles.screen}>
      <FoodLogInput onAddFood={addFoodHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={foodList}
        renderItem={(itemData) => <FoodLogItem title={itemData.item.value} />}
      />
      {/* {foodList.map((food) => (
          <View key={food} style={styles.listItem}>
            <Text>{food}</Text>
          </View>
        ))} */}
    </View>
  );
};

FoodLogScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Add Food",
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
    padding: 50,
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default FoodLogScreen;
