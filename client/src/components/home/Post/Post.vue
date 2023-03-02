
<template>
    <!-- Post -->
    <div class="border pt-3  pb-1 px-4  text-sm bg-white rounded-lg">
        <!-- Post Header -->
        <div class="flex relative justify-between items-start mb-2 ">
            <div class="flex space-x-2">
                <img :src="`${BASE_URL}/uploads/${props.post.user.profile_image}`" alt=""
                    class="rounded-full h-14 object-contain  w-14">
                <div class="flex flex-col">
                    <router-link :to="`/user/${props.post.user.slug}`"
                        class="font-bold text-sm hover:underline hover:text-primary">{{ props.post.user.full_name
                        }}</router-link>
                    <small class="text-xs text-muted">{{ props.post.user.title }} @{{ props.post.user.company.name
                    }}</small>
                    <small class="text-xs text-muted flex items-center space-x-1">{{ created_at(props.post.created_at) }}
                        •<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16"
                            fill="#666666" class="mercado-match" width="16" height="16" focusable="false">
                            <path
                                d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z">
                            </path>
                        </svg></small>
                </div>
            </div>

            <div v-if="props.post.user._id == currentUser._id">
                <p @click="togglePostMenu"
                    class="px-2 pb-2 text-muted text-lg font-bold tracking-widest hover:cursor-pointer hover:bg-gray-200 transition-all duration-300 rounded-full align-start">
                    ...</p>
                <div v-if="postMenu"
                    class="bg-white border w-1/2 rounded-md rounded-tr-none shadow-xl absolute top-8 right-2 font-semibold">
                    <ul class="rounded-md ">
                        <li @click="deletePost()"
                            class="flex  rounded-tl-md justify-between items-center p-4 hover:cursor-pointer hover:bg-neutral-200">
                            <i class="fa-sharp fa-solid fa-trash"></i>
                            Gönderiyi Sil
                        </li>
                        <li
                            class="flex  justify-between  rounded-md rounded-t-none items-center p-4 hover:cursor-pointer hover:bg-neutral-200">
                            <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                            Gönderiyi Düzenle
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- /Post Header -->
        <!-- Post Body -->
        <p v-html="formatContent(props.post.content)"></p>
        <!-- /Post Body -->
        <!-- Currently Likes -->
        <div class="flex justify-between items-center mt-2 text-muted  text-xs">
            <div class="flex space-x-1">
                <img src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="">
                <span v-if="props.post.likes.length > 0">Enes Taha Sarı ve diğer 56 kişi</span>
                <span v-else>Bunu ilk beğenen sen ol.</span>
            </div>
            <p v-if="props.post.comments.length > 0">{{ props.post.comments.length }} yorum</p>

        </div>
        <hr class="mt-1 mb-2">
        <ul class="flex items-center justify-between mx-auto  font-semibold">
            <li class="group ">
                <button
                    class="active:text-black flex-col md:flex-row flex items-center px-4 py-2 sm:px-8 rounded-md transition-all duration-300 hover:cursor-pointer active:bg-gray-300 hover:bg-gray-200 text-sm text-muted space-x-2">
                    <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="thumbs-up-outline-medium">
                        <!---->
                        <use href="#thumbs-up-outline-medium" width="24" height="24"></use>
                    </svg>
                    <span class="hidden sm:block">Beğen</span>
                </button>
            </li>
            <li class="group">
                <button @click="toggleComment"
                    class="active:text-black flex-col md:flex-row flex items-center sm:px-2 px-4 py-2 rounded-md transition-all duration-300 hover:cursor-pointer active:bg-gray-300 hover:bg-gray-200 text-sm text-muted space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                        fill="currentColor" class="mercado-match " width="24" height="24" focusable="false">
                        <path
                            d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z">
                        </path>
                    </svg>
                    <p class="hidden sm:block">Yorum yap</p>
                </button>
            </li>
            <li class="group ">
                <button
                    class="active:text-black flex-col md:flex-row flex items-center sm:px-8 px-4 py-2 rounded-md transition-all duration-300 hover:cursor-pointer active:bg-gray-300 hover:bg-gray-200 text-sm text-muted space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                        fill="currentColor" class="mercado-match " width="24" height="24" focusable="false">
                        <!---->

                        <use href="#repost-medium" width="24" height="24"></use>
                    </svg>
                    <span class="hidden sm:block">Paylaş</span>
                </button>
            </li>
            <li class="group ">
                <button
                    class="active:text-black flex-col md:flex-row flex items-center sm:px-8 px-4 py-2 rounded-md transition-all duration-300 hover:cursor-pointer active:bg-gray-300 hover:bg-gray-200 text-sm text-muted space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                        fill="currentColor" class="mercado-match w-6 " focusable="false">
                        <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                    </svg>
                    <span class="hidden sm:block">Gönder</span>
                </button>
            </li>
        </ul>
        <!-- /Currently Likes -->
        <!-- Comments -->
        <div v-if="openCommentMenu" class="flex flex-col space-y-2">
            <div class="flex  items-center space-x-2 py-3 mt-2">
                <img :src="`http://localhost:3000/uploads/${currentUser?.profile_image}`" alt=""
                    class="rounded-full w-10 " />
                <div class="relative h-auto transition-all duration-300 py-2 w-full px-2 rounded-full border">
                    <textarea rows="1" placeholder="Yorum ekle..." @input="incHeight($event)"
                        class="w-96  border-none outline-none  resize-none  ring-muted focus:outline-none  placeholder:text-muted "></textarea>
                    <div class="absolute right-12 top-1 hover:cursor-pointer rounded-full p-1 hover:bg-gray-300  ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" class=""
                            width="24" height="24" focusable="false" fill="#666666">
                            <path
                                d="M8 10.5A1.5 1.5 0 119.5 12 1.5 1.5 0 018 10.5zm6.5 1.5a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm7.5 0A10 10 0 1112 2a10 10 0 0110 10zm-2 0a8 8 0 10-8 8 8 8 0 008-8zm-8 4a6 6 0 01-4.24-1.76l-.71.76a7 7 0 009.89 0l-.71-.71A6 6 0 0112 16z">
                            </path>
                        </svg>

                    </div>
                    <div class="absolute right-2 top-1  hover:cursor-pointer rounded-full p-1 hover:bg-gray-300 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                            fill="#666666" class="mercado-match" width="24" height="24" focusable="false">
                            <path
                                d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
            <p v-if="props?.post?.comments?.length > 0" class="font-semibold text-muted flex justify-start items-center">En
                ilgili
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor"
                    class="mercado-match" width="16" height="16" focusable="false">
                    <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
                </svg>
            </p>
            <postComment v-for="comment in props.post.comments" :key="comment._id" :comment="comment" />
        </div>
        <!-- /Comments -->

    </div>
    <!-- /Post -->
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { BASE_URL } from '../../../constants';
import moment from "../../../composables/moment";
import postComment from './postCommentItem.vue';
import { ref } from 'vue';
const store = useStore()
const { created_at } = moment(props.post.created_at);
const props = defineProps({
    post: {
        type: Object,
    }
})
function formatContent(content) {
    return content.replace(
        /#\w+/g,
        '<span class="text-primary cursor-pointer font-semibold">$&</span>'
    );
}
const openCommentMenu = ref(false)
const toggleComment = () => {
    openCommentMenu.value = !openCommentMenu.value
}
const currentUser = computed(() => store.getters['users/getCurrentUser'])
const deletePost = () => {
    store.dispatch('posts/deletePost', props.post)
}
const postMenu = ref(false)
const togglePostMenu = () => {
    postMenu.value = !postMenu.value
}
const incHeight = (e) => {
    e.target.style.paddingTop = `${e.target}px`
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`
}

</script>