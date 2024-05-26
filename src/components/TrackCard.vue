<script setup lang="ts">
import Badge from '@/components/atoms/Badge.vue';
import type { DriverResultInterface } from '@/interfaces/driverResult';
const props = defineProps({
    order: Number,
    name: String,
    circuit: String,
    flag: String,
    isRaced: Boolean,
    result: () => Array<DriverResultInterface>
});
</script>

<template>
    <div class="track-card">
        <span class="track-card__order">#{{ order  }}</span>
        <span :class="[flag, 'track-card__flag']"></span>
        <div class="track-card__info">
            <div class="name">{{ name }}</div>
            <div class="circuit card-text-muted">{{ circuit }}</div>
        </div>
        <Badge class="track-card__status" :color="isRaced ? 'success' : 'pending'">
            {{ isRaced ? 'Completada' : 'Pendiente'  }}
        </Badge>
    </div>
</template>

<style scoped>
.track-card {
    display: flex;
    background-color: var(--card-color);
    align-items: center;
    gap: var(--card-padding);
    background-color: var(--card-color);
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    transition: opacity 0.2s ease-out, transform 0.2s ease-out;
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
</style>