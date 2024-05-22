<script setup lang="ts">
import { ref } from 'vue';
import tracks from '@/static/tracks';
import TrackCard from '@/components/TrackCard.vue'

const data = ref(tracks);
</script>

<template>
    <div class="tracks-list__container">
        <TrackCard v-for="track, i in data" :key="track.name" v-bind="track" :order="i + 1" />
    </div>
</template>

<style scoped>
.tracks-list__container {
    display: flex;
    flex-direction: column;
    gap: var(--card-list-gap);
}
</style>