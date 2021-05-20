import React from "react";
import {
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  View,
} from "react-native";

import Input from "../../components/UI/Input";
import Colors from "../../constants/Colors";

const AuthScreen = (props) => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <View style={styles.authContainer}>
        <ScrollView>
          <Input
            id="email"
            label="E-Mail"
            keyboardType="email-address"
            required
            email
            autoCapitalize="none"
            errorText="Please enter a valid email address."
            onInputChange={() => {}}
            initialValue=""
          />
          <Input
            id="password"
            label="Password"
            keyboardType="default"
            secureTextEntry
            required
            minLength={5}
            autoCapitalize="none"
            errorText="Please enter a valid password."
            onInputChange={() => {}}
            initialValue=""
          />
          <View style={styles.buttonContainer}>
            <Button
              title={"Login"}
              color={Colors.primaryColor}
              onPress={() => {}}
            />
            <Button
              title={"Switch to Sign Up"}
              color={Colors.buttonColor}
              onPress={() => {}}
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

AuthScreen.navigationOptions = {
  headerTitle: "Sign In",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  authContainer: {
    width: "80%",
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default AuthScreen;
