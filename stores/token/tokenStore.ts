import {defineStore} from "pinia";

export const useTokenStore = defineStore('tokenStore', () => {
    const { onLogin, onLogout } = useApollo()
    const token = ref<null | string>(localStorage.getItem('ut') ?? 'dede');

    const setToken = async (payload: string) => {
        token.value = payload;
        localStorage.setItem('ut', payload);
        await onLogin(payload);
        return true;
    }

    const destroyToken = async () => {
        token.value = null;
        localStorage.removeItem('ut');
        await onLogout();
    }

    return {
        setToken,
        destroyToken,
        token: computed(() => token.value)
    }
})
