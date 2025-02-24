<template>
    <div id="container" class="p-6">
        <!-- Container -->
        <Container>
            <template #content>
                <MiniCard/>
                <div class="btn">Click</div>
            </template>
        </Container>
    </div>
</template>

<style scoped>
#container {
    height: -webkit-fill-available;
    overflow-y: auto;
}
</style>
<script lang="ts" setup>
import Container from "~/components/misc/Container.vue";
import MiniCard from "~/components/misc/MiniCard.vue";
</script>
