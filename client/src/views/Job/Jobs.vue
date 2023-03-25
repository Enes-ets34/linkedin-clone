<script setup>
import { BASE_URL } from '../../constants';
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import AddJobModal from '../../components/Job/AddJobModal.vue'
//jobs file updated
import appAxios from '../../utils/appAxios';
import Job from '../../components/Job/Job.vue';

const store = useStore()
const jobs = ref([])
const work_types = ref([
    {
        type: "remote",
        isSelect: false
    },
    {
        type: "office",
        isSelect: false
    },
    {
        type: "hybrid",
        isSelect: false
    }
])
appAxios.get(`${BASE_URL}/job`)
    .then((res) => {
        jobs.value = res.data.jobs

    }).catch((err) => {
        console.error(err);
    });
const addJob = (e) => {
    appAxios.post(`${BASE_URL}/job`, e)
        .then((res) => {
            jobs.value.unshift(res.data.job)
            store.dispatch("notifications/showMessage", {
                message: "İş ilanı başarıyla yayınlandı",
                type: "success",
            });
        }).catch((err) => {
            store.dispatch("notifications/showMessage", {
                message: err.response.data.message,
                type: "error",
            });
        });
}

watch(
    () => work_types.value,
    (newValue, oldValue) => {
        if (newValue) {
            let url = `${BASE_URL}/job/filter?`
            const selected = newValue
                .filter(t => t.isSelect)
                .map(t => `type=${t.type}`)
                .join("&");
            url = `${url}&${selected}`;

            appAxios.get(url)
                .then((res) => {
                    jobs.value = res.data.jobs

                }).catch((err) => {
                    console.error(err);
                });
        }
    },
    { deep: true }
)
</script>
<template>
    <div class="container mt-16  sm:mt-20">
        <AddJobModal @add-job="addJob($event)" v-if="$store.state.modal === 'add-job-modal'"
            @close-job-modal="$store.dispatch('setModal', null)" />
        <div class="flex flex-col md:flex-row  justify-between pb-52 items-center md:items-start md:space-x-5 ">
            <div class="flex flex-col md:sticky top-px w-full px-2 md:px-0 md:basis-1/4 space-y-2  ">
                <div class=" border bg-white rounded-lg">

                    <div class=" group font-semibold transition-all duration-150 hover:bg-gray-300 hover:cursor-pointer">
                        <router-link to="/saved-jobs" class="flex justify-start p-4    items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="currentColor" class="text-muted" width="24" height="24" focusable="false">
                                <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
                            </svg>
                            <span class=" text-sm group-hover:text-black">İş ilanlarım</span>
                        </router-link>
                    </div>
                    <div class="hidden sm:block">
                        <div
                            class=" group font-semibold transition-all duration-150 hover:bg-gray-300 hover:cursor-pointer">
                            <div class="flex justify-start p-4    items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="currentColor" class="text-muted" width="24" height="24" focusable="false">
                                    <path
                                        d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z">
                                    </path>
                                </svg>
                                <span class=" text-sm group-hover:text-black">İş ilan uyarıları</span>
                            </div>
                        </div>
                        <div
                            class=" group font-semibold transition-all duration-150 hover:bg-gray-300 hover:cursor-pointer">
                            <div class="flex justify-start py-4 pl-4    items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="currentColor" class="text-muted" width="24" height="24" focusable="false">
                                    <path
                                        d="M14.73 10H17l-5.5 8L8 14.5l1.34-1.34L11.21 15zM20 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V3h5.69l.52-1A2 2 0 0112 1a2 2 0 011.76 1l.52 1zm-2 2h-2.6l.6 1.1V7H8v-.9L8.6 5H6v14a1 1 0 001 1h10a1 1 0 001-1z">
                                    </path>
                                </svg>
                                <span class=" text-sm group-hover:text-black">Yetenek Değerlendirmesi</span>
                            </div>
                        </div>
                        <div
                            class=" group font-semibold transition-all duration-150 hover:bg-gray-300 hover:cursor-pointer">
                            <div class="flex justify-start py-4 pl-4 truncate items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="currentColor" class="text-muted" width="24" height="24" focusable="false">
                                    <path
                                        d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z">
                                    </path>
                                </svg>
                                <span class=" text-sm group-hover:text-black">Job Seeker Değerlendirmesi</span>
                            </div>
                        </div>
                        <div
                            class=" group font-semibold transition-all duration-150 hover:bg-gray-300 hover:cursor-pointer">
                            <div class="flex justify-start py-4 pl-4 truncate items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="currentColor" class="text-muted" width="24" height="24" focusable="false">
                                    <path
                                        d="M9.18 2l-4.3 2.52L6.22 8l-.52.91-3.7.55v5l3.64.54.54.93-1.34 3.53L9.14 22l2.29-2.9h1.09l2.3 2.9 4.32-2.52L17.79 16l.53-.93 3.68-.53v-5L18.32 9l-.51-.9 1.36-3.51L14.86 2l-2.33 3h-1zM12 9a3 3 0 11-3 3 3 3 0 013-3z">
                                    </path>
                                </svg>
                                <span class=" text-sm group-hover:text-black">Uygulama ayarları</span>
                            </div>
                        </div>
                    </div>

                </div>
                <button @click="$store.dispatch('setModal', 'add-job-modal')"
                    class="rounded-full flex justify-center items-center border border-1 ring-1 hover:ring-2 transition-all duration-300 ring-primary text-primary bg-transparent py-2 w-full hover:bg-blue-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                        fill="currentColor" class="mr-2 mercado-match" width="24" height="24" focusable="false">
                        <path
                            d="M19 12h2v6a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h6v2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1zm4-8a2.91 2.91 0 01-.87 2l-8.94 9L7 17l2-6.14 9-9A3 3 0 0123 4zm-4 2.35L17.64 5l-7.22 7.22 1.35 1.34z">
                        </path>
                    </svg>
                    Ücretsiz iş ilanı ver
                </button>
            </div>
            <div class="w-full mt-4 md:mt-0 md:basis-2/3  flex flex-col space-y-2">
                <div class="border bg-white p-4 rounded-lg">
                    <div class="flex justify-between items-center">
                        <p class="text-xl font-semibold">Önerilen iş aramaları</p>
                        <span class="p-2 hover:bg-gray-200 cursor-pointer rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path
                                    d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <ul class="flex flex-wrap">
                        <li v-for="work_type in work_types" :key="work_type" class="font-semibold m-1">
                            <button @click="work_type.isSelect = !work_type.isSelect"
                                class="rounded-full  text-xs flex justify-center items-center border border-1 ring-1 hover:ring-2 transition-all duration-300 ring-primary text-primary bg-white px-2 py-px hover:bg-blue-100"
                                :class="{ 'bg-blue-600 active:bg-blue-700 hover:bg-blue-500 ring-1 outline-none text-white': work_type.isSelect }">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16"
                                    fill="currentColor" class="mercado-match mr-1" width="16" height="16" focusable="false">
                                    <path
                                        d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z">
                                    </path>
                                </svg>
                                {{ work_type.type }}
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="border bg-white pt-4  rounded-lg">

                    <p class="text-xl font-semibold px-4">Sizin için önerilen</p>
                    <p class="text-muted px-4">Profiliniz ve arama geçmişinize göre</p>

                    <ul class="">
                        <Job v-for="job in jobs" :key="job._id" :job="job" />
                    </ul>
                </div>
            </div>

            <div class="sticky -top-[200px] basis-1/3 hidden lg:flex flex-col">
                <div class="border space-y-2 bg-white rounded-lg">
                    <p class="font-semibold px-4 py-6 ">İş arayışınız ile ilgili güvenlik ipuçları</p>
                    <div
                        class="flex bg-gray-100 hover:bg-slate-100 cursor-pointer text-sm font-semibold bg-opacity-50 justify-between items-center space-x-2">
                        <span class="px-4 py-2">
                            Kendinizi iş arayışı sürecindeki dolandırıcılıklardan koruyun
                        </span>
                    </div>
                    <p class="px-4 py-2 text-sm">
                        Siz bir sonraki büyük fırsatınızı bulurken LinkedIn gizliliğinizi garanti eder.
                    </p>
                </div>

                <!-- Right Side links -->
                <div class="border bg-white py-[0.50px] mt-2 mb-4 rounded-full"></div>
                <div class="px-8">
                    <ul class="text-xs text-muted space-y-2">
                        <div class="flex justify-between items-center">
                            <li class="hover:text-primary hover:underline"><a href="#"> Hakkında</a></li>
                            <li class="hover:text-primary hover:underline"><a href="#"> Erişilebilirlik</a></li>
                            <li class="hover:text-primary hover:underline"><a href="#"> Yardım Merkezi</a></li>
                        </div>

                        <div class="flex justify-between items-center space-x-2">
                            <li class="hover:text-primary hover:underline flex justify-between items-center">
                                <a href="#"> Gizlilik ve Koşullar</a> <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match"
                                    width="16" height="16" focusable="false">
                                    <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
                                </svg>
                            </li>
                            <li class="hover:text-primary hover:underline"><a href="#"> Reklam Tercihleri</a></li>
                        </div>

                        <div class="flex justify-center items-center space-x-2">
                            <li class="hover:text-primary hover:underline"><a href="#"> Reklam</a></li>
                            <li class="hover:text-primary hover:underline flex justify-between items-center">
                                <a href="#"> Gizlilik ve Koşullar</a> <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match"
                                    width="16" height="16" focusable="false">
                                    <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
                                </svg>
                            </li>
                        </div>
                        <div class="flex justify-between items-center">
                            <li class="hover:text-primary hover:underline"><a href="#"> LinkedIn uygulamasını yükle</a></li>
                            <li class="hover:text-primary hover:underline"><a href="#"> Daha Fazla</a></li>
                        </div>

                        <li class="flex justify-between items-center"><span class="text-primary font-bold">LinkedIn <i
                                    class="fa-brands fa-linkedin"></i></span>
                            <a href="https://enes-ets34.github.io/info-ets/"
                                class="text-black hover:text-indigo-700 transition-all duration-1000" target="_blank"><i
                                    class="fa-brands fa-github text-indigo-600"></i>/enes-ets34 2023</a>
                        </li>


                    </ul>

                </div>
            </div>
        </div>
    </div>
</template>
