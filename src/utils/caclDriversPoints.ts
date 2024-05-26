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
    tracks.forEach((track) => {
      if (track.isRaced == false) return;
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
    });

    driverStats.push(stats);

    driverStats.sort((a, b) => {
      return b.points - a.points;
    });
  });
  return driverStats;
}
