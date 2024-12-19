import type { DriverInterface } from "./driver";

export interface DriverResultInterface {
  position: number,
  startingPosition: number,
  fastLap: boolean,
  dnf: boolean,
  dsq: boolean,
  cleanRace: boolean,
  driver: DriverInterface
}