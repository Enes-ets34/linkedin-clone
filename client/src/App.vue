<script setup>
import LeftProfileCard from './components/home/LeftProfileCard.vue';
import LeftSide from './components/home/LeftSide.vue';
import Post from './components/home/Post/Post.vue';
import PostInput from './components/home/Post/PostInput.vue';


</script>

<template>

  <!-- Header -->
  <appNavbar />
  <!-- /Header -->

  <!-- Section -->
  <div class="container  mt-20">
    <div class="flex flex-col md:flex-row justify-between items-center md:items-start md:space-x-5 ">
      <div class=" flex-col sticky -top-[300px] flex-1 md:basis-1/4 space-y-2  ">
        <!-- Profile Card -->
        <LeftProfileCard />
        <!-- /Profile Card -->
        <!-- Left Side -->
        <LeftSide  />
        <!-- /Left Side -->
      </div>
      <div class="w-full md:basis-2/3  flex flex-col space-y-2">
        <!-- Post Input -->
        <div class="border p-3 space-y-2 bg-white rounded-lg">
          <PostInput />
          <ul class="flex items-center justify-between  font-semibold">
            <li
              class="flex items-center py-2 px-1 md:p-2 rounded-md transition-all duration-300 hover:cursor-pointer hover:bg-gray-200 text-sm text-muted space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#378fe9"
                class="mercado-match w-4 sm:w-6"  focusable="false">
                <path
                  d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z">
                </path>
              </svg>
              <span>Fotoğraf</span>
            </li>
            <li
              class="flex items-center py-2 px-1 md:p-2 rounded-md transition-all duration-300 hover:cursor-pointer hover:bg-gray-200 text-sm text-muted space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#5f9c41"
                class="mercado-match w-4 sm:w-6"  focusable="false">
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
              </svg>
              <span>Video</span>
            </li>
            <li
              class="flex items-center py-2 px-1 md:p-2 rounded-md transition-all duration-300 hover:cursor-pointer hover:bg-gray-200 text-sm text-muted space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#c37d17"
                class="mercado-match w-4 sm:w-6" focusable="false">
                <path
                  d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z">
                </path>
              </svg>
              <span>Etkinlik</span>
            </li>
            <li
              class="flex items-center py-2 px-1 md:p-2 rounded-md transition-all duration-300 hover:cursor-pointer hover:bg-gray-200 text-sm text-muted space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#e16745"
                class="mercado-match w-4 sm:w-6" focusable="false">
                <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
              </svg>
              <span>Yazı yaz</span>
            </li>
          </ul>
        </div>
        <!-- /Post Input -->
        <div class="flex items-center text-xs">
          <div class="w-96 h-px bg-gray-400 mr-2">
          </div>
          <p class="text-muted">Sıralama ölçütü: </p>
          <div class="ml-1 flex justify-between items-center font-bold">
            En Önemli
            <i class="fas fa-caret-down ml-1"></i>
          </div>
        </div>
        <!-- Post -->
        <Post v-for="i in 15" />
        <!-- /Post -->
      </div>
      <div class="bg-blue-500 basis-1/3 hidden lg:flex flex-col">03</div>
    </div>
  </div>
  <!-- /Section -->
  <!-- Chat Box -->
  <appChatBox />
  <!-- Chat Box -->
</template>

<style scoped>

</style>
