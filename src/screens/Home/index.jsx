import {useIsFocused} from '@react-navigation/native';
import React, {useState, useEffect, useContext} from 'react';
import { View, FlatList, StatusBar, Button, TextInput } from 'react-native';
import Card from '../../components/Card';
import AuthContext from '../../contexts/AuthContexts';
import {getTasks} from '../../services/tasksClient';
import { LinearGradient } from "expo-linear-gradient";
import { styles } from './styles';


export const Home = ({navigation}) => {
    const [tasks, setTasks] = useState([])
    const {logoutContext} = useContext(AuthContext)
    const [filtrado, setFiltrado] = useState("")
    const isFocused = useIsFocused();


    const fetchData = async () => {
        const taskList = await getTasks();
        setTasks(taskList)
    }

    useEffect(() => {
        if (isFocused) {
            fetchData()
        }
    }, [isFocused])

    const produtosFiltrados = tasks?.filter((task) =>
    task.nome.toUpperCase().includes(filtrado.toUpperCase())
    );

    return (
        <View style={styles.container}>
             <LinearGradient colors={["#0a0558", "#0b26a0"]} style={styles.container}>
            <StatusBar style="auto" /> 
            <View style={styles.searchBar}> 
            <TextInput 
            style={styles.pesquisa} 
            placeholder="🔍Pesquisar"
            placeholderTextColor="#FFF" 
            onChangeText={(f) => setFiltrado(f)}  />
            </View>

            <FlatList style={styles.card} data={produtosFiltrados}
                keyExtractor={
                    item => item.id
                }
                renderItem=
                {({item}) => <Card item={item}/> }/>
            <Button style={styles.logout} title='LOGOUT'
                onPress={logoutContext}/>
                </LinearGradient>
        </View>
    )
}

