import {useUserStore} from "#imports";

export default defineNuxtRouteMiddleware((to) => {
    const { userAuth } = useUserStore();

    if (to.meta.authRequired === false) {
        return;
    }

    if (!userAuth.isConnected) {
        console.log('NOT LOGUED!')
        return navigateTo('/register');
    }
    console.log('LOGUED!');
});