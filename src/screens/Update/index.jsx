import React from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import api from "../../services/api";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

const Update = ({ navigation }) => {
  const route = useRoute();

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [qtdEstoque, setQtdEstoque] = useState();
  const [preco, setPreco] = useState();
  const [categoria, setCategoria] = useState();
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    api
      .get(`/produto/${route.params.id}`)
      .then((response) => setProduto(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [route.params.id]);

  const updateProdutoList = async () => {
    const newProduto = {
      categoriaId: categoria,
      nome: nome,
      descricao: descricao,
      qtdEstoque: qtdEstoque,
      preco: preco,
    };
    api
      .put(`/produto/${route.params.id}`, newProduto)
      .then((res) => {
        console.log(res.data);
        console.log(res.status);
        if (res.status === 201) {
          navigation.navigate("Home");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setNome("");
    setDescricao("");
    setQtdEstoque("");
    setPreco("");
    setCategoria("");
  };

  return (
    <View style={styles.container}>
            <LinearGradient
        colors={["#0a0558", "#0b26a0"]}
        style={styles.container}
      >
      <Text style={styles.title}>Atualizar Produtos</Text>
      <View style={styles.containerInput}>
        <View>
          <TextInput
            style={styles.inputView}
            keyboardType="numeric"
            value={categoria}
            placeholder="Categoria"
            onChangeText={(e) => setCategoria(e)}
          ></TextInput>
          <TextInput
            style={styles.inputView}
            keyboardType="default"
            value={nome}
            placeholder={produto.nome}
            onChangeText={(e) => setNome(e)}
          ></TextInput>
          <TextInput
            style={styles.inputView}
            keyboardType="default"
            value={descricao}
            placeholder={produto.descricao}
            onChangeText={(e) => setDescricao(e)}
          ></TextInput>
          <TextInput
            style={styles.inputView}
            keyboardType="numeric"
            value={preco}
            placeholder={`R$: ${produto.preco + ""}`}
            onChangeText={(e) => setPreco()}
          ></TextInput>
          <TextInput
            style={styles.inputView}
            keyboardType="numeric"
            value={qtdEstoque}
            placeholder={produto.qtdEstoque + ""}
            onChangeText={(e) => setQtdEstoque()}
          ></TextInput>
        </View>

        <View style={styles.alinhador}>
        <LinearGradient colors={["#580505", "#a00b0b"]} style={styles.button}>
          <TouchableOpacity
            onPress={() => updateProdutoList()}
          >
            <Text style={styles.buttonText}>Atualizar!</Text>
          </TouchableOpacity>
        </LinearGradient>
        </View>
      </View>
      </LinearGradient>
    </View>
  );
};

export default Update;
