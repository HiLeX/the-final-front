<template>
    <div class="card w-96 bg-base-100 shadow-xl min-h-50">
        <div class="card-body justify-center">
            <label class="input input-bordered flex items-center gap-2">
                <svg class="w-4 h-4 opacity-70" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path :d="iconPathSvg" /></svg>
                <component :is="ComponentResolved" v-model="model" v-bind="component.props" />
            </label>
            <div class="card-actions justify-center">
                <button class="btn btn-primary" @click="emit('submit')">
                    Suivant
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
    isActive: boolean;
    isLoading: boolean;
    inputClass: string;
    iconPathSvg: string;
    component: {
        name: string;
        props: Record<string, unknown>;
    };
}>();

const model = defineModel();
const emit = defineEmits(['submit']);
const input = ref<HTMLInputElement | null>(null);
const ComponentResolved = resolveComponent(props.component.name)
const handleEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
        emit('submit');
    }
}

onMounted(() => {
    if (props.isActive) {
        document.addEventListener('keydown', handleEnter);
    }
    if (input.value) {
        input.value.focus()
    }
})

onUnmounted(() => {
    document.removeEventListener('keydown', handleEnter);
})

watchEffect( () => {
    if (props.isActive) {
        document.addEventListener('keydown', handleEnter);
    }
    if (input.value) {
        input.value.focus()
    }
})
</script>
