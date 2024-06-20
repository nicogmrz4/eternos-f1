import type { DriverInterface } from "./driver";

export interface DriverResultInterface {
  position: number,
  startingPosition: number,
  fastLap: boolean,
  dnf: boolean,
  cleanRace: boolean,
  driver: DriverInterface
}