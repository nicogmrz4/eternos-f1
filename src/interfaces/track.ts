import type { DriverResultInterface } from "./driverResult"

export interface TrackInterface {
  name: string
  circuit: string,
  flag: string
  isRaced: boolean
  results: DriverResultInterface[]
}