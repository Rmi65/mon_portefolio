<template>
  <header class="navbar">
    <div class="nav-links fade-in-left">
      <router-link to="/">
        <span class="nav">home</span>
      </router-link>
      <a class="nav" href="https://x.com/lionsabafreefr1" target="_blank" rel="noopener noreferrer">x</a>
      <a class="nav" href="https://www.linkedin.com/in/lionel-sabattier" target="_blank"
        rel="noopener noreferrer">linkedIn</a>
      <a class="nav" href="https://github.com/Rmi65" target="_blank" rel="noopener noreferrer">gitHub</a>
    </div>
  </header>
  <div class="container">
    <div class="presentation fade-in-down">
      <h3>Lionel Sabattier</h3>
      <p class="dev">Développeur web fullstack / Designer</p><br>
    </br>
      <p class="text">Passionné par le développement web, je suis toujours à la recherche de nouveaux défis et de
        projets innovants. <br></br>Mon expertise couvre une large gamme de technologies, et je suis en train de
        progresser
        quotidiennement.<br></br>Je suis actuellement à la recherche d'opportunités professionnelles dans le
        développement web.
        <br></br>Si vous êtes intéressé par mon profil, n'hésitez pas à me contacter.</p>
    </div>
    <div class="theme fade-in-up">
      <router-link to="/about">
        <p class="nav-items">ab<span class="italic">o</span>ut</p>
      </router-link>
      <router-link to="/tech">
        <p class="nav-items">techn<span class="italic">o</span></p>
      </router-link>
      <router-link to="/works">
        <p class="nav-items">w<span class="italic">o</span>rks</p>
      </router-link>
      <router-link to="/contact">
        <p class="nav-items">c<span class="italic">o</span>ntact</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>

</script>

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
  animation: fadeInDown 0.7s ease-out forwards;
}
.fade-in-left {
  animation: fadeInLeft 0.8s ease-out 0.2s both;
}
.fade-in-right {
  animation: fadeInRight 0.8s ease-out 0.4s both;
}
.fade-in-up {
  animation: fadeInUp 0.5s ease-out 0.6s both;
}
/* NAVBAR*/
.navbar {
  display: flex;
  justify-content: space-between;
  /* Sépare logo et liens */
  align-items: center;
  width: 100%;
  padding: 0 2rem;
  margin-left: 2%;
  margin-top: 0px;
}

/* NAVLINKS*/
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
  margin-top: 21px;
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
.nav-items {
  font-family: 'Linux Libertine', serif !important;
  font-size: 10rem;
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

/* CONTAINER*/
.container {
  display: flex;
  flex-direction: row;
  /* Aligne le haut des deux colonnes */
  width: 100%;
  margin-top: 2rem;
  gap: 2rem;
}
/* PRESENTATION */
.presentation {
  font-family: 'Linux Libertine', serif !important;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 6%;
  margin-top: 20%;
  line-height: 0.3;
}
/* THEME*/
.theme {
  gap: 0px;
  margin-left: 3.5%;
  line-height: 1;
  margin-top: 1%;
  cursor: pointer;
  color: black;
}
.theme :hover {
  font-style: italic;

}
.theme a,
.theme .nav-items {
  text-decoration: none !important;
  color: black;
}
/* FONTS*/
h3 {
  font-size: 2rem;
  font-family: 'Linux Libertine', serif !important;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 10px;
}
.dev {
  font-weight: bold;
  font-size: 1.2rem;
  font-style: italic;
  letter-spacing: 4px;
}
.text {
  font-size: 1rem;
  margin-top:0%;
  line-height: 1.4;
}
.italic {
  font-family: 'Linux Libertine', serif !important;
  font-style: italic !important;
  font-size: 10rem;
}
/* ------ MEDIA QUERIES -------*/
@media screen and (max-width: 319px) {
  .nav-items {
    font-size: 2rem;
    letter-spacing: 0.1rem;
  }

  h3 {
    font-size: 1rem;
    letter-spacing: 2px;
  }

  .dev {
    font-size: 0.8rem;
    letter-spacing: 2px;
  }

  .text {
    font-size: 0.7rem;
  }
  .nav-links {
    gap: 0.5rem;
    font-size: 0.8rem;
  }

  .container {
    flex-direction: column;
    margin-top: 1%;
  }

  .presentation {
    line-height: 0.8;
  }
  .nav {
    margin-left: 5%;
  }
  .theme {
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .nav-items {
    font-size: 5rem;
  }
  .italic {
    font-size: 5rem;
  }
}
</style>
