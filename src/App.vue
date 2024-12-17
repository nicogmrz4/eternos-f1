<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import { onMounted } from 'vue';
import { useGlobalStore } from './stores/globalStore';
import { calcDriversStats } from '@/utils/calcDriversPoints';
import { useDriverStore } from './stores/driverStore';

const { fetchTracks, setTeams, setTracks } = useGlobalStore();
const { setDriversStats, setDriversStatsHistory } = useDriverStore();

onMounted(async () => {
    console.log('App mounted');
    const { tracks, drivers, teams } = await fetchTracks();
    const driversStatsHistory = calcDriversStats(tracks, drivers);
    setDriversStatsHistory(driversStatsHistory);
    setDriversStats(driversStatsHistory[driversStatsHistory.length - 1]); // Last index is the most recent data
    setTeams(teams);
    setTracks(tracks);
});
</script>

<template>
  <Navbar />
  <div class="app-container">
    <main>
      <RouterView v-slot="{ Component }">
        <Transition name="router">
          <Component :is="Component" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.app-container {
  width: 100svw;
}

main {
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding-bottom: 3em;
}

main>* {
  width: 100%;
}

@media screen and (max-width: 768px) {
  main {
    padding-bottom: 5em;
  }
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
