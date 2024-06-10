<script setup lang="ts">
import { ref, type Ref } from 'vue';
import teams from '@/static/teamsTable';
import TeamCard from '@/components/TeamCard.vue';
import type { DriverStatsInterface } from '@/interfaces/driverStats';
import { calcDriversPoints } from '@/utils/caclDriversPoints';
import { calcTeamPoints } from '@/utils/calcTeamPoints';
import type { TeamInterface } from '@/interfaces/team';

const data: Ref<TeamInterface[]> = ref(calcTeamPoints());

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