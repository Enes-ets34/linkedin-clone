<script setup>
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { BASE_URL } from '../constants';
import appAxios from '../utils/appAxios';

const route = useRouter()
const query = computed(() => { return route.currentRoute.value.query.search })
const company = ref({})
const users = ref([])

console.log('route.currentRoute.value.query.search :>> ', route.currentRoute.value.query.search);
const fetchResults = (value) => {
    appAxios.get(`${BASE_URL}/search?search=${value}`)
        .then((res) => {
            if (res.status === 200) {
                company.value = res?.data?.company
                users.value = res?.data?.users
                console.log('res :>> ', res);
            }
        }).catch((err) => {
            console.error(err);
        });
}
fetchResults(query.value)
watch(() => query.value, (newValue, oldValue) => {
    fetchResults(newValue)
})


</script>
<template>
    <div class="container mt-16 px-0 sm:mt-20">
        <div class="flex flex-col md:flex-row justify-start items-center md:items-start md:space-x-5 ">
            <div class="flex flex-col w-full md:basis-1/2 ">
                <div class=" flex flex-col space-y-2">
                    <div v-if="company" class="">
                        <div
                            class="border pt-3  py-4 px-4  text-sm bg-white rounded-lg flex justify-start items-start space-x-2">
                            <img :src="company.media" alt="" class="object-contain  w-24 h-24 ">
                            <div class="flex flex-col">
                                <a href="#" class="font-semibold text-2xl">{{ company.name }}</a>
                                <p>Teknoloji</p>
                                <p class="text-muted mb-2">California,ABD</p>
                                <p class="font-semibold flex items-center text-muted mb-2"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16"
                                        fill="currentColor" class="mr-2" width="16" height="16" focusable="false">
                                        <path
                                            d="M14 11.75V15H9v-3.25A1.75 1.75 0 0110.75 10h1.5A1.75 1.75 0 0114 11.75zM11.5 9A2.5 2.5 0 109 6.5 2.5 2.5 0 0011.5 9zM5 1a3 3 0 103 3 3 3 0 00-3-3zm.75 7h-1.5A2.25 2.25 0 002 10.25V15h6v-4.75A2.25 2.25 0 005.75 8z">
                                        </path>
                                    </svg>248B Takip??i
                                </p>

                                <div class="flex items-center space-x-2">
                                    <button
                                        class=" text-base bg-primary  rounded-full py-1 px-3 text-white active:bg-[#09223b] hover:bg-[#004182] transition-all duration-300 font-semibold">
                                        Takip et
                                    </button>
                                    <router-link :to="`/company/${company.slug}`"
                                        class="py-1 px-3 text-base rounded-full border border-1 border-muted text-muted font-semibold bg-white transition-all duration-300 hover:bg-gray-200">
                                        Sayfay?? g??r??nt??le
                                    </router-link>
                                </div>

                            </div>
                        </div>
                        <div v-if="company.employees" class="border mt-2  py-2  text-sm bg-white rounded-lg">
                            <p class="font-semibold text-xl mb-4  px-4">Ki??iler</p>
                            <div v-for="employee in company.employees" :key="employee._id"
                                class="flex justify-start pl-4 py-2  items-start ">
                                <img :src="`${BASE_URL}/uploads/${employee.profile_image}`" alt=""
                                    class="object-contain   w-14 h-14 rounded-full ">
                                <div class="flex justify-between px-4  border-b items-start  w-full space-x-2 ">
                                    <div class="flex flex-col">
                                        <a href="#" class="font-semibold  text-base">{{ employee.full_name }}</a>
                                        <p>{{ employee.title }}</p>
                                        <p class="text-muted ">{{ employee.location }}</p>
                                        <small class="text-muted mb-2">??u anda: <b>{{ company.name }}</b> ??irketinde
                                            {{ employee.title }}</small>
                                    </div>

                                    <button
                                        class="px-4 py-1 text-base mt-2 rounded-full border border-1 border-primary text-primary font-semibold bg-white transition-all duration-300 hover:bg-blue-100">
                                        <p> Ba??lant?? kur</p>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div v-if="users && users.length > 0" class="border   py-2  text-sm bg-white rounded-lg">
                        <p class="font-semibold text-xl mb-4  px-4">Ki??iler</p>
                        <div v-for="user in users" :key="user._id" class="flex justify-start pl-4 py-2  items-start ">
                            <img :src="`${BASE_URL}/uploads/${user.profile_image}`" alt=""
                                class="object-contain   w-14 h-14 rounded-full ">
                            <div class="flex justify-between px-4  border-b items-start  w-full space-x-2 ">
                                <div class="flex flex-col">
                                    <router-link :to='`/user/${user.slug}`' class="font-semibold  text-base">{{ user.full_name }}</router-link>
                                    <p>{{ user.title }}</p>
                                    <p class="text-muted ">{{ user.location }}</p>
                                    <small class="text-muted mb-2">??u anda: <b>{{ user?.company?.name }}</b> ??irketinde
                                        {{ user.title }}</small>
                                </div>

                                <button
                                    class="px-4 py-1 text-base mt-2 rounded-full border border-1 border-primary text-primary font-semibold bg-white transition-all duration-300 hover:bg-blue-100">
                                    <p> Ba??lant?? kur</p>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <!-- RightSide -->
            <div class="sticky -top-[245px] basis-1/4 hidden lg:flex flex-col">
                <div class="border p-3 space-y-2 bg-white rounded-lg">
                    <div class="flex justify-between items-center">
                        <p class="font-semibold">Di??er g??r??nt??lenenler</p>
                        <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="signal-notice-small"
                            class="text-muted">
                            <!---->
                            <use href="#signal-notice-small" width="16" height="16"></use>
                        </svg>
                    </div>
                    <div v-for="i in 5" :key="i" class="flex justify-start items-start space-x-2">
                        <img src="https://yt3.googleusercontent.com/AAnXC4o1n8BKDsO5l6Uc71rf7WOJjm2-aUHzkvyp9vGYB5F4UtXWTecVzvPOBCFK0bNYsZlD7Hk=s900-c-k-c0x00ffffff-no-rj"
                            alt="" class="object-contain  w-14 h-14 ">
                        <div class="flex flex-col">
                            <a href="#" class="font-semibold ">META</a>
                            <small>Teknoloji</small>
                            <small class="text-muted">735 B takip??i</small>

                            <button
                                class=" px-3 py-1 mt-2 rounded-full border border-1 border-primary text-primary font-semibold bg-white transition-all duration-300 hover:bg-blue-100">
                                <p> Takip Et</p>
                            </button>

                        </div>
                    </div>

                </div>


            </div>
            <!-- /RightSide -->
        </div>
    </div>
</template>