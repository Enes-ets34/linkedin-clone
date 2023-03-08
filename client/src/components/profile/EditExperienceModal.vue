<script setup>
import { ref, computed } from 'vue';
const emit = defineEmits()
const props = defineProps({
    experience: {
        type: Object,
    },
})
const updateState = ref({...props.experience})
console.log('updateState.value :>> ', updateState.value);
const closeEditExperienceModal = () => {
    emit('close-editExperience-modal', null)
}

</script>
<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div @click="closeEditExperienceModal" class="fixed  inset-0 bg-black bg-opacity-50 transition-opacity"></div>
        <div class="fixed  inset-0 z-10 overflow-y-auto">
            <div class="flex  items-end justify-center p-2  sm:items-center sm:p-0">
                <div
                    class="relative  transform overflow-hidden rounded-lg  bg-white shadow-xl transition-all sm:my-8 w-full sm:max-w-[700px]">
                    <div class="border-b md:px-6 p-3 md:py-3 border border-opacity-70 flex justify-between items-center">
                        <h3 class=" md:text-xl " id="modal-title">Deneyim</h3>

                        <button @click="closeEditExperienceModal"
                            class="hover:bg-neutral-200 hover:bg-opacity-50 rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="muted" class="mercado-match" width="24" height="24" focusable="false">
                                <path
                                    d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="overflow-auto md:pt-2 pb-4 px-3 sm:py-6 ">
                        <div class="mt-3 pr-3 sm:mt-0 sm:ml-4 flex flex-col space-y-4  ">
                            <div class=" flex justify-start text-sm text-muted items-center">
                                * Zorunlu alanları gösterir
                            </div>
                            <div class="flex flex-col  space-y-2">
                                <div class="flex justify-between items-center">
                                    <div class="flex justify-start items-center">
                                        <img :src="updateState.company.media" alt="" class="mr-2 object-contain w-12 h-12">
                                        <p class="sm:text-xl ">{{ updateState.company?.name }}</p>
                                    </div>
                                    <button @click="emit('delete-experience', updateState._id)"
                                        class=" mt-2 rounded-md flex items-center space-x-2 border border-muted text-muted px-2 py-1 hover:bg-gray-200 hover:border-black active:text-black transition-bg duration-300 ">
                                        Sil
                                    </button>
                                </div>
                                <div class="md:space-y-4 space-y-2">
                                    <div class="flex flex-col">
                                        <label for="title" class="text-muted text-xs sm:text-sm">Başlık*</label>
                                        <input v-model="updateState.title" placeholder="Örn: Yazılım Geliştirici"
                                            type="text" name="" id="title"
                                            class="mt-1 px-2 py-1 border border-1 placeholder:text-sm  border-muted hover:ring-black hover:ring-1 transition-all duration-300 focus:outline-primary active:ring-0 rounded-md" />
                                    </div>

                                    <div class="flex flex-col">
                                        <label for="company_location" class="text-muted text-xs sm:text-sm">Konum*</label>
                                        <input v-model="updateState.location" placeholder="Örn: İstanbul, Türkiye"
                                            type="text" name="" id="company_location"
                                            class="mt-1 px-2 py-1 border border-1 placeholder:text-sm  border-muted hover:ring-black hover:ring-1 transition-all duration-300 focus:outline-primary active:ring-0 rounded-md" />
                                    </div>
                                    <div class="flex flex-col">
                                        <label for="company_location" class="text-muted text-xs sm:text-sm">Başlangıç -
                                            Bitiş
                                            Tarihi*</label>
                                        <input v-model="updateState.date" placeholder="Örn: Ocak 2023- Halen" type="text"
                                            name="" id="company_location"
                                            class="mt-1 px-2 py-1 border border-1 placeholder:text-sm  border-muted hover:ring-black hover:ring-1 transition-all duration-300 focus:outline-primary active:ring-0 rounded-md" />
                                    </div>
                                    <div class="flex flex-col  ">

                                        <label for="about" class="text-muted text-xs sm:text-sm">
                                            Açıklama*</label>
                                        <textarea v-model="updateState.description" rows="4" type="text" id="about"
                                            class="mt-1 px-2 py-1 border border-1 border-muted hover:ring-black hover:ring-1 transition-all duration-300 focus:outline-primary active:ring-0 rounded-md"></textarea>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="bg-white border-t border border-opacity-70 px-4 py-3 space-x-2 flex justify-end items-center sm:px-6">
                        <button @click="emit('update-experience', updateState)"
                            class="bg-primary  rounded-full py-1 px-3 text-white active:bg-[#09223b] hover:bg-[#004182] transition-all duration-300 font-bold">Kaydet</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>