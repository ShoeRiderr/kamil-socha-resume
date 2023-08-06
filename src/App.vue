<script setup lang="ts">
import { onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import router from "@/router";

onMounted(() => {
  router.push({ name: "start" });
});
</script>

<template>
  <RouterView />
</template>
