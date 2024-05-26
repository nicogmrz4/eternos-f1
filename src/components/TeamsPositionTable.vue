<script setup lang="ts">
import { ref } from 'vue';
import teams from '@/static/teamsTable';
import TeamCard from '@/components/TeamCard.vue';
import type { DriverStatsInterface } from '@/interfaces/driverStats';
import { calcDriversPoints } from '@/utils/caclDriversPoints';

const data = ref(teams);
let driversStats: DriverStatsInterface[] = calcDriversPoints();

// Calculate total points per team
data.value.map((team: any) => {
  team.points = driversStats.filter(driverStats => driverStats.driver.team == team.name).reduce((a, b) => a + b.points, 0);
});

// Sort teams by points
data.value.sort((a, b) => {
  return b.points - a.points;
})

</script>

<template>
  <div class="team-cards__container">
    <TeamCard v-for="team, i in teams" :key="team.name" v-bind="team" :position="i + 1" />
  </div>
</template>

<style scoped>
.team-cards__container {
  display: flex;
  flex-direction: column;
  gap: var(--card-list-gap);
}

@media screen and (min-width: 768px) {
  .team-cards__container:hover > .team-card:not(:hover) {
    opacity: .4;
  }
}
</style>