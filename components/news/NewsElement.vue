<template>
  <div class="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ title }} ({{ city }})
      </h2>

      <p>{{ shortText }}</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">{{ type }}</div>
        <div class="badge badge-outline">{{ zone }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    type: string;
    zone: string;
    city: string;
    title: string;
    shortText: string
  }>();
</script>