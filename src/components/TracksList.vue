<script setup lang="ts">
import TrackCard from '@/components/TrackCard.vue'
import { useGlobalStore } from '@/stores/globalStore';
import { storeToRefs } from 'pinia';

const { tracks, currentSeason } = storeToRefs(useGlobalStore());
</script>

<template>
    <Transition name="change" mode="out-in">
        <div class="tracks-list__container" :key="currentSeason">
            <TrackCard v-for="track, i in tracks" :key="track.name" v-bind="track" :order="i + 1" />
        </div>
    </Transition>
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