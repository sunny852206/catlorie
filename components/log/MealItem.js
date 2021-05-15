import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

import Colors from "../../constants/Colors";

const MealItem = (props) => {
  return (
    <View style={styles.meal}>
      <TouchableOpacity onPress={props.onViewDetail}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.image }} />
        </View>
      </TouchableOpacity>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={styles.details}>
          <Text style={styles.brand}>{props.brand}</Text>
          <Text style={styles.flavor}>{props.flavor} </Text>
          <Text style={styles.calorie}>{props.calorie} kcal</Text>
        </View>
        <View style={styles.actions}>
          {/* <Button
            color={Colors.primary}
            title="View Details"
            onPress={props.onViewDetail}
          />
          <Button
            color={Colors.primary}
            title="To Cart"
            onPress={props.onAddToCart}
          /> */}
          <TouchableOpacity
            color={Colors.primary}
            // title="View Details"
            onPress={props.onViewDetail}
          >
            <Text style={styles.button}>View Details</Text>
          </TouchableOpacity>

          <TouchableOpacity
            color={Colors.primary}
            // title="To Cart"
            onPress={props.onAddToLog}
          >
            <Text style={styles.button}>Add Food</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  meal: {
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 1.5,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 120,
    // margin: 20,
    marginBottom: 20,
    flex: 1,
    flexDirection: "row",
  },
  imageContainer: {
    // width: "100%",
    // height: "100%",
    // margin: 5,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    // overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 50,
  },
  details: {
    alignItems: "center",
    // height: "15%",
    padding: 10,
  },
  brand: {
    fontSize: 18,
    marginTop: 5,
    // marginVertical: 4,
  },
  flavor: {
    fontSize: 13,
    marginBottom: 0,
    color: "#888",
  },
  calorie: {
    marginTop: 5,
    fontSize: 15,
    color: Colors.accentColor,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

    // height: "25%",
    paddingBottom: 10,
  },
  button: {
    fontSize: 13,
    color: Colors.buttonColor,
  },
});

export default MealItem;
