import type { DriverInterface } from "@/interfaces/driver";

export interface DriverStatsInterface {
  driver: DriverInterface
  fastLaps: number
  poles: number
  points: number
}