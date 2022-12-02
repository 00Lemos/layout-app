import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0a0558",
    },
         containerDados: {
            width: "80%",
            height: "60%",
            marginTop: 35,
            alignContent: "center",
            justifyContent: "center",
        },
    
        viewImage: {
            borderRadius: 25,
            width: "80%",
            height: "50%",
            marginLeft: 5,
            marginTop:1,
            marginBottom: 5,
        },
        
        titulo: {
            fontSize: 25,
            color: "#F5F5F5"
        },
        text: {
            fontSize: 15,
            color: "#DADADA",
            fontWeight: "bold"
        },
        
        botao: {
            backgroundColor: "transparent",
            borderRadius: 15,
            fontWeight: "600",
            width: "35%",
            padding: 16,
            alignItems: "center",
            marginTop: 50
    
        },
        texto: {
            color: "#fff",
            fontSize: 10,
            
        },

    testeDados: {
        width: "100%",
        height: "100%",
        backgroundColor: "#DADADA",
        alignItems: "baseline",
        justifyContent: "center",
        marginRight: 100,
        borderRadius: 25,
        padding: 15

    },



    taskContainer: {
        backgroundColor: "#f0f0f0",
        marginBottom: 16
    },
    texto: {
        fontSize: 24,
        color:'black'
    },

    viewsBottons: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly"
        
    }
})

