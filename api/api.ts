import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + '/api',
  headers: {
    "Content-Type": "application/json",
  },
});


export const dedicatedApit = (route: string) => ({
    get: async (endpoint: string) => {
        return api.get(`/${route}${endpoint}`)
    },
    put: async (endpoint: string, body: object) => {
        return api.put(`/${route}${endpoint}`, body)
    },
    post: async (endpoint: string, body: object) => {
        return api.post(`/${route}${endpoint}`, body)
    },
    delete: async (endpoint: string) => {
        return api.delete(`/${route}${endpoint}`)
    }
})

