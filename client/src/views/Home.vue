<script setup>
import LeftProfileCard from '../components/home/LeftProfileCard.vue';
import LeftSide from '../components/home/LeftSide.vue';
import Post from '../components/home/Post/Post.vue';
import PostInput from '../components/home/Post/PostInput.vue';
</script>
<template>
    <div class="container  mt-20">
        <div class="flex flex-col md:flex-row justify-between items-center md:items-start md:space-x-5 ">
            <div class=" flex-col sticky -top-[295px] flex-1 md:basis-1/4 space-y-2  ">
                <!-- Profile Card -->
                <LeftProfileCard />
                <!-- /Profile Card -->
                <!-- Left Side -->
                <LeftSide />
                <!-- /Left Side -->
            </div>
            <div class="w-full md:basis-2/3  flex flex-col space-y-2">
                <!-- Post Input -->
                <div class="border p-3 space-y-2 bg-white rounded-lg">
                    <PostInput />
                    <ul class="flex items-center justify-between  font-semibold">
                        <li
                            class="flex items-center py-2 px-1 md:p-2 rounded-md transition-all duration-300 hover:cursor-pointer hover:bg-gray-200 text-sm text-muted space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="#378fe9" class="mercado-match w-4 sm:w-6" focusable="false">
                                <path
                                    d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z">
                                </path>
                            </svg>
                            <span>Fotoğraf</span>
                        </li>
                        <li
                            class="flex items-center py-2 px-1 md:p-2 rounded-md transition-all duration-300 hover:cursor-pointer hover:bg-gray-200 text-sm text-muted space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="#5f9c41" class="mercado-match w-4 sm:w-6" focusable="false">
                                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z">
                                </path>
                            </svg>
                            <span>Video</span>
                        </li>
                        <li
                            class="flex items-center py-2 px-1 md:p-2 rounded-md transition-all duration-300 hover:cursor-pointer hover:bg-gray-200 text-sm text-muted space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="#c37d17" class="mercado-match w-4 sm:w-6" focusable="false">
                                <path
                                    d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z">
                                </path>
                            </svg>
                            <span>Etkinlik</span>
                        </li>
                        <li
                            class="flex items-center py-2 px-1 md:p-2 rounded-md transition-all duration-300 hover:cursor-pointer hover:bg-gray-200 text-sm text-muted space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="#e16745" class="mercado-match w-4 sm:w-6" focusable="false">
                                <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z">
                                </path>
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
            <div class="sticky -top-[245px] basis-1/3 hidden lg:flex flex-col">
                <div class="border p-3 space-y-2 bg-white rounded-lg">
                    <div class="flex justify-between items-center">
                        <p class="font-semibold">Akışınıza ekleyin</p>
                        <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="signal-notice-small"
                            class="text-muted">
                            <!---->
                            <use href="#signal-notice-small" width="16" height="16"></use>
                        </svg>
                    </div>
                    <div class="flex justify-start items-start space-x-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
                            alt="" class="rounded-full object-contain w-14 h-14 ">
                        <div class="flex flex-col">
                            <a href="#" class="font-semibold text-sm">Mark Zuckerberg</a>
                            <small class="text-xs text-muted">CEO at META</small>
                            <div class="flex items-center space-x-2 ">
                                <button
                                    class=" mt-2 rounded-full flex items-center space-x-2 border border-muted text-muted px-4 py-1 hover:bg-gray-200 hover:border-black active:text-black transition-bg duration-300 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16"
                                        fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                        <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                                    </svg>
                                    <p> Takip Et</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-start items-start space-x-2">
                        <img src="https://media.licdn.com/dms/image/C560BAQHOzB7jmyl6hg/company-logo_200_200/0/1538662168360?e=2147483647&v=beta&t=NutkO5f4_SIaXPJE4FLVC7s06EvT8f8fckmtIlVJUyg"
                            alt="" class="rounded-full object-contain w-14 h-14 ">
                        <div class="flex flex-col">
                            <a href="#" class="font-semibold text-sm">Getir</a>
                            <small class="text-xs text-muted">Şirket • Bilgisayar Yazılımı</small>
                            <div class="flex items-center space-x-2 ">
                                <button
                                    class=" mt-2 rounded-full flex items-center space-x-2 border border-muted text-muted px-4 py-1 hover:bg-gray-200 hover:border-black active:text-black transition-bg duration-300 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16"
                                        fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                        <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                                    </svg>
                                    <p> Takip Et</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-start items-start space-x-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png"
                            alt="" class="rounded-full object-contain w-14 h-14 ">
                        <div class="flex flex-col">
                            <a href="#" class="font-semibold text-sm">Apple</a>
                            <small class="text-xs text-muted">Şirket • Elektronik Üreticisi</small>
                            <div class="flex items-center space-x-2 ">
                                <button
                                    class=" mt-2 rounded-full flex items-center space-x-2 border border-muted text-muted px-4 py-1 hover:bg-gray-200 hover:border-black active:text-black transition-bg duration-300 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16"
                                        fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                        <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                                    </svg>
                                    <p> Takip Et</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Side links -->
                <div class="border bg-white py-[0.50px] mt-2 mb-4 rounded-full"></div>
                <div class="px-8">
                    <ul class="text-xs text-muted space-y-2">
                        <div class="flex justify-between items-center">
                            <li class="hover:text-primary hover:underline"><a href="#"> Hakkında</a></li>
                            <li class="hover:text-primary hover:underline"><a href="#"> Erişilebilirlik</a></li>
                            <li class="hover:text-primary hover:underline"><a href="#"> Yardım Merkezi</a></li>
                        </div>

                        <div class="flex justify-between items-center space-x-2">
                            <li class="hover:text-primary hover:underline flex justify-between items-center">
                                <a href="#"> Gizlilik ve Koşullar</a> <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match"
                                    width="16" height="16" focusable="false">
                                    <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
                                </svg>
                            </li>
                            <li class="hover:text-primary hover:underline"><a href="#"> Reklam Tercihleri</a></li>
                        </div>

                        <div class="flex justify-center items-center space-x-2">
                            <li class="hover:text-primary hover:underline"><a href="#"> Reklam</a></li>
                            <li class="hover:text-primary hover:underline flex justify-between items-center">
                                <a href="#"> Gizlilik ve Koşullar</a> <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match"
                                    width="16" height="16" focusable="false">
                                    <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
                                </svg>
                            </li>
                        </div>
                        <div class="flex justify-between items-center">
                            <li class="hover:text-primary hover:underline"><a href="#"> LinkedIn uygulamasını yükle</a></li>
                            <li class="hover:text-primary hover:underline"><a href="#"> Daha Fazla</a></li>
                        </div>

                        <li class="flex justify-between items-center"><span class="text-primary font-bold">LinkedIn <i
                                class="fa-brands fa-linkedin"></i></span>
                        <a href="https://enes-ets34.github.io/info-ets/"
                            class="text-black hover:text-indigo-300 transition-all duration-1000" target="_blank"><i
                                class="fa-brands fa-github text-indigo-600"></i>/enes-ets34 2023</a>
                    </li>


                </ul>

            </div>
            <!-- /Right Side links -->
        </div>
    </div>
</div></template>