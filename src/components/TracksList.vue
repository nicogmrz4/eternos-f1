<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import tracks from '@/static/tracks';
import TrackCard from '@/components/TrackCard.vue'
import type { TrackInterface } from '@/interfaces/track';
import { useGlobalStore } from '@/stores/globalStore';

const data: Ref<TrackInterface[]> = ref(tracks);
const { fetchTracks } = useGlobalStore();

onMounted(async () => {
    const { tracks } = await fetchTracks();
    data.value = tracks
});
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
@media screen and (min-width: 768px) {
    .tracks-list__container:hover > .track-card:not(:hover) {
        opacity: .4;
    }
}
</style>