<script setup>
import { BASE_URL } from '../../../constants';
import { useStore } from 'vuex';
import { ref } from 'vue';

const store = useStore()
const emit = defineEmits()
const currentUser = store.getters['users/getCurrentUser']

const postContent = ref(null)
const closePostModal = () => {
    emit('close-post-modal', false)
}
const sendPost = () => {
    store.dispatch("posts/sendPost", postContent.value)
    closePostModal()
}
</script>
<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div @click="closePostModal" class="fixed  inset-0 bg-black bg-opacity-75 transition-opacity"></div>
        <div class="fixed  inset-0 z-10 overflow-y-auto">
            <div class="flex  items-end justify-center p-2  sm:items-center sm:p-0">
                <div
                    class="relative  transform overflow-hidden rounded-lg  bg-white shadow-xl transition-all sm:my-8 w-full sm:max-w-[550px]">
                    <div class="border-b md:px-6 p-3 md:py-3 border border-opacity-70 flex justify-between items-center">
                        <h3 class=" md:text-xl " id="modal-title">Gönderi Oluşturun</h3>
                        <button @click="closePostModal" class="hover:bg-neutral-200 hover:bg-opacity-50 rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="muted" class="mercado-match" width="24" height="24" focusable="false">
                                <path
                                    d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="md:pt-2 pb-4 px-3 sm:py-6 ">
                        <div class="mt-3 pr-3 sm:mt-0 sm:ml-4 flex flex-col space-y-4  ">
                            <div class="flex justify-start items-start space-x-2">
                                <img :src="`${BASE_URL}/uploads/${currentUser.profile_image}`" alt=""
                                    class="rounded-full object-contain w-14 h-14 ">
                                <div class="flex flex-col">
                                    <a href="#" class="font-semibold text-sm">{{ currentUser.full_name }}</a>
                                    <div class="flex items-center ">
                                        <button
                                            class=" rounded-full flex items-center space-x-2 border border-muted text-sm py-1 font-semibold text-muted px-4  hover:bg-gray-200 hover:border-black active:text-black transition-bg duration-300 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                data-supported-dps="16x16" fill="currentColor" class="mercado-match"
                                                width="16" height="16" focusable="false">
                                                <path
                                                    d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z">
                                                </path>
                                            </svg>
                                            <p> Herhangi biri</p>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <textarea v-model="postContent" cols="30" placeholder="Ne hakkında konuşmak istiyorsunuz?"
                                class="placeholder:text-muted outline-none" rows="10"></textarea>
                        </div>
                    </div>
                    <div
                        class="bg-white  border border-opacity-70 px-4 py-3 space-x-2 flex justify-end items-center sm:px-6">
                        <button :disabled="!postContent" @click="sendPost"
                            class="bg-primary disabled:bg-gray-300 disabled:text-gray-400 rounded-full py-1 px-3 text-white active:bg-[#09223b] hover:bg-[#004182] transition-all duration-300 font-bold">Gönderi</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>