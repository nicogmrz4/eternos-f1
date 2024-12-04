import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useGlobalStore = defineStore("global", () => {
  const showPositions: Ref<boolean> = ref(false);
  const currentSeason: Ref<string> = ref("season-7");

  function toggleShowPositions() {
    showPositions.value = !showPositions.value;
  }

  function setCurrentSeason(season: string) {
    currentSeason.value = season;
  }

  async function fetchTracks(): Promise<any> {
    const response = await fetch(`data/${currentSeason.value}.json`);
    return await response.json();
  }

  return {
    showPositions,
    currentSeason,
    toggleShowPositions,
    setCurrentSeason,
    fetchTracks,
  };
});
