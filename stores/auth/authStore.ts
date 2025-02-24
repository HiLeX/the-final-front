import {defineStore} from 'pinia';
import {type UserSignInInput, type UserSignUpInput, useSignInMutation, useSignUpMutation} from "~/generated/graphql";
import {useUserStore} from "~/stores/user/userStore";

type RegisterPayload = {
    email: string
    password: string
    passwordConfirmation: string
    cgu: boolean
}

export const useAuthStore = defineStore('authStore', () => {
    const userStore = useUserStore();
    const { mutate: signUpMutation, loading: isSubmittingSignUp } = useSignUpMutation()

    const { mutate: signInMutation, loading: isSubmittingSignIn } = useSignInMutation()

    const signUp = async ({email, password, passwordConfirmation, cgu}: UserSignUpInput ) => {
        const res = await signUpMutation({ input: { email, password, passwordConfirmation, cgu } })
        const data = res?.data?.auth?.signUp;
        if (!data || (data && 'message' in data)) {
            return {
                success: false,
                message: data?.message ?? 'Oups une erreur est survenue'
            }
        }
        await userStore.userToken.set(data.access);
        return {
            success: true,
        };
    }

    const signIn = async ({email, password}: UserSignInInput) => {
        const res = await signInMutation({ input: { email, password } })
        const data = res?.data?.auth?.signIn;

        if (!data || (data && 'message' in data)) {
            return {
                success: false,
                message: data?.message ?? 'Oups une erreur est survenue'
            }
        }
        await userStore.userToken.set(data.access);

        return {
            success: true
        }
    }

    return {
        signUp: () => ({success: true}),
        signIn: () => ({success: true}),
        isSubmittingSignUp,
        isSubmittingSignIn
    }
});
