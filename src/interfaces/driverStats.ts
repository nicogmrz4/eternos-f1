import type { DriverInterface } from "@/interfaces/driver";

export interface DriverStatsInterface {
  driver: DriverInterface
  races: number
  wins: number
  podiums: number
  fastLaps: number
  poles: number
  points: number
  results: number[]
  lastPosition: number | null
}