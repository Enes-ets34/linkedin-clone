<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import appAxios from '../../utils/appAxios';
const store = useStore()
const emit = defineEmits()
const props = defineProps({
    addJobModal: {
        type: Boolean,
    },
})
const companies = ref(null)
const userData = ref({
    title: null,
    company: null,
    location: null,
    description: null,
    work_type: null
})
appAxios.get("/company")
    .then((res) => {
        companies.value = res?.data?.companies
    }).catch((err) => {
        console.error(err);
    });
const selectedCompany = ref(null)
const companyImg = computed(() => {
    return selectedCompany?.value?.media
})
const setCompany = (e) => {
    selectedCompany.value = companies.value.find(c => c._id === e.target.value);
}
const closeAddJobModal = () => {
    emit('close-job-modal', null)
}
const addJob = () => {
    emit('add-job', userData.value)
    closeAddJobModal()
}

</script>
<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div @click="closeAddJobModal" class="fixed  inset-0 bg-black bg-opacity-75 transition-opacity"></div>
        <div class="fixed  inset-0 z-10 overflow-y-auto">
            <div class="flex  items-end justify-center p-2  sm:items-center sm:p-0">
                <div
                    class="relative  transform overflow-hidden rounded-lg  bg-white shadow-xl transition-all sm:my-8 w-full sm:max-w-[500px]">
                    <div class=" md:px-6 p-3 md:py-3  flex justify-between items-center">
                        <h3 class=" md:text-2xl font-semibold" id="modal-title">Mükemmel işe alımları hızlıca yapın</h3>

                        <button @click="closeAddJobModal" class="hover:bg-neutral-200 hover:bg-opacity-50 rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="muted" class="mercado-match" width="24" height="24" focusable="false">
                                <path
                                    d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="overflow-auto md:pt-2 pb-4 px-2 sm:py-3 ">
                        <div class="mt-3 pr-3 sm:mt-0 sm:ml-4 flex flex-col space-y-4  ">
                            <div class=" flex justify-start text-sm  items-center">
                                İşe alım kalitesi yükselişinde 1. sırada.
                            </div>
                            <div class="flex flex-col  space-y-2">

                                <div class="md:space-y-4 space-y-2">
                                    <div class="flex flex-col">
                                        <label for="title" class="text-muted text-xs sm:text-sm">İş unvanı</label>
                                        <input v-model="userData.title" placeholder="işe alım yaptığınız unvanı ekleyin"
                                            type="text" name="" id="title"
                                            class="mt-1 px-2 py-1 border border-1 placeholder:text-sm placeholder:text-muted border-muted hover:ring-black hover:ring-1 transition-all duration-300 focus:outline-primary active:ring-0 rounded-md" />
                                    </div>
                                    <div class="flex flex-col">
                                        <label for="work_type" class="text-muted text-xs sm:text-sm">Çalışma şekli</label>
                                        <div class="flex justify-between items-center">
                                            <select v-model="userData.work_type" name="work_type" id="work_type"
                                                class="mt-1 w-full px-2 py-1 border border-1 placeholder:text-sm  border-muted hover:ring-black hover:ring-1 transition-all duration-300 focus:outline-primary active:ring-0 rounded-md">
                                                <option value="office" selected>Ofiste</option>
                                                <option value="remote">Remote</option>
                                                <option value="hybrid">Hybrid</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="flex flex-col">
                                        <label for="company_name" class="text-muted text-xs sm:text-sm">Şirket</label>
                                        <div class="flex justify-between items-center">

                                            <img v-if="companyImg" :src="companyImg" alt=""
                                                class="mr-2 object-contain w-12 h-12">

                                            <select @change="setCompany($event)" v-model="userData.company"
                                                name="company_name" id="company_name"
                                                class="mt-1 w-full px-2 py-1 border border-1 placeholder:text-sm  border-muted hover:ring-black hover:ring-1 transition-all duration-300 focus:outline-primary active:ring-0 rounded-md">
                                                <option v-for="company in companies" :key="company._id"
                                                    :value="company._id">{{
                                                        company.name }}
                                                </option>
                                            </select>

                                        </div>
                                    </div>
                                    <div class="flex flex-col">
                                        <label for="company_location" class="text-muted text-xs sm:text-sm">Konum</label>
                                        <input v-model="userData.location" placeholder="Örn: İstanbul, Türkiye" type="text"
                                            name="" id="company_location"
                                            class="mt-1 px-2 py-1 border border-1 placeholder:text-sm  border-muted hover:ring-black hover:ring-1 transition-all duration-300 focus:outline-primary active:ring-0 rounded-md" />
                                    </div>
                                    <div class="flex flex-col  ">

                                        <label for="about" class="text-muted text-xs sm:text-sm">
                                            Açıklama*</label>
                                        <textarea v-model="userData.description" rows="4" type="text" id="about"
                                            class="mt-1 px-2 py-1 border border-1 border-muted hover:ring-black hover:ring-1 transition-all duration-300 focus:outline-primary active:ring-0 rounded-md"></textarea>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="bg-white border-t border border-opacity-70 px-4 py-3 space-x-2 flex justify-end items-center sm:px-6">
                        <button @click="addJob"
                            class="bg-primary  rounded-full py-1 px-3 text-white active:bg-[#09223b] hover:bg-[#004182] transition-all duration-300 font-bold">Yayınla</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
