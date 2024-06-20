import tracks from "@/static/tracks";
import { drivers } from "@/static/drivers";
import { DriverStatsDTO } from "@/dto/driverStatsDTO";
import points from "@/static/points";
import type { DriverStatsInterface } from "@/interfaces/driverStats";
import type { DriverResultInterface } from "@/interfaces/driverResult";

export function calcDriversPoints(): DriverStatsInterface[] {
  let driverStats: DriverStatsDTO[] = [];
  drivers.forEach((driver) => {
    let stats: DriverStatsDTO = new DriverStatsDTO(driver);

    // Find each track that the driver has raced and plus his points
    const racedTracks = tracks.filter((track) => track.isRaced == true);
    racedTracks.forEach((track, i) => {
      let result = track.result?.find(
        (result) => result.driver.id == driver.id
      );
      if (!result) return;
      sumStats(stats, result);
    });

    driverStats.push(stats);

    driverStats = sortStats(driverStats);
  });

  const penultimatePoints = calcDriversPenultimatePoints();
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

export function calcDriversPenultimatePoints(): DriverStatsInterface[] {
  let driverStats: DriverStatsDTO[] = [];
  drivers.forEach((driver) => {
    let stats: DriverStatsDTO = new DriverStatsDTO(driver);

    // Find each track that the driver has raced and plus his points
    let racedTracks = tracks.filter((track) => track.isRaced == true);
    racedTracks.splice(racedTracks.length - 1, 1);
    racedTracks.forEach((track) => {
      let result = track.result?.find(
        (result) => result.driver.id == driver.id
      );
      if (!result) return;
      sumStats(stats, result);
    });

    driverStats.push(stats);

    driverStats = sortStats(driverStats);
  });
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
  if (result!.position <= 10) stats.points += points[result!.position - 1]; // Points for the first 10 positions
  if (result!.fastLap) stats.fastLaps++;
  if (result!.fastLap && result!.position <= 10) stats.points++;
  if (result!.startingPosition == 1) stats.poles++;
  if (result!.position == 1) stats.wins++;
  if (result!.position <= 3) stats.podiums++;
  stats.results.push(result!.position);
}

function sortStats(statsArr: DriverStatsInterface[]) {
  return statsArr.sort((a, b) => {
    if (a.points == b.points) return whoHasBetterResults(a, b);
    return b.points - a.points;
  });
}