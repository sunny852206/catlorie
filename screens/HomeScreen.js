import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Platform,
  Text,
  Button,
  StyleSheet,
  Image,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import HeaderButton from "../components/HeaderButton";
import ProgressCircle from "react-native-progress-circle";
import * as Notifications from "expo-notifications";

import { useSelector, useDispatch } from "react-redux";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const HomeScreen = (props) => {
  const [currentDate, setceurrentDate] = useState("");

  const targetCalorie = 250;
  const logTotalCalorie = useSelector((state) => state.log.totalCalorie);
  const consumedCalorie = Math.round(logTotalCalorie.toFixed(0) * 100) / 100;
  const consumedCalPct = (consumedCalorie / targetCalorie).toFixed(2) * 100;
  const remainCalorie = targetCalorie - consumedCalorie;

  async function calorieRemindsNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "About to reach target calorie intake!",
        body: "Remaining calorie: " + remainCalorie + " kcal",
      },
      trigger: null,
    });
  }

  async function calorieExceedNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Calorie intake target achieved!",
        body: "Calorie intake exceeded by " + consumedCalPct + "%",
      },
      trigger: null,
    });
  }

  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    // var hours = new Date().getHours();
    // var min = new Date().getMinutes();
    // var sec = new Date().getSeconds();
    setceurrentDate(month + " / " + date + " / " + year + " ");
  }, []);

  if (
    logTotalCalorie / targetCalorie >= 0.75 &&
    logTotalCalorie < targetCalorie
  ) {
    calorieRemindsNotification();
  } else if (logTotalCalorie > targetCalorie) {
    calorieExceedNotification();
  }

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
          Pumpkin{" "}
          <Ionicons
            name={Platform.OS === "android" ? "md-list" : "ios-male"}
            size={23}
          />
        </Text>

        <Text style={styles.petAge}> 6 years old </Text>
      </View>

      <View style={styles.contentContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginBottom: 10,
          }}
        >
          <Text style={styles.calorieTitle}>Calorie</Text>
          <Text style={styles.date}>{currentDate}</Text>
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
            <Text style={styles.calorieNum}>
              {remainCalorie}/{targetCalorie}
            </Text>
            <Text style={styles.calorieText}>kcal remaining</Text>
          </ProgressCircle>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.calorieTextColor}>
            {consumedCalorie}
            <Text style={styles.calorieTextNoColor}> kcal consumed</Text>
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
    // justifyContent: "flex-end",
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
    // marginHorizontal: 15,
    marginTop: 20,
    fontFamily: "open-sans-bold",
  },
  date: {
    marginTop: 15,
    fontSize: 18,
    fontFamily: "open-sans-bold",
    // color: "#575757",
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
    paddingVertical: 10,
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
  calorieTextColor: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    color: Colors.primaryColor,
  },
  calorieTextNoColor: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    color: "#575757",
  },

  calorieNum: {
    fontSize: 50,
    fontFamily: "open-sans-bold",
    color: Colors.primaryColor,
  },
});

export default HomeScreen;
