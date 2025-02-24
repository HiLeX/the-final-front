<template>
    <div class="max-w-lg mx-auto my-8 p-4 border rounded-lg shadow-lg flex flex-col">
        <!-- Slide container, allow it to grow and fill space -->
        <div class="flex-grow">
            <CredentialsForm
                @submit="register"
            ></CredentialsForm>
        </div>

        <!-- Next button at the bottom -->

    </div>
</template>

<script setup>
import CredentialsForm from '~/components/auth/register/form/credentials/CredentialsForm.vue';
import {useAuthStore} from "~/stores/auth/authStore";

const { signUp } = useAuthStore();

const register = async ({ email, password, passwordConfirm }) => {
    const success = await signUp({email, password, passwordConfirmation: passwordConfirm, cgu: true}).catch((e) => e);
    if (success) {
        await navigateTo('/');
        // Redirect to homepage avec une modal de bienvenue et présentation !
    } else {
        // Handle error display it
    }
}
</script>
