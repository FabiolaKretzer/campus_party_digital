import React from "react";
import { AppLoading } from "expo";
import { StatusBar } from "react-native";

import Routes from "./src/routes";

export default function App() {
  /*if(!fontsLoaded){
		return <AppLoading/>
	}*/

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Routes />
    </>
  );
}
