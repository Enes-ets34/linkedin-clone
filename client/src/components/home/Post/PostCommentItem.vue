<script setup>
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import moment from "../../../composables/moment";
import { BASE_URL } from '../../../constants';

const store = useStore()
const currentUser = computed(() => store.getters['users/getCurrentUser'])
const props = defineProps({
    comment: {
        type: Object,
    }
})
const { created_at } = moment(props?.comment?.created_at);
const commentMenu = ref(false)

const toggleCommentMenu = () => {
    commentMenu.value = !commentMenu.value
}
onMounted(() => {
    document
        .querySelector(":not(#commentDropdown)")
        .addEventListener("click", evt => {
            if (evt?.target?.id !== "commentDropdown") {
                commentMenu.value = false;
            }
        });
})
const deleteComment = () => {
    store.dispatch('posts/deleteComment', props?.comment)
}

</script>
<template>
    <div class="flex flex-col">
        <div class="flex justify-between items-start mb-[-6px] space-x-2 py-2 mt-2">
            <!-- <img :src="`${BASE_URL}/uploads/${props?.comment?.user?.profile_image}`" alt="" class="rounded-full w-10 " /> -->
            <img :src="`${BASE_URL}/uploads/default.png`" alt="" class="rounded-full w-10 " />
            <div class="relative px-4 mt-[-5px] py-2 rounded-xl w-full rounded-tl-none flex flex-col bg-neutral-100">
                <div class="flex  justify-between items-start">
                    <div class="flex flex-col items-start">
                        <a href="#" class="font-semibold hover:underline hover:text-primary">{{
                            props?.comment?.user?.full_name
                        }}</a>
                        <small href="#" class=" text-muted">{{ props?.comment?.user?.title }}</small>
                    </div>
                    <small
                        class="flex justify-between items-end  text-muted tracking-widest hover:cursor-pointer  transition-all duration-300 align-start">

                        {{ created_at() }}
                        <p id="commentDropdown" v-if="props.comment.user._id === currentUser._id" @click="toggleCommentMenu"
                            class="ml-2 text-lg font-bold ">
                            ...</p>
                    </small>
                </div>
                {{ props?.comment?.content }}
                <div v-if="commentMenu"
                    class="bg-white z-10 border w-36 text-xs rounded-lg rounded-tr-none shadow-xl absolute top-8 right-2 font-semibold">
                    <ul class="rounded-lg ">
                        <li @click="deleteComment()"
                            class="flex  rounded-tl-md justify-between items-center p-4 hover:cursor-pointer hover:bg-neutral-200">
                            <i class="fa-sharp fa-solid fa-trash"></i>
                            Yorumu Sil
                        </li>
                        <li
                            class="flex justify-between  rounded-lg rounded-t-none items-center p-4 hover:cursor-pointer hover:bg-neutral-200">
                            <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                            Yorumu Düzenle
                        </li>
                    </ul>
                </div>
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
