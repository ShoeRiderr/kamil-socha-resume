<script setup lang="ts">
import DownloadLink from "@/components/DownloadLink.vue";
import HomeRouteLink from "@/components/HomeRouteLink.vue";

const props = defineProps({
  fileLink: String,
});
</script>
<template>
  <div
    class="flex sm:flex-row flex-col sm:justify-between justify-center sm:w-11/12 w-full md:pl-11 sm:pl-6 pl-2"
  >
    <HomeRouteLink class="self-center" />
    <DownloadLink :href="fileLink" class="self-center" />
  </div>
</template>
