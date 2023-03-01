<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { BASE_URL } from '../../constants';
import ProfileRightSide from '../../components/profile/ProfileRightSide.vue';
import UploadPhotoModal from '../../components/profile/UploadPhotoModal.vue';
import EditProfileModal from '../../components/profile/EditProfileModal.vue';

const store = useStore()
let currentUser = computed(() => store.getters['users/getCurrentUser'])

const photoModal = ref(false)
const editModal = ref(false)
const openUploadPhotoModal = () => {
    photoModal.value = true
}
const closePhotoModal = (e) => {
    photoModal.value = e
}
const openEditModal = () => {
    editModal.value = true
}
const closeEditModal = (e) => {
    editModal.value = e
}

</script>
<template>
    <div class="container pb-20 mt-16 sm:mt-20">
        <!-- Upload Photo Modal -->
        <UploadPhotoModal v-if="photoModal" :photoModal="photoModal" @close-photo-modal="closePhotoModal"
            :currentUser="currentUser" />
        <!-- /Upload Photo Modal -->
        <!-- Edit Profile Modal -->
        <EditProfileModal v-if="editModal" :editModal="editModal" @close-edit-modal="closeEditModal"
            :currentUser="currentUser" />
        <!-- /Edit Profile Modal -->
        <div class="flex flex-col md:flex-row justify-between items-center md:items-start md:space-x-5  ">
            <div class=" flex-col flex-1 md:basis-8/12 space-y-2  ">
                <div class="border flex flex-col space-y-2 bg-white rounded-lg">
                    <div class="relative ">
                        <img class="rounded-t-lg"
                            src="https://media.licdn.com/dms/image/D4D16AQFHK_sNYVFAOg/profile-displaybackgroundimage-shrink_350_1400/0/1676201844347?e=1681948800&v=beta&t=oOIDZleH7CwOJIS-dYm5WoWMJE-MHBCsD2XKtqoXop4"
                            alt="">
                        <div @click="openUploadPhotoModal"
                            class="rounded-full absolute left-5 top-12 md:left-5 md:top-20 md:w-40 border-4 bg-white border-white">

                            <img class="hover:cursor-pointer rounded-full object-center object-contain w-24 h-24 md:w-40 md:h-40"
                                :src="`${BASE_URL}/uploads/${currentUser?.profile_image}`" alt="">
                            <div
                                class="rounded-full  md:p-[px]  text-white bg-primary absolute top-14  md:top-28 right-2 border-2 border-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="white" class="w-6" focusable="false">
                                    <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="flex relative justify-between pt-14  pb-7 pl-6 pr-5 md:pr-20 items-start">
                        <div @click="openEditModal"
                            class="absolute hover:bg-gray-200 rounded-full p-2 cursor-pointer transition-all duration-300 active:bg-gray-300 group top-4 right-4 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="#666666" class="group-active:fill-black" width="24" height="24" focusable="false">
                                <path
                                    d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z">
                                </path>
                            </svg>
                        </div>
                        <div class="">
                            <p class="font-semibold text-2xl">{{ currentUser?.full_name }}</p>
                            <p class="">{{ currentUser?.title }}</p>
                            <div class="flex  justify-start items-center text-sm">
                                <span class="text-muted ">{{ currentUser?.location }}</span>
                                <div class="mx-1">•</div>
                                <a href="#" class="text-primary hover:underline font-semibold">iletişim bilgileri</a>
                            </div>
                            <a href="#" class="text-primary text-sm hover:underline font-semibold">500+ bağlantı</a>
                            <div class="flex justify-start space-x-2 items-center mt-2 ">
                                <button
                                    class="bg-primary  rounded-full py-px px-3 text-white active:bg-[#09223b] hover:bg-[#004182] transition-all duration-300 font-bold">
                                    Açık
                                </button>
                                <button
                                    class=" py-px px-3 rounded-full border border-1 border-primary text-primary font-semibold bg-white transition-all duration-300 hover:bg-blue-100">
                                    Profil bölümü ekle
                                </button>
                                <button
                                    class="hidden mx:inline py-px px-3 rounded-full border border-1 border-muted text-muted font-semibold bg-white transition-all duration-300 hover:bg-gray-200">
                                    Daha fazla
                                </button>
                            </div>
                        </div>
                        <div class="flex justify-start items-center text-sm font-semibold  space-x-2">
                            
                            <img :src="`${currentUser?.company?.media}`" alt="" class="w-8">
                            <a href="#" class="hover:underline hover:text-primary">{{ currentUser?.company?.name }}</a>
                        </div>
                    </div>
                </div>
                <div class="border flex flex-col space-y-2 bg-white rounded-lg">
                    <div class=" relative py-6 pl-6 pr-14">
                        <div
                            class="absolute hover:bg-gray-200 rounded-full p-2 cursor-pointer transition-all duration-300 active:bg-gray-300 group top-4 right-4 ">
                            <svg @click="openEditModal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="#666666" class="group-active:fill-black" width="24" height="24" focusable="false">
                                <path
                                    d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z">
                                </path>
                            </svg>
                        </div>
                        <p class="font-semibold text-xl mb-3">Hakkında</p>
                        <p class="text-sm">{{ currentUser?.about }}</p>

                    </div>
                </div>
                <div class="border flex flex-col space-y-2 bg-white rounded-lg">
                    <div class="relative py-6 pl-6 pr-14">
                        <div class="flex space-x-2 absolute top-4 right-4 group ">
                            <div
                                class="hover:bg-gray-200 rounded-full p-2 cursor-pointer transition-all duration-300 active:bg-gray-300 ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="#666666" class="active:fill-black" width="24" height="24" focusable="false">
                                    <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                                </svg>
                            </div>
                            <div
                                class="hover:bg-gray-200 rounded-full p-2 cursor-pointer transition-all duration-300 active:bg-gray-300 ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="#666666" width="24" height="24" class="active:fill-black" focusable="false">
                                    <path
                                        d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z">
                                    </path>
                                </svg>
                            </div>


                        </div>
                        <p class="font-semibold text-xl mb-3">Deneyim</p>
                        <div class="flex justify-start items-start space-x-2">
                            <img src="https://media.licdn.com/dms/image/C4D0BAQFmAQR2llZUBw/company-logo_100_100/0/1675688917366?e=1685577600&v=beta&t=Gln6qsMZTZqaB4a0sYvZWlk04moAxbQ2sSquJB9nf_M"
                                alt="" class="w-12 object-contain ">
                            <div class="flex flex-col">
                                <p class="font-semibold">Information Technology Intern</p>
                                <p class="text-sm">Borusan Otomotiv</p>
                                <p class="text-sm text-muted">Eyl 2017 - Haz 2018 · 10 ay</p>
                                <p class="text-sm text-muted">İstanbul, Turkey</p>
                                <p class="text-sm my-2">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim possimus temporibus, at
                                    totam illum perspiciatis.
                                </p>
                                <div class="text-sm ">
                                    <span class="font-semibold">
                                        Yetenekler:
                                    </span>
                                    Teknik Destek · Bilgisayar Donanımı · Bilgisayar Donanımı Sorun Giderme · Bilgisayar
                                    Tamiri · Bilgisayar Ağları · İnsan Bilgisayar Etkileşimi

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <ProfileRightSide />

        </div>




    </div>
</template>