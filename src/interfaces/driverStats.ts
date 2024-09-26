import type { DriverInterface } from "@/interfaces/driver";
import type { DriverResultInterface } from "./driverResult";

export interface DriverStatsInterface {
  driver: DriverInterface
  races: number
  wins: number
  podiums: number
  fastLaps: number
  poles: number
  cleanRaces: number
  attendanceAvg: number
  pointsAvg: number
  startPositionAvg: number
  positionAvg: number
  points: number
  results: DriverResultInterface[]
  lastPosition: number | null
  addStats(stats: DriverStatsInterface): void
  subtractStats(stats: DriverStatsInterface): void
}