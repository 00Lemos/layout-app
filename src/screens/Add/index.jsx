import { TouchableOpacity, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";
import api from "../../services/api";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

export const Add = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [qtdEstoque, setQtdEstoque] = useState();
  const [preco, setPreco] = useState();
  const [categoria, setCategoria] = useState();

  const addProduto = () => {
    const data = {
      nome: nome,
      categoriaId: categoria,
      descricao: descricao,
      preco: preco,
      qtdEstoque: qtdEstoque,
    };
    api
      .post("/produto", data)
      .then((res) => {
        console.log("ok", res.data);
        navigation.goBack();
      })
      .catch((err) => {
        console.log("not ok", err);
      });
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#0a0558", "#0b26a0"]} style={styles.container}>
        <Text style={styles.title}>Cadastro de produtos</Text>
        <View style={styles.containerInput}>
          <View>
            <TextInput
              style={styles.inputView}
              keyboardType="numeric"
              placeholder="Categoria"
              onChangeText={(e) => setCategoria(e)}
            ></TextInput>
            <TextInput
              style={styles.inputView}
              keyboardType="default"
              placeholder="Nome"
              onChangeText={(e) => setNome(e)}
            ></TextInput>
            <TextInput
              style={styles.inputView}
              keyboardType="default"
              placeholder="Desc"
              onChangeText={(e) => setDescricao(e)}
            ></TextInput>
            <TextInput
              style={styles.inputView}
              keyboardType="numeric"
              placeholder="Preço"
              onChangeText={(e) => setPreco(e)}
            ></TextInput>
            <TextInput
              style={styles.inputView}
              keyboardType="numeric"
              placeholder="Estoque"
              onChangeText={(e) => setQtdEstoque(e)}
            ></TextInput>
          </View>

          <View style={styles.alinhador}>
            <LinearGradient
              colors={["#580505", "#a00b0b"]}
              style={styles.button}
            >
              <TouchableOpacity
                onPress={() => addProduto()}
              >
                <Text style={styles.buttonText}>Cadastrar!</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
