import * as drivers from "@/static/drivers"
import { DriverResultDTO } from "@/dto/driverResultDTO"

export const italyGPResult = [
	new DriverResultDTO(drivers.EMMA).setPos(1).setStartingPos(2),
	new DriverResultDTO(drivers.DAMITOX).setPos(2).setStartingPos(6),
	new DriverResultDTO(drivers.NICOGMERZ4).setPos(3).setStartingPos(3).noCleanRace(),
	new DriverResultDTO(drivers.FACULANUS).setPos(4).setStartingPos(7),
	new DriverResultDTO(drivers.RYU).setPos(5).setStartingPos(5),
	new DriverResultDTO(drivers.SEBA_HUNTER).setPos(6).setStartingPos(11),
	new DriverResultDTO(drivers.KURI).setPos(7).setStartingPos(4),
	new DriverResultDTO(drivers.MAX).setPos(8).setStartingPos(9),
	new DriverResultDTO(drivers.FACU).setPos(9).setStartingPos(1).setDNF(),
	new DriverResultDTO(drivers.BLADEBAHIA).setPos(10).setStartingPos(8).setDNF(),
	new DriverResultDTO(drivers.EMI).setPos(11).setStartingPos(10).setDNF(),
];