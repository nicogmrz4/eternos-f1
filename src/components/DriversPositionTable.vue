<script setup lang="ts">
import DriverCard from '@/components/DriverCard.vue';
import driversTable from '@/static/driversTable';
import { ref } from 'vue';

const data = ref(driversTable);

data.value.sort((a, b) => {
    if (a.points > b.points) {
        return -1;
    }
    if (a.points == b.points && a.poles > b.poles) {
        return -1;
    }
    if (a.points == b.points && a.poles == b.poles && a.fastLaps > b.fastLaps) {
        return -1;
    }
    return 1;
});
</script>

<template>
    <div class="driver-cards__container">
        <DriverCard 
            v-for="driver, i in data" :key="driver.driver.name"
            v-bind="driver" 
            :position="i + 1" 
        />
    </div>
</template>

<style scoped>
.driver-cards__container {
    display: flex;
    flex-direction: column;
    gap: var(--card-list-gap);
}

.driver-cards__container:hover > .driver-card:not(:hover) {
    opacity: .4;
}
</style>