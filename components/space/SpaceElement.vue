<template>
  <div class="card bg-base-100 image-full w-96 shadow-xl">
    <figure>
      <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes" />
    </figure>
    <div class="card-body">
      <p>{{ title }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">

defineProps<{
  title: string
}>()

</script>