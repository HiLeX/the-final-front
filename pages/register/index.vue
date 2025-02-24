<template>
  <div class="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
    <div class="card w-96 bg-white shadow-2xl p-8 rounded-xl">
      <h2 class="text-3xl font-bold text-center text-black mb-6">Inscription</h2>
      <form @submit.prevent="register">
        <div class="form-control mb-6">
          <input
              id="email"
              type="email"
              v-model="email"
              placeholder="Adresse email"
              class="input input-bordered w-full p-3 rounded-lg border-gray-300 focus:ring focus:ring-blue-400"
              required
          />
        </div>
        <button type="submit" class="btn btn-primary w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">S'inscrire</button>
      </form>
      <p class="text-center text-gray-700 mt-4">
        Déjà un compte ?
        <router-link to="/login" class="text-blue-600 hover:underline">Connectez-vous</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

definePageMeta({
  authRequired: false,
});


const email = ref('');

const register = () => {
  console.log('Email:', email.value);
  // Ajoute ici la logique d'inscription
};
</script>
