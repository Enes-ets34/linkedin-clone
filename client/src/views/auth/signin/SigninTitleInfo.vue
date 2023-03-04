<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

import { useRouter } from 'vue-router';
import appAxios from '../../../utils/appAxios';

const companies = ref(null)
appAxios.get("/company")
   .then((res) => {
      companies.value = res?.data?.companies
   }).catch((err) => {
      console.error(err);
   });
const router = useRouter()
const store = useStore()

const title = ref(null)
const company = ref(null)

const userData = { ...store.state.users.registerData }

const setUserTitle = () => {
   userData.title = title.value
   userData.company = company.value
   store.dispatch('users/signin', userData)
}
</script>
<template >
   <div class="flex-1 md:w-2/5 mx-auto text-center mb-4">
      <p class="text-2xl text-bold">
         Profiliniz, yeni kişileri ve fırsatları keşfetmenize yardımcı olur
      </p>
   </div>
   <div class="flex-1 md:w-2/5 mx-auto rounded-md bg-white py-6 px-6 space-y-4">

      <div class="flex flex-col">
         <label for="name" class="text-muted text-sm">En son iş unvanı <span
               class="items-start text-primary">*</span></label>
         <input v-model="title" type="text" id="name"
            class="mt-1 px-2 py-1 border border-1 border-muted focus:outline-black rounded-md" />
      </div>
      <div class="flex flex-col">
         <label for="companies" class="text-muted text-sm">En son şirket <span
               class="items-start text-primary">*</span></label>
         <select v-model="company" name="companies" id="companies"
            class="mt-1 px-2 py-1 border border-1 border-muted focus:outline-black rounded-md">
            <option v-for="company in companies" :key="company._id" :value="company._id">{{ company.name }}</option>
         </select>
      </div>
      <button @click="setUserTitle"
         class="bg-primary w-full rounded-full py-3  text-white active:bg-[#09223b] hover:bg-[#004182] font-bold">
         Devam et
      </button>
   </div>
</template>