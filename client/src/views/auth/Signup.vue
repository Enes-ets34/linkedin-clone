<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const route = useRouter()
const store = useStore()

const currentUser = computed(() => store.getters['users/getCurrentUser'])
const welcomeMessage = computed(() => !currentUser?.value?.full_name ? 'Oturum Aç' : currentUser?.value?.full_name + ', Tekrar Hoş Geldiniz')
const userData = reactive({})

const signup = () => {
    store.dispatch('users/signup', userData)
}
</script>
<template>
    <div class="bg-white rounded-md w-screen h-screen">
        <div class="container px-3 pt-12 md:py-5">
            <div class=" mb-5 hidden md:flex  items-center text-primary text-4xl space-x-1">
                <h3 class="font-bold ">Linked</h3><i class="fa-brands fa-linkedin"></i>
            </div>

            <div class="flex-1 md:w-1/3 mx-auto rounded-md drop-shadow-xl bg-white py-6 px-6 ">
                <div>
                    <h3 class="text-3xl font-semibold">{{ welcomeMessage }}</h3>
                    <small>Profesyonel dünyanızla ilgili güncel haberlere sahip olun</small>
                </div>
                <div class="relative my-4">
                    <input type="text" id="email" v-model="userData.email"
                        class="block rounded-md px-2.5 pb-2.5 pt-5 w-full   border border-1 border-black appearance-none  focus:outline-primary  peer"
                        placeholder=" " />
                    <label for="email"
                        class="absolute  hover:cursor-text  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5  peer-focus:dark:text-black text-muted peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">E-posta
                        veya Telefon
                    </label>
                </div>
                <div class=" relative my-4 items-center">
                    <input type="password" id="password" v-model="userData.password"
                        class="block rounded-md px-2.5 pb-2.5 pt-5 w-full   border border-1 border-black appearance-none  focus:outline-primary  peer"
                        placeholder=" " />
                    <label for="password"
                        class="absolute  hover:cursor-text duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5  peer-focus:dark:text-black text-muted peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                        Şifre</label>
                    <a
                        class="absolute top-4 right-2 text-primary hover:bg-[#d0e8ff] cursor-pointer rounded-full px-2 font-semibold border border-1 border-transparent active:border-primary">göster</a>
                </div>
                <a
                    class=" hover:underline mt-6  py-2 text-primary hover:bg-[#d0e8ff] cursor-pointer rounded-full px-2 font-semibold border border-1 border-transparent active:border-primary">Şifrenizi
                    mi unuttunuz?</a>

                <button @click="signup()"
                    class="bg-primary my-4 w-full rounded-full py-4  text-white active:bg-[#09223b] hover:bg-[#004182] font-bold">
                    Oturum açın

                </button>
                <div class="flex justify-between items-center text-muted">
                    <div class="w-40 h-px bg-gray-400 mr-2">
                    </div>
                    veya
                    <div class="w-40 h-px bg-gray-400 mr-2">
                    </div>

                </div>
                <button
                    class="bg-white w-full rounded-full py-2 my-4 text-muted border border-muted font-bold space2 flex justify-center space-x-3 hover:bg-gray-200 hover:border-2 duration-150 hover:border-black items-center">
                    <svg width="24" height="24" viewBox="0 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" fill="transparent"></rect>
                        <path
                            d="M17.569 12.6254C17.597 15.652 20.2179 16.6592 20.247 16.672C20.2248 16.743 19.8282 18.1073 18.8662 19.5166C18.0345 20.735 17.1714 21.9488 15.8117 21.974C14.4756 21.9986 14.046 21.1799 12.5185 21.1799C10.9915 21.1799 10.5142 21.9489 9.2495 21.9987C7.93704 22.0485 6.93758 20.6812 6.09906 19.4673C4.38557 16.9842 3.0761 12.4508 4.83438 9.39061C5.70786 7.87092 7.26882 6.90859 8.96311 6.88391C10.2519 6.85927 11.4683 7.753 12.2562 7.753C13.0436 7.753 14.5219 6.67821 16.0759 6.83605C16.7265 6.8632 18.5527 7.09947 19.7253 8.81993C19.6309 8.87864 17.5463 10.095 17.569 12.6254ZM15.058 5.1933C15.7548 4.34789 16.2238 3.171 16.0959 2C15.0915 2.04046 13.877 2.67085 13.1566 3.5158C12.5109 4.26404 11.9455 5.46164 12.0981 6.60946C13.2176 6.69628 14.3612 6.03925 15.058 5.1933Z"
                            fill="black"></path>
                    </svg>
                    <p> Apple ile oturum açın</p>
                </button>
                <p class="text-center">Linkedln'da yeni misiniz? <router-link to="/signin"
                        class="text-primary hover:underline font-bold hover:cursor-pointer">Hemen Katılın</router-link></p>
            </div>

        </div>
    </div>
</template>
