<template>
    <div class="flex flex-col space-y-4">
        <input
            type="email"
            placeholder="Email"
            v-model="email"
            class="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
            type="password"
            placeholder="Password"
            v-model="password"
            class="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
            type="password"
            placeholder="Confirm Password"
            v-model="passwordConfirm"
            class="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
    </div>
    <button
        :disabled="!email || !password || !passwordConfirm"
        @click="submit"
        class="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-150"
    >
        Next
    </button>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const passwordConfirm = ref('');
const emit = defineEmits(['submit']);
const submit = async () => {
    if (areInputsValid) {
        emit('submit', { email: email.value, password: password.value, passwordConfirm: passwordConfirm.value })
    } else {
        console.error('Passwords do not match');
    }
};

const areInputsValid = () => !!(email.value && password.value.length && password.value === passwordConfirm.value)
</script>
