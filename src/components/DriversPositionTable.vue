<script setup lang="ts">
import DriverCard from '@/components/DriverCard.vue';
import { ref, type Ref } from 'vue';
import type { DriverStatsInterface } from '@/interfaces/driverStats';
import DriverStatsModal from './molecules/DriverStatsModal.vue';
import { useDriverStore } from '@/stores/driverStore';

const { driversStats } = useDriverStore();
</script>

<template>    
    <DriverStatsModal />
    <div class="driver-cards__container">
        <DriverCard 
            v-for="driverStats, i in driversStats" :key="driverStats.driver.id"
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