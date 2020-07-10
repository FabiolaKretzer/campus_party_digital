import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }
  return (
    <View>
      <Text>Page register</Text>
      <TouchableOpacity
        style={{
          borderWidth: 2,
          width: 60,
          height: 30,
          backgroundColor: "#A711b9",
        }}
        onPress={navigateBack}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
