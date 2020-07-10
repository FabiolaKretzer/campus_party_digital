import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DashBoard() {
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate("Home");
  }
  function logOut() {
    navigation.navigate("Open");
  }
  return (
    <View>
      <Text>Page Recharge</Text>
      <TouchableOpacity
        style={{
          borderWidth: 2,
          width: 60,
          height: 30,
          backgroundColor: "#A711b9",
        }}
        onPress={navigateToHome}
      >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderWidth: 2,
          width: 60,
          height: 30,
          backgroundColor: "#E71129",
        }}
        onPress={logOut}
      >
        <Text>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
}
