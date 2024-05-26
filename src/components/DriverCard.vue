<script setup lang="ts">
import { ref } from 'vue';
import Points from './atoms/Points.vue'
import { type DriverInterface } from '@/interfaces/driver';

const props = defineProps({
    driver: Object as () => DriverInterface,
    poles: Number,
    points: Number,
    fastLaps: Number,
    position: Number,
    podiums: Number,
    races: Number,
    wins: Number,
});

const showStats = ref(false);
</script>

<template>
    <div class="driver-card" @click="showStats = !showStats">
        <span class="driver-card__position">{{ position }}</span>
        <img class="driver-card__avatar" :src="driver?.avatar">
        <div class="driver-card__info">
            <span class="name">{{ driver?.name }}</span>
            <span class="team card-text-muted">{{ driver?.team }}</span>
        </div>
        <Points class="driver-card__points" :points="points" />
        <Transition>
            <div v-if="showStats" class="driver-card__stats">
                <div class="stat card-text-muted">
                    <span class="stat__value">{{ races }}</span>
                    <span class="stat__label">Carreras</span>
                </div>                
                <div class="stat card-text-muted">
                    <span class="stat__value">{{ wins }}</span>
                    <span class="stat__label">Victorias</span>
                </div>
                <div class="stat card-text-muted">
                    <span class="stat__value">{{ fastLaps }}</span>
                    <span class="stat__label">Vueltas r.</span>
                </div>
                <div class="stat card-text-muted">
                    <span class="stat__value">{{ poles }}</span>
                    <span class="stat__label">Poles</span>
                </div>
                <div class="stat card-text-muted">
                    <span class="stat__value">{{ podiums }}</span>
                    <span class="stat__label">Podios</span>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.driver-card {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--card-padding);
    background-color: var(--card-color);
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    overflow: hidden;
    position: relative;
    transition: opacity 0.2s ease-out, transform 0.2s ease-out;
    cursor: pointer;
}

.driver-card__position {
    width: 25px;
    text-align: center;
    font-size: 22px;
    font-weight: 900;
}

.driver-card__avatar {
    width: 40px;
    height: 40px;
    border-radius: 10%;
    margin-bottom: 0;
}

.driver-card__info {
    display: flex;
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

.driver-card__stats {
    width: 100%;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
    transition: height 0.2s ease-out;
}

.driver-card__stats > .stat {
    display: flex;
    gap: 8px;
    flex-direction: column;
    align-items: center;
}

.driver-card__stats > .stat > .stat__value {
    font-weight: 700;
    font-size: 22px;
    height: 20px;
    color: white;
}

.driver-card__stats > .stat > .stat__label {
    font-weight: 100;
    font-size: 12px;
}


.driver-card__points {
    margin-left: auto;
}

/* .driver-card:hover {
    transform: scale(1.05);
} */

.v-enter-from {
    max-height: 0;
    opacity: 0;
}

.v-enter-active {
    transition: max-height 200ms linear, opacity 0.2s ease-out 150ms;
}

.v-enter-to {
    max-height: 90px;
    opacity: 1;
}

.v-leave-from {
    max-height: 90px;
    opacity: 1;
}

.v-leave-active {
    transition: max-height 200ms linear, opacity 0.2s ease-in;
}

.v-leave-to {
    max-height: 0;
    opacity: 0;
}

</style>