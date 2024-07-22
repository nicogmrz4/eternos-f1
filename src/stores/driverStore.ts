import type { DriverStatsInterface } from "@/interfaces/driverStats";
import { calcDriversStats } from "@/utils/calcDriversPoints";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useDriverStore = defineStore("useDriverStore", () => {
  const driversStats: Ref<DriverStatsInterface[]> = ref(calcDriversStats());
  return {
    driversStats,
  };
});
