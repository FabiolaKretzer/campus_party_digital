import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Init() {
  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.navigate("Login");
  }
  return (
    <View>
      <Text>Page Init</Text>
      <TouchableOpacity
        style={{
          borderWidth: 2,
          width: 60,
          height: 30,
          backgroundColor: "#A711b9",
        }}
        onPress={navigateToLogin}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
