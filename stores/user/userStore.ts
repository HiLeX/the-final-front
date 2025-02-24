import {computed, type Ref} from 'vue'
import {defineStore, storeToRefs} from "pinia";
import {useTokenStore} from "~/stores/token/tokenStore";
import {type UserInfosFragment, useSetProfileMutation, useUserInfosLazyQuery} from "~/generated/graphql";

export const useUserStore = defineStore('user', () => {
    const tokenStore = useTokenStore();
    const { token } = storeToRefs(tokenStore);
    const isConnected = computed(() => token.value !== null);

    const userInfos: Ref<UserInfosFragment| null> = ref(null);
    const { load: loadUser, result: userInfosResponse , onError: onUserInfosError, loading } = useUserInfosLazyQuery();
    const { mutate: setProfile, onError: onSetProfileError ,onDone: onSetProfileResult, loading: isSubmitPersonalInfos } = useSetProfileMutation();

    if (isConnected.value && !userInfos.value) {
        console.log('SSSS', isConnected);
        void loadUser();
    }

    watchEffect(async () => {
        if (isConnected.value && !userInfos.value) {
            console.log('gooo');
            await loadUser();
        }
    });

    watch(userInfosResponse, () => {
        if (userInfosResponse.value?.user?.me) {
            userInfos.value = userInfosResponse?.value?.user.me;
        }
    })

    onUserInfosError((error) => {
        console.error('oups',error);
    });

    onSetProfileResult((result) => {
        if (result.data?.user?.setProfile) {
            userInfos.value = result.data.user.setProfile;
        }
    });

    const logout = async () => {
        await tokenStore.destroyToken();
        userInfos.value = null;
    }

    return {
        userToken: {
            set: tokenStore.setToken,
            value: computed(() => token.value),
        },
        userAuth:{
            logout,
            isConnected: computed(() => isConnected.value),
        },
        userInfos: {
            value: userInfos,
            isLoading:computed(() => loading.value)
        },
        userProfile: {
            onSetProfileError,
            onSetProfileResult,
            set: setProfile,
            isSubmit: isSubmitPersonalInfos
        },
    }
})
