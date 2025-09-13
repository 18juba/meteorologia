import { create } from "zustand";


type SysState = {
    theme: string;
    language: string;
    listeners: (() => void)[];
};

export const sysStore = create<SysState>(() => ({
    theme: 'light',
    language: '',
    listeners: [],
}));

export const subscribeLanguageChange = (listener: () => void) => {
    sysStore.setState(state => ({ listeners: [...state.listeners, listener] }));
    return () => {
        sysStore.setState(state => ({ listeners: state.listeners.filter(l => l !== listener) }));
    };
};

export const setTheme = (theme: string) => {
    sysStore.setState({ theme });
}

export const setLanguage = (language: string) => {
    sysStore.setState({ language });
    // Notify listeners
    const { listeners } = sysStore.getState();
    listeners.forEach(l => l());
}