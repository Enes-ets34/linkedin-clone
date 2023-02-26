<script setup>
import { BASE_URL } from '../../../constants';
import { defineProps } from 'vue';
const props = defineProps({
    post: {
        type: Object,
    }
})
</script>
<template><!-- Post -->
    <div class="border pt-3  pb-1 px-4  text-sm bg-white rounded-lg">
        <!-- Post Header -->
        <div class="flex justify-between items-start mb-2 ">
            <div class="flex space-x-2">
                <img :src="`${BASE_URL}/uploads/${props.post.user.profile_image}`" alt=""
                    class="rounded-full h-14 object-contain  w-14">
                <div class="flex flex-col">
                    <a href="#" class="font-bold text-sm">{{props.post.user.full_name}}</a>
                    <small class="text-xs text-muted">{{props.post.user.title}} @{{props.post.user.company.name}}</small>
                    <small class="text-xs text-muted flex items-center space-x-1">{{props.post.created_at}} •<svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="#666666"
                            class="mercado-match" width="16" height="16" focusable="false">
                            <path
                                d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z">
                            </path>
                        </svg></small>
                </div>
            </div>
            <p
                class="px-2 pb-2 text-muted text-lg font-bold tracking-widest hover:cursor-pointer hover:bg-gray-200 transition-all duration-300 rounded-full align-start">
                ...</p>
        </div>
        <!-- /Post Header -->
        <!-- Post Body -->
        <p>{{props.post.content}}</p>
        <!-- /Post Body -->
        <!-- Currently Likes -->
        <div class="flex justify-between items-center mt-2 text-muted  text-xs">
            <div class="flex space-x-1">
                <img src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="">
                <span v-if="props.post.likes.length > 0">Enes Taha Sarı ve diğer 56 kişi</span>
                <span v-else>Bunu ilk beğenen sen ol.</span>
            </div>
            <p>4 yorum</p>
        </div>
        <hr class="mt-1 mb-2">
        <ul class="flex items-center justify-between mx-auto  font-semibold">
            <li class="group ">
                <button
                    class="active:text-black flex-col md:flex-row flex items-center px-4 py-2 sm:px-8 rounded-md transition-all duration-300 hover:cursor-pointer active:bg-gray-200 hover:bg-gray-200 text-sm text-muted space-x-2">
                    <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="thumbs-up-outline-medium">
                        <!---->
                        <use href="#thumbs-up-outline-medium" width="24" height="24"></use>
                    </svg>
                    <span class="hidden sm:block">Beğen</span>
                </button>
            </li>
            <li class="group">
                <button
                    class="active:text-black flex-col md:flex-row flex items-center sm:px-2 px-4 py-2 rounded-md transition-all duration-300 hover:cursor-pointer active:bg-gray-200 hover:bg-gray-200 text-sm text-muted space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                        fill="currentColor" class="mercado-match " width="24" height="24"
                        focusable="false">
                        <path
                            d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z">
                        </path>
                    </svg>
                    <p class="hidden sm:block">Yorum yap</p>
                </button>
            </li>
            <li class="group ">
                <button
                    class="active:text-black flex-col md:flex-row flex items-center sm:px-8 px-4 py-2 rounded-md transition-all duration-300 hover:cursor-pointer active:bg-gray-200 hover:bg-gray-200 text-sm text-muted space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                        fill="currentColor" class="mercado-match " width="24" height="24"
                        focusable="false">
                        <!---->

                        <use href="#repost-medium" width="24" height="24"></use>
                    </svg>
                    <span class="hidden sm:block">Paylaş</span>
                </button>
            </li>
            <li class="group ">
                <button
                    class="active:text-black flex-col md:flex-row flex items-center sm:px-8 px-4 py-2 rounded-md transition-all duration-300 hover:cursor-pointer active:bg-gray-200 hover:bg-gray-200 text-sm text-muted space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                        fill="currentColor" class="mercado-match w-6 " focusable="false">
                        <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                    </svg>
                    <span class="hidden sm:block">Gönder</span>
                </button>
            </li>
        </ul>
        <!-- /Currently Likes -->
</div>
<!-- /Post --></template>