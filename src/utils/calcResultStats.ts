import { DriverStats } from "@/models/driverStats";
import type { DriverResultInterface } from "@/interfaces/driverResult";
import type { DriverStatsInterface } from "@/interfaces/driverStats";
import { positions } from "@/utils";

export function calcResultStats(result: DriverResultInterface): DriverStatsInterface {
  const stats = new DriverStats(result.driver);
  stats.races++;
  if (result.dnf) return stats;
  if (result.fastLap) stats.fastLaps++;
  if (result.startingPosition == positions.FIRST) stats.poles++;
  if (result.position == positions.FIRST) stats.wins++;
  if (result.position <= positions.THIRD) stats.podiums++;
  if (result.cleanRace) stats.cleanRaces++;

  return stats;
}