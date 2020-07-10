import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  function navigateToRegister() {
    navigation.navigate("Register");
  }
  function navigateToHome() {
    navigation.navigate("Auth");
  }
  return (
    <View>
      <Text>Page Login</Text>
      <TouchableOpacity
        style={{
          borderWidth: 2,
          width: 60,
          height: 30,
          backgroundColor: "#A711b9",
        }}
        onPress={navigateToRegister}
      >
        <Text>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderWidth: 2,
          width: 60,
          height: 30,
          backgroundColor: "#E71129",
        }}
        onPress={navigateToHome}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
}
