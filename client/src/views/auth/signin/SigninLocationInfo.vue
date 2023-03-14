<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import useFormValidation from '../../../composables/validation';

const router = useRouter()
const store = useStore()
const country = ref(null)
const city = ref(null)
const userData = {
   ...store.state.users.registerData,
   location: null
}
const location = computed(() => {
   return country.value + ',' + city.value
})

const { validateLocation, error } = useFormValidation(userData);
const setUserLocation = () => {
   userData.location = location.value
   validateLocation()
   if (!error.value.location) { //  alanların doğruluğu kontrol edildi
      store.commit('users/setUserInfo', userData)
      router?.push("/signin/title_info")
   }
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
{{ error }}
   </div>
   <div class="flex-1 md:w-2/5 mx-auto rounded-md bg-white py-6 px-6 space-y-4">

      <div class="flex flex-col">
         <label for="name" class="text-muted text-sm">Ülke/Bölge <span class="items-start text-primary">*</span></label>
         <input v-model="country" type="text" id="name" :class="{ 'ring-red-600 ring-2': (error.location && !country) }"
            class="mt-1 px-2 py-1 ring-1 ring-muted focus:outline-black rounded-sm" />
         <small v-if="error.location && !country" class="text-red-600 ">{{ error.location }}</small>
      </div>
      <div class="flex flex-col">
         <label for="name" class="text-muted text-sm">İl/İlçe <span class="items-start text-primary">*</span></label>
         <input v-model="city" type="text" id="name" :class="{ 'ring-red-600 ring-2': (error.location && !city) }"
            class="mt-1 px-2 py-1 ring-1 ring-muted focus:outline-black rounded-sm" />
         <small v-if="error.location && !city" class="text-red-600 ">{{ error.location }}</small>
      </div>

      <button @click="setUserLocation"
         class="bg-primary w-full rounded-full py-3  text-white active:bg-[#09223b] hover:bg-[#004182] font-bold">
         İleri
      </button>
   </div>
</template>