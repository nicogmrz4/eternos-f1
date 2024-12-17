<script setup lang="ts">
import { onMounted, ref, watch, type Ref } from 'vue';
import TeamCard from '@/components/TeamCard.vue';
import type { TeamStats } from '@/dto/teamStats';
import { calcTeamPoints } from '@/utils/calcTeamPoints';
import { useGlobalStore } from '@/stores/globalStore';
import { storeToRefs } from 'pinia';
import { useDriverStore } from '@/stores/driverStore';

const teamsStats: Ref<TeamStats[]> = ref([]);
const { driversStatsHistory } = storeToRefs(useDriverStore());
const { teams } = storeToRefs(useGlobalStore());

watch(teams, () => {
  teamsStats.value = calcTeamPoints(driversStatsHistory.value, teams.value);
});

onMounted(async () => {
  teamsStats.value = calcTeamPoints(driversStatsHistory.value, teams.value);
});
</script>

<template>
  <div class="team-cards__container">
    <TeamCard v-for="teamStats, i in teamsStats" :key="i" v-bind="teamStats" :position="i + 1" />
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