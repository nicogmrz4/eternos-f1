import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useGlobalStore = defineStore('global', () => {
  const showPositions: Ref<boolean> = ref(false);

  function toggleShowPositions() {
    showPositions.value = !showPositions.value;
  }

  return { showPositions, toggleShowPositions };
})