<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import VideoComponent from "@/components/VideoComponent.vue";
import LimitedWidthContainer from "@/components/layouts/LimitedWidthContainer.vue";
const resumeClasses = ref("");
const coverLetterClasses = ref("");

function hoverOn(val: string) {
  switch (val) {
    case "resume":
      coverLetterClasses.value = "hover-off";
      resumeClasses.value = "";
      break;
    case "cover-letter":
      coverLetterClasses.value = "";
      resumeClasses.value = "hover-off";
      break;
    default:
      console.log("Class not managed.");
  }
}

function hoverOff() {
  coverLetterClasses.value = "";
  resumeClasses.value = "";
}
</script>
<template>
  <div>
    <VideoComponent />
    <div class="content-on-video">
      <LimitedWidthContainer class="h-screen md:py-11 py-6" style="color: #f5f2f2;">
        <div
          class="grid md:grid-cols-2 grid-cols-1 w-100 md:gap-y-0 gap-y-4 md:gap-x-4 gap-x-0 h-full parent"
        >
          <RouterLink
            @mouseover="hoverOn('resume')"
            @mouseleave="hoverOff"
            :to="{ name: 'resume' }"
            class="flex justify-center content-center flex-wrap md:text-4xl text-3xl border border-slate-400 hover:text-slate-200 w-auto md:hover:scale-x-115 hover:scale-y-115 hover:text-5xl hover:border-4 resume"
            :class="resumeClasses"
          >
            Resume
          </RouterLink>
          <RouterLink
            @mouseover="hoverOn('cover-letter')"
            @mouseleave="hoverOff"
            :to="{ name: 'cover-letter' }"
            class="flex justify-center content-center flex-wrap md:text-4xl text-3xl border border-slate-400 hover:text-slate-200 w-auto md:hover:scale-x-115 hover:scale-y-115 hover:text-5xl hover:border-4 cover-letter"
            :class="coverLetterClasses"
          >
            Cover Letter
          </RouterLink>
        </div>
      </LimitedWidthContainer>
    </div>
  </div>
</template>

<style scoped>
.hover-off {
  transform: scaleX(0.7);
  border-width: 2px;
  font-size: 1.5rem; /* 24px */
  line-height: 2rem; /* 32px */
}

@media (width < 768px) {
  .hover-off {
    transform: scaleY(0.8) !important;
    transform: scaleX(1);
    font-size: 1.125rem; /* 18px */
    line-height: 1.75rem; /* 28px */
  }
}
</style>
