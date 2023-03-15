<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import appAxios from '../../../utils/appAxios';
import useFormValidation from '../../../composables/validation';
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
const userData = {
   ...store.state.users.registerData,
   title: null,
   company: null
}

const { validateCompany, validateTitle, error } = useFormValidation(userData);

const setUserTitle = () => {
   userData.title = title.value
   userData.company = company.value
   validateCompany()
   validateTitle()
   if (!error.value.title && !error.value.company) {
      store.dispatch('users/signin', userData)
   }
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
         <input v-model="title" type="text" id="name" :class="{ 'ring-red-600 ring-2': error.title }"
            class="mt-1 px-2 py-1 ring-1 ring-muted focus:outline-black rounded-sm" />
         <small v-if="error.title" class="text-red-600 ">{{ error.title }}</small>
      </div>


      <div class="flex flex-col">
         <label for="companies" class="text-muted text-sm">En son şirket <span
               class="items-start text-primary">*</span></label>
         <select v-model="company" name="companies" id="companies" :class="{ 'ring-red-600 ring-2': error.title }"
            class="mt-1 px-2 py-1 ring-1 ring-muted focus:outline-black rounded-sm">
            <option v-for="company in companies" :key="company._id" :value="company._id">{{ company.name }}</option>
         </select>
         <small v-if="error.company" class="text-red-600 ">{{ error.company }}</small>
      </div>
      <button @click="setUserTitle"
         class="bg-primary w-full rounded-full py-3  text-white active:bg-[#09223b] hover:bg-[#004182] font-bold">
         Devam et
      </button>
   </div>
</template>