import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./style";

const Card = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#082574", "#1b50fc"]} style={styles.taskContainer}>
      <View style={styles.taskContainer}>
        <Text style={styles.Titulo}>{item.nome}</Text>

        <LinearGradient colors={["#580505", "#a00b0b"]} style={styles.taskSubContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Detalhes", item)}
          style={styles.taskSubContainer}
        >
          <Text style={styles.texto}>Saiba mais</Text>
        </TouchableOpacity>
        </LinearGradient>
      </View>
      </LinearGradient>
    </View>
  );
};

export default Card;
