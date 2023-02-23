<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
const router = useRouter()
const store = useStore()

const name = ref(null)
const surname = ref(null)
const full_name = computed(() => {
   return name.value + ' ' + surname.value
})
const userData = { ...store.state.users.registerData }
const setUserName = () => {
   userData.full_name = full_name
   store.commit('users/setUserInfo', userData)
   router?.push("/signin/location_info")
}
</script>
<template>
   <div class="flex-1 md:w-2/5 mx-auto rounded-md bg-white py-6 px-6 space-y-4">
      
      <div class="flex flex-col">
         <label for="name" class="text-muted text-sm">Ad</label>
         <input v-model="name" type="text" id="name"
            class="mt-1 px-2 py-1 border border-1 border-muted focus:outline-black rounded-md" />
      </div>
      <div class="flex flex-col">
         <label for="surname" class="text-muted text-sm">Soyad</label>
         <div class="flex justify-between items-center">
            <input v-model="surname" type="text" id="surname"
               class="mt-1 px-2 py-1 border border-1 border-muted focus:outline-black w-full rounded-md" />

         </div>
      </div>

      <button @click="setUserName"
         class="bg-primary w-full rounded-full py-3  text-white active:bg-[#09223b] hover:bg-[#004182] font-bold">
         Devam Et
      </button>
   </div>
</template>