<script setup lang="ts">
import { ref } from "vue";

const data = ref({
  linkedin: "https://www.linkedin.com/in/kamill-socha/",
  github: "https://github.com/ShoeRiderr",
});
</script>
<template>
  <div class="pb-6">
    <div v-for="(link, key) in data" :key="key">
      <b class="capitalize">{{ key }}: </b>
      <a :href="link" target="_blank" class="underline">{{ link }}</a>
    </div>
  </div>
</template>
