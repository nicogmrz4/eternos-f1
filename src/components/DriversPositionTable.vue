<script setup lang="ts">
import DriverCard from '@/components/DriverCard.vue';
import DriverStatsModal from './molecules/DriverStatsModal.vue';
import { useDriverStore } from '@/stores/driverStore';
import { storeToRefs } from 'pinia';

const driverStore = useDriverStore();
const { driversStats } = storeToRefs(useDriverStore());

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

<style>
.driver-cards__container {
    display: flex;
    flex-direction: column;
    gap: var(--card-list-gap);
}

@media screen and (min-width: 768px) {
    .driver-cards__container:hover > .driver-card__container:not(:hover) {
        opacity: .6;
    }
    .driver-cards__container:hover > .divider {
        opacity: .6;
    }
}

</style>