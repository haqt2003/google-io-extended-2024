<template>
  <div
    class="w-screen h-screen flex justify-center items-center animate-fade-out bg-white"
  >
    <img src="../assets/images/io.gif" alt="" class="w-20" />
  </div>
</template>

<style scoped>
@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(45deg);
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.animate-fade-out {
  animation: fade-out 1s linear;
}

.animate-spin-slow {
  animation: spin-slow 1.5s linear infinite;
}
</style>
