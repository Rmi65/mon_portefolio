<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup>


</script>
<style scoped>
h1, h2 {
    font-family: 'Linux Libertine', serif !important;
}

html,
body {
  height: 100%;
  margin: 0;
  background-color: rgb(6, 6, 6);
  font-family: 'Linux Libertine', serif !important;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: 'Linux Libertine';
  src:
    url('@/assets/fonts/LibertinusSerif-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Linux Libertine';
  src:
    url('@/assets/fonts/LibertinusSerif-Bold.woff2') format('woff2');
  font-weight: bold;
  font-style: normal;
  font-display: swap; /* police de remplacement tant que la police Linux n'est pas encore chargée */
}

@font-face {
  font-family: 'Linux Libertine';
  src:
    url('@/assets/fonts/LibertinusSerif-Italic.woff2') format('woff2');
  font-weight: normal;
  font-style: italic;
  font-display: swap;
}

/* Spécifique Firefox */
/* Réinitialisation complète des styles de lien pour Firefox */
.menu a {
  text-decoration: none;
  color: inherit;
  /* Utilise la couleur héritée */
}


</style>
