<script setup>
import LimitedWidthContainer from "@/components/layouts/LimitedWidthContainer.vue";
</script>
<template>
  <LimitedWidthContainer>
    <slot></slot>
  </LimitedWidthContainer>
</template>

<style scoped>
.max-width {
  max-width: 980px;
}
</style>