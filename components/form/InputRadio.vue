<template>
    <div v-for="{ label, value } in datas" class="form-control">
        <label :class="inputClass" class="label cursor-pointer">
            <span class="label-text">{{ label }}</span>
            <input v-model="model" :value="value" class="radio grow" name="radio-10" type="radio" />
        </label>
    </div>
</template>

<script lang="ts" setup>
const model = defineModel();

defineProps<{
    datas: object
    inputClass?: string;
}>();
</script>
