<script setup lang="ts">
import DriverCard from '@/components/DriverCard.vue';
import DriverStatsModal from './molecules/DriverStatsModal.vue';
import { useDriverStore } from '@/stores/driverStore';
import { storeToRefs } from 'pinia';
import { Transition } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';

const driverStore = useDriverStore();
const { driversStats } = storeToRefs(useDriverStore());
const globalStore = useGlobalStore();

</script>

<template>
    <DriverStatsModal />
    <Transition name="change" mode="out-in">
        <div class="driver-cards__container" :key="globalStore.currentSeason">
            <DriverCard 
                v-for="driverStats, i in driversStats"
                :key="i"
                v-bind="driverStats" 
                :driver-stats="driverStats" 
                :position="i + 1" 
            />
        </div>
    </Transition>
</template>

<style>
.driver-cards__container {
    display: flex;
    flex-direction: column;
    gap: var(--card-list-gap);
}

@media screen and (min-width: 768px) {
    .driver-cards__container:hover > .driver-card__container:not(:hover) {
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