<template>
  <Modal v-model="compareWithModal" title="Comparar con">
    <div class="drivers__container">
      <Button v-for="d in driverStatsWithoutSourceAndTarget" :key="d.driver.id" @click="onClickDriver(d)">
        {{ d.driver.name }}
      </Button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/atoms/Modal.vue';
import type { DriverStatsInterface } from '@/interfaces/driverStats';
import { useDriverStore } from '@/stores/driverStore';
import { storeToRefs } from 'pinia';
import Button from '@/components/atoms/Button.vue';
import { computed } from 'vue';

const driverStore = useDriverStore();
const { compareWithModal, driversStats, sourceDriverStats, targetDriverStats } = storeToRefs(driverStore);
const { setTargetDriver, hideCompareWithModal } = driverStore;

const onClickDriver = (driverStats: DriverStatsInterface) => {
  setTargetDriver(driverStats);
  hideCompareWithModal();
}

const driverStatsWithoutSourceAndTarget = computed(() => {
  return driversStats.value.filter(d => d.driver.id !== sourceDriverStats.value?.driver.id && d.driver.id !== targetDriverStats.value?.driver.id)
});
</script>

<style scoped>
.driver {
  cursor: pointer;
  padding: 4px 0;
  border-radius: 4px;
  text-decoration: underline;
}

.drivers__container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>