import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Colors from "../constants/Colors";
import HeaderButton from "../components/HeaderButton";
const PetProfileScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg",
          }}
        />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.petProfile}>
          <Text style={styles.petName}> Pumpkin</Text>
          <Text style={styles.petBreed}> American Shorthair Cat</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Male</Text>
            <Text style={styles.infoText}>sex</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>06/12/12</Text>
            <Text style={styles.infoText}>birthday</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>6 years</Text>
            <Text style={styles.infoText}>ages</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>6.1 kg</Text>
            <Text style={styles.infoText}>weight</Text>
          </View>
        </View>
        <View style={styles.petDescription}>
          <Text style={styles.desTitle}> Personality</Text>
          <View style={styles.infoContainer}>
            <View style={styles.perItem}>
              <Text style={styles.perText}>Playful</Text>
            </View>
            <View style={styles.perItem}>
              <Text style={styles.perText}>Curious</Text>
            </View>
            <View style={styles.perItem}>
              <Text style={styles.perText}>Gentle</Text>
            </View>
            <View style={styles.perItem}>
              <Text style={styles.perText}>Sensitive</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

PetProfileScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Pet Profile",
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
  infoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    // marginTop: -400,
    // marginVertical: 15,
  },
  petProfile: {
    marginTop: -20,
  },
  petDescription: {
    marginTop: 15,
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
    // alignItems: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  image: {
    width: 500,
    height: 350,
  },
  petName: {
    fontSize: 28,
    fontFamily: "open-sans-bold",
    paddingHorizontal: 20,
    // paddingTop: 80,
  },
  petBreed: {
    fontSize: 15,
    paddingHorizontal: 25,
    paddingTop: 5,
    paddingBottom: 30,
    color: "#aeaeae",
    fontFamily: "open-sans-bold",
  },
  desTitle: {
    fontSize: 28,
    fontFamily: "open-sans-bold",
    paddingHorizontal: 20,
  },
  desContent: {
    fontSize: 15,
    color: "#aeaeae",
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  infoTitle: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
  infoText: {
    fontSize: 15,
    fontFamily: "open-sans-bold",
    textAlign: "center",
    color: "#fff",
  },
  perText: {
    fontSize: 12,
    fontFamily: "open-sans-bold",
    textAlign: "center",
    // color: "#a1a1a1",
  },
  infoCard: {
    paddingVertical: 25,
    backgroundColor: Colors.cardColor,
    marginHorizontal: 18,
    marginBottom: 15,
    width: "38%",
    borderRadius: 25,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 1.5,
    elevation: 5,
  },
  perItem: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: Colors.cardColor,
    marginHorizontal: 5,
    marginBottom: 15,
    width: "20%",
    borderRadius: 25,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 1.5,
    elevation: 5,
  },
});

export default PetProfileScreen;
