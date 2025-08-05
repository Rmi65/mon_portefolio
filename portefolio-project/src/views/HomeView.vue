<template>
  <div class="logos">
    <img src="../assets/logos/ls.svg" alt="logo-LS">
    <img src="../assets/logos/linkedin-logo.svg" alt="logo-Linkedin">
    <img src="../assets/logos/X-logo.svg" alt="logo-Github">
    <img src="../assets/logos/github-logo.svg" alt="logo-GitHub">
  </div>
  <div class="container">
    <div class="presentation">
      <h3>Lionel Sabattier</h3>
      <p>Développeur web fullstack - Designer UI/UX</p><br>
      <p>Passionné par le développement web, je suis toujours à la recherche de nouveaux défis et de projets intéressants. </p>
      <p>Mon expertise couvre une large gamme de technologies, et je suis en train de progresser quotidiennement.</p>
      <p>Je suis actuellement à la recherche d'opportunités professionnelles dans le développement web.</p>
      <p>Si vous êtes intéressé par mon profil, n'hésitez pas à me contacter.</p>
    </div>
    <div class="theme">
      <ContactComponent />
      <TechComponent />
      <WorksComponent />
      <AboutComponent />
    </div>
  </div>
</template>

<script setup>
import AboutComponent from '../components/AboutComponent.vue';
import WorksComponent from '../components/WorksComponent.vue';
import ContactComponent from '../components/ContactComponent.vue';
import TechComponent from '../components/TechComponent.vue';
</script>

<style scoped>

</style>
