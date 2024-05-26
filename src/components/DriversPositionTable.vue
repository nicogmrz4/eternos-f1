<script setup lang="ts">
import DriverCard from '@/components/DriverCard.vue';
import { ref, type Ref } from 'vue';
import type { DriverStatsInterface } from '@/interfaces/driverStats';
import { calcDriversPoints } from '@/utils/caclDriversPoints';

let driversStats: Ref<DriverStatsInterface[]> = ref(calcDriversPoints());
</script>

<template>
    <div class="driver-cards__container">
        <DriverCard 
            v-for="driverStats, i in driversStats" :key="driverStats.driver.id"
            v-bind="driverStats" 
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