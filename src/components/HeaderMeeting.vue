<template>
  <div
    :class="['header-base', customClass]"
    class="px-5 bg-white w-full h-[54px] border-b-[1px] flex justify-between items-center fixed top-0 left-0 z-[99] xl:h-[64px] xl:px-20"
  >
    <div class="flex items-center">
      <a href="/">
        <img
          src="../assets/images/WEB_logo-02.png"
          alt=""
          class="w-[145px] cursor-pointer"
        />
      </a>
      <span
        @click="goAbout"
        class="font-semibold text-[18px] ml-8 hidden xl:block hover:text-blue transition ease-in-out duration-300 cursor-pointer"
        >About Event</span
      >
      <span
        @click="goSpeaker"
        class="font-semibold text-[18px] ml-8 hidden xl:block hover:text-blue transition ease-in-out duration-300 cursor-pointer"
        >Our Speaker</span
      >
      <span
        @click="goAgenda"
        class="font-semibold text-[18px] ml-8 hidden xl:block hover:text-blue transition ease-in-out duration-300 cursor-pointer"
        >Agenda</span
      >
    </div>
    <div class="flex">
      <button
        @click="goMeeting()"
        class="hidden mr-4 xl:block w-[200px] h-[48px] gradient text-white font-semibold rounded-[30px] transition duration-300 ease-in-out"
      >
        "1:1 Meeting" Program
      </button>

      <button
        @click="goRegister()"
        class="hidden xl:block w-[200px] h-[48px] bg-blue text-white font-semibold rounded-[30px] hover:bg-white border-blue hover:border-2 border-2 hover:text-blue transition duration-200 ease-in-out"
      >
        Register today!
      </button>
    </div>
    <img
      v-if="!isOpenTab"
      @click="toggleTab()"
      src="../assets/images/menu.svg"
      alt=""
      class="xl:hidden cursor-pointer"
    />
    <img
      @click="toggleTab()"
      v-if="isOpenTab"
      src="../assets/images/close.svg"
      alt=""
      class="xl:hidden cursor-pointer"
    />
  </div>
  <transition name="slide-fade" class="h-full">
    <div
      v-if="isOpenTab"
      class="w-[320px] sm:w-[400px] h-full px-5 py-10 xl:hidden fixed inset-0 bg-white text-center z-[110] shadow-[0_0_35px_-10px_rgba(0,0,0,0.3)]"
    >
      <a href="/" class="block"
        ><img
          src="../assets/images/logo.png"
          alt=""
          class="w-[224px] cursor-pointer block mx-auto"
      /></a>
      <span
        @click="goAbout"
        class="font-bold mt-16 block hover:text-blue transition ease-in-out duration-300 cursor-pointer"
        >About Event</span
      >
      <span
        @click="goSpeaker"
        class="font-bold mt-4 block hover:text-blue transition ease-in-out duration-300 cursor-pointer"
        >Our Speaker</span
      >
      <span
        @click="goAgenda"
        class="font-bold mt-4 block hover:text-blue transition ease-in-out duration-300 cursor-pointer"
        >Agenda</span
      >
      <button
        @click="goMeeting()"
        class="mt-16 px-[35px] leading-tight w-[196px] h-[50px] gradient text-white font-semibold rounded-[30px] transition duration-300 ease-in-out"
      >
        "1:1 Meeting with Experts"
      </button>

      <button
        @click="goRegister()"
        class="mt-8 px-[35px] h-[50px] w-[200px] bg-blue text-white font-semibold rounded-[30px] hover:bg-white hover:text-blue border-2 border-blue transition duration-300 ease-in-out"
      >
        Register today!
      </button>
    </div>
  </transition>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  props: {
    customClass: {
      type: String,
      default: "",
    },
  },
  setup() {
    const router = useRouter();
    const isOpenTab = ref(false);

    function toggleTab() {
      isOpenTab.value = !isOpenTab.value;
    }

    function goMeeting() {
      router.push({ name: "OneOneMeeting", params: {} });
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      if (isOpenTab.value) {
        isOpenTab.value = !isOpenTab.value;
      }
    }

    function goRegister() {
      router.push({ name: "RegisterView", params: {} });
      if (isOpenTab.value) {
        isOpenTab.value = !isOpenTab.value;
      }
    }

    function goAbout() {
      router.push({ name: "RegisterView", params: {} });
      window.scrollTo({
        top: 630,
        behavior: "smooth",
      });
      if (isOpenTab.value) {
        isOpenTab.value = !isOpenTab.value;
      }
    }

    function goSpeaker() {
      const title_speaker = document.querySelector(".title-speaker");
      const title_SpeakerRect = title_speaker.getBoundingClientRect();
      const title_speakerTop = window.pageYOffset + title_SpeakerRect.top - 160;
      window.scrollTo({
        top: title_speakerTop,
        behavior: "smooth",
      });
      if (isOpenTab.value) {
        isOpenTab.value = !isOpenTab.value;
      }
    }

    function goAgenda() {
      router.push({ name: "RegisterView", params: {} });
      if (window.innerWidth >= 500) {
        window.scrollTo({
          top: 2950,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: 5900,
          behavior: "smooth",
        });
      }
      if (isOpenTab.value) {
        isOpenTab.value = !isOpenTab.value;
      }
    }

    return {
      isOpenTab,
      toggleTab,
      goRegister,
      goAbout,
      goMeeting,
      goSpeaker,
      goAgenda,
    };
  },
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  @apply transition-transform duration-500 ease-in-out;
}
.slide-fade-enter-from {
  @apply -translate-x-full;
}
.slide-fade-enter-to {
  @apply translate-x-0;
}
.slide-fade-leave-from {
  @apply translate-x-0;
}
.slide-fade-leave-to {
  @apply -translate-x-full;
}
.header-base {
  transition: height 0.3s ease, box-shadow 0.3s ease;
}

.gradient {
  position: relative;
  transition-duration: 300ms;
  transition-timing-function: ease;
  transition-property: all;
  background: linear-gradient(
    to right,
    #4285f4 0%,
    #4285f4 25%,
    #9f6cd4 50%,
    #ea4335 76%,
    #ea4335 100%
  );
}

.gradient:hover {
  background: linear-gradient(
    to bottom right,
    #4285f4 0%,
    #4285f4 25%,
    #9f6cd4 50%,
    #ea4335 76%,
    #ea4335 100%
  );
  -webkit-background-clip: text;
  color: transparent;
  background-clip: text;
}

.gradient::after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to right,
        #4285f4 0%,
        #4285f4 25%,
        #9f6cd4 50%,
        #ea4335 76%,
        #ea4335 100%
      )
      border-box;
  border-radius: 30px;
  border: 2px solid transparent;
  z-index: -1;
}
</style>
