import { api, dedicatedApit } from "../../api"

export const userApi = dedicatedApit("users")


export const login = async ({nome, senha}: {nome: string, senha: string}) => {
    return api.post("/login", {nome, senha})
}

export const register = async ({nome, senha}: {nome: string, senha: string}) => {
    return api.post("/registro", {nome, senha})
}

export const updateAddress = async ({latitude,  longitude}: {latitude: string, longitude: string}) => {
    return userApi.put("/atualizar_endereco", {latitude, longitude})
}