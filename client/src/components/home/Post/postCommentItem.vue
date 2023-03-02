<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const currentUser = computed(() => store.getters['users/getCurrentUser'])
const props = defineProps({
    comment: {
        type: Object,
    }
})
</script>
<template>
    <div class="flex flex-col">
        <div class="flex justify-between items-start mb-[-6px] space-x-2 py-3 mt-2">
            <img :src="`http://localhost:3000/uploads/${props?.comment?.user?.profile_image}`" alt=""
                class="rounded-full w-10 " />
            <div class="px-4 py-2 rounded-xl w-full rounded-tl-none flex flex-col bg-neutral-100">
                <div class="flex justify-between items-start">
                    <div class="flex flex-col items-start">
                        <a href="#" class="font-semibold hover:underline hover:text-primary">{{
                            props?.comment?.user?.full_name
                        }}</a>
                        <small href="#" class=" text-muted">{{ props?.comment?.user?.title }}</small>
                    </div>
                    <small
                        class="flex justify-between items-end  text-muted tracking-widest hover:cursor-pointer  transition-all duration-300 align-start">
                        4s

                        <p v-if="props.comment.user._id === currentUser._id" @click="toggleCommentMenu"
                            class="ml-2 text-lg font-bold ">
                            ...</p>
                    </small>
                </div>
                {{ props?.comment?.content }}
            </div>
        </div>
        <div class="px-14 pb-4 flex justify-start items-center text-xs text-muted font-semibold">
            <span class="py-px px-1 rounded-md cursor-pointer hover:bg-gray-200">Beğen</span>
            <span v-if="props?.comment?.likes?.length > 0" class="font-light flex  items-center">
                <img src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" class="mr-1" alt=""> 1
            </span>
            <p class="font-light mx-2">|</p> <span
                class="py-px px-1 rounded-md cursor-pointer hover:bg-gray-200">Yanıtla</span>
        </div>
    </div>
</template>