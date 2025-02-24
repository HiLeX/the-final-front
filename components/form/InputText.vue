<template>
    <input ref="input" v-model="model" :placeholder="placeholder" :type="type ?? 'text'" class="grow"/>
</template>

<script lang="ts" setup>

const model = defineModel<string, 'trim'>();
const input = ref<HTMLInputElement>();

onMounted(() => {
    input.value?.focus();
})

defineProps<{
    placeholder: string,
    type?: string
}>();
</script>
