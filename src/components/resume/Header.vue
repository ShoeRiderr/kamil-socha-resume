<script setup lang="ts">
import { ref, computed } from "vue";
import CenteredText from "@/components/CenteredText.vue";
import { useHelperStore } from "@/stores/helper";

const phoneText = ref("Copy the phone");
const mailText = ref("Copy the email");
const data = ref({
  name: "Kamil Socha",
  phone: "(+48) 791 947 481",
  email: "kamill.socha2000@gmail.com",
  address: "Poznań, Poland",
});

const helperStore = useHelperStore();

const copyResult = computed(() => helperStore.copyResult);
function copyPhone() {
  helperStore.copyToClipboard(data.value.phone);

  phoneText.value = copyResult.value ? "Copied!" : "Copy the phone";
}
function copyEmail() {
  helperStore.copyToClipboard(data.value.email);

  mailText.value = copyResult.value ? "Copied!" : "Copy the email";
}
</script>
<template>
  <CenteredText class="pb-6">
    <p class="uppercase">
      <b>{{ data.name }}</b>
    </p>
    <p>{{ data.address }}</p>
    <p>
      <span
        @mouseleave="phoneText = 'Copy the phone'"
        :tooltip="phoneText"
        class="cursor-pointer"
        @click="copyPhone"
      >
        {{ data.phone }}
      </span>
      |
      <span
        @mouseleave="mailText = 'Copy the email'"
        :tooltip="mailText"
        class="cursor-pointer"
        @click="copyEmail"
      >
        {{ data.email }}
      </span>
    </p>
  </CenteredText>
</template>

<style scoped>
*[tooltip] {
  content: "test";
  position: relative;
}
*[tooltip]:hover:before {
  content: attr(tooltip);
  margin-top: 2px;
  background-color: #a8a8a5;
  padding: 3px;
  border-radius: 5%;
  opacity: 0.75;
  color: #fff;
  top: 1.2em;
  left: 20%;
  position: absolute;
  white-space: nowrap;
}
</style>
