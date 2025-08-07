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

    </div>
    <div class="theme">
      <img src="../assets/img/photo-LionelSabattier.jpeg">
      <p>
        Depuis mes premiers pas dans l'univers forain jusqu'à ma formation en AES et Sciences de l'Éducation, <br></br>
        mon chemin a toujours été guidé par la curiosité et l'apprentissage. <br></br>
        Après avoir géré l'aspect administratif et la communication de projets dans les arts vivants pendant plus de 20 ans,
         <br></br>j'ai développé une expertise en design et en création vidéo, essentielle à la promotion des spectacles. <br></br>
         Mon engagement social m'a ensuite amené à créer des outils numériques pour des publics vulnérables. <br></br>
         Ces expériences m'ont poussé à formaliser ma passion pour l'informatique. <br></br>Aujourd'hui, en tant que développeur web full stack,
         j'entreprends un nouveau chapitre,
         prêt à mettre ma rigueur, <br></br>ma créativité et mon amour du défi au service de projets web innovants.
      </p>
    </div>
  </div>
</template>

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
  margin-left: 30%;
}

.logo {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
}

.theme {
  font-family: 'Linux Libertine', serif !important;
  font-size: 1.2rem;
  line-height: 2;
  margin-left: 8%;
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
  line-height: 0.2;
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

img {
  width: 30%;
  border-radius: 50px;
}
</style>
