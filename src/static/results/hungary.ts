import type { DriverResultInterface } from "@/interfaces/driverResult"
import * as drivers from "../drivers"
import { DriverResultDTO } from "@/dto/driverResultDTO"

export const hungaryGPResult: DriverResultInterface[] = [
  new DriverResultDTO(1, 2, false, false, drivers.JOHN),
  new DriverResultDTO(2, 3, false, false, drivers.ALEXANDER),
  new DriverResultDTO(3, 5, true, false, drivers.OLIVIA),
  new DriverResultDTO(4, 4, false, false, drivers.WILLIAM),
  new DriverResultDTO(5, 6, false, false, drivers.MICHAEL),
  new DriverResultDTO(6, 7, false, false, drivers.LUIS),
  new DriverResultDTO(7, 1, false, false, drivers.AVA),
  new DriverResultDTO(8, 10, false, false, drivers.EMMA),
  new DriverResultDTO(9, 11, false, false, drivers.JAMES),
  new DriverResultDTO(10, 9, false, true, drivers.SOFIA),
  new DriverResultDTO(11, 8, false, true, drivers.MIA),
]