<template>
    <div class="hidden md:block border space-y-3 bg-white rounded-lg">
        <!-- News -->
        <div>
            <div class=" font-semibold pt-3 pb-2 hover:cursor-pointer transition-all duration-150  group">
                <div class="flex px-3 justify-between items-center space-x-2">
                    <span class="text-xs font-light">En Yeni</span>
                    <i
                        class="hidden group-hover:inline fa-solid fa-chevron-up text-md hover:cursor-pointer hover:bg-gray-300 rounded-full px-3"></i>
                </div>
            </div>
            <div
                class="text-muted  group font-semibold transition-all duration-150 hover:bg-gray-300 hover:cursor-pointer">
                <div class="flex justify-start px-3 py-1 text-sm  items-start space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16"
                        fill="currentColor" class="mercado-match group-hover:fill-black" width="16" height="16"
                        focusable="false">
                        <path
                            d="M2 2v9a3 3 0 003 3h6a3 3 0 003-3V2zm8.5 1.5a1 1 0 11-1 1 1 1 0 011-1zm-5 0a1 1 0 11-1 1 1 1 0 011-1zM12 11a1 1 0 01-1 1H5a1 1 0 01-1-1V7h8z">
                        </path>
                    </svg>
                    <span class="text-xs group-hover:text-black">GENÇ GİRİŞİMCİLER ZİRVESİ</span>
                </div>
            </div>
            <div
                class="text-muted  group font-semibold transition-all duration-150 hover:bg-gray-300 hover:cursor-pointer">
                <div class="flex justify-start px-3 py-1 text-sm  items-start space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16"
                        fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                        <path
                            d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z">
                        </path>
                        <circle cx="8" cy="4" r="2"></circle>
                        <circle cx="12.5" cy="5.5" r="1.5"></circle>
                        <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
                        <circle cx="3.5" cy="5.5" r="1.5"></circle>
                    </svg>
                    <span class="text-xs group-hover:text-black">İş Arama Panosu</span>
                </div>
            </div>
        </div>
        <!-- /News -->

        <!-- Groups -->
        <div>
            <div class=" font-semibold pt-3 pb-2 hover:cursor-pointer transition-all duration-150  group">
                <div class="flex px-3 justify-between items-center space-x-2">
                    <span class="text-primary group-hover:cursor-pointer group-hover:underline text-xs">Gruplar</span>
                    <i
                        class="hidden group-hover:inline fa-solid fa-chevron-up text-md hover:cursor-pointer hover:bg-gray-300 rounded-full px-3"></i>
                </div>
            </div>
            <div
                class="text-muted  group font-semibold transition-all duration-150 hover:bg-gray-300 hover:cursor-pointer">
                <div class="flex justify-start px-3 py-1 text-sm  items-start space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16"
                        fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                        <path
                            d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z">
                        </path>
                        <circle cx="8" cy="4" r="2"></circle>
                        <circle cx="12.5" cy="5.5" r="1.5"></circle>
                        <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
                        <circle cx="3.5" cy="5.5" r="1.5"></circle>
                    </svg>
                    <span class="text-xs group-hover:text-black">İş Arama Panosu</span>
                </div>
            </div>
            <div
                class="text-muted text-xs py-1 pl-8 group font-semibold transition-all duration-150 hover:bg-gray-300 hover:text-black hover:cursor-pointer">
                Tümünü gör
            </div>
        </div>
        <!-- /Groups -->
        <!-- Events -->
        <div>
            <div
                class="flex hover:cursor-pointer group justify-between items-center  py-1 px-3 font-semibold transition-all duration-150">
                <a href="#"
                    class="text-primary group-hover:cursor-pointer group-hover:underline text-xs">Etkinlikler</a>
                <i
                    class="  text-md fa-sharp fa-solid fa-plus hover:cursor-pointer hover:bg-gray-300 rounded-full p-2"></i>
            </div>
            <div class="py-1 hover:cursor-pointer hover:underline px-3 font-semibold border-b">
                <a href="#" class="text-primary hover:cursor-pointer hover:underline text-xs">Takip edilen
                    hashtagler</a>
            </div>
            <div class="text-center font-semibold text-muted text-sm py-3 hover:cursor-pointer hover:bg-gray-300">
                Daha Fazla Keşfet
            </div>
        </div>

        <!-- Events -->

    </div>
</template>