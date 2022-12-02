import {Text, View, Linking, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import * as Animatable from "react-native-animatable";


export const Sobre = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#0a0558", "#0b26a0"]}
        style={styles.container}
      >
    <View style={styles.logo}>
    <Animatable.Image 
    style={styles.img} 
    animation="pulse" 
    delay={500}
    iterationCount="infinite" 
    source={require("../../assets/SerraTrecoLogo.png")}/>
        <Text style={styles.devs}>Staff do SerraTreco</Text>
        <Text style={styles.mobile}>Mobile</Text>
        <Text style={styles.text} onPress={() => { Linking.openURL("https://www.linkedin.com/in/robertospagola"); }}> Sr. Taldo Roberto</Text>
        <Text style={styles.text} onPress={() => { Linking.openURL("https://www.linkedin.com/in/paulo-gordon-petersen-98374274"); }}> Paulo Petersen, o Batera</Text>
        <Text style={styles.text} onPress={() => { Linking.openURL("https://www.linkedin.com/in/sergio-braganca-39101430/"); }}> Sergio Bragança</Text>
        <Text style={styles.text} onPress={() => { Linking.openURL("https://www.linkedin.com/in/pprohem"); }}> Pedro Rohem </Text>
        <Text style={styles.text} onPress={() => { Linking.openURL("https://www.linkedin.com/in/00-lemos"); }}> Lucas Lemos, o Otaku </Text>
    </View>

    </LinearGradient>
    </View>
  );
};