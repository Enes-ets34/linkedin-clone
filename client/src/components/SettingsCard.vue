<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { BASE_URL } from '../constants';

const store = useStore()
const currentUser = computed(() => store.getters['users/getCurrentUser'])
const logout = () => {
    store.commit('users/logout')
}
const profile_image = computed(()=>{
    return currentUser ? `${BASE_URL}/uploads/${currentUser?.value?.profile_image}` : `${BASE_URL}/uploads/default.png`
})
</script>
<template>
    <div
        class=" opacity-0 group-hover:opacity-100 transition-all duration-300 pt-4  top-9 md:top-[50px] absolute z-[1]  md:w-1/3  lg:w-1/5 w-10/12 left-1 md:left-[550px] lg:left-[780px]  ">
        <div class="py-3  hidden group-hover:flex flex-col rounded-md rounded-tr-none  bg-white shadow-xl  border">
            <div class="flex px-2 flex-col border-b space-y-2 pb-2">
                <div class="flex justify-start items-center space-x-2"> 
                    <img
                        class="rounded-full  border-white border-4 w-16"
                        :src="profile_image" alt="">
                    <div class="flex flex-col items-start ">
                        <p class="font-semibold">Enes Taha Sarı</p>
                        <p class="text-sm">Software Developer | Vue.js</p>
                    </div>
                </div>
                <router-link tag="button" to="/profile"
                    class="rounded-full border border-1 border-primary text-primary bg-white py-px hover:bg-blue-100">Profili
                    görüntüle</router-link>
            </div>
            <div class="px-3 mt-2 border-b pb-2">
                <p class="font-semibold text-start">Hesap</p>
                <ul class="text-sm text-muted">
                    <li class="flex justify-start items-center space-x-2 mb-2"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" data-supported-dps="24x24" class="class w-4" width="24" height="24"
                            focusable="false">
                            <path d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                                fill="#f8c77e"></path>
                            <path d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                                fill="#e7a33e"></path>
                        </svg> <span class=" font-semibold hover:text-primary">
                            Premium'u ücretsiz deneyin.
                        </span>

                    </li>
                    <li class="text-start hover:underline">Ayarlar ve gizlilik</li>
                    <li class="text-start hover:underline">Yardım</li>
                    <li class="text-start hover:underline">Dil</li>

                </ul>
            </div>
            <div class="px-3 mt-2 border-b pb-2">
                <p class="font-semibold text-start">Yönet</p>
                <ul class="text-sm text-muted">
                    <li class="text-start hover:underline">Gönderi ve faaliyetler</li>
                    <li class="text-start hover:underline">İş ilanı yayınlama hesabı</li>
                </ul>
            </div>
            <p @click="logout()" class="px-3 pt-2 text-sm text-start hover:underline text-muted">Oturumu kapat</p>
        </div>
    </div>
</template>