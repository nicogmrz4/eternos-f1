<script setup lang="ts">
import Badge from '@/components/atoms/Badge.vue';
import type { DriverResultInterface } from '@/interfaces/driverResult';
import { ref } from 'vue';

interface Props {
    order: number,
    name: string,
    circuit: string,
    flag: string,
    isRaced: boolean,
    result: DriverResultInterface[]
}

const props = defineProps<Props>();
const showResult = ref(false);
</script>

<template>
    <div :class="['track-card', isRaced ? 'pointer' : ' ']" @click="showResult = !showResult">
        <span class="track-card__order">#{{ order }}</span>
        <span :class="[flag, 'track-card__flag']"></span>
        <div class="track-card__info">
            <div class="name">{{ name }}</div>
            <div class="circuit card-text-muted">{{ circuit }}</div>
        </div>
        <Badge class="track-card__status" :color="isRaced ? 'success' : 'pending'">
            {{ isRaced ? 'Completada' : 'Pendiente' }}
        </Badge>
        <Transition>
            <div v-if="showResult && isRaced" class="track-card__result">
                <div v-for="r in result" :key="r.driver.id"
                    :class="['driver-result', r.dnf ? 'dnf' : '', r.fastLap ? 'fast-lap' : '']">
                    <span class="pos">{{ r.dnf ? 'DNF' : r.position }}</span>
                    <span class="name">{{ r.driver.name }}</span>
                    <span class="team">{{ r.driver.team }}</span>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.track-card {
    display: flex;
    flex-wrap: wrap;
    background-color: var(--card-color);
    align-items: center;
    gap: var(--card-padding);
    background-color: var(--card-color);
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    transition: opacity 0.2s ease-out, transform 0.2s ease-out;
    overflow: hidden;
}

.pointer {
    cursor: pointer;
}

.track-card--raced {
    opacity: .6;
}

.track-card__order {
    width: 25px;
    font-size: 20px;
    font-weight: 700;
}

.track-card__info {
    display: flex;
    flex-direction: column;
}

.track-card__info > .name {
    font-size: 18px;
    font-weight: 500;
    height: 20px;
}

.track-card__info > .circuit {
    font-size: 12px;
    font-weight: 100;
}

.track-card__flag {
    box-sizing: content-box;
    font-size: 28px;
    border-radius: 10%;
    border: 2px solid #fff;
}

.track-card__status {
    margin-left: auto;
}

.track-card__result {
    width: 100%;
}

.driver-result {
    display: flex;
    padding: 1px 12px;
}

.driver-result > .pos {
    width: 40px;
}

.driver-result > .name {
    width: 120px;
}

.dnf {
    opacity: .6;
}

.fast-lap {
    font-weight: 700;
    background-color: #c92bdf;
    border-radius: 8px;
}


.v-enter-from {
    max-height: 0;
    opacity: 0;
}

.v-enter-active {
    transition: max-height 400ms linear, opacity 0.2s ease-out 150ms;
}

.v-enter-to {
    max-height: 500px;
    opacity: 1;
}

.v-leave-from {
    max-height: 500px;
    opacity: 1;
}

.v-leave-active {
    transition: max-height 400ms linear, opacity 0.2s ease-in;
}

.v-leave-to {
    max-height: 0;
    opacity: 0;
}
</style>