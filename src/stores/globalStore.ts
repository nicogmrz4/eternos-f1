import type { TeamInterface } from "@/interfaces/team";
import type { TrackInterface } from "@/interfaces/track";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useGlobalStore = defineStore("global", () => {
  const showPositions: Ref<boolean> = ref(false);
  const tracks: Ref<TrackInterface[]> = ref([]);
  const teams: Ref<TeamInterface[]> = ref([]);
  const currentSeason: Ref<string> = ref("season-7");
  const lastUpdate = '15122024' // ddmmyyyy

  function toggleShowPositions() {
    showPositions.value = !showPositions.value;
  }

  function setCurrentSeason(season: string) {
    currentSeason.value = season;
  }

  async function fetchTracks(): Promise<any> {
    const response = await fetch(`data/${currentSeason.value}.json?v=${lastUpdate}`);
    return await response.json();
  }

  function setTracks(val: TrackInterface[]) {
    tracks.value = val;
  }

  function setTeams(val: TeamInterface[]) {
    teams.value = val;
  }

  return {
    tracks,
    teams,
    setTracks,
    setTeams,
    showPositions,
    currentSeason,
    toggleShowPositions,
    setCurrentSeason,
    fetchTracks,
  };
});
