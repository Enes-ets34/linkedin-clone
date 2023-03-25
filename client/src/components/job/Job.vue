<script setup>
import { computed, onMounted, ref } from 'vue';
import moment from '../../composables/moment';
const props = defineProps({
    job: {
        type: Object,
    }
})
const work_type = computed(() => {
    if (props.job.work_type === 'office') return 'İş yerinde'
    if (props.job.work_type === 'remote') return 'Uzaktan'
    if (props.job.work_type === 'hybrid') return 'Hybrid'
})
const { created_at } = moment(props.job.created_at)
</script>
<template>
    <li class="font-semibold">

        <div class="flex relative justify-between items-start border-b">
            <div class="flex  sm:justify-between  items-start  sm:space-x-4 space-x-4 p-4 pb-2 ">
                <img :src="job.company.media" alt="" class="object-contain  w-14 h-14 rounded-full ">
                <div class="flex flex-col text-sm">
                    <router-link :to='`/job/${job._id}`'
                        class="font-semibold text-primary cursor-pointer hover:underline text-base">{{
                            props.job.title }}</router-link>
                    <p>{{ props.job.company.name }}</p>
                    <p class="text-muted font-light">{{ props.job.company.location }} ({{ work_type }})</p>
                    <small class="text-muted font-light text-xs mb-2 flex justify-start items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                            fill="currentColor " class="text-green-700 mr-1 mercado-match" width="24" height="24"
                            focusable="false">
                            <path
                                d="M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z">
                            </path>
                        </svg>
                        Aktif olarak işe alım yapıyor
                    </small>
                    <small class="text-muted font-light text-xs mb-2 ">
                        {{ created_at() }} önce

                    </small>
                </div>
            </div>
            <span class="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
                    class="fill-muted mercado-match" width="24" height="24" focusable="false">
                    <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22zm-3-1a1 1 0 011 1v12.51L12 13l-5 4.51V4z">
                    </path>
                </svg>
            </span>

        </div>
    </li>
</template>