<script setup lang="ts">
import { ref } from "vue";

const data = ref({
  languages: ["PHP", "JavaScript", "TypeScript", "SQL", "CSS", "SaaS"],
  frameworks: [
    "Vue (JavaScript)",
    "Laravel (PHP)",
    "Bootstrap (CSS)",
    "Tailwind (CSS)",
    "jQuery (JavaScript)",
  ],
  apps: ["Git", "phpMyAdmin", "DBeaver", "Apache2", "VS Code"],
});
</script>
<template>
  <div class="pb-6">
    <div v-for="(values, key) in data" :key="key" class="pt-1 text-justify">
      <b class="capitalize">{{ key }}: </b> {{ values.join(", ") }}.
    </div>
  </div>
</template>
