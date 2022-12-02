import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({


    container:{
        flex: 1,
        alignItems: 'center',
    },

    taskContainer: {
        height: "auto",
        width: "80%",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20, 


    },
    Titulo: {
        fontSize: 20,
        color: "#F5F5F5",
        padding: 5,
        fontWeight: "bold",
    },

    texto: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",

    },

    taskSubContainer: {
        height: "auto",
        width: "80%",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20, 
    },
})