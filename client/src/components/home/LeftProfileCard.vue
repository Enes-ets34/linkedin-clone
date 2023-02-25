<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    currentUser: {
        type: Object,
    }
})
console.log('props.currentUser :>> ', props);

</script>
<template>
    <div class="border bg-white rounded-lg">

        <img class="rounded-t-lg"
            src="https://media.licdn.com/dms/image/D4D16AQFHK_sNYVFAOg/profile-displaybackgroundimage-shrink_350_1400/0/1676201844347?e=1681948800&v=beta&t=oOIDZleH7CwOJIS-dYm5WoWMJE-MHBCsD2XKtqoXop4"
            alt="">
        <img class="relative z-0 -mt-8 mb-4 mx-auto rounded-full items-center border-white border-4 w-20"
            :src="`http://localhost:3000/uploads/${currentUser?.profile_image}`" alt="">


        <div class="text-center border-b-gray-300 border-b pb-3">
            <p class="font-semibold hover:underline decoration-1">
                <!-- <a href="#">{{ props?.currentUser?.full_name }}</a> -->
                <router-link to="/profile">{{ currentUser?.full_name }}</router-link>
            </p>
            <!-- <small class="text-xs text-muted font-light">{{ props?.currentUser?.title }}</small> -->
            <small class="text-xs text-muted font-light">{{ currentUser?.title }}</small>
        </div>
        <div class="hidden md:block">
            <div class="py-2 border-b">
                <div
                    class="flex justify-between font-semibold items-center px-3 py-1 hover:bg-gray-300 hover:cursor-pointer transition-all duration-150">
                    <small class=" text-muted ">Kişi profilinizi görüntüledi</small>
                    <small class=" text-primary">41</small>
                </div>
                <div
                    class="flex justify-between font-semibold items-center px-3 py-1 hover:bg-gray-300 hover:cursor-pointer transition-all duration-150">
                    <small class=" text-muted ">Gönderiniz için Gösterim</small>
                    <small class=" text-primary">150</small>
                </div>
            </div>
            <div class=" border-b">
                <div
                    class=" font-semibold pl-2 pr-6 py-1 hover:bg-gray-300 hover:cursor-pointer transition-all duration-150  group">
                    <small class="text-xs text-muted font-light">Özel araç ve içgörülere erişin</small>
                    <div class="flex justify-start items-start space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="13x13"
                            class="mercado-match w-6 " focusable="false">
                            <path d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                                fill="#f8c77e">
                            </path>
                            <path d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                                fill="#e7a33e">
                            </path>
                        </svg>
                        <span class="text-xs group-hover:text-primary underline mb-1">Daha hızlı işe alın. Ücretsiz
                            deneyin
                            Premium .</span>
                    </div>
                </div>
            </div>
            <div class=" font-semibold p-3 hover:bg-gray-300 hover:cursor-pointer transition-all duration-150  group">
                <div class="flex justify-start items-start space-x-2">
                    <i class="fa-solid fa-bookmark text-gray-500"></i>
                    <span class="text-xs">Ögelerim</span>
                </div>
            </div>
        </div>
    </div>
</template>