import React from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderWidth: 2,

    width: 200,
    height: 50,
    backgroundColor: "#7A7A7A",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#F4F4F4",
    position: "relative",
    top: 120,
  },
  buttonText: {
    fontSize: 18,
    color: "#F4F4F4",
  },
});

export default styles;
