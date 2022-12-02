import { createContext, useState, useEffect } from "react";
import { login } from "../services/auth";
import api from "../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({ logado: false });


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loginContext = async (userEmail, password) => {
        const response = await login()
        if (response.user.email == userEmail && response.user.password == password){
            setUser(response.user)
        } else alert("Apenas o TALDO Roberto manda aqui !")

    }

    const logoutContext = () => {
        setUser(null)
        AsyncStorage.clear();
    }

    useEffect(() => {
        const verificaStorage = async () => {
            await new Promise(resolve => setTimeout(resolve, 2000))
            setLoading(false);
        }
        verificaStorage()
    }, []);

    return (
        <AuthContext.Provider
            value={{ logado: !!user, loginContext, logoutContext, loading: loading }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext