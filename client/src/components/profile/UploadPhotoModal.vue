<script setup>
import { useStore } from 'vuex';
import { BASE_URL } from '../../constants';

const store = useStore()
const emit = defineEmits()
const props = defineProps({
    photoModal: {
        type: Boolean,
    },
    currentUser: {
        type: Object,
    }
})
const setProfilePhoto = (e) => {
    store.dispatch('users/uploadProfilePhoto', e.target.files[0])

}
const removeProfilePhoto = (e) => {
    store.dispatch('users/removeProfilePhoto')

}
const closePhotoModal = () => {
    emit('close-photo-modal', false)
}
</script>
<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div @click="closePhotoModal" class="fixed  inset-0 bg-black bg-opacity-75 transition-opacity"></div>
        <div class="fixed  inset-0 z-10 overflow-y-auto">
            <div class="flex  items-end justify-center p-2  sm:items-center sm:p-0">
                <div
                    class="relative  transform overflow-hidden rounded-lg text-white bg-[#1d2226] shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[700px]">
                    <div
                        class="border-b md:px-6 p-3 md:py-3 border-gray-600 border-opacity-70 flex justify-between items-center">
                        <h3 class="  md:text-xl white" id="modal-title">Profile photo</h3>
                        <button @click="closePhotoModal" class="hover:bg-neutral-900 hover:bg-opacity-50 rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path
                                    d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="  md:pt-5 pb-4 sm:p-6 sm:pb-4 ">
                        <div class="mt-3 px-2 sm:mt-0 sm:ml-4 ">
                            <div class="mt-2 flex justify-center items-center">
                                <div class="w-full px-8 md:w-64 text-center">
                                    <img class="rounded-full object-contain " :src="`${BASE_URL}/uploads/${currentUser.profile_image}`"
                                        alt="">
                                </div>
                            </div>

                        </div>
                    </div>
                    <div
                        class="bg-[#1d2226] border-t border-gray-600 border-opacity-70 px-4 py-3 space-x-2 flex justify-between items-center sm:px-6">
                        <div class="flex justify-start items-center space-x-2">
                            <button
                                class="flex flex-col items-center active:bg-slate-500  hover:bg-slate-400 hover:bg-opacity-40 active:bg-opacity-40 rounded-md transition-all duration-300 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path
                                        d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z">
                                    </path>
                                </svg>
                                <p>Düzenle</p>
                            </button>
                            <label for="photoInput"
                                class="flex flex-col items-center active:bg-slate-500  hover:bg-slate-400 hover:bg-opacity-40 active:bg-opacity-40 rounded-md hover:cursor-pointer transition-all duration-300 p-2">
                                <input type="file" name="photoInput" @change="setProfilePhoto($event)" id="photoInput"
                                    class="file:block hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path
                                        d="M16 13a4 4 0 11-4-4 4 4 0 014 4zm6-4v11H2V9a3 3 0 013-3h1.3l1.2-3h9l1.2 3H19a3 3 0 013 3zm-5 4a5 5 0 10-5 5 5 5 0 005-5z">
                                    </path>
                                </svg>
                                <p>Fotoğraf ekle</p>
                            </label>
                            <button
                                class="flex flex-col items-center active:bg-slate-500  hover:bg-slate-400 hover:bg-opacity-40 active:bg-opacity-40 rounded-md transition-all duration-300 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path
                                        d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z">
                                    </path>
                                </svg>
                                <p>Kare</p>
                            </button>
                        </div>
                        <button @click="removeProfilePhoto"
                            class="flex flex-col items-center active:bg-slate-500  hover:bg-slate-400 hover:bg-opacity-40 active:bg-opacity-40 rounded-md transition-all duration-300 p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path
                                    d="M20 4v1H4V4a1 1 0 011-1h4a1 1 0 011-1h4a1 1 0 011 1h4a1 1 0 011 1zM5 6h14v13a3 3 0 01-3 3H8a3 3 0 01-3-3zm9 12h1V8h-1zm-5 0h1V8H9z">
                                </path>
                            </svg>
                            <p>Sil</p>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>