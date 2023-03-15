<script setup>
import { computed, Suspense } from 'vue';
import { useStore } from 'vuex';

import Post from '../components/home/Post/Post.vue'
import LeftProfileCard from '../components/home/LeftProfileCard.vue';
import LeftSide from '../components/home/LeftSide.vue';
import RightSide from '../components/home/RightSide.vue';
import PostInput from '../components/home/Post/PostInput.vue';

const store = useStore()


store.dispatch('posts/fetchPosts')

const currentUser = computed(() => store.getters['users/getCurrentUser'])

</script>
<template>
    <div class="container mt-16 sm:mt-20">

        <div class="flex flex-col md:flex-row justify-between items-center md:items-start md:space-x-5 ">
            <div class=" flex-col sticky -top-[295px] flex-1 md:basis-1/4 space-y-2  ">
                <!-- Profile Card -->
                <LeftProfileCard :currentUser="currentUser" />
                <!-- /Profile Card -->
                <!-- Left Side -->
                <LeftSide />
                <!-- /Left Side -->
            </div>
            <div class="w-full md:basis-2/3  flex flex-col space-y-2">
                <!-- Post Input -->
                <div class="border p-3 space-y-2 bg-white rounded-lg">
                    <PostInput :currentUser="currentUser" />
                    <ul class="flex items-center justify-between  font-semibold">
                        <li class="">
                            <button
                                class="flex items-center py-2 px-1 md:p-2 rounded-md transition-all duration-300 hover:cursor-pointer hover:bg-gray-200 text-sm text-muted space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="#378fe9" class="mercado-match w-4 sm:w-6" focusable="false">
                                    <path
                                        d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z">
                                    </path>
                                </svg>
                                <span>Fotoğraf</span>
                            </button>
                        </li>
                        <li>
                            <button
                                class="flex items-center py-2 px-1 md:p-2 rounded-md transition-all duration-300 hover:cursor-pointer hover:bg-gray-200 text-sm text-muted space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="#5f9c41" class="mercado-match w-4 sm:w-6" focusable="false">
                                    <path
                                        d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z">
                                    </path>
                                </svg>
                                <span>Video</span>
                            </button>

                        </li>
                        <li>
                            <button
                                class="flex items-center py-2 px-1 md:p-2 rounded-md transition-all duration-300 hover:cursor-pointer hover:bg-gray-200 text-sm text-muted space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="#c37d17" class="mercado-match w-4 sm:w-6" focusable="false">
                                    <path
                                        d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z">
                                    </path>
                                </svg>
                                <span>Etkinlik</span>
                            </button>
                        </li>
                        <li>
                            <button
                                class="flex items-center py-2 px-1 md:p-2 rounded-md transition-all duration-300 hover:cursor-pointer hover:bg-gray-200 text-sm text-muted space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="#e16745" class="mercado-match w-4 sm:w-6" focusable="false">
                                    <path
                                        d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z">
                                    </path>
                                </svg>
                                <span>Yazı yaz</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <!-- /Post Input -->
                <div class="flex items-center text-xs">
                    <div class="w-96 h-px bg-gray-400 sm:mr-2">
                    </div>
                    <p class="text-muted">Sıralama ölçütü: </p>
                    <div class="sm:ml-1 flex justify-between items-center font-bold">
                        En Önemli
                        <i class="fas fa-caret-down ml-1"></i>
                        
                    </div>
                </div>
                <appLoader />
                <!-- Post -->
                <Post v-for="post in store.state.posts.posts" :key="post._id" :post="post" />

                <!-- /Post -->
            </div>
            <!-- RightSide -->
            <RightSide />
            <!-- /RightSide -->
        </div>
    </div>
</template>