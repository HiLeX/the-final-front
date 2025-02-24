<template>
    <div class="p-4">
        <div class="flex border-b-2">
            <button
                :class="tab === 'login' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'"
                class="flex-1 py-2 text-sm font-medium transition-colors duration-150 ease-in-out focus:outline-none"
                @click="tab = 'login'"
            >
                Login
            </button>
            <button
                :class="tab === 'register' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'"
                class="flex-1 py-2 text-sm font-medium transition-colors duration-150 ease-in-out focus:outline-none"
                @click="tab = 'register'"
            >
                Register
            </button>
        </div>
        <div v-if="tab === 'login'">
            <LoginComponent />
        </div>
        <div v-else>
            <RegisterComponent />
        </div>
    </div>
</template>

<script>
import LoginComponent from './Login.vue'
import RegisterComponent from '~/components/auth/register/Register.vue'

export default {
    components: {
        LoginComponent,
        RegisterComponent
    },
    data() {
        return {
            tab: 'login'
        }
    }
}
</script>

<style scoped>
/* Additional CSS can go here if needed */
</style>
