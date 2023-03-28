<template>
    <header class="bg-white  sm:mb-3 ">
        <div class="container py-3 px-4 sm:px-0 ">
            <h3 class="font-bold text-primary text-3xl">Linked <i class="fa-brands fa-linkedin"></i></h3>
        </div>
    </header>
    <main class="w-full h-full bg-[#f3f2ef]">
        <div class="mx-auto w-1/4 mt-20 flex justify-center items-center px-4 sm:px-0 flex-col space-y-2">
            <img src="../../public/notFoundImg.png" class="w-80" alt="">
            <h4 class="text-2xl">Böyle bir sayfa yok</h4>
            <span class="text-center">
                <p>Lütfen URL adresini kontrol edin veya <br> LinkedIn ana sayfasına dönün.</p>
            </span>
            <router-link to="/"
                class="rounded-full border border-1 ring-1 hover:ring-2 transition-all duration-300 ring-primary text-primary bg-transparent py-1 px-4 font-semibold mt-2  hover:bg-blue-100">
                Akışınıza gidin
            </router-link>
        </div>
    </main>
</template>