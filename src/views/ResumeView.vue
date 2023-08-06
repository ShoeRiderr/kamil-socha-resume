<script setup lang="ts">
import { RouterLink } from "vue-router";
import Header from "@/components/Header.vue";
import Links from "@/components/Links.vue";
import Summary from "@/components/resume/Summary.vue";
import Experience from "@/components/resume/Experience.vue";
import Skills from "@/components/resume/Skills.vue";
import Education from "@/components/resume/Education.vue";
import CenteredText from "@/components/CenteredText.vue";
import DocumentNavbar from "@/components/DocumentNavbar.vue";
import DocumentLayout from "@/components/layouts/DocumentLayout.vue";
</script>
<template>
  <div class="flex flex-col content-center flex-wrap pt-4">
    <DocumentNavbar file-link="assets/Kamil_Socha_CV_EN.pdf" />
    <div class="flex md:flex-row flex-column">
      <DocumentLayout>
        <Header class="pt-4" />
        <CenteredText>
          <b>SUMMARY</b>
        </CenteredText>
        <Summary />
        <CenteredText>
          <b>EXPERIENCE</b>
        </CenteredText>
        <Experience />
        <CenteredText>
          <b>SKILLS</b>
        </CenteredText>
        <Skills />
        <CenteredText>
          <b>EDUCATION</b>
        </CenteredText>
        <Education />
        <CenteredText>
          <b>LINKS</b>
        </CenteredText>
        <Links />
      </DocumentLayout>
    </div>
  </div>
</template>
