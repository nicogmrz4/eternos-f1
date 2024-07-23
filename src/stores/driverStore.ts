import type { DriverStatsInterface } from "@/interfaces/driverStats";
import { calcDriversStats } from "@/utils/calcDriversPoints";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useDriverStore = defineStore("driverStore", () => {
  const driversStats: Ref<DriverStatsInterface[]> = ref(calcDriversStats());
  const driverStatsModal: Ref<boolean> = ref(false);
  const compareWithModal: Ref<boolean> = ref(false);
  const sourceDriverStats: Ref<DriverStatsInterface | null> = ref(null);
  const targetDriverStats: Ref<DriverStatsInterface | null> = ref(null);

  const showDriverStatsModal = function() {
    targetDriverStats.value = null;
    driverStatsModal.value = true;
  }
  const hideDriverStatsModal = function() {
    driverStatsModal.value = false;
  }
  const showCompareWithModal = function() {
    compareWithModal.value = true;
  }
  const hideCompareWithModal = function() {
    compareWithModal.value = false;
  }
  const setSourceDriver = function(driver: DriverStatsInterface) {
    sourceDriverStats.value = driver;
  }
  const setTargetDriver = function(driver: DriverStatsInterface) {
    targetDriverStats.value = driver;
  }

  const removeTargetDriver = function() {
    targetDriverStats.value = null;
  }

  return {
    driversStats,
    driverStatsModal,
    compareWithModal,
    sourceDriverStats,
    targetDriverStats,
    showDriverStatsModal,
    hideDriverStatsModal,
    showCompareWithModal,
    hideCompareWithModal,
    setSourceDriver,
    setTargetDriver,
    removeTargetDriver
  };
});
