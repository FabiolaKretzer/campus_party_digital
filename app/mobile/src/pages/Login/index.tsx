import React from "react";
import { Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Platform } from "react-native";
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
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
      <Text>Login</Text>
      <Text>Olá, bem-vindo!</Text>
      <Text>Faça o login para continuar</Text>
      <View>
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry={true}
          autoCapitalize="words"
          autoCorrect={false}
        />

        <TouchableOpacity>
          <Text>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToRegister}>
          <Text>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
