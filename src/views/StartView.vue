<script setup lang="ts">
import { onMounted } from "vue";
import router from "@/router";
onMounted(() => {
  window.addEventListener("keyup", (ev) => {
    console.log("key");
  });
});

function onElClick() {
  router.push({name: 'home'})
}
</script>
<template>
  <div class="center-items" @click="onElClick">asdasd</div>
</template>
