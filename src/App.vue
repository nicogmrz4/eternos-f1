<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import { onMounted, ref, watch } from 'vue';
import { useGlobalStore } from './stores/globalStore';
import { calcDriversStats } from '@/utils/calcDriversPoints';
import { useDriverStore } from './stores/driverStore';

const globalStore = useGlobalStore();
const driverStore = useDriverStore();
const seasons = ref([
  {
    value: 'season-8',
    label: 'Temporada 8'
  },
  {
    value: 'preseason-9',
    label: 'Temporada 9 Pretemporada'
  },
  {
    value: 'season-9-a',
    label: 'Temporada 9 - Liga A'    
  },
  {
    value: 'season-9-b',
    label: 'Temporada 9 - Liga B'    
  }
]);
const selectedSeason = ref('season-9-a');

async function loadData() {
  const { tracks, drivers, teams } = await globalStore.fetchTracks();
  const driversStatsHistory = calcDriversStats(tracks, drivers);
  driverStore.driversStatsHistory = driversStatsHistory;
  driverStore.driversStats = driversStatsHistory[driversStatsHistory.length - 1];
  globalStore.teams = teams;
  globalStore.tracks = tracks;
}

watch(selectedSeason, async (val) => {
  globalStore.currentSeason = val;
  await loadData();
});

onMounted(async () => {
  await loadData();
});
</script>

<template>
  <Navbar />
  <div class="app-container">
    <main>
      <select class="season__select" v-model="selectedSeason"> 
        <option class="season__select__option" v-for="season in seasons" :value="season.value">{{ season.label }}</option>
      </select>
      <RouterView v-slot="{ Component }">
        <Transition name="router">
          <Component :is="Component" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<style>
.season__select {
  width: 100%;
  background-color: transparent;
  color: white;
  padding: 0.25em;
  border: 1px solid var(--card-color);
  border-radius: 4px;
  margin-top: 1em;
}

.season__select:focus {
  outline: none;
}

.season__select__option {
  background-color: black;
}

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
