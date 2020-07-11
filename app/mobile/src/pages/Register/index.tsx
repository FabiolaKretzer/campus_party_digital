import React, {useState} from "react";
import { Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Platform } from "react-native";
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import api from '../../services/api';

export default function Register() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [companies, setCompanies] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otherPassword, setOtherPassword] = useState('');

  function navigateToLogin() {
    navigation.navigate("Login");
  }

  async function handleRegister() {
    if(name != '' && companies != '' && email != '' && password != '') {
      if(password != otherPassword) {
        return
      }

      const response = await api.post('/register', {
        name,
        companies,
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
      <TouchableOpacity onPress={navigateToLogin}>
        <Icon 
          name="arrow-left"
          color="#000000"
          size={30}
        />
      </TouchableOpacity>

      <Text>Cadastro</Text>
      <Text>Olá, bem-vindo!</Text>
      <Text>Faça seu cadastro para continuar</Text>
      <View>
        <TextInput
          placeholder="Nome"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Empresa"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          value={companies}
          onChangeText={setCompanies}
        />
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
        <TextInput
          placeholder="Confirmar senha"
          placeholderTextColor="#999"
          secureTextEntry={true}
          autoCorrect={false}
          value={otherPassword}
          onChangeText={setOtherPassword}
        />

        <TouchableOpacity onPress={handleRegister}>
          <Text>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToLogin}>
          <Text>Não possui uma conta? Faça login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
