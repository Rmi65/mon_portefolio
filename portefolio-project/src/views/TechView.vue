<template>
  <div class="background" />
  <header class="navbar fade-in-down">
    <div class="nav-links">
      <router-link to="/">
        <p class="nav">home</p>
      </router-link>
      <a class="nav" href="https://x.com/lionsabafreefr1" target="_blank" rel="noopener noreferrer">X</a>
      <a class="nav" href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
        target="_blank" rel="noopener noreferrer">linkedIn</a>
      <a class="nav" href="https://github.com/Rmi65" target="_blank" rel="noopener noreferrer">gitHub</a>
    </div>
  </header>
  <div class="container">
    <div class="presentation fade-in-left">
      <h3>Lionel Sabattier</h3>
      <p class="dev">Développeur web fullstack / Designer</p><br>
    </div>
    <div class="theme fade-in-right">
      <div>
        <h4>Technologies utilisées : </h4>
        <div class="icons">
          <img src="../assets/logos/html-5.svg" alt="logo-html" class="html">
          <img src="../assets/logos/css-3.svg" alt="logo-css" class="css">
          <img src="../assets/logos/javascript.svg" alt="logo-js" class="js">
          <img src="../assets/logos/vue.svg" alt="logo-vue" class="vue">
          <img src="../assets/logos/react.svg" alt="logo-react" class="react">
          <img src="../assets/logos/spring-boot.svg" alt="logo-spring" class="spring">
          <img src="../assets/logos/laravel.svg" alt="logo-laravel" class="laravel">
          <img src="../assets/logos/mysql.svg" alt="logo-mysql" class="mysql">
          <img src="../assets/logos/postgresql.svg" alt="logo-postgresql" class="postgresql">
          <img src="../assets/logos/sql.svg" alt="logo-sql" class="sql">
          <img src="../assets/logos/docker.svg" alt="logo-docker" class="docker">
          <img src="../assets/logos/git.svg" alt="logo-git" class="git">
          <img src="../assets/logos/linux.svg" alt="logo-linux" class="linux">

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Animations d'apparition optimisées */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Classes d'animation */
.fade-in-down {
  animation: fadeInDown 0.8s ease-out forwards;
}

.fade-in-left {
  animation: fadeInLeft 0.8s ease-out 0.2s both;
}

.fade-in-right {
  animation: fadeInRight 0.8s ease-out 0.4s both;
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.html {
  width: 5%;
}
.css {
  width: 5%;
}
.js {
  width: 5%;
}
.vue {
  width: 5%;
}
.react {
  width: 5%;
}
.spring {
  width: 5%;
}
.laravel {
  width: 5%;
}
.mysql {
  width: 5%;
}
.postgresql {
  width: 5%;
}
.sql {
  width: 5%;
}
.docker {
  width: 5%;
}
.git {
  width: 5%;
}
.linux {
  width: 5%;
}

.background {
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
  margin-left: 2%;
}

.nav-links {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: flex-end;
  align-items: center;
  margin-right: 5%;
  font-family: 'Linux Libertine', serif !important;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 0px;
}

.nav-links :hover {
  font-style: italic;
  font-weight: bold;
}

.nav-links a,
.nav-links .nav {
  text-decoration: none !important;
  color: white;
}

.nav-items {
  font-family: 'Linux Libertine', serif !important;
  font-size: 13rem;
  margin: 0;
  padding: 0;
  letter-spacing: 0.9rem;
  cursor: pointer;
  margin-top: 0px;
  line-height: 0.8;
}

.nav {
  font-family: 'Linux Libertine', serif !important;
}

.theme {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Linux Libertine', serif !important;
  font-size: 1.3rem;
  line-height: 2;
  margin-left: 8%;
  color: white;
  line-height: 2;
}

.description {
  width: 100%;
}
.container {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 2rem;
  margin-left: 0px;
  gap: 0px;
}

.presentation {
  font-family: 'Linux Libertine', serif !important;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 6%;
  margin-top: 23%;
  line-height: 0.2;
  color: white;
}

h3 {
  font-size: 2rem;
  font-family: 'Linux Libertine', serif !important;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 10px;
}

.theme p {
  justify-content: center;
}

.dev {
  font-size: 1.2rem;
  font-style: italic;
  letter-spacing: 8px;
}

.text {
  font-size: 1.2rem;
}

.italic {
  font-family: 'Linux Libertine', serif !important;
  font-style: italic !important;
  font-size: 10rem;
}

img {
  width: 25%;
  border-radius: 80px;
  /* Animation pour l'image */
  transition: transform 0.3s ease;
  margin-bottom: 30px;
}

img:hover {
  transform: scale(1.05);
}

button {
  border-radius: 50px;
  width: 17%;
  border: 1px solid white;
  background-color: black;
  transition: all 0.3s ease;
  padding: 5px 5px;
}

button a {
  font-family: 'Linux Libertine', serif !important;
  font-size: 1.4rem;
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;
}

button:hover {
  background-color: white;
  font-weight: bold;
 }

button a:hover {
  color: black;
}

/* Media queries pour optimiser les animations sur mobile */
@media (prefers-reduced-motion: reduce) {
  .fade-in-down,
  .fade-in-left,
  .fade-in-right,
  .fade-in-up,
  .fade-in-page {
    animation: none;
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 768px) {
  .fade-in-left,
  .fade-in-right {
    animation-name: fadeInUp;
    animation-delay: 0.2s;
  }
}
</style>
