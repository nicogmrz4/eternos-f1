<script setup lang="ts">
import DriverCard from '@/components/DriverCard.vue';
import type { DriverStatsInterface } from '@/interfaces/driverStats';
import DriverStatsModal from './molecules/DriverStatsModal.vue';
import { useDriverStore } from '@/stores/driverStore';
import { useGlobalStore } from '@/stores/globalStore';
import { onMounted, ref, type Ref } from 'vue';
import { calcDriversStats } from '@/utils/calcDriversPoints';

const driversStats: Ref<DriverStatsInterface[]> = ref([]);
const { fetchTracks } = useGlobalStore();

onMounted(async () => {
    const { tracks, drivers } = await fetchTracks();
    const historyStats = calcDriversStats(tracks, drivers);
    driversStats.value = historyStats[historyStats.length - 1];
});
</script>

<template>
    <DriverStatsModal />
    <div class="driver-cards__container">
        <DriverCard 
            v-for="driverStats, i in driversStats"
            :key="i"
            v-bind="driverStats" 
            :driver-stats="driverStats" 
            :position="i + 1" 
        />
    </div>
</template>

<style scoped>
.driver-cards__container {
    display: flex;
    flex-direction: column;
    gap: var(--card-list-gap);
}

@media screen and (min-width: 768px) {
    .driver-cards__container:hover > .driver-card:not(:hover) {
        opacity: .4;
    }
}

</style>