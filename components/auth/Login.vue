<template>
    <form class="max-w-sm mx-auto my-8 p-6 border rounded-lg shadow-lg" @submit.prevent="handleSubmit">
        <div class="mb-4">
            <input
                type="email"
                placeholder="Email"
                v-model="email"
                class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
        </div>
        <div class="mb-4">
            <input
                type="password"
                placeholder="Password"
                v-model="password"
                class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
        </div>
        <div class="mb-6 flex items-center">
            <input
                type="checkbox"
                v-model="stayConnected"
                class="mr-2"
            />
            <label for="stayConnected" class="text-sm text-gray-600">
                Rester connecté
            </label>
        </div>
        <button
            type="submit"
            class="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-colors duration-150"
        >
            Login
        </button>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const stayConnected = ref(false);
const { signIn } = useAuthStore();

const handleSubmit = async () => {
    const success = await signIn({email: email.value, password: password.value }).catch((e) => e);
    if (success) {
        await navigateTo('/');
        // Redirect to homepage avec une modal de bienvenue et présentation !
    } else {
        // Handle error display it
    }
}
</script>

<style scoped>
/* Additional CSS can go here if needed */
</style>
