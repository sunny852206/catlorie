import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import { Meal } from "../data/dummy-data";
import { Treat } from "../data/dummy-data";

// import CategoryGridTile from '../components/CategoryGridTile';

const handlePress = (id) => {
  const customer = Meal.find((food) => {
    return food.id === id;
  });
  Alert.alert(
    "Food Details",
    `Brand: ${customer.title} \n Calorie:  ${customer.calorie}`
  );
};

const renderFoodItem = (itemData) => {
  return (
    <TouchableOpacity
      onPress={() => handlePress(itemData.item.id)}
      style={styles.foodItem}
    >
      <Text style={styles.foodName}>Brand: {itemData.item.title} </Text>
      <Text style={styles.foodCalorie}>Calorie: {itemData.item.calorie}</Text>
    </TouchableOpacity>
  );
};

const CategoriesScreen = (props) => {
  return (
    <View>
      <Text style={styles.category}>Meal</Text>

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={Meal}
        renderItem={renderFoodItem}
        numColumns={1}
      />
      <Text style={styles.category}>Treat</Text>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={Treat}
        renderItem={renderFoodItem}
        numColumns={1}
      />
      {/* <FlatList
        data={[
          { key: "Devin", value: 100 },
          { key: "Dan", value: 1300 },
          { key: "Dominic", value: 1040 },
          { key: "Jackson", value: 1002 },
          { key: "James", value: 1030 },
          { key: "Joel", value: 1400 },
          { key: "John", value: 12050 },
          { key: "Jillian", value: 1300 },
          { key: "Jimmy", value: 1040 },
          { key: "Julie", value: 1050 },
        ]}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.key}
            {item.value}
          </Text>
        )}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  foodItem: {
    backgroundColor: "#ddd",
    flexDirection: "row",
    marginVertical: 8,
    marginHorizontal: "10%",
    borderRadius: 10,
    padding: 10,
  },
  foodName: {
    flex: 0.5,
    textAlign: "left",
    alignItems: "flex-start",
  },
  foodCalorie: {
    flex: 0.5,
    textAlign: "right",
    alignItems: "flex-end",
  },
  category: {
    marginHorizontal: "10%",
    marginTop: 20,
    padding: 10,
  },
});

export default CategoriesScreen;
