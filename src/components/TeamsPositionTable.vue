<script setup lang="ts">
import { computed, onMounted, ref, watch, type Ref } from 'vue';
import TeamCard from '@/components/TeamCard.vue';
import type { TeamStats } from '@/dto/teamStats';
import { calcTeamPoints } from '@/utils/calcTeamPoints';
import { useGlobalStore } from '@/stores/globalStore';
import { storeToRefs } from 'pinia';
import { useDriverStore } from '@/stores/driverStore';

const teamsStats: Ref<TeamStats[]> = ref([]);
const { driversStatsHistory } = storeToRefs(useDriverStore());
const globalStore = useGlobalStore();

watch(() => globalStore.teams, () => {
  teamsStats.value = calcTeamPoints(driversStatsHistory.value, globalStore.teams);
});

onMounted(async () => {
  teamsStats.value = calcTeamPoints(driversStatsHistory.value, globalStore.teams);
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

.change-enter-active,
.change-leave-active {
  transition: all 0.5s ease;
}

.change-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.change-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.change-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>