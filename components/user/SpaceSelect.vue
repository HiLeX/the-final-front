<template>
  <div class="space-y-4 cursor-pointer">
    <user-card></user-card>
    <space-list></space-list>
  </div>
</template>

<script setup lang="ts">
import UserCard from "~/components/user/UserCard.vue";
import SpaceList from "~/components/space/SpaceList.vue";
</script>