<template>
    <span v-if="loading" class="loader z-20 mx-auto "></span>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore()

const loading = computed(() => store.getters['loader/loading'])
</script>
<style scoped>
.loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid #0b66c2;
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>