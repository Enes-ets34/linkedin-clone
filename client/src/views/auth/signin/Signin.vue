<script setup>
import { computed, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const togglePassword = ref(true)
const route = useRouter()
const router = useRouter()
const store = useStore()
const showCard = computed(() => {
    return route?.currentRoute?.value.name === 'Signin'
})
const showPassword = computed(()=>{
    return !togglePassword.value ? 'text' : 'password'
})
const userData = reactive({})
const setUserEmail = () => {
    store.commit('users/setUserInfo', userData)
    router?.push("/signin/name_info")
}
</script>
<template>
    {{ store.state.users.registerData }}
    <div class="bg-[#f3f2ef] rounded-md w-screen h-screen">
        <div class="container pt-12 px-4 md:py-5">

            <div class=" mb-5 hidden md:flex  items-center text-primary text-4xl space-x-1">
                <h3 class="font-bold ">Linked</h3><i class="fa-brands fa-linkedin"></i>
            </div>
            <h3 class="mb-10 hidden md:block font-medium text-black text-xl md:text-4xl text-center">Profesyonel
                hayatınızdan en iyi şekilde
                yararlanın
            </h3>
            <router-view></router-view>
            <div v-if="showCard" class="flex-1 md:w-1/2 lg:w-2/5 mx-auto rounded-md bg-white py-6 px-6 space-y-4">

                <div class="flex flex-col">
                    <label for="email" class="text-muted text-sm">E-posta</label>
                    <input v-model="userData.email" type="email" id="email"
                        class="mt-1 px-2 py-1 border border-1 border-muted focus:outline-black rounded-md" />
                </div>
                <div class="flex flex-col">
                    <label for="password" class="text-muted text-sm">Şifre (6 veya daha fazla karakter)</label>
                    <div class="relative flex justify-between items-center">
                        <input v-model="userData.password" :type="showPassword" id="password"
                            class="mt-1 px-2 py-1 border border-1 border-muted focus:outline-black w-full rounded-md" />
                        <small v-if="togglePassword" @click="togglePassword = false"
                            class="hover:cursor-pointer  absolute right-2 text-muted  hover:underline">
                            Göster
                        </small>
                        <small v-else @click="togglePassword = true"
                            class="hover:cursor-pointer  absolute right-2 text-muted  hover:underline">
                            Gizle
                        </small>
                    </div>
                </div>
                <div class="text-center">
                    <small class="text-center text-muted font-semibold align-middle leading-2">
                        Kabul Et ve Katıl’ı tıklayarak, LinkedIn’in <a href="#"
                            class="text-primary hover:underline">Kullanıcı
                            <br>
                            Anlaşmasını</a>, <a href="#" class="text-primary hover:underline"> Gizlilik Politikasını</a>
                        ve<a href="#" class="text-primary hover:underline"> Çerez
                            Politikasını</a> kabul etmiş olursunuz.
                    </small>
                </div>
                <button  @click="setUserEmail()"
                    class= " bg-primary w-full rounded-full py-3  text-white active:bg-[#09223b] hover:bg-[#004182] font-bold">
                    Kabul Et ve Katıl

                </button>
                <div class="flex justify-between items-center text-muted">
                    <div class="w-40 h-px bg-gray-400 mr-2">
                    </div>
                    veya
                    <div class="w-40 h-px bg-gray-400 mr-2">
                    </div>

                </div>
                <button
                    class="bg-white w-full rounded-full py-2  text-muted border border-slate-300 font-bold space2 flex justify-center space-x-3 hover:bg-slate-100 active:bg-slate-200 items-center">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-5 h-5">
                        <g>
                            <path fill="#EA4335"
                                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z">
                            </path>
                            <path fill="#4285F4"
                                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z">
                            </path>
                            <path fill="#FBBC05"
                                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z">
                            </path>
                            <path fill="#34A853"
                                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z">
                            </path>
                            <path fill="none" d="M0 0h48v48H0z"></path>
                        </g>
                    </svg>
                    <p> Google ile devam edin</p>
                </button>
                <p class="text-center">Zaten LinkedIn'a üye misiniz? <router-link to="/signup"
                        class="text-primary hover:cursor-pointer hover:underline font-bold">Oturum Açın</router-link></p>
            </div>
        </div>
    </div>
</template>