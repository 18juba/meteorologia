import { create } from "zustand";

export const UserStore = create(() => ({
    user: {},
    city: 'Fortaleza',
    state: { name: 'Ceará', abreviation: 'CE'},  
    country: '',
}))


export const setUser  = (user: object) => {
    UserStore.setState({ user });
}

export const setCity  = (city: string) => {
    UserStore.setState({ city });
}

export const setCountry  = (country: string) => {
    UserStore.setState({ country });
}