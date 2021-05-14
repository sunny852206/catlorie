import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import Colors from "../constants/Colors";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = useSelector((state) =>
    state.meals.availableMeals.find((m) => m.id === mealId)
  );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Button color={Colors.buttonColor} title="Add Food" onPress={() => {}} />
      <Text style={styles.calorie}>{selectedMeal.calorie}kcal</Text>
      <Text style={styles.flavor}>{selectedMeal.flavor}</Text>
    </ScrollView>
    // <View>
    //   <Text>The Meal Detail Screen!</Text>
    //   <Text>{selectedMeal.brand}</Text>
    // </View>
  );
};

MealDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("mealBrand"),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  calorie: {
    fontSize: 20,
    color: Colors.accentColor,
    textAlign: "center",
    marginVertical: 20,
  },
  flavor: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default MealDetailScreen;
