import type { DriverResultInterface } from "@/interfaces/driverResult"
import * as drivers from "../drivers"
import { DriverResultDTO } from "@/dto/driverResultDTO"

export const belgiumGPResult: DriverResultInterface[] = [
  new DriverResultDTO(1, 5, false, false, drivers.OLIVIA),
  new DriverResultDTO(2, 2, true, false, drivers.ALEXANDER),
  new DriverResultDTO(3, 1, false, false, drivers.AVA),
  new DriverResultDTO(4, 6, false, false, drivers.JAMES),
  new DriverResultDTO(5, 7, false, false, drivers.EMMA),
  new DriverResultDTO(6, 5, false, false, drivers.JOHN),
  new DriverResultDTO(7, 4, false, false, drivers.MICHAEL),
  new DriverResultDTO(9, 3, false, false, drivers.WILLIAM),
  new DriverResultDTO(8, 8, false, true, drivers.MIA),
  new DriverResultDTO(10, 10, false, true, drivers.SOFIA),
]