import tracks from "@/static/tracks";
import { drivers } from "@/static/drivers";
import { DriverStatsDTO } from "@/dto/driverStatsDTO";
import points from "@/static/points";
import type { DriverStatsInterface } from "@/interfaces/driverStats";
import type { DriverResultInterface } from "@/interfaces/driverResult";
import type { Driver } from "@/dto/driverDTO";
import type { DriverInterface } from "@/interfaces/driver";

const MAX_POINTABLE_POSITIONS = 15;
const MAX_POINTS_PER_GAINED_POSITION = 3;
const CLEAN_RACE_POINTS = 2;
const POLE_POINTS = 2;

export function calcDriverStats(driver: DriverInterface): DriverStatsInterface {
  const stats: DriverStatsDTO = new DriverStatsDTO(driver);
  const racedTracks = tracks.filter((track) => track.isRaced == true);

  racedTracks.forEach((track, i) => {
    const result = track.result?.find((result) => result.driver.id == driver.id);
    if (!result) return;
    sumStats(stats, result);
  });

  return stats;
}

export function calcDriverPenultimateStats(driver: Driver): DriverStatsInterface {
  const stats: DriverStatsDTO = new DriverStatsDTO(driver);
  const racedTracks = tracks.filter((track) => track.isRaced == true);

  racedTracks.splice(racedTracks.length - 1, 1);
  racedTracks.forEach((track) => {
    const result = track.result?.find((result) => result.driver.id == driver.id);
    if (!result) return;
    sumStats(stats, result);
  });

  return stats;
}

export function calcDriversStats(): DriverStatsInterface[] {
  let driverStats: DriverStatsDTO[] = [];
  drivers.forEach((driver) => {
    const stats: DriverStatsDTO = calcDriverStats(driver);
    driverStats.push(stats);
    driverStats = sortStats(driverStats);
  });

  const penultimatePoints = calcDriversPenultimateStats();
  penultimatePoints.forEach((penultimate, i) => {
    driverStats.forEach(stats => {
      if (stats.driver.id == penultimate.driver.id && stats.races > 1) {
        stats.lastPosition = i + 1;
        return;
      }
    });
  });

  return driverStats;
}

export function calcDriversPenultimateStats(): DriverStatsInterface[] {
  let driverStats: DriverStatsDTO[] = [];
  drivers.forEach((driver) => {
    const stats: DriverStatsDTO = calcDriverPenultimateStats(driver);
    driverStats.push(stats);
  });
  driverStats = sortStats(driverStats);
  return driverStats;
}

function whoHasBetterResults(a: DriverStatsInterface, b: DriverStatsInterface) {
  for (let i = 1; i <= 20; i++) {
    const aResults = a.results.filter((result) => result == i).length;
    const bResults = b.results.filter((result) => result == i).length;
    if (aResults == bResults) continue;
    return bResults - aResults;
  }
  return 0;
}

function sumStats(stats: DriverStatsInterface, result: DriverResultInterface) {
  stats.races++;
  if (result!.dnf) return;
  if (result!.position <= MAX_POINTABLE_POSITIONS) stats.points += points[result!.position - 1];
  if (result!.fastLap) stats.fastLaps++;
  if (result!.fastLap && result!.position <= MAX_POINTABLE_POSITIONS) stats.points++;
  if (result!.startingPosition == 1) {
    stats.poles++;
    stats.points += POLE_POINTS;
  }
  if (result!.position == 1) stats.wins++;
  if (result!.position <= 3) stats.podiums++;
  if (result!.startingPosition - result!.position > 0) {
    stats.points += Math.min(MAX_POINTS_PER_GAINED_POSITION, result!.startingPosition - result!.position);
  } 
  if (result!.cleanRace) stats.points += CLEAN_RACE_POINTS;
  stats.results.push(result!.position);
}

function sortStats(statsArr: DriverStatsInterface[]) {
  statsArr.sort((a, b) => b.races - a.races);
  return statsArr.sort((a, b) => {
    if (a.points == b.points) return whoHasBetterResults(a, b);
    return b.points - a.points;
  });
}