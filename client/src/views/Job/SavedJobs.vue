<script setup>
import { BASE_URL } from '../../constants';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import appAxios from '../../utils/appAxios';
import moment from '../../composables/moment';
import RightSide from '../../components/home/RightSide.vue';
const { created_at } = moment()
const store = useStore()
const applieds = ref([])
const appliedActions = ref(false)
appAxios.get(`${BASE_URL}/job/applied`)
    .then((res) => {
        applieds.value = res.data.jobs
    }).catch((err) => {
        console.error(err);
    });
const currentUser = computed(() => store.getters['users/getCurrentUser'])
const copyUrl = (job) => {
    const url = `http://192.168.1.34:5173/#/job/${job._id}`
    const el = document.createElement("textarea");
    el.value = url;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    store.dispatch("notifications/showMessage", {
        message: "Link panoya kopyalandı.",
        type: "success",
    });
    appliedActions.value = false
}
// const copyUrl = (job) => {
//     const url = `http://192.168.1.34:5173/#/job/${job._id}`;
//     navigator.clipboard
//         .writeText(url)
//         .then(() => {
//             console.log("URL kopyalandı: ", url);
//         })
//         .catch((err) => {
//             console.error("URL kopyalanamadı: ", err);
//         });
// }
</script>
<template>
    <div class="container mt-16  sm:mt-20">
        <div class="flex flex-col md:flex-row  justify-between pb-52 items-center md:items-start md:space-x-5 ">
            <div class="flex flex-col md:sticky top-px w-full px-2 md:px-0 md:basis-1/4 space-y-2  ">
                <div class="text-muted font-semibold border bg-white rounded-lg">
                    <div class="  transition-all duration-150">
                        <div class="flex justify-start p-4   items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="currentColor" class="text-muted" width="24" height="24" focusable="false">
                                <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
                            </svg>
                            <span class=" ">Öğelerim</span>
                        </div>
                    </div>
                    <div class="hidden sm:block">
                        <div
                            class=" group font-semibold transition-all duration-150 border-l-4 border border-r-0 border-l-primary text-primary   hover:cursor-pointer flex justify-between items-center">
                            <span class=" text-sm group-hover:text-black py-4 px-4">İş ilanlarım</span>
                            <span class=" text-sm group-hover:text-black py-4 px-4">{{ applieds.length }}</span>
                        </div>
                        <div
                            class=" group font-semibold transition-all duration-150 border-b hover:cursor-pointer flex justify-between items-center">
                            <span class=" text-sm group-hover:text-black py-4 px-4">Öğrenimim</span>
                            <span class=" text-sm group-hover:text-black py-4 px-4">7</span>
                        </div>
                        <div
                            class=" group font-semibold whitespace-nowrap transition-all duration-150 border-b hover:cursor-pointer flex justify-between items-center">
                            <span class=" text-sm group-hover:text-black py-4 pl-4">Kaydedilen gönderiler</span>
                            <span class=" text-sm group-hover:text-black py-4 px-4">10+</span>
                        </div>
                    </div>

                </div>
            </div>
            <div class="w-full mt-4 md:mt-0 md:basis-2/3  flex flex-col space-y-2">
                <div class="border bg-white pt-4 rounded-lg">
                    <div class="border-b px-4">
                        <p class="text-2xl ">İş İlanlarım</p>
                        <button
                            class="bg-green-700 my-4  rounded-full py-1 px-3  text-white active:bg-green-800 font-bold">Başvurulanlar</button>
                    </div>
                    <ul class="md:mt-3 mt-2 ">
                        <li v-for="applied in applieds" :key="applied._id" class="font-semibold border-b px-4">
                            <div class="flex relative justify-between items-start  ">
                                <div class="flex  sm:justify-between  items-start  sm:space-x-4 space-x-2 ">
                                    <img :src="applied.company.media" alt=""
                                        class="object-contain  w-14 h-14 rounded-full ">
                                    <div class="flex flex-col text-sm">
                                        <router-link :to='`/job/${applied._id}`'
                                            class="font-semibold  cursor-pointer hover:underline text-base">{{
                                                applied.title }}</router-link>
                                        <p>{{ applied.company.name }}</p>
                                        <p class="text-muted font-light">{{ applied.company.location }}</p>
                                        <small class="text-muted font-light text-xs sm:my-3 my-1 ">
                                            {{ created_at('2023-02-17T14:21:25.183+00:00') }} başvuruldu
                                        </small>
                                    </div>
                                </div>
                                <span @click="appliedActions = !appliedActions"
                                    class="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                        fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                        <path
                                            d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z">
                                        </path>
                                    </svg>
                                </span>
                                <div v-if="appliedActions"
                                    class="bg-white z-10 border w-48 sm:w-56 text-sm rounded-lg rounded-tr-none shadow-xl absolute top-10 right-2 font-semibold">
                                    <ul class="rounded-lg text-muted ">
                                        <li
                                            class="flex active:text-black  rounded-tl-md  justify-between items-center p-4 hover:cursor-pointer hover:bg-neutral-200">
                                            <i class="fa-sharp text-lg fa-solid fa-paper-plane"></i>
                                            Mesaj olarak gönder
                                        </li>
                                        <li @click="copyUrl(applied)"
                                            class="flex active:text-black  rounded-tl-md  justify-between items-center p-4 hover:cursor-pointer hover:bg-neutral-200">
                                            <i class="fa-sharp fa-solid fa-link text-lg"></i>
                                            Linki kopyala
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="sticky -top-[200px] basis-1/3 hidden lg:flex flex-col">
                <RightSide />
            </div>
        </div>
    </div>
</template>
