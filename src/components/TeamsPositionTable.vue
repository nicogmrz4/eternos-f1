<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import TeamCard from '@/components/TeamCard.vue';
import type { TeamStats } from '@/dto/teamStats';
import { calcTeamPoints } from '@/utils/calcTeamPoints';
import { calcDriversStats } from '@/utils/calcDriversPoints';
import { useGlobalStore } from '@/stores/globalStore';

const teamsStats: Ref<TeamStats[]> = ref([]);
const { fetchTracks } = useGlobalStore();

onMounted(async () => {
  const { tracks, drivers, teams } = await fetchTracks();
  const historyStats = calcDriversStats(tracks, drivers);
  teamsStats.value = calcTeamPoints(historyStats, teams);
})
</script>

<template>
  <div class="team-cards__container">
    <TeamCard v-for="teamStats, i in teamsStats" :key="teamStats.team.name" v-bind="teamStats" :position="i + 1" />
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