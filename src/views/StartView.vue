<script setup lang="ts">
import { onMounted } from "vue";
import router from "@/router";
import VideoComponent from "@/components/VideoComponent.vue";
import LimitedWidthContainer from "@/components/layouts/LimitedWidthContainer.vue";

function onElClick() {
  router.push({ name: "home" });
}
</script>
<template>
<div>
  <VideoComponent />
  <div class="content-on-video">
  <LimitedWidthContainer @click="onElClick" class="h-screen md:py-11 py-6 cursor-pointer" style="color: #f5f2f2;">
    <div class="flex flex-col justify-center content-center flex-wrap text-center h-full">
      <h3 class="md:text-2xl text-xl">Hello! Welcome to my resume page.</h3>
      <h4 class="md:text-xl text-l">My name is Kamil and I'm a Fullstack Web Developer.</h4>
    </div>
    <div class="flex justify-center">Click anywhere to continue...</div>
  </LimitedWidthContainer>

  </div>
</div>
</template>

<style scoped>
h3, h4 {
  line-height: 2.5rem;
}
</style>