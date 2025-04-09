import { DriverStatsDTO } from "@/dto/driverStatsDTO";
import type { DriverStatsInterface } from "@/interfaces/driverStats";
import type { Driver } from "@/dto/driverDTO";
import type { DriverInterface } from "@/interfaces/driver";
import { driverPositionAvg, driverStartPositionAvg, calcResultPoints, calcResultStats } from "@/utils";
import type { TrackInterface } from "@/interfaces/track";

// Tracks're important because it has the results

export function calcDriverStats(driver: DriverInterface, tracks: TrackInterface[], options: any): DriverStatsInterface {
  const stats: DriverStatsDTO = new DriverStatsDTO(driver);
  const racedTracks = tracks.filter((track) => track.isRaced == true);

  racedTracks.forEach((track, i) => {
    const result = track.results?.find((result) => result.driver.id == driver.id);
    if (!result) return;
    stats.points += calcResultPoints(result, track.isSprint, options);
    const cautions = track.cautions.filter((caution) => caution.driver_id == driver.id);
    stats.addStats(calcResultStats(result, cautions));
    stats.results.push(result);
  });

  stats.positionAvg = driverPositionAvg(stats.results);
  stats.startPositionAvg = driverStartPositionAvg(stats.results);
  stats.pointsAvg = Number((stats.points / stats.races).toFixed(1));
  stats.attendanceAvg = Number((stats.races * 100 / racedTracks.length).toFixed(1));

  return stats;
}

export function calcDriverPenultimateStats(driver: Driver, tracks: TrackInterface[], options: any): DriverStatsInterface {
  const stats: DriverStatsDTO = new DriverStatsDTO(driver);
  const racedTracks = tracks.filter((track) => track.isRaced == true);

  racedTracks.splice(racedTracks.length - 1, 1);
  racedTracks.forEach((track) => {
    const result = track.results?.find((result) => result.driver.id == driver.id);
    if (!result) return;
    stats.points += calcResultPoints(result, track.isSprint, options);
    const cautions = track.cautions.filter((caution) => caution.driver_id == driver.id);
    stats.addStats(calcResultStats(result, cautions));
    stats.results.push(result);
  });

  stats.positionAvg = driverPositionAvg(stats.results);
  stats.startPositionAvg = driverStartPositionAvg(stats.results);
  stats.pointsAvg = Number((stats.points / stats.races).toFixed(2));
  stats.attendanceAvg = Number((stats.races / racedTracks.length).toFixed(2));

  return stats;
}

export function calcDriversStats(tracks: TrackInterface[], drivers: DriverInterface[], options: any): DriverStatsInterface[][] {
  let driverStats: DriverStatsDTO[] = [];
  let driversStatsPerRace: DriverStatsDTO[][] = [];
  const racedTracks = tracks.filter((track) => track.isRaced);

  racedTracks.forEach((track, trackIndex) => {
    driversStatsPerRace[trackIndex] = [];
    drivers.forEach((driver) => {
      const stats: DriverStatsDTO = new DriverStatsDTO(driver);
      const result = track.results?.find((result) => result.driver.id == driver.id);

      if (result) {
        const cautions = track.cautions.filter((caution) => caution.driver_id == driver.id);
        console.log(cautions);
        stats.addStats(calcResultStats(result, cautions));
        stats.points += calcResultPoints(result, track.isSprint, options);
        stats.results.push(result);
      }

      if (trackIndex > 0) {
        const prevResult = driversStatsPerRace[trackIndex - 1].find((stats) => stats.driver.id == driver.id);
        if (!prevResult) return;
        stats.addStats(prevResult);
        stats.results.unshift(...prevResult.results);
      }

      stats.positionAvg = driverPositionAvg(stats.results);
      stats.startPositionAvg = driverStartPositionAvg(stats.results);
      stats.pointsAvg = Number((stats.points / stats.races).toFixed(1));
      stats.attendanceAvg = Number((stats.races / racedTracks.length * 100).toFixed(1));
      
      driversStatsPerRace[trackIndex].push(stats);
    });

    driversStatsPerRace[trackIndex] = sortStats(driversStatsPerRace[trackIndex]);
    if (trackIndex > 0) {
      driversStatsPerRace[trackIndex].forEach((stat) => {
        stat.lastPosition = driversStatsPerRace[trackIndex - 1].findIndex((s) => s.driver.id == stat.driver.id) + 1;
      });
    }
  })

  if (driversStatsPerRace.length == 0) {
    driversStatsPerRace[0] = drivers.map((driver) => new DriverStatsDTO(driver));
  }

  return driversStatsPerRace;
}

export function calcDriversPenultimateStats(tracks: TrackInterface[], drivers: DriverInterface[], options: any): DriverStatsInterface[] {
  let driverStats: DriverStatsDTO[] = [];
  drivers.forEach((driver) => {
    const stats: DriverStatsDTO = calcDriverPenultimateStats(driver, tracks, options);
    driverStats.push(stats);
  });
  driverStats = sortStats(driverStats);
  return driverStats;
}

function whoHasBetterResults(a: DriverStatsInterface, b: DriverStatsInterface) {
  for (let i = 1; i <= 20; i++) {
    const aResults = a.results.filter((result) => result.position == i).length;
    const bResults = b.results.filter((result) => result.position == i).length;
    if (aResults == bResults) continue;
    return bResults - aResults;
  }
  return 0;
}

function sortStats(statsArr: DriverStatsInterface[]) {
  statsArr.sort((a, b) => b.races - a.races);
  return statsArr.sort((a, b) => {
    if (a.points == b.points) return whoHasBetterResults(a, b);
    return b.points - a.points;
  });
}