import axios from 'axios'

 const api = axios.create({
    baseURL: "https://apidadeby.herokuapp.com/reactnative",
    auth: {
        username: "reactnative",
        password: "2022"
    }
})

export default api