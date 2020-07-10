import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//import pages;
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

const AppStack = createStackNavigator();

const Auth = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Dashboard" component={Dashboard} />
    </AppStack.Navigator>
  );
};

export default Auth;
