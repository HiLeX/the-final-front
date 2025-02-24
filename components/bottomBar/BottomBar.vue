<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <div class="flex-1 flex items-center justify-center p-6">
      <div v-if="activeTab === 'home'" class="text-center text-lg">
        <news-list></news-list>
      </div>
      <div v-if="activeTab === 'search'" class="text-center text-blue-600 text-lg font-semibold">
        <search-element></search-element>
      </div>
      <div v-if="activeTab === 'spaces'" class="text-center text-teal-600 text-lg font-semibold">
        <space-select></space-select>
      </div>
    </div>
    <div class="btm-nav fixed bottom-0 left-0 w-full bg-neutral-300 shadow-md flex justify-around py-3">
      <button @click="activeTab = 'home'" :class="{'bg-pink-200 text-pink-600': activeTab === 'home'}" class="p-2 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </button>
      <button @click="activeTab = 'search'" :class="{'bg-blue-200 text-blue-600': activeTab === 'search'}" class="p-2 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </button>
      <button @click="activeTab = 'spaces'" :class="{'bg-teal-200 text-teal-600': activeTab === 'spaces'}" class="p-2 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SpaceSelect from "~/components/user/SpaceSelect.vue";
import SearchElement from "~/components/search/SearchElement.vue";
import NewsList from "~/components/news/NewsList.vue";

const activeTab = ref('home');
</script>
