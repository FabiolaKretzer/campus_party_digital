import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";
import styles from "./styles";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function navigateToRegister() {
    navigation.navigate("Register");
  }

  async function handleLogin() {
    /*if (email != "" && password != "") {
      const response = await api.post("/login", {
        email,
        password,
      });

      const { _id } = response.data;

      if (_id) {
        navigation.navigate("Home");
      }
    }*/
    navigation.navigate("Auth");
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Login</Text>
        <Text style={styles.textSalutation}>
          Olá,{" "}
          <Text style={[styles.textSalutation, { color: "#0F6440" }]}>
            bem-vindo!
          </Text>
        </Text>
        <Text>Faça o login para continuar</Text>
      </View>

      <View style={styles.content}>
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
          style={styles.imput}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry={true}
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
          style={styles.imput}
        />

        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentBot}>
        <Text>Não possui uma conta?</Text>
        <TouchableOpacity onPress={navigateToRegister}>
          <Text style={styles.registerButton}>Cadastre-se</Text>
        </TouchableOpacity>
        <Text>.</Text>
      </View>
    </View>
  );
}
