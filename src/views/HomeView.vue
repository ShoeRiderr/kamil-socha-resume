<script setup lang="ts">
import { RouterLink } from "vue-router";
import LimitedWidthContainer from "@/components/LimitedWidthContainer.vue";
</script>
<template>
  <LimitedWidthContainer class="h-screen md:py-11 py-6">
    <div class="grid md:grid-cols-2 grid-cols-1 w-100 md:gap-x-4 gap-x-0 h-full">
      <RouterLink
        :to="{ name: 'resume' }"
        class="flex justify-center content-center flex-wrap border border-slate-400 w-full"
      >
        Resume
      </RouterLink>
      <RouterLink
        :to="{ name: 'cover-letter' }"
        class="flex justify-center content-center flex-wrap border border-slate-400 w-w-screen"
      >
        Cover Letter
      </RouterLink>
    </div>
  </LimitedWidthContainer>
</template>
