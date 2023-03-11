<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { BASE_URL } from '../../constants';
import { useStore } from 'vuex';
import appAxios from '../../utils/appAxios';
const router = useRouter()
const store = useStore()
const route = useRouter()
const password1 = ref('')
const password2 = ref('')
const togglePassword = ref(true)
const showPassword = computed(() => {
    return !togglePassword.value ? 'text' : 'password'
})
const validPasswords = computed(() => {
    return ((password1?.value === password2?.value) || password2.value.length == 0) ? true : false
})
console.log('resetPasswordToken :>> ', route.currentRoute.value.query.resetPasswordToken);
// resetPasswordToken değerini URL parametresi olarak ekleyerek ResetPassword sayfasına yönlendir
const resetPassword = () => {
    appAxios.put(`${BASE_URL}/auth/resetpassword?resetPasswordToken=${route.currentRoute.value.query.resetPasswordToken}`, {
        password: password1.value
    }).then((res) => {
        store.dispatch("notifications/showMessage", {
            message: 'Şifreniz başarıyla değiştirilmiştir...',
            type: "info",
        });
        router.push("/")
    }).catch((err) => {
        store.dispatch("notifications/showMessage", {
            message: err.response.data.message,
            type: "error",
        });
    });
}
</script>
<template>
    <div class="bg-white rounded-md w-screen h-screen">
        <div class="container px-3 pt-12 md:py-5">
            <div class=" mb-5 hidden md:flex  items-center text-primary text-4xl space-x-1">
                <h3 class="font-bold ">Linked</h3><i class="fa-brands fa-linkedin"></i>
            </div>
            <div class="flex-1  md:w-1/2 lg:w-1/3 mx-auto rounded-md mt-36 drop-shadow-xl bg-white py-6 px-6 ">
                <div>
                    <h3 class="text-2xl font-semibold">Yeni bir şifre seçin.</h3>
                    <small>En az 6 karakter uzunluğunda yeni bir şifre oluşturun.</small>
                </div>


                <div class=" relative my-4 items-center">
                    <input :class="{ 'ring-red-600 focus:outline-red-600': password1.length > 0 && password1.length < 6 }"
                        :type="showPassword" id="password" v-model="password1"
                        class="block rounded-md px-2.5 pb-2.5 pt-5 w-full   ring-1  ring-black appearance-none  focus:outline-primary  peer"
                        placeholder=" " />
                    <label for="password" :class="{ 'text-red-600': password1.length > 0 && password1.length < 6 }"
                        class="absolute  hover:cursor-text duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5  peer-focus:dark:text-black text-muted peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                        Yeni şifre</label>
                    <button @click="togglePassword = !togglePassword"
                        class="absolute items-center top-4 right-2 text-primary hover:bg-[#d0e8ff] cursor-pointer rounded-full px-2 font-semibold border border-1 border-transparent active:border-primary">
                        <p v-if="togglePassword">göster</p>
                        <p v-else>gizle</p>
                    </button>
                </div>
                <div class="relative my-4">
                    <input type="password" id="password_2" v-model="password2"
                        :class="{ 'ring-red-500 focus:outline-red-600': !validPasswords }"
                        class="block rounded-md px-2.5 pb-2.5 pt-5 w-full   ring-1 ring-black appearance-none  focus:outline-primary  peer"
                        placeholder=" " />
                    <label for="password_2" :class="{ 'text-red-600': !validPasswords }"
                        class="absolute  hover:cursor-text  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5  peer-focus:dark:text-black text-muted peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Yeni
                        şifreyi tekrar girin
                    </label>
                    <small class="text-red-600" v-if="!validPasswords">Şifre eşleşmiyor</small>
                </div>
                <button :disabled="!validPasswords || password1.length===0" @click="resetPassword"
                    class="bg-primary disabled:bg-opacity-50 my-4 w-full rounded-full py-4  text-white active:bg-[#09223b] hover:bg-[#004182] font-bold">
                    Şifreyi sıfırlayın
                </button>
                <div class="flex justify-center items-center">
                    <router-link to="/signup"
                        class="bg-white  rounded-full py-[px] px-2 hover:text-black hover:underline  text-muted  font-bold space2 flex justify-center space-x-3 hover:bg-gray-200 hover:ring-1 ring-black duration-150  items-center">
                        <p> Geri.</p>
                    </router-link>
                </div>

            </div>

        </div>
    </div>
</template>