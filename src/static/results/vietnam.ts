import * as drivers from "@/static/drivers"
import { DriverResultDTO } from "@/dto/driverResultDTO"

export const vietnamGPResult = [
	new DriverResultDTO(drivers.DAMITOX).setPos(1).setStartingPos(1),
	new DriverResultDTO(drivers.NICOGMERZ4).setPos(2).setStartingPos(4),
	new DriverResultDTO(drivers.EMMA).setPos(3).setStartingPos(2),
	new DriverResultDTO(drivers.SEBA_HUNTER).setPos(4).setStartingPos(6).noCleanRace(),
	new DriverResultDTO(drivers.RYU).setPos(5).setStartingPos(5),
	new DriverResultDTO(drivers.KURI).setPos(6).setStartingPos(7),
	new DriverResultDTO(drivers.JULIAN_SOSA).setPos(7).setStartingPos(3),
	new DriverResultDTO(drivers.MAX).setPos(8).setStartingPos(8),
	new DriverResultDTO(drivers.EMI).setPos(9).setStartingPos(9),
];