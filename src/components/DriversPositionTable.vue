<script setup lang="ts">
import DriverCard from '@/components/DriverCard.vue';
import { ref, type Ref } from 'vue';
import tracks from '@/static/tracks';
import { drivers } from '@/static/drivers';
import type { DriverStatsInterface } from '@/interfaces/driverStats';
import points from '@/static/points';
import { DriverStatsDTO } from '@/dto/driverStatsDTO';

let driverStats: Ref<DriverStatsInterface[]> = ref([]);

// Calc drivers points
drivers.forEach(driver => {
    let stats: DriverStatsDTO = new DriverStatsDTO(driver);

    tracks.forEach(track => {
        if (track.isRaced == false) return;
        let result = track.result?.find(result => result.driver.id == driver.id);
        stats.races++;
        if (points[result!.position -1]) stats.points += points[result!.position -1];
        if (result!.fastLap) stats.fastLaps++;
        if (result!.fastLap && result!.position <= 10) stats.points++;
        if (result!.startingPosition == 1) stats.poles++;
        if (result!.position == 1) stats.wins++;
        if (result!.position <= 3) stats.podiums++;
    });

    driverStats.value.push(stats);

    driverStats.value.sort((a, b) => {
        return b.points - a.points;
    });
});
</script>

<template>
    <div class="driver-cards__container">
        <DriverCard 
            v-for="driverStat, i in driverStats" :key="driverStat.driver.id"
            v-bind="driverStat" 
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

.driver-cards__container:hover > .driver-card:not(:hover) {
    opacity: .4;
}
</style>