<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

import { useRouter } from 'vue-router';
const router = useRouter()
const store = useStore()



const location = computed(() => {
   return country.value + ' ' + city.value
})
const country = ref(null)
const city = ref(null)

const userData = { ...store.state.users.registerData }
const setUserLocation = () => {
   userData.location = location
   store.commit('users/setUserInfo', userData)
   router?.push("/signin/title_info")
}

</script>
<template >
   
   <div class="flex-1 md:w-2/5 mx-auto text-center space-y-4 mb-4">
      <p class="text-2xl">
         {{ userData.full_name }}, Hoş geldiniz!
      </p>
      <p class="text-muted">

         Profilinizi oluşturmaya, tanıdığınız kişilerle bağlantı kurmayave ilginizi çeken konularda
         onlarla
         iletişim kurmaya başlayın.
      </p>

   </div>
   <div class="flex-1 md:w-2/5 mx-auto rounded-md bg-white py-6 px-6 space-y-4">

      <div class="flex flex-col">
         <label for="name" class="text-muted text-sm">Ülke/Bölge <span class="items-start text-primary">*</span></label>
         <input v-model="country" type="text" id="name" class="mt-1 px-2 py-1 border border-1 border-muted focus:outline-black rounded-md" />
      </div>
      <div class="flex flex-col">
         <label for="name" class="text-muted text-sm">İl/İlçe <span class="items-start text-primary">*</span></label>
         <input v-model="city" type="text" id="name" class="mt-1 px-2 py-1 border border-1 border-muted focus:outline-black rounded-md" />
      </div>

      <button @click="setUserLocation"
         class="bg-primary w-full rounded-full py-3  text-white active:bg-[#09223b] hover:bg-[#004182] font-bold">
         İleri
      </button>
   </div>
</template>