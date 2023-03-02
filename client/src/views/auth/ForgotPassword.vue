<script setup>
import { useRouter } from 'vue-router';


const route = useRouter()
console.log('route.currentRoute.value.fullPath :>> ', route.currentRoute.value.fullPath);
</script>
<template>
    <div class="bg-white rounded-md w-screen h-screen">
        <div class="container px-3 pt-12 md:py-5">
            <div class=" mb-5 hidden md:flex  items-center text-primary text-4xl space-x-1">
                <h3 class="font-bold ">Linked</h3><i class="fa-brands fa-linkedin"></i>
            </div>

            <div class="flex-1  md:w-1/2 lg:w-1/3 mx-auto rounded-md drop-shadow-xl bg-white py-6 px-6 ">
                <div>
                    <h3 class="text-3xl font-semibold">Şifrenizi mi unuttunuz?</h3>
                    <small>İki hızlı adım ile parolayı sıfırlayın</small>
                </div>


                <div class="relative my-4">
                    <input type="text" id="email"
                        class="block rounded-md px-2.5 pb-2.5 pt-5 w-full   border border-1 border-black appearance-none  focus:outline-primary  peer"
                        placeholder=" " />
                    <label for="email"
                        class="absolute  hover:cursor-text  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5  peer-focus:dark:text-black text-muted peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">E-posta
                        veya Telefon
                    </label>
                </div>

                <button
                    class="bg-primary my-4 w-full rounded-full py-4  text-white active:bg-[#09223b] hover:bg-[#004182] font-bold">
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