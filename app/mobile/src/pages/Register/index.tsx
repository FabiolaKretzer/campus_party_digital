import React from "react";
import { Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToLogin() {
    navigation.navigate("Login");
  }

  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
      <Text>Cadastro</Text>
      <Text>Olá, bem-vindo!</Text>
      <Text>Faça seu cadastro para continuar</Text>
      <View>
        <TextInput
          placeholder="Nome"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
        />
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
        <TextInput
          placeholder="Confirmar senha"
          placeholderTextColor="#999"
          secureTextEntry={true}
          autoCapitalize="words"
          autoCorrect={false}
        />

        <TouchableOpacity>
          <Text>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToLogin}>
          <Text>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
