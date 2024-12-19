<script setup lang="ts">
import TeamsPositionTable from '@/components/TeamsPositionTable.vue';
import { useGlobalStore } from '@/stores/globalStore';
import { computed } from 'vue';

const globalStore = useGlobalStore();
const isPreseason = computed(() => globalStore.currentSeason.startsWith('pre'));
</script>

<template>
    <div>
        <Transition name="change" mode="out-in">
            <div :key="globalStore.currentSeason">
                <div v-if="!isPreseason">
                    <h1>Campeonato de constructores</h1>
                    <TeamsPositionTable/>
                </div>
                <div v-else>
                    <h1>Las pretemporadas no tienen equipos</h1>
                </div>
            </div>
        </Transition>
    </div>
</template>


<style scoped>
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