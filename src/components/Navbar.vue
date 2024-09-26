<template>
  <nav>
    <ul class="nav__list">
      <li v-for="item in items" class="nav__list__item">
        <RouterLink :to="item.to">
          <v-icon :name="item.icon" :scale="item.scale" class="item__icon"></v-icon>
          {{ item.title }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const items = [
  {
    title: 'Pilotos',
    to: '/',
    icon: 'gi-full-motorcycle-helmet',
    scale: 1.1
  },
  {
    title: 'Equipos',
    to: '/teams-championship',
    icon: 'ri-shield-fill'
  },
  {
    title: 'Calendario',
    to: '/calendar',
    icon: 'io-calendar-sharp'
  },
  {
    title: 'Reglas',
    to: '/rules',
    icon: 'md-infooutline'
  }
]
</script>

<style scoped>
nav {
  width: 100lvw;
  height: 60px;
  background-color: var(--card-color);
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

.nav__list {
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.nav__list__item > a {
  text-decoration: none;
  color: white;
  padding: 1em;
  opacity: .5;
  transition: opacity 200ms ease-in;
}

.nav__list__item > a:hover {
  opacity: 1;
}

.nav__list__item > a > .item__icon {
    display: none;
}

@media screen and (max-width: 768px) {
  nav {
    position: fixed;
    height: unset;
    padding: unset;
    bottom: 0;
    left: 0;
    z-index: 100;
    box-shadow: rgba(0, 0, 0, 0.25) 0px -14px 28px, rgba(0, 0, 0, 0.22) 0px -10px 10px;
  }

  .nav__list__item {
    position: relative;
    width: calc(100% / 4);
  }

  .router-link-active::after {
    content: '';
    width: 100%;
    height: 3px;
    background-color: white;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  ul>li>a {
    text-decoration: none;
    color: white;
    padding: .8em;
    opacity: .5;
    transition: opacity 200ms ease-in;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .3rem;
    font-size: 12px;
  }

  .nav__list__item > a > .item__icon {
    transform: scale(1.2);
    display: block;
  }
}

.router-link-active {
  opacity: 1!important;
  font-size: 14px;
}

</style>