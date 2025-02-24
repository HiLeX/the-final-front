<template>
  <div class="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
    <div class="card w-96 bg-white shadow-2xl p-8 rounded-xl">
      <h2 class="text-3xl font-bold text-center text-black mb-6">Login</h2>
      <div v-if="errorMessage" class="mb-4 p-3 bg-red-500 text-white text-center rounded-lg">
        {{ errorMessage }}
      </div>
      <form @submit.prevent="register">
        <div class="form-control mb-6">
          <input
              id="email"
              type="email"
              autocomplete="email"
              v-model="email"
              placeholder="Email"
              class="input input-bordered w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-400"
              required
          />
          <input
              id="password"
              type="password"
              autocomplete="current-password"
              v-model="password"
              placeholder="Mot de passe"
              class="input input-bordered w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-400"
              required
          />
        </div>
        <button type="submit" @click.prevent="handleSignIn" class="btn btn-primary w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700" v-html="signInLabel"></button>
      </form>
      <p class="text-center text-gray-700 mt-4">
        Pas de compte ?
        <router-link to="/register" class="text-blue-600 hover:underline">Enregistrez-vous</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {useAuthStore} from "~/stores/auth/authStore.js";
import {storeToRefs} from "pinia";

definePageMeta({
  authRequired: false,
});

const authStore = useAuthStore();
const { signIn } = authStore;
const { isSubmittingSignIn } = storeToRefs(authStore);
const router = useRouter();

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const signInLabel = computed(() => isSubmittingSignIn.value ? '<span class="loading loading-ring loading-xs"></span>' : 'Se connecter')

const handleSignIn = async () => {
  console.log('ddeidjei')
  if (errorMessage.value) errorMessage.value = '';

  const { success, message } = await signIn({ email: email.value, password: password.value });
  if (success) {
    await router.push('/');
  }
  errorMessage.value = message.value;
};
</script>
