import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#100977",
    flex : 1,
  },
  
  alinhador:{
    alignItems: "center",
    marginTop: 25,
  },

  button: {
    width: "60%",
    padding: 8,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#DADADA",
    fontSize: 20,

  },

    title: {
    fontSize: 20,
    color: '#DADADA',
    fontWeight: "bold",
    marginTop: 15
},

containerInput: {
    width: "100%",
    height: "100%",
    
},
inputView: {
    width: "70%",
    marginLeft: 55,
    height:55,
    backgroundColor: "#DADADA",
    borderRadius: 15,
    marginTop: 25,
    padding: 15,
}

});