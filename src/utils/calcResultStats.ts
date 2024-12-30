import { DriverStatsDTO } from "@/dto/driverStatsDTO";
import type { DriverResultInterface } from "@/interfaces/driverResult";
import type { DriverStatsInterface } from "@/interfaces/driverStats";
import { positions } from "@/utils";

export function calcResultStats(result: DriverResultInterface): DriverStatsInterface {
  const stats = new DriverStatsDTO(result.driver);
  stats.races++;

  if (result.cautions) { // this condition is here to avoid errors because old results have no cautions
    stats.penaltyPoints += result.cautions.reduce((a, b) => a + b.points, 0);
  }

  if (result.dnf || result.dsq) return stats;
  if (result.fastLap) stats.fastLaps++;
  if (result.startingPosition == positions.FIRST) stats.poles++;
  if (result.position == positions.FIRST) stats.wins++;
  if (result.position <= positions.THIRD) stats.podiums++;
  if (result.cleanRace) stats.cleanRaces++;

  return stats;
}