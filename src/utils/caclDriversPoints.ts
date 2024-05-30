import tracks from "@/static/tracks";
import { drivers } from "@/static/drivers";
import { DriverStatsDTO } from "@/dto/driverStatsDTO";
import points from "@/static/points";
import type { DriverStatsInterface } from "@/interfaces/driverStats";

export function calcDriversPoints(): DriverStatsInterface[] {
  let driverStats: DriverStatsDTO[] = [];
  drivers.forEach((driver) => {
    let stats: DriverStatsDTO = new DriverStatsDTO(driver);

    // Find each track that the driver has raced and plus his points
    const racedTracks = tracks.filter((track) => track.isRaced == true);
    racedTracks.forEach((track) => {
      let result = track.result?.find(
        (result) => result.driver.id == driver.id
      );
      if (result == undefined) return;
      stats.races++;
      if (result!.position <= 10) stats.points += points[result!.position - 1]; // Points for the first 10 positions
      if (result!.fastLap) stats.fastLaps++;
      if (result!.fastLap && result!.position <= 10) stats.points++;
      if (result!.startingPosition == 1) stats.poles++;
      if (result!.position == 1) stats.wins++;
      if (result!.position <= 3) stats.podiums++;
      stats.results.push(result!.position);
    });

    driverStats.push(stats);

    driverStats.sort((a, b) => {
      if (a.points == b.points) return whoHasBetterResults(a, b);
      return b.points - a.points;
    });
  });

  const penultimatePoints = calcDriversPenultimatePoints();
  penultimatePoints.forEach((penultimate, i) => {
    driverStats.forEach(stats => {
      if (stats.driver.id == penultimate.driver.id) {
        stats.lastPosition = i + 1;
        return;
      }
    });
  });

  return driverStats;
}

function calcDriversPenultimatePoints(): DriverStatsInterface[] {
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
      if (result == undefined) return;
      stats.races++;
      if (result!.position <= 10) stats.points += points[result!.position - 1]; // Points for the first 10 positions
      if (result!.fastLap) stats.fastLaps++;
      if (result!.fastLap && result!.position <= 10) stats.points++;
      if (result!.startingPosition == 1) stats.poles++;
      if (result!.position == 1) stats.wins++;
      if (result!.position <= 3) stats.podiums++;
      stats.results.push(result!.position);
    });

    driverStats.push(stats);

    driverStats.sort((a, b) => {
      if (a.points == b.points) return whoHasBetterResults(a, b);
      return b.points - a.points;
    });
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