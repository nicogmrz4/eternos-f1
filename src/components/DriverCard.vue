<script setup lang="ts">
import { ref } from 'vue';
import Points from './atoms/Points.vue'
import PositionChange from './atoms/PositionChange.vue'
import PositionAndDiff from './molecules/PositionAndDiff.vue'
import { type DriverInterface } from '@/interfaces/driver';
import { useDriverStore } from '@/stores/driverStore';
import type { DriverStatsInterface } from '@/interfaces/driverStats';
import Position from './atoms/Position.vue';

interface Props {
    driver: DriverInterface
    poles: number
    points: number
    fastLaps: number
    position: number
    lastPosition: number | null,
    podiums: number
    races: number
    wins: number
    driverStats: DriverStatsInterface
}

const props = defineProps<Props>();

const showStats = ref(false);
const driverStore = useDriverStore();
const onClick = () => {
    driverStore.setSourceDriver(props.driverStats);
    driverStore.showDriverStatsModal();
}
</script>

<template>
    <div class="driver-card__container">
        <Position :position="position" />
        <PositionChange :diff="lastPosition ? lastPosition - position! : 0" />
        <div class="driver-card" @click="onClick">
            <img class="driver-card__avatar" :src="driver?.team.avatar">
            <div class="driver-card__info">
                <span class="name">{{ driver?.name }}</span>
                <span class="team card-text-muted">{{ driver?.team.name }}</span>
            </div>
            <Points class="driver-card__points" :points="points" />
        </div>
    </div>
</template>

<style scoped>
.driver-card__container {
    display: flex;
    align-items: center; 
    flex: 1 1 100%;
    flex-wrap: wrap;
    gap: .25em;
}

.driver-card__container::after {
    content: "";
    flex: 0 0 100%;
    width: 100%;
    border-bottom: 1px solid var(--card-color);
}

.driver-card__container:last-child::after {
    border-bottom: none;
}

.driver-card {
    flex: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--card-padding);
    /* background-color: var(--card-color); */
    border-radius: var(--card-border-radius);
    padding: 4px 8px;
    overflow: hidden;
    position: relative;
    transition: opacity 0.2s ease-out, transform 0.2s ease-out;
    cursor: pointer;
}

.driver-card__avatar {
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin-bottom: 0;
    object-fit: contain;
}

.driver-card__info {
    display: flex;
    width: 100%;
    max-width: 150px;
    flex-direction: column;
    justify-content: center;
}

.driver-card__info > .name {
    font-size: 18px;
    font-weight: 500;
    height: 20px;
}

.driver-card__info > .team {
    font-size: 12px;
    font-weight: 100;
}

.driver-card__points {
    margin-left: auto;
}

</style>