import * as drivers from "@/static/drivers"
import { DriverResultDTO } from "@/dto/driverResultDTO"

export const singaporeGPResult = [
	new DriverResultDTO(drivers.DAMITOX).setPos(1).setStartingPos(2),
	new DriverResultDTO(drivers.FACU).setPos(2).setStartingPos(1).setFastLap(),
	new DriverResultDTO(drivers.EMMA).setPos(3).setStartingPos(3),
	new DriverResultDTO(drivers.NICOGMERZ4).setPos(4).setStartingPos(4),
	new DriverResultDTO(drivers.KURI).setPos(5).setStartingPos(5),
	new DriverResultDTO(drivers.BLADEBAHIA).setPos(6).setStartingPos(9),
	new DriverResultDTO(drivers.RYU).setPos(7).setStartingPos(12),
	new DriverResultDTO(drivers.JULIAN_SOSA).setPos(8).setStartingPos(7),
	new DriverResultDTO(drivers.FACULANUS).setPos(9).setStartingPos(11),
	new DriverResultDTO(drivers.MAX).setPos(10).setStartingPos(8),
	new DriverResultDTO(drivers.PEPPA).setPos(11).setStartingPos(6),
	new DriverResultDTO(drivers.EMI).setPos(12).setStartingPos(10),
];