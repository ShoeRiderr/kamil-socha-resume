<script setup lang="ts">
import Links from "@/components/Links.vue";
import DocumentNavbar from "@/components/DocumentNavbar.vue";
import DocumentLayout from "@/components/layouts/DocumentLayout.vue";
</script>
<template>
  <div class="flex flex-col content-center flex-wrap pt-4">
    <DocumentNavbar file-link="assets/Kamil_Socha_LaravelDev_Cover.pdf" />
    <div class="flex md:flex-row flex-column justify-evenly">
      <DocumentLayout>
        <div class="pb-4">
          <h4>Dear Sir/Madam,</h4>
        </div>
        <div class="pb-4">
          I am interested in joining your team in the position of Laravel / VueJS
          Developer’. I am in the final year of my bachelor's studies at WSB Merito in
          Gdańsk, and I expect to graduate in October 2023. My bachelor's work is based on
          the application for tracking the route for couriers. using Flutter on the
          frontend side and Django on the backend.
        </div>
        <div class="pb-4">
          In total, I have about 3 years of professional experience as a Laravel and Vue
          Developer in 3 different companies, which demands from me high flexibility to
          adjust to the project and new environment and work-flow.
        </div>
        <div class="pb-4">
          I have worked on various projects that have helped me gain hands-on experience
          in developing advanced websites for accounting, company sites, and shops, like
          Media Expert or Indiana. I have also worked in the field of health care and
          together with a team of other developers we created an app, which was helping to
          monitor and keep in order amount of people visiting the hospital. Beyond that, I
          am also familiar with Symfony on the Back-end, jQuery on the Front-end, and the
          beginning level of administration of the server because of deploying changes or
          setting whole servers for multiple Laravel applications on it.
        </div>
        <div class="pb-4">
          In my career, I have extensively used PHP with mostly Laravel framework, and
          sometimes Symfony or WordPress, JavaScript with Vue, and jQuery. My areas of
          interest are backend development with managing REST API connections, creating
          advanced e-commerce features for the shops, and preparing server environments
          for ready-to-deploy applications. I enjoy problem-solving and am genuinely
          interested in joining your organization.
        </div>
        <div class="pb-4">
          As a performance-driven and forward-thinking professional, I welcome the
          opportunity to meet with you to discuss my experience, skills, and education.
          Thank you for your time and consideration, and I look forward to hearing from
          you soon.
        </div>
        <div class="pb-4">
          If you have any questions, please feel free to contact me via e-mail at
          kamillsocha2000@gmail.com, or by phone at +48 791947481
        </div>
        <Links />
        <div>Sincerely, <br />Kamil Socha</div>
      </DocumentLayout>
    </div>
  </div>
</template>
