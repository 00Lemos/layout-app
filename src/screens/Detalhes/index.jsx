import {Text, TouchableOpacity, View, Image } from "react-native"
import Lixo from 'react-native-vector-icons/Ionicons'
import Form from 'react-native-vector-icons/AntDesign'
import { deleteTask } from "../../services/tasksClient";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from "./style"
import { useEffect } from "react";

const Detalhes = ({ navigation, route  }) => {
    const{id, nome, preco, foto, descricao, qtdEstoque}=route.params;
    
    const handleDelete=(id)=>{
        deleteTask(id)
        navigation.goBack()
    }
    

    useEffect(() =>{
        navigation.setOptions({ title: route.params.nome })
      },[])

      navigation.setOptions({ title: route.params.nome , headerStyle:{backgroundColor: "#a00b0b"}, headerTintColor: '#FFFFFF'})

    return (
        <View style={styles.container}>
            <View style={styles.containerDados}>
                <LinearGradient colors={["#011753", "#003cff"]} style={styles.container}>
                    <Image style={styles.viewImage} source={{uri:foto}}></Image>

                    <View styles={styles.testeDados}>
                        <Text style={styles.text}>ID: {id}</Text>
                        <Text>   </Text>
                        <Text style={styles.text}>Nome: {nome}</Text>
                        <Text style={styles.text}>Descrição:{descricao}</Text>
                        <Text style={styles.text}>Preço: R$ {preco}</Text>
                        <Text style={styles.text}>Estoque: {qtdEstoque}</Text>
                        
                    </View>
                </LinearGradient>
        </View>
            
            

            <View style={styles.viewsBottons}> 
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Update", {id: id, nome: nome, descricao: descricao})}>
                     <Form name="form" color={"white"} size={35}></Form>
                         <Text style={styles.titulo}>Atualizar Produto</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={() => handleDelete(id)}>
                    <Lixo name="trash-bin-outline" color={"red"} size={35}></Lixo>
                        <Text style={styles.titulo}>Deletar Produto</Text>
                </TouchableOpacity>   
                
            </View>
           
        </View>
    )
    

}

export default Detalhes


