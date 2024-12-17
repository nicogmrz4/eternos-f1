<script setup lang="ts">
import TrackCard from '@/components/TrackCard.vue'
import { useGlobalStore } from '@/stores/globalStore';
import { storeToRefs } from 'pinia';

const { tracks } = storeToRefs(useGlobalStore());
</script>

<template>
    <div class="tracks-list__container">
        <TrackCard v-for="track, i in tracks" :key="track.name" v-bind="track" :order="i + 1" />
    </div>
</template>

<style scoped>
.tracks-list__container {
    display: flex;
    flex-direction: column;
    gap: var(--card-list-gap);
}
@media screen and (min-width: 768px) {
    .tracks-list__container:hover > .track-card:not(:hover) {
        opacity: .4;
    }
}
</style>