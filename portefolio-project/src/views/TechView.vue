<template>
  <div class="background" />
  <header class="navbar fade-in-down">
    <div class="nav-links">
      <router-link to="/">
        <p class="nav">home</p>
      </router-link>
      <a class="nav" href="https://x.com/lionsabafreefr1" target="_blank" rel="noopener noreferrer">x</a>
      <a class="nav" href="https://www.linkedin.com/in/lionel-sabattier" target="_blank" rel="noopener noreferrer">linkedIn</a>
      <a class="nav" href="https://github.com/Rmi65" target="_blank" rel="noopener noreferrer">gitHub</a>
    </div>
  </header>
  <div class="container">
    <div class="presentation fade-in-left">
      <h3>Lionel Sabattier</h3>
      <p class="dev">Développeur web fullstack / Designer</p><br>
    </div>
    <div class="theme fade-in-down">
      <div>
        <h4>Technologies utilisées : </h4>
        <div class="icons">
          <img src="../assets/logos/wordpress.svg" alt="logo-wordpress" class="wordpress" title="WordPress">
          <img src="../assets/logos/html-5.svg" alt="logo-html" class="html" title="HTML5">
          <img src="../assets/logos/css-3.svg" alt="logo-css" class="css" title="CSS3">
          <img src="../assets/logos/javascript.svg" alt="logo-js" class="js" title="JavaScript">
          <img src="../assets/logos/php.svg" alt="logo-php" class="php" title="PHP">
          <img src="../assets/logos/vue.svg" alt="logo-vue" class="vue" title="Vue.js">
          <img src="../assets/logos/react.svg" alt="logo-react" class="react" title="React">
          <img src="../assets/logos/spring-boot.svg" alt="logo-spring" class="spring" title="Spring Boot">
          <img src="../assets/logos/laravel.svg" alt="logo-laravel" class="laravel" title="Laravel">
          <img src="../assets/logos/mysql.svg" alt="logo-mysql" class="mysql" title="MySQL">
          <img src="../assets/logos/postgresql.svg" alt="logo-postgresql" class="postgresql" title="PostgreSQL">
          <img src="../assets/logos/sql.svg" alt="logo-sql" class="sql" title="SQL">
          <img src="../assets/logos/docker.svg" alt="logo-docker" class="docker" title="Docker">
          <img src="../assets/logos/git.svg" alt="logo-git" class="git" title="Git">
          <img src="../assets/logos/adobe-illustrator.svg" alt="logo-adobe-illustrator" class="adobe-illustrator" title="Adobe Illustrator">
          <img src="../assets/logos/photoshop.svg" alt="logo-adobe-photoshop" class="adobe-photoshop" title="Adobe Photoshop">
          <img src="../assets/logos/inkscape.svg" alt="logo-inkscape" class="inkscape" title="Inkscape">
          <img src="../assets/logos/linux.svg" alt="logo-linux" class="linux" title="Linux">


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

.background {
  background-color: white;
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
  color: black;
}


.nav {
  font-family: 'Linux Libertine', serif !important;
}

.theme {
  display: flex;
  flex-direction: wrap;
  font-family: 'Linux Libertine', serif !important;
  font-size: 1.3rem;
  line-height: 2;
  margin-left: 8%;
  color: black;
  line-height: 2;
  margin-top: 5%;
}

.icons {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 colonnes exactement */
  grid-template-rows: repeat(4, 1fr); /* 3 lignes exactement */
  gap: 2rem 1.5rem; /* gap vertical 2rem, horizontal 1.5rem */
  margin-top: 1rem;
  justify-items: center;
  align-items: center;
  width: 100%;
  max-width: 400px; /* Limite la largeur totale */
  gap: 1.5rem 4rem;
}

.icons img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  transition: transform 0.3s ease, filter 0.3s ease;
  border-radius: 8px;
  padding: 0.3rem;
}

.icons img:hover {
  transform: scale(1.15);
  filter: brightness(1.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.icons img[title]:hover::after {
  content: attr(title);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  font-family: 'Linux Libertine', serif;
  font-size: 0.9rem;
  font-weight: normal;
  white-space: nowrap;
  z-index: 1000;
  pointer-events: none;
  opacity: 0;
  animation: tooltipFadeIn 0.3s ease-in-out forwards;
}

/* Petite flèche pour l'infobulle */
.icons img[title]:hover::before {
  content: '';
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  pointer-events: none;
  opacity: 0;
  animation: tooltipFadeIn 0.3s ease-in-out forwards;
}
.container {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 1px;
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
  color: black;
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
h4 {
  font-size: 1.4rem;
  font-weight: bold;
  font-style: italic;
  margin: 1rem 0;
  font-family: 'Linux Libertine', serif !important;
  letter-spacing: 10px;
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
