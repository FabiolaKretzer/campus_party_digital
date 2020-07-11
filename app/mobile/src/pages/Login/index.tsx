import React, { useState } from "react";
import { Text, AsyncStorage, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Platform, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import api from '../../services/api';

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function navigateToRegister() {
    navigation.navigate("Register");
  }
  
  async function handleLogin() {
    if(email != '' && password != '') {
      const response = await api.post('/login', {
        email,
        password
      });
  
      const { _id } = response.data;

      if(_id) {
        navigation.navigate('Home');
      }
    }
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
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry={true}
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={handleLogin}>
          <Text>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToRegister}>
          <Text>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({

});