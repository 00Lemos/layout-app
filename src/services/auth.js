
export const login = () => {
    //return await api.post("/login", {login: email, senha: senha})
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: "abc123fgh456", 
                user: {
                    email: "roberto@gmail.com",
                    password: "123"
                }
            })
        }, 1000)
    })
}