<template>
  <div class="bg-[#EEEEEE] h-screen">
    <div class="max-w-[1280px] px-5 sm:px-10 mx-auto py-16 relative">
      <div
        class="flex flex-wrap sm:justify-between items-center sm:items-start"
      >
        <img
          src="../assets/images/logo-404.svg"
          alt=""
          class="w-[300px] mx-auto sm:mx-0"
        />
        <img
          src="../assets/images/logo2-404.svg"
          alt=""
          class="w-[250px] sm:w-[300px] mx-auto sm:mx-0 mt-6 sm:mt-0"
        />
      </div>
      <div class="text-center mt-[80px]">
        <img src="../assets/images/dino.svg" alt="" class="mx-auto w-[280px]" />
        <span class="block mt-[80px] sm:mt-[100px] font-semibold text-[18px]"
          >We're sorry, but the page you're looking for doesn't exist or has
          been moved.</span
        >
        <router-link to="/"
          ><img
            src="../assets/images/back-to-home-404.svg"
            alt=""
            class="mx-auto w-[200px] mt-6 cursor-pointer"
        /></router-link>
      </div>

      <img
        src="../assets/images/img1-404.svg"
        alt=""
        class="absolute left-24 sm:left-28 top-[690px] sm:top-40 w-[90px] sm:w-[120px]"
      />
      <img
        src="../assets/images/img2-404.svg"
        alt=""
        class="absolute right-24 sm:right-16 -bottom-28 sm:bottom-10 w-[80px] sm:w-[100px]"
      />
    </div>
  </div>
</template>
