<script setup lang="ts">
import DownloadLink from "@/components/DownloadLink.vue";
import HomeRouteLink from "@/components/HomeRouteLink.vue";

const props = defineProps({
  fileLink: String,
});
</script>
<template>
  <div class="flex justify-between w-11/12">
    <HomeRouteLink />
    <DownloadLink :href="fileLink" />
  </div>
</template>
