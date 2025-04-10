import type { Caution } from "./caution"
import type { DriverResultInterface } from "./driverResult"

export interface TrackInterface {
  name: string
  circuit: string
  cautions: Caution[]
  flag: string
  isRaced: boolean
  results: DriverResultInterface[]
  isSprint?: boolean
  isOfficial?: boolean
  placement: number
}