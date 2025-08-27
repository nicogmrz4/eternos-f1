<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import { onMounted, ref, watch } from 'vue';
import { useGlobalStore } from './stores/globalStore';
import { calcDriversStats } from '@/utils/calcDriversPoints';
import { useDriverStore } from './stores/driverStore';
import { POINTS_PER_POSITION_SPRINT, POINTS_PER_POSITION_V2 } from './utils';
import { type TrackInterface } from './interfaces/track';

const globalStore = useGlobalStore();
const driverStore = useDriverStore();
const seasons = ref([
  {
    value: 'season-8',
    label: 'Temporada 8',
    options: {
      pointsPositionsGained: true,
      polePoints: true,
    }
  },
  {
    value: 'preseason-9',
    label: 'Temporada 9 Pretemporada',
    options: {
      pointsPositionsGained: true,
      polePoints: true,
    }
  },
  {
    value: 'season-9-a',
    label: 'Temporada 9 - Liga A',
    options: {
      pointsPositionsGained: false,
      polePoints: false,
    }
  },
  {
    value: 'season-9-b',
    label: 'Temporada 9 - Liga B',
    options: {
      pointsPositionsGained: true,
      polePoints: true,
    }
  },
  {
    value: 'preseason-10',
    label: 'Temporada 10 Pretemporada',
    options: {
      pointsPositionsGained: false,
      polePoints: true,
      racePoints: POINTS_PER_POSITION_V2,
      sprintPoints: POINTS_PER_POSITION_SPRINT
    }    
  },
  {
    value: 'season-10',
    label: 'Temporada 10',
    options: {
      pointsPositionsGained: false,
      polePoints: true,
      racePoints: POINTS_PER_POSITION_V2,
      sprintPoints: POINTS_PER_POSITION_SPRINT
    }
  },
  {
    value: 'season-11',
    label: 'Temporada 11',
    options: {
      pointsPositionsGained: false,
      polePoints: true,
      racePoints: POINTS_PER_POSITION_V2,
      sprintPoints: POINTS_PER_POSITION_SPRINT
    }
  }
]);

const selectedSeason = ref({
  value: 'season-11',
  label: 'Temporada 11',
  options: {
    pointsPositionsGained: false,
    polePoints: true,
    racePoints: POINTS_PER_POSITION_V2,
    sprintPoints: POINTS_PER_POSITION_SPRINT
  }
});


const racedTracks = ref<TrackInterface[]>([]);
const targetRacedTrackIndex = ref(0);
let firstTime = true;
async function loadData() {
  const { tracks, drivers, teams } = await globalStore.fetchTracks();
  const driversStatsHistory = calcDriversStats(tracks, drivers, selectedSeason.value.options, targetRacedTrackIndex.value);
  driverStore.driversStatsHistory = driversStatsHistory;
  driverStore.driversStats = driversStatsHistory[driversStatsHistory.length - 1];
  globalStore.teams = teams;
  globalStore.tracks = tracks;
  globalStore.drivers = drivers;
  globalStore.currentSeasonOptions = selectedSeason.value.options;
  racedTracks.value = tracks.filter((track: TrackInterface) => track.isRaced);
  if (firstTime) {
    targetRacedTrackIndex.value = racedTracks.value.length - 1;
    firstTime = false;
  }
}

watch(selectedSeason, async (val) => {
  globalStore.currentSeason = val.value;
  globalStore.currentSeasonOptions = val.options;
  await loadData();
  targetRacedTrackIndex.value = globalStore.tracks.filter((track: TrackInterface) => track.isRaced).length - 1;
});

watch(targetRacedTrackIndex, async (val, old) => {
  const driversStatsHistory = calcDriversStats(globalStore.tracks, globalStore.drivers, selectedSeason.value.options, targetRacedTrackIndex.value);
  driverStore.driversStatsHistory = driversStatsHistory;
  driverStore.driversStats = driversStatsHistory[driversStatsHistory.length - 1];
})

onMounted(async () => {
  await loadData();
});
</script>

<template>
  <Navbar />
  <div class="app-container">
    <main>
      <label class="input-label label-season">Temporada</label>
      <select class="input-select select-season" v-model="selectedSeason"> 
        <option class="input-select__option" v-for="season in seasons" :value="season">{{ season.label }}</option>
      </select>      
      <label class="input-label">Carrera</label>
      <select class="input-select" v-model="targetRacedTrackIndex"> 
        <option class="input-select__option" v-for="(track, i) in racedTracks" :value="i">
          {{ track.placement  + ' - '}}
          {{ track.name }}
          {{ track.isSprint ? ' - Sprint' : '' }}
        </option>
        <option value="-1" v-if="racedTracks.length === 0">No hay carreras</option>
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
.label-season {
  display: block;
  margin-top: 1em;
}
.input-label {
  font-size: 18px;
  font-weight: 500;
}

.select-season {
  margin-bottom: 1em;
}
.input-select {
  width: 100%;
  background-color: transparent;
  color: white;
  padding: 0.25em;
  border: 1px solid var(--card-color);
  border-radius: 4px;
  margin-top: .5em;
}

.input-select:focus {
  outline: none;
}

.input-select__option {
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
