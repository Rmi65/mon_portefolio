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

    <div class="presentation fade-in-up">
      <h3>Lionel Sabattier</h3>
      <p class="dev">Développeur web fullstack / Designer</p><br></br><br></br>
      <h4>Email : <a href="mailto:lionel.sabattier@gmail.com">lionel.sabattier@gmail.com</a></h4>
    </div>

    <div class="theme fade-in-up">

        <p class="nav-items">Hell<span class="italic">o</span>.</p>

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
  animation: fadeInUp 0.8s ease-out 0.3s both;
}
/* BACKGROUND */
.background {
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
/* NAV */
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
  font-size: 10rem;
  margin: 0;
  padding: 0;
  letter-spacing: 0.9rem;
  margin-top: 0 px;
  line-height: 0.8;
}
.nav {
  font-family: 'Linux Libertine', serif !important;
}
/* BLOCS */
.theme {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Linux Libertine', serif !important;
  font-size: 1.3rem;
  line-height: 2;
  margin-left: 10%;
  color: white;
  line-height: 2;
  margin-top: 3%;
}

.container {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 2rem;
  margin-left: 0px;
  gap: 2.5rem;
}
/* TEXTE */
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
  font-weight: bold;
  font-size: 1.2rem;
  font-style: italic;
  letter-spacing: 8px;
}

.italic {
  font-family: 'Linux Libertine', serif !important;
  font-style: italic !important;
  font-size: 10rem;
}
/* IMG */
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

.container a {
  font-family: 'Linux Libertine', serif !important;
  font-size: 1.2rem;
  color: white;
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
