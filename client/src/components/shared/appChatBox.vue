<template>
    <div
        class="hidden md:flex rounded-t-lg text-sm  px-3 py-2 bottom-0 right-0 z-10 fixed bg-white drop-shadow-lg font-semibold hover:cursor-pointer border  justify-between items-center space-x-12 hover:bg-gray-100">
        <div class="flex items-center space-x-2">
            <div class="relative w-8 ">
                <img class="w-8 rounded-full"
                    src="https://media.licdn.com/dms/image/D4D03AQHzAd40z9LpCQ/profile-displayphoto-shrink_100_100/0/1676202254256?e=1681948800&v=beta&t=DAw7ak9SeH67CvwSku0UFInvyJCNwSBsBILDPZ7tbRM"
                    alt="">
                <div
                    class="absolute right-0 bottom-0 rounded-full w-1 h-1 bg-green-700 p-1 border-[1.5px] border-white">
                </div>
            </div>
            <p class="text-sm">Mesajlaşma</p>
        </div>
        <div class="flex justify-between items-center text-muted ">
            <span
                class="font-bold  inline-block align-top hover:bg-gray-200 transition-all duration-150 rounded-full pb-2 px-2">...</span>
            <i class="fa-solid fa-pen-to-square    hover:bg-gray-200 transition-all duration-150 rounded-full p-2"></i>
            <i class=" fa-solid fa-chevron-up   hover:bg-gray-200 transition-all duration-150 rounded-full p-2"></i>
        </div>
    </div>
</template>