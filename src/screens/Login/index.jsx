import {View, Text, TextInput, TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContexts";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginContext } = useContext(AuthContext);

  const handleLogin = async () => {
    if (userEmail != "" && password != "") {
      loginContext(userEmail, password);
    }
  };

  return (
    <View style={styles.container}>
       <LinearGradient colors={["#0a0558", "#0b26a0"]} style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.Header}>Bem vindo ao Serra<Text style={styles.treco}>Treco</Text></Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInDown"
        delay={650}
        style={styles.containerInputs}
      >
        <View>
          <Text style={styles.title}>Email</Text>
        </View>
        <TextInput 
        placeholder="Informe seu email"
        placeholderTextColor="#FFF"
        onChangeText={setUserEmail}
        value={userEmail}
        style={styles.input} />

        <View>
          <Text style={styles.title}>Senha</Text>
        </View>
        <TextInput 
        placeholder="Informe sua senha"
        placeholderTextColor="#FFF" 
        onChangeText={setPassword}
        value={password}
        style={styles.input}
        secureTextEntry={true}
         />

        <View>
          <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
      </LinearGradient>
    </View>
  );
}

export default Login;
