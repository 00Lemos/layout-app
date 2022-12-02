import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#110955f8",
  },

  containerLogo: {
    alignItems: "center",
    justifyContent: "center",
    height: "40%",
    padding: "10%",
  },

  img: {
    height: "100%",
    resizeMode: "contain",
  },

  containerForms: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
    alignItems: "center",
    marginTop: 30,
  },

  titulo1: {
    color: "white",
    fontSize: 35,
  },

  titulo2: {
    color: "red",
    fontSize: 35,
  },

  titulo3: {
    color: "white",
    fontSize: 20,
  },

  boxButton:{
    backgroundColor: "#0059ff",
    width: "60%",
    padding: 10,
    borderRadius: 30,
    marginTop: 200,

  },

  button: {
    justifyContents: "center",
    alignItems: "center",
    
  },

  textButton: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
  },
});
