<script setup lang="ts">
import Points from './atoms/Points.vue'
import { type DriverInterface } from '@/interfaces/driver';

const props = defineProps({
    driver: Object as () => DriverInterface,
    poles: Number,
    points: Number,
    fastLaps: Number,
    position: Number
});

console.log(props.driver)
</script>

<template>
    <div class="driver-card">
        <span class="driver-card__position">{{ position }}</span>
        <img class="driver-card__avatar" :src="driver?.avatar">
        <div class="driver-card__info">
            <span class="name">{{ driver?.name }}</span>
            <span class="team card-text-muted">{{ driver?.team }}</span>
        </div>
        <Points class="driver-card__points" :points="points"/>
    </div>
</template>

<style scoped>
.driver-card {
    display: flex;
    align-items: center;
    gap: var(--card-padding);
    background-color: var(--card-color);
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    overflow: hidden;
    position: relative;
    transition: opacity 0.2s ease-out, transform 0.2s ease-out;
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

.driver-card__points {
    margin-left: auto;
}

.driver-card:hover {
    transform: scale(1.05);
}
</style>