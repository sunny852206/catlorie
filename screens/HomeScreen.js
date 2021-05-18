import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

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
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
          }}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.calorieContainer}>
          <Text style={{ fontSize: 30, fontFamily: "open-sans-bold" }}>
            Calorie
          </Text>
          <ProgressCircle
            percent={consumedCalPct}
            radius={150}
            borderWidth={25}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
          >
            <Text style={styles.calorieTitle}>{remainCalorie}</Text>
            <Text style={styles.calorieText}>remaining</Text>
          </ProgressCircle>
        </View>
        <Text style={styles.calorieText}>{consumedCalorie} consumed</Text>
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
  imageContainer: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 2.5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  calorieContainer: {
    marginTop: -120,
    marginVertical: 15,
  },
  image: {
    width: 500,
    height: 300,
  },
  calorieText: { fontSize: 18, fontFamily: "open-sans-bold" },
  calorieTitle: {
    fontSize: 55,
    fontFamily: "open-sans-bold",
  },
});

export default HomeScreen;
