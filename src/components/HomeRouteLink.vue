<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
const screenWidth = ref(window.innerWidth);

const smScreen = computed(() => {
  return screenWidth.value < 640;
});

onMounted(() => {
  window.addEventListener("resize", onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
});

function onResize() {
  screenWidth.value = window.innerWidth;
}
</script>
<template>
  <RouterLink class="md:pl-6 pl-2 md:max-h-12 max-h-10" :to="{ name: 'home' }">
    <span v-if="smScreen" class="text-xl"> Back </span>
    <span v-else class="text-3xl"> &#8592; </span>
  </RouterLink>
</template>

<style scoped>
@-moz-document url-prefix() {
  .text-3xl {
    font-size: 3rem; /* 48px */
    line-height: 1;
  }
}
</style>
