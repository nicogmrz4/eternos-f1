<template>
  <nav>
    <ul>
      <li><RouterLink to="/">Pilotos</RouterLink></li>
      <li><RouterLink to="/teams-championship">Equipos</RouterLink></li>
      <li><RouterLink to="/calendar">Calendario</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">

</script>

<style scoped>
nav {
  width: 100%;
  height: 60px;
  background-color: #082479;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

ul {
  list-style: none;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

ul > li > a {
  text-decoration: none;
  color: white;
  padding: 1em;
  opacity: .5;
  transition: opacity 200ms ease-in;
}

ul > li > a:hover {
  opacity: .8;
  
}

.router-link-active {
  opacity: 1;
}

@media screen and (max-width: 768px) {
  nav {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    box-shadow: rgba(0, 0, 0, 0.25) 0px -14px 28px, rgba(0, 0, 0, 0.22) 0px -10px 10px;
  }
  ul > li > a {
    text-decoration: none;
    color: white;
    padding: 1em;
    opacity: .5;
    transition: opacity 200ms ease-in;
  }
}
</style>