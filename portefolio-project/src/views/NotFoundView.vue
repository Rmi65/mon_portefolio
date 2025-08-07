<template>
  <div class="not-found">
    <h1>404 - Page Non Trouvée</h1>
    <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
    <router-link to="/">
      Retour à l'accueil
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

h1 {
  color:black;
  margin-bottom: 20px;
  font-family: "Linux Libertine", serif !important;
}

p {
  margin-bottom: 20px;
  font-family: "Linux Libertine", serif !important;
}

a {
  color: black;
  text-decoration: none;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 5px;
  font-family: "Linux Libertine", serif !important;
  font-size: 19px;
}

a:hover {
  background-color: greenyellow;
}
</style>
