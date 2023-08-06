<script setup lang="ts">
import { ref } from "vue";

const data = ref([
  {
    title: "Bachelor of Informatics - Programming specialization",
    period: "[2019 - 2023][pursuing]",
    school: "WSB Merito in Gdańsk",
  },
]);
</script>
<template>
  <div class="pb-6">
    <div v-for="(education, key) in data" :key="key" class="pt-1 text-justify">
      <b>{{ education.title }}</b> {{ education.period }}
      <p><b>{{ education.school }}</b></p>
    </div>
  </div>
</template>
