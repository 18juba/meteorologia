import { api, dedicatedApit } from "../../api"

export const userApi = dedicatedApit("users")


export const anonimousLogin = async () => {
    const response = await api.post("/login", {
        nome: "lucas",
        senha: "9999"
    })

    const token = response.data.token
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`

    document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24 * 7}`;
    if (typeof window !== 'undefined') {
        localStorage.setItem('token', token);
    }
}

export const login = async ({nome, senha}: {nome: string, senha: string}) => {
    return api.post("/login", {nome, senha})
}

export const register = async ({nome, senha}: {nome: string, senha: string}) => {
    return api.post("/registro", {nome, senha})
}

export const updateAddress = async ({latitude,  longitude}: {latitude: string, longitude: string}) => {
    return userApi.put("/atualizar_endereco", {latitude, longitude})
}


export const getDashboard = async () => {
    return api.get("/users/dashboard");
}