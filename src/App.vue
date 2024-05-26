<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <Navbar/>
  <main>
    <RouterView v-slot="{ Component }"> 
      <Transition name="router">
        <Component :is="Component"/>
      </Transition>
    </RouterView>
  </main>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

main {
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  position: relative;
}

main > * {
  width: 100%;
  padding-bottom: 3em;
}

.router-enter-from {
 opacity: 0;
 transform: translateY(600px);
}

.router-enter-active {
  transition: opacity 600ms ease-in, transform 600ms ease-in-out;
  transition-delay: 200ms;
  position: absolute;
  z-index: 10;
}

.router-enter-to {
  opacity: 1;
  transform: translate(0);
}

.router-leave-from {
  opacity: 1;
  transform: translate(0);
}

.router-leave-active {
  transition: opacity 400ms ease-out, transform 600ms ease-in-out;
  position: absolute;
  z-index: 1;
}

.router-leave-to {
  opacity: 0;
  transform: translateY(600px);
}
</style>
