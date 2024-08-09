<template>
  <loading-screen v-if="isShowScreen" class="fixed top-0 left-0 z-[101]" />
  <header-component
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
  <footer-component />
</template>

<script>
import LoadingScreen from "@/components/LoadingScreen.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { ref, onMounted, onUnmounted } from "vue";
export default {
  name: "default-view",
  components: {
    LoadingScreen: LoadingScreen,
    HeaderComponent: HeaderComponent,
    FooterComponent: FooterComponent,
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
