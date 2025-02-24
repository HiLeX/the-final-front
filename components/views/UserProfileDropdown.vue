<template>
    <div class="dropdown-menu shadow-md shadow-black/5 z-30 hidden max-w-xs w-full bg-white rounded-md border border-gray-100">
        <!-- User profile options -->
    </div>
</template>

<script setup>
import {ref} from 'vue';

const isOpen = ref(false);

function toggleDropdown() {
    isOpen.value = !isOpen.value;
}
</script>

<style scoped>
.dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    max-width: 300px;
    background: white;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    border-radius: 4px;
    z-index: 30;
}
</style>
