import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#0a0558", "#0b26a0"]} style={styles.container}>
        <View style={styles.containerLogo}>
          <Animatable.Image
            animation="flipInY"
            style={styles.img}
            source={require("../../assets/SerraTrecoLogo.png")}
          />
        </View>

        <Animatable.View
          delay={600}
          animation="fadeInUp"
          style={styles.containerForms}
          onAnimationEnd={() => navigation.navigate("Login")}
        >
          <Text style={styles.titulo1}>SerraTreco</Text>
          <Text style={styles.titulo2}>Mobile</Text>
          <Text style={styles.titulo3}>By Robs e Batera</Text>


          <View style={styles.boxButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.textButton}>Acessar</Text>
            </TouchableOpacity>
          </View>
          
        </Animatable.View>
      </LinearGradient>
    </View>
  );
}
