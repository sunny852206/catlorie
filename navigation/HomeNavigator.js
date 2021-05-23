import React from "react";
import { Platform, Text } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import FoodLogScreen from "../screens/FoodLogScreen";
import PetProfileScreen from "../screens/PetProfileScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AuthScreen from "../screens/user/AuthScreen";

import FoodQuickAdd from "../components/FoodQuickAdd";
import AddMealScreen from "../screens/AddMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

import Colors from "../constants/Colors";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.titleColor : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.titleColor,
  headerTitle: "A Screen",
};

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const LogNavigator = createStackNavigator(
  {
    FoodLog: {
      screen: FoodLogScreen,
    },
    AddMeal: {
      screen: AddMealScreen,
    },
    MealDetail: {
      screen: MealDetailScreen,
    },
    QuickAdd: {
      screen: FoodQuickAdd,
    },
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const PetNavigator = createStackNavigator(
  {
    PetProfile: PetProfileScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const ProfileNavigator = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const SettingsNavigator = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const tabScreenConfig = {
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-home" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
        ) : (
          "Home!"
        ),
      tabBarOptions: {
        activeTintColor: Colors.primaryColor,
        style: { height: 55 },
      },
    },
  },
  FoodLog: {
    screen: LogNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
        ) : (
          "Log"
        ),
      tabBarOptions: {
        activeTintColor: Colors.primaryColor,

        style: { height: 55 },
      },
    },
  },
  PetProfile: {
    screen: PetNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-paw" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
        ) : (
          "Profile"
        ),
      tabBarOptions: {
        style: { height: 55 },
        activeTintColor: Colors.primaryColor,
      },
    },
  },
};

const HomeLogProfileTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: "open-sans",
          },
          activeTintColor: "Colors.accentColor",
        },
      });

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const CatlorieNavigator = createDrawerNavigator(
  {
    HomeLogProfile: {
      screen: HomeLogProfileTabNavigator,
      navigationOptions: {
        drawerIcon: (drawerConfig) => (
          <Ionicons
            name={Platform.OS === "android" ? "md-list" : "ios-home"}
            size={23}
          />
        ),
        drawerLabel: "Home",
      },
    },
    Profile: {
      screen: ProfileNavigator,
      navigationOptions: {
        drawerIcon: (drawerConfig) => (
          <Ionicons
            name={Platform.OS === "android" ? "md-list" : "ios-person"}
            size={23}
          />
        ),
        drawerLabel: "Profile",
      },
    },
    Settings: {
      screen: SettingsNavigator,
      navigationOptions: {
        drawerIcon: (drawerConfig) => (
          <Ionicons
            name={Platform.OS === "android" ? "md-list" : "ios-settings"}
            size={23}
          />
        ),
        drawerLabel: "Settings",
      },
    },
  },
  {
    contentOptions: {
      itemsContainerStyle: {
        marginTop: 18,
      },
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
  }
);

const MainNavigator = createSwitchNavigator({
  // Auth: AuthNavigator,
  Catlorie: CatlorieNavigator,
});

export default createAppContainer(MainNavigator);
