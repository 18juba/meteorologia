
import axios from "axios";

function getTokenFromCookie() {
    if (typeof document === 'undefined') return null;
    const match = document.cookie.match(/(?:^|; )token=([^;]*)/);
    return match ? match[1] : null;
}

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL + '/api',
    headers: {
        "Content-Type": "application/json",
    },
});

// Restore token from cookie/localStorage on app start
if (typeof window !== 'undefined') {
    const token = getTokenFromCookie() || localStorage.getItem('token');
    if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
}


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

