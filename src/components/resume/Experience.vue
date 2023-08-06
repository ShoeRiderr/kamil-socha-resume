<script setup lang="ts">
import { ref } from "vue";

const experience = ref([
  {
    header: {
      position: "Laravel / Vue Developer",
      company: 'Sun Group Sp. z o.o Sp.k.',
      city: 'Poznań',
      work_period: 'Nov 2022 - currently',
    },
    responsibilities: [
        'Adding new features to firm CMS and to e-commerce sites.',
        'Participating in technical meetings.',
        'Developed a program for integrating the outside shop with the firm system.',
        'Implement functional tests for module-based Laravel applications.',
        'Worked for big e-commerce clients, like Media Expert, Indiana, or Luxiona.',
    ]
  },
  {
    header: {
      position: "Laravel / Vue Developer",
      company: 'Bluewom Ltd.',
      city: 'Sopot',
      work_period: 'Oct 2021 - Nov 2022',
    },
    responsibilities: [
        'Developed a website for placing the artwork using WordPress and JavaScript with jQuery.',
        'Developed a program for fetching big amounts of data about products from outside shops which downloads every day and updates local database records.',
        'Maintaining and adding new features to the wedding application Wedsly written in Symfony.',
        'Participating in everyday daily meetings, and providing code review and guidance for Junior Developers.',
        'Delivering new features in existing projects using Laravel and Vue.',
    ]
  },
  {
    header: {
      position: "Laravel / Vue Developer",
      company: 'Centrum Zdrowia Eter-Med',
      city: 'Gdańsk',
      work_period: 'Aug 2020 - Oct 2021',
    },
    responsibilities: [
        'Learned how to write web applications with the usage of Laravel and Vue.',
        'Developing new features to firm applications with the guidance of Team Leader and Senior Developer.',
        'Participating in code reviews written by Senior Developer and Team Leader for educational purposes.'
    ]
  },
]);
</script>
<template>
  <div class="justify-evenly text-justify pb-6">
    <div v-for="(item, key) in experience" :key="key" class="pb-4">
      <h5 class="pb-1">
        <b>{{ item.header.position }}</b> at <b>{{ item.header.company }}</b
        >, {{ item.header.city }} [{{ item.header.work_period }}]
      </h5>
      <ul
        v-for="(responsibility, index) in item.responsibilities"
        :key="index"
        class="md:px-11 sm:px-9 px-6"
      >
        <li>➢ {{ responsibility }}</li>
      </ul>
    </div>
  </div>
</template>
