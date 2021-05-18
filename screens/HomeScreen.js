import React from "react";
import { View, Platform, Text, Button, StyleSheet, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import HeaderButton from "../components/HeaderButton";
import ProgressCircle from "react-native-progress-circle";

import { useSelector, useDispatch } from "react-redux";

const HomeScreen = (props) => {
  const targetCalorie = 250;
  const logTotalCalorie = useSelector((state) => state.log.totalCalorie);
  const consumedCalorie = Math.round(logTotalCalorie.toFixed(0) * 100) / 100;
  const consumedCalPct = (consumedCalorie / targetCalorie) * 100;
  const remainCalorie = targetCalorie - consumedCalorie;

  return (
    <View style={styles.screen}>
      <View style={styles.petInfo}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
            }}
          />
        </View>
        <Text style={styles.petName}>
          PumpKin
          <Ionicons
            name={Platform.OS === "android" ? "md-list" : "ios-male"}
            size={23}
          />
        </Text>

        <Text style={styles.petAge}> 6 years old</Text>
      </View>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.calorieTitle}> Calorie</Text>
        </View>
        <View style={styles.calorieContainer}>
          <ProgressCircle
            percent={consumedCalPct}
            radius={135}
            borderWidth={15}
            color={Colors.cardColor}
            shadowColor="#ddd"
            bgColor="#fff"
          >
            <Text style={styles.calorieNum}>{remainCalorie}</Text>
            <Text style={styles.calorieText}>remaining</Text>
          </ProgressCircle>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.calorieText}>
            {consumedCalorie}{" "}
            <Text style={styles.calorieTextNoColor}>consumed</Text>
          </Text>
        </View>
      </View>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
  },
  petInfo: {
    flex: 1.8,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "white",
    // justifyContent: "center",
    // alignItems: "center",
    borderRadius: 40,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 1.5,
    elevation: 5,
  },
  petName: {
    fontSize: 25,
    justifyContent: "flex-end",
    marginHorizontal: 20,
    fontFamily: "open-sans-bold",
    // paddingBottom: 10,
  },
  petAge: {
    fontSize: 15,
    marginHorizontal: 20,
    fontFamily: "open-sans-bold",
    color: "#aeaeae",
    paddingBottom: 20,
  },
  calorieTitle: {
    fontSize: 25,
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 10,
    fontFamily: "open-sans-bold",
  },
  imageContainer: {
    flex: 1,
    // marginVertical: 10,
    // marginHorizontal: 10,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
  contentContainer: {
    flex: 2.5,
    backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
    borderRadius: 40,
    marginBottom: 10,
    marginHorizontal: 20,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 1.5,
    elevation: 5,
  },
  calorieContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,

    // marginTop: -120,
    // marginVertical: 15,
  },
  image: {
    width: "95%",
    height: "95%",
    borderRadius: 40,
  },
  calorieText: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    color: "#575757",
  },
  calorieTextNoColor: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    color: "#575757",
  },

  calorieNum: {
    fontSize: 55,
    fontFamily: "open-sans-bold",
    color: Colors.primaryColor,
  },
});

export default HomeScreen;
