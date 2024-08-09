<template>
  <loading-screen v-if="isShowScreen" class="fixed top-0 left-0 z-[101]" />
  <header-meeting
    :customClass="{
      'drop-shadow-sm': isScrolled,
      'sm:drop-shadow': isScrolled,
      'h-[60px]': isScrolled,
      'xl:h-[80px]': isScrolled,
    }"
  />
  <slot />
  <img
    @click="backToTop"
    v-if="isScrolled"
    src="../assets/images/back-to-top.svg"
    alt=""
    class="fixed right-5 sm:right-10 bottom-14 z-[100] cursor-pointer"
  />
  <footer-meeting />
</template>

<script>
import LoadingScreen from "@/components/LoadingScreen.vue";
import HeaderMeeting from "@/components/HeaderMeeting.vue";
import FooterMeeting from "@/components/FooterMeeting.vue";
import { ref, onMounted, onUnmounted } from "vue";
export default {
  name: "default-view",
  components: {
    LoadingScreen: LoadingScreen,
    HeaderMeeting: HeaderMeeting,
    FooterMeeting: FooterMeeting,
  },
  setup() {
    const isShowScreen = ref(true);
    const isScrolled = ref(false);

    function handleScroll() {
      isScrolled.value = window.scrollY > 50;
    }

    function backToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    onMounted(() => {
      isScrolled.value = window.scrollY > 50;
      window.addEventListener("scroll", handleScroll);
      setTimeout(() => {
        isShowScreen.value = false;
      }, 1000);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return { isShowScreen, isScrolled, handleScroll, backToTop };
  },
};
</script>
