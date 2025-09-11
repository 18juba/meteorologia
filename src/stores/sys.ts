import { create } from "zustand";

export const sysStore = create( () => ({
    theme: 'light',
    language: 'pt',
}))

export const setTheme = (theme: string) => {
    sysStore.setState({ theme });
}

export const setLanguage = (language: string) => {
    sysStore.setState({language});
}