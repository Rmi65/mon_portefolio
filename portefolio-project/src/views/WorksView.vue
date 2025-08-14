<template>
  <div class="background" />
  <header class="navbar fade-in-down">
    <div class="nav-links">
      <router-link to="/">
        <p class="nav">home</p>
      </router-link>
      <a class="nav" href="https://x.com/lionsabafreefr1" target="_blank" rel="noopener noreferrer">x</a>
      <a class="nav" href="https://www.linkedin.com/in/lionel-sabattier" target="_blank"
        rel="noopener noreferrer">linkedIn</a>
      <a class="nav" href="https://github.com/Rmi65" target="_blank" rel="noopener noreferrer">gitHub</a>
    </div>
  </header>
  <div class="container">
    <div class="presentation fade-in-left">
      <h3>Lionel Sabattier</h3>
      <p class="dev">Développeur web fullstack / Designer</p><br></br>
      <p class="prochainement">Prochainement :</p>
      <ul>
        <li>▪️Site pour un Centre Equestre</li>
        <li>▪️Site pour une Créatrice de Bijoux</li>
      </ul>
    </div>
    <div class="theme fade-in-right">
      <div>
        <h4>POLARIS VACANCES : Projet de Formation</h4>
        <div class="polaris">
          <video src='/src/videos/polaris-vacances.mp4' controls width="300" height="200">
            Désolé, votre navigateur ne supporte pas les vidéos intégrées.
          </video>
          <div class="polaris-details">
            <p><strong>Plateforme de réservation d'emplacements de camping</strong></p>
            <p>▪️ Dashboards : Client / Gérant / Administrateur</p>
            <p>▪️ Paiement sécurisé : Stripe / Paypal</p>
            <p>▪️ React / MUI / Laravel / Mysql / Apache </p>
          </div>
        </div>
      </div>
      <div>
        <h4>NAE LABS : Projet PAE "Stage en entreprise"</h4>
        <div class="naelabs">
          <video src="/src/videos/naelabs.mp4" controls width="300" height="200">
            Désolé, votre navigateur ne supporte pas les vidéos intégrées.
          </video>
          <div class="naelabs-details">
            <p><strong>Société de Service de l'Ingénérie et de l'Informatique</strong></p>
            <p>▪️ Design UI / UX</p>
            <p>▪️ API Rest et Appel API externe arXiv</p>
            <p>▪️ Conteneurisation Docker</p>
            <p>▪️ Vue.js / Spring boot / PostgreSQL / Nginx / Inkscape</p>

          </div>
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
  flex-direction: column;
  font-family: 'Linux Libertine', serif !important;
  font-size: 1rem;
  line-height: 2;
  margin-left: 8%;
  color: black;
  line-height: 2;
  margin-top: 7px;
  gap: 12px;
}
.polaris {
  display: flex;
  flex-direction: row;

}

.polaris-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 1rem;
  line-height: 0;
  margin: 10px;
  padding: 10px;
  font-family: 'Linux Libertine', serif !important;
  font-size: 1.1rem;

}

.naelabs {
  display: flex;
  flex-direction: row;
}

.naelabs-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 1rem;
  line-height: 0;
  margin: 10px;
  padding: 10px;
  font-family: 'Linux Libertine', serif !important;
  font-size: 1.1rem;

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

.presentation p {
  font-family: 'Linux Libertine', serif !important;
  font-size: 1.2rem;
  font-style: italic;
  font-weight: bold;
  letter-spacing: 4px;
  line-height: 0;
}

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

.theme p {
  justify-content: center;
}


h4 {
  font-size: 1.4rem;
  font-weight: bold;

  margin: 1rem 0;
  font-family: 'Linux Libertine', serif !important;
  letter-spacing: 5px;
}

ul {
  line-height: 1.5;
  list-style-type: none;
}

ul li {
  font-family: 'Linux Libertine', serif !important;
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
