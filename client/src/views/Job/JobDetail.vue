<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { BASE_URL } from '../../constants';
import appAxios from '../../utils/appAxios';
import { useRouter } from 'vue-router';
import moment from '../../composables/moment';


const router = useRouter()
const store = useStore()
const job = ref({})
const jobId = computed(() => router.currentRoute.value.params.id)
appAxios.get(`job/${jobId.value}`)
    .then((res) => {
        job.value = res.data.job
        console.log('job.value :>> ', job.value);
    }).catch((err) => {

    });
const { created_at } = moment(job.value.created_at);
const applyJob = () => {
    appAxios.get(`job/apply/${jobId.value}`)
        .then((res) => {
            if (res.status === 200) {
                job.value.applicants.push(res.data.job.user._id)
                store.dispatch("notifications/showMessage", {
                    message: "İş ilanına başvuru başarılı",
                    type: "success",
                });
            }
        }).catch((err) => {
            store.dispatch("notifications/showMessage", {
                message: err.response.data.message,
                type: "error",
            });
        });
}
const deleteJob = () => {
    if (confirm('ARE YOU SURE?')) {
        appAxios.delete(`job/${jobId.value}`)
            .then((res) => {
                if (res.status === 200) {
                    router.push("/jobs")
                    store.dispatch("notifications/showMessage", {
                        message: res?.data?.message,
                        type: "success",
                    });
                }
            }).catch((err) => {
                store.dispatch("notifications/showMessage", {
                    message: err.response.data.message,
                    type: "error",
                });
            });
    }
}
const hasAlreadyApplied = computed(() => {
    return Boolean(job?.value?.applicants?.find(u => u === currentUser?.value?._id))
})
const currentUser = computed(() => store.getters['users/getCurrentUser'])
const jobSettings = ref(false)
const openJobMenu = () => {
    jobSettings.value = !jobSettings.value
}
</script>
<template>
    <div class="container mt-16  sm:mt-20">
        <div class="flex flex-col md:flex-row  justify-between pb-52 items-center md:items-start md:space-x-5 ">
            <div class="w-full mt-4 md:mt-0 md:basis-3/4 px-4 flex flex-col space-y-2">
                <div class="border bg-white p-6 rounded-lg">
                    <div class="flex justify-between items-start">
                        <router-link :to="`/company/${job?.company?.slug}`"> <img :src="job?.company?.media"
                                class="object-contain w-14" alt=""></router-link>

                        <div class="flex space-x-2 items-center relative">
                            <span class="p-2  hover:bg-gray-200 cursor-pointer rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="currentColor" class="fill-muted mercado-match" width="24" height="24"
                                    focusable="false">
                                    <path
                                        d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z">
                                    </path>
                                </svg>
                            </span>
                            <span v-if="currentUser._id === job?.user?._id" @click="openJobMenu()"
                                class="p-2  hover:bg-gray-200 cursor-pointer rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="currentColor" class="mercado-match fill-muted" width="24" height="24"
                                    focusable="false">
                                    <path
                                        d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z">
                                    </path>
                                </svg>
                            </span>
                            <div v-if="jobSettings"
                                class="bg-white z-10 border w-36 text-xs rounded-md rounded-tr-none shadow-xl absolute top-8 right-2 font-semibold">
                                <ul class="rounded-md ">
                                    <li @click="deleteJob()"
                                        class="flex  rounded-tl-md justify-between items-center p-4 hover:cursor-pointer hover:bg-neutral-200">
                                        <i class="fa-sharp fa-solid fa-trash"></i>
                                        İlanı Sil
                                    </li>
                                    <li
                                        class="flex justify-between  rounded-md rounded-t-none items-center p-4 hover:cursor-pointer hover:bg-neutral-200">
                                        <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                                        İlanı Düzenle
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col mt-2">
                        <h2 class="text-2xl font-semibold">{{ job.title }}</h2>
                        <div class="flex flex-wrap text-sm justify-start items-center space-x-2 md:mt-2">
                            <router-link class=" text-primary hover:underline cursor-pointer" tag="a"
                                :to="`/company/${job?.company?.slug}`"> {{ job?.company?.name }} •</router-link>
                            <p>{{ job.location }}</p>
                            <p class="text-muted">{{ created_at(job.created_at) }} •</p>

                            <p class="text-muted">{{ job.applicants?.length }} başvuran</p>
                        </div>
                        <ul class="text-sm my-6 space-y-3">
                            <li class="flex justify-start items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="currentColor" class="fill-muted" width="24" height="24" focusable="false">
                                    <path
                                        d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z">
                                    </path>
                                </svg>
                                <p>Tam zamanlı • Başlangıç seviye</p>
                            </li>
                            <li class="flex justify-start items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="currentColor" class="fill-muted" width="24" height="24" focusable="false">
                                    <path
                                        d="M4 2v20h16V2zm14 18h-4v-2h-4v2H6V4h12zm-7-8H8v-2h3zm0 4H8v-2h3zm5-4h-3v-2h3zm-5-4H8V6h3zm5 0h-3V6h3zm0 8h-3v-2h3z">
                                    </path>
                                </svg>
                                <p>{{ job?.company?.employees?.length }} çalışan · {{ job?.company?.category }}</p>
                            </li>
                            <li class="flex justify-start items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="currentColor" class="fill-muted" width="24" height="24" focusable="false">
                                    <path
                                        d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z">
                                    </path>
                                </svg>
                                <p>5 bağlantı · 18 eski şirket çalışanı · 26 okul mezunu</p>
                            </li>
                            <li class="flex justify-start items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="currentColor" class="fill-muted" width="24" height="24" focusable="false">

                                    <path
                                        d="M10 20h4v.1a1.9 1.9 0 01-1.9 1.9h-.2a1.9 1.9 0 01-1.9-1.9zm4.68-14.47A1 1 0 0016 5l.76-1.85a1 1 0 00-.54-1.3 1 1 0 00-1.31.54l-.76 1.85a1 1 0 00.53 1.29zm5.09 4.33l1.85-.76a1 1 0 00.54-1.31 1 1 0 00-1.3-.54L19 8a1 1 0 00-.54 1.31 1 1 0 001.3.55zM4.23 14.14l-1.85.76a1 1 0 00-.54 1.31 1 1 0 001.3.54L5 16a1 1 0 00.54-1.31 1 1 0 00-1.3-.55zm17.39.76l-1.85-.76A1 1 0 0019 16l1.85.76a1 1 0 00.78-1.86zM5 8l-1.86-.75a1 1 0 00-1.3.54 1 1 0 00.54 1.31l1.85.76A1 1 0 005 8zm3-3a1 1 0 001.31.54 1 1 0 00.54-1.3L9.1 2.38a1 1 0 00-1.31-.54 1 1 0 00-.54 1.3zm9 6.91V12a5.48 5.48 0 01-1.61 3.88l-.07.08a3.94 3.94 0 00-1.08 1.94L14 19h-4l-.24-1.08A4 4 0 008.68 16l-.07-.07A5.51 5.51 0 017 12v-.1A4.9 4.9 0 0111.9 7h.2a4.9 4.9 0 014.9 4.9zm-2 0A2.9 2.9 0 0012.11 9h-.21A2.9 2.9 0 009 11.9v.1a3.47 3.47 0 001 2.47l.08.08a5.92 5.92 0 011.5 2.45h.84a6 6 0 011.48-2.44l.08-.07A3.48 3.48 0 0015 12z">
                                    </path>
                                </svg>
                                <p>{{ job.applicants?.length }} başvuran ile nasıl karşılaştırıldığınızı görün.
                                <p class="cursor-pointer underline">Premium’u ücretsiz deneyin</p>
                                </p>
                            </li>
                            <li class="flex justify-start items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="currentColor" class="fill-muted" width="24" height="24" focusable="false">

                                    <path
                                        d="M22 3v2H11V3zM11 13h11v-2H11zm0 8h11v-2H11zM4.85 4L3.34 2.51 2 3.85 5.15 7l4.6-7H7.48zm0 8l-1.51-1.49L2 11.85 5.15 15l4.6-7H7.48zm0 8l-1.51-1.49L2 19.85 5.15 23l4.6-7H7.48z">
                                    </path>
                                </svg>
                                <p>Yetenekler: İngilizce, Yazılım Geliştirme, +8 daha</p>
                            </li>
                        </ul>
                        <div v-if="!hasAlreadyApplied" class="flex justfiy-start items-center space-x-2">
                            <button @click="applyJob"
                                class="bg-primary my-4 rounded-full py-2 px-4  text-white active:bg-[#09223b] hover:bg-[#004182] font-bold">
                                <i class="fa-brands fa-linkedin"></i> Kolay başvuru
                            </button>
                            <button
                                class="font-semibold rounded-full border border-1 ring-1 hover:ring-2 transition-all duration-300 ring-primary text-primary bg-transparent py-2 px-4 hover:bg-blue-100">
                                Kaydet
                            </button>

                        </div>
                        <div v-else>
                            <h2 class="text-xl mb-2 font-semibold">İş ilanı faaliyeti</h2>
                            <div class="flex justify-between items-center  text-sm">
                                <span class="flex justify-start items-center space-x-2">
                                    <div class="rounded-full p-1  bg-gray-300 align-middle"></div>
                                    <p>Başvuru gönderildi</p>
                                </span>
                                <span class="text-muted">şimdi</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border bg-white p-4 rounded-lg">
                    <p class="text-xl font-semibold mb-4">İşe alım takımı ile tanışın</p>
                    <div class="flex justify-start pl-4 py-2  items-start ">
                        <router-link class="font-semibold  text-base cursor-pointer" tag="img"
                            :to="`/user/${job?.user?.slug}`"> <img
                                src="https://media.licdn.com/dms/image/D4D03AQEBpJLboCb2KQ/profile-displayphoto-shrink_800_800/0/1677235747564?e=2147483647&v=beta&t=xDXFxbs-NYmGmUPvkqw_bghdwxV8maJz7julZwxP9oI"
                                alt="" class="object-contain  w-14 h-14 rounded-full "></router-link>
                        <div
                            class="flex flex-col sm:flex-row sm:justify-between px-4 pb-2 border-b items-start  w-full sm:space-x-2 ">
                            <div class="flex flex-col">
                                <router-link class="font-semibold  text-base cursor-pointer" tag="a"
                                    :to="`/user/${job?.user?.slug}`"> {{ job?.user?.full_name }}</router-link>
                                <p>{{ job?.user?.title }}</p>
                                <small class="text-muted mb-2">
                                    İş ilanını yayınlayan · 2017 tarihinden beri LinkedIn üyesi
                                </small>
                                <small class="text-muted mb-2">
                                    15 ortak bağlantı</small>
                            </div>

                            <button
                                class=" mt-2 rounded-full flex items-center space-x-2 ring-1 font-semibold ring-muted text-muted px-4 py-1 hover:bg-gray-200 hover:ring-muted hover:ring active:text-black transition-bg duration-300 ">
                                mesaj
                            </button>
                        </div>

                    </div>
                </div>
                <div class="border bg-white p-4 rounded-lg">
                    <p class="text-xl font-semibold mb-4">İş ilanı hakkında</p>
                    <p class="text-sm">{{ job.description }}</p>
                </div>
            </div>

            <div class="sticky -top-[200px] basis-1/4 hidden lg:flex flex-col">
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
