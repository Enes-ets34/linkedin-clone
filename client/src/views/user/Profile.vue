<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { BASE_URL } from '../../constants';
import appAxios from "../../utils/appAxios"
import ProfileRightSide from '../../components/profile/ProfileRightSide.vue';
import UploadPhotoModal from '../../components/profile/UploadPhotoModal.vue';
import EditProfileModal from '../../components/profile/EditProfileModal.vue';
import EditExperienceModal from '../../components/profile/EditExperienceModal.vue';
import AddExperienceModal from '../../components/profile/AddExperienceModal.vue';

const store = useStore()
let currentUser = computed(() => store.getters['users/getCurrentUser'])


const deleteExperience = (ID) => {
    appAxios
        .delete("users/experience/" + ID)
        .then((res) => {
            if (res?.status === 200) {
                store.dispatch('setModal', null)
                currentUser.value.experiences = currentUser.value.experiences.filter(e => e._id !== ID)
                let user = JSON.parse(localStorage.user);
                user = { ...currentUser.value }
                localStorage.user = JSON.stringify(user);
                store.dispatch("notifications/showMessage", {
                    message: "Profiliniz başarıyla güncellendi...",
                    type: "success",
                });
                store.dispatch('setModal', null)
            }
        })
        .catch((err) => {
            console.log('err :>> ', err);
            store.dispatch("notifications/showMessage", {
                message: err,
                type: "error",
            });
        });
}
const updateExperience = (pExperience) => {
    appAxios
        .put(`users/experience/${pExperience._id}`, pExperience)
        .then((res) => {
            if (res?.status === 200) {
                store.dispatch('setModal', null)
                const user = JSON.parse(localStorage.user);
                const index = user.experiences.findIndex(
                    (e) => e._id === pExperience._id
                );
                if (index !== -1) {
                    user.experiences[index] = { ...pExperience };
                    localStorage.user = JSON.stringify(user);
                    currentUser.value.experiences = [...user.experiences]
                }
                store.dispatch("notifications/showMessage", {
                    message: "Profiliniz başarıyla güncellendi...",
                    type: "success",
                });
                store.dispatch('setModal', null)
            }
        })
        .catch((err) => {
            console.log('err :>> ', err);
            store.dispatch("notifications/showMessage", {
                message: err,
                type: "error",
            });
        });
}
console.log('currentUser.value.experiences :>> ', currentUser.value.experiences);
</script>
<template>
    <div class="container pb-20 mt-16 sm:mt-20">
        <!-- Upload Photo Modal -->
        <UploadPhotoModal v-if="$store.state.modal === 'upload-photo'"
            @close-photo-modal="$store.dispatch('setModal', null)" :currentUser="currentUser" />
        <!-- /Upload Photo Modal -->
        <!-- Edit Profile Modal -->
        <EditProfileModal v-if="$store.state.modal === 'edit-profile-modal'"
            @close-edit-modal="$store.dispatch('setModal', null)" :currentUser="currentUser" />
        <!-- /Edit Profile Modal -->
        <!-- Add Experience Modal -->
        <AddExperienceModal v-if="$store.state.modal === 'add-experience-modal'"
            @close-add-experience-modal="$store.dispatch('setModal', null)" />
        <!-- /Add Experience Modal -->
        <div class="flex flex-col md:flex-row justify-between items-center md:items-start md:space-x-5  ">
            <div class=" flex-col flex-1 md:basis-8/12 space-y-2  ">
                <div class="border flex flex-col space-y-2 bg-white rounded-lg">
                    <div class="relative ">
                        <img class="rounded-t-lg"
                            src="https://media.licdn.com/dms/image/D4D16AQFHK_sNYVFAOg/profile-displaybackgroundimage-shrink_350_1400/0/1676201844347?e=1681948800&v=beta&t=oOIDZleH7CwOJIS-dYm5WoWMJE-MHBCsD2XKtqoXop4"
                            alt="">
                        <div @click="$store.dispatch('setModal', 'upload-photo')"
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
                        <div @click="$store.dispatch('setModal', 'edit-profile-modal')"
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

                        <router-link :to="`company/${currentUser?.company?.slug}`"
                            class="flex justify-start items-center text-sm font-semibold  space-x-2">
                            <img :src="`${currentUser?.company?.media}`" alt="" class="w-8">
                            <p class="hover:underline hover:text-primary">{{ currentUser?.company?.name }}</p>
                        </router-link>
                    </div>
                </div>
                <div class="border flex flex-col space-y-2 bg-white rounded-lg">
                    <div class=" relative py-6 pl-6 pr-14">
                        <div
                            class="absolute hover:bg-gray-200 rounded-full p-2 cursor-pointer transition-all duration-300 active:bg-gray-300 group top-4 right-4 ">
                            <svg @click="$store.dispatch('setModal', 'edit-profile-modal')"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
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
                    <div class="relative py-6 pl-6 space-y-4 ">
                        <div class="flex space-x-2 absolute top-4 right-4 group ">
                            <button @click="$store.dispatch('setModal', 'add-experience-modal')"
                                class="hover:bg-gray-200 rounded-full p-2 cursor-pointer transition-all duration-300 active:bg-gray-300 ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                    fill="#666666" class="active:fill-black" width="24" height="24" focusable="false">
                                    <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                                </svg>
                            </button>
                        </div>
                        <p class="font-semibold text-xl mb-3">Deneyim</p>
                        <div v-for="experience in currentUser?.experiences" :key="experience?._id"
                            class="flex justify-start items-start space-x-2">
                            <EditExperienceModal v-if="$store.state.modal === 'edit-experience-modal'"
                                @close-edit-experience-modal="$store.dispatch('setModal', null)"
                                @update-experience="updateExperience" @delete-experience="deleteExperience"
                                :experience="experience" />

                            <img :src="experience?.company?.media" alt="" class="w-12 object-contain ">
                            <div class="flex flex-col w-full">
                                <p class="font-semibold flex justify-between items-center relative">
                                    {{ experience?.title }}
                                    <button @click="$store.dispatch('setModal', 'edit-experience-modal')"
                                        class="hover:bg-gray-200 rounded-full p-2 absolute top-0 right-4 cursor-pointer transition-all duration-300 active:bg-gray-300 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                            data-supported-dps="24x24" fill="#666666" width="24" height="24"
                                            class="active:fill-black" focusable="false">
                                            <path
                                                d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z">
                                            </path>
                                        </svg>
                                    </button>
                                </p>
                                <p class="text-sm">{{ experience?.company?.name }}</p>
                                <p class="text-sm text-muted">{{ experience?.date }}</p>
                                <p class="text-sm text-muted">{{ experience?.location }}</p>
                                <p class="text-sm my-2">
                                    {{ experience?.description }}
                                </p>
                                <!-- <div class="text-sm ">
               Yetenekler:
        </span>
        Teknik Destek · Bilgisayar Donanımı · Bilgisayar Donanımı Sorun Giderme · Bilgisayar
    Tamiri · Bilgisayar Ağları · İnsan Bilgisayar Etkileşimi
    </div> -->
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <ProfileRightSide />

        </div>




    </div>
</template>