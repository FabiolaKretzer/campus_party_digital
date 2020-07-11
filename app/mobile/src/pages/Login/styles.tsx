import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 32,
  },
  content: {
    width: "100%",

    justifyContent: "space-between",
  },
  textSalutation: {
    fontSize: 32,
    fontWeight: "bold",
  },

  imput: {
    fontSize: 22,
    width: "95%",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 8,
    padding: 8,
    marginBottom: 8,
  },
  loginButton: {
    marginTop: 8,
    backgroundColor: "#0F6440",
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    alignSelf: "center",
  },
  loginButtonText: {
    color: "#FFF",
    fontSize: 22,
  },
  contentBot: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  registerButton: {
    color: "#0F6440",
    paddingLeft: 2,
  },
});
export default styles;
