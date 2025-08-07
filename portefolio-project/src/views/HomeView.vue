<template>
  <header class="navbar">
    <div class="nav-links">
      <router-link to="/">
        <p class="nav">Home</p>
      </router-link>
      <p class="nav">
        <a href="https://x.com/lionsabafreefr1" target="no_blank" rel="noopener noreferrer">X</a>
      </p>
      <p class="nav">
        <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="no_blank"
          rel="noopener noreferrer">LinkedIn</a>
      </p>
      <p class="nav">
        <a href="https://github.com/Rmi65" target="no_blank" rel="noopener noreferrer">GitHub</a>
      </p>
    </div>
  </header>
  <div class="container">
    <div class="presentation">
      <h3>Lionel Sabattier</h3>
      <p class="dev">Développeur web fullstack / Designer</p><br>
      <p class="text">Passionné par le développement web, je suis toujours à la recherche de nouveaux défis et de
        projets
        innovants. </p><br>
      <p class="text">Mon expertise couvre une large gamme de technologies, et je suis en train de progresser
        quotidiennement.</p><br>
      <p class="text">Je suis actuellement à la recherche d'opportunités professionnelles dans le développement web.</p>
      <br>
      <p class="text">Si vous êtes intéressé par mon profil, n'hésitez pas à me contacter.</p>
    </div>
    <div class="theme">
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
.navbar {
  display: flex;
  justify-content: space-between;
  /* Sépare logo et liens */
  align-items: center;
  width: 100%;
  padding: 0 2rem;
  margin-left: 2%
}

.nav-links {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: flex-end;
  align-items: center;
  margin-right: 5%;
  font-family: 'Linux Libertine', serif !important;
  font-size: 1.3rem;
  cursor: pointer;
}

.nav-links :hover {
  font-style: italic;
  font-weight: bold;
}

.nav-links a,
.nav-links .nav {
    text-decoration: none !important;
    color: black; /* Assurez-vous que la couleur est correcte */
}

.nav-items {
  font-family: 'Linux Libertine', serif !important;
  font-size: 13rem;
  margin: 0;
  /* Ajoute cette ligne */
  padding: 0;
  letter-spacing: 0.9rem;
  cursor: pointer;
  margin-top: 0px;
  line-height: 0.8;
}

.nav {
  font-family: 'Linux Libertine', serif !important;
}

img {
  width: 6%;
  margin-left: 4%;
  margin-top: 2%;
}

.logo {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
}


.container {
  display: flex;
  flex-direction: row;
  /* Aligne le haut des deux colonnes */
  width: 100%;
  margin-top: 2rem;
}

.presentation {
  font-family: 'Linux Libertine', serif !important;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 8%;
  margin-top: 20%;
  line-height: 0.1;
}


.theme {
  gap: 0px;
  margin-left: 6%;
  line-height: 0;
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

h3 {
  font-size: 2rem;
  ;
  font-family: 'Linux Libertine', serif !important;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 10px;
}

.dev {
  font-weight: bold;
  font-size: 1.4rem;
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
</style>
