import * as drivers from "@/static/drivers"
import { DriverResultDTO } from "@/dto/driverResultDTO"

export const usaGPResult = [
	new DriverResultDTO(drivers.FACULANUS).setPos(1).setStartingPos(8),
	new DriverResultDTO(drivers.PIOR).setPos(2).setStartingPos(3),
	new DriverResultDTO(drivers.EMMA).setPos(3).setStartingPos(5),
	new DriverResultDTO(drivers.FACU).setPos(4).setStartingPos(4),
	new DriverResultDTO(drivers.DAMITOX).setPos(5).setStartingPos(2).setFastLap(),
	new DriverResultDTO(drivers.KURI).setPos(6).setStartingPos(6),
	new DriverResultDTO(drivers.LUCY).setPos(7).setStartingPos(1).noCleanRace(),
	new DriverResultDTO(drivers.SEBA_HUNTER).setPos(8).setStartingPos(10),
	new DriverResultDTO(drivers.RYU).setPos(9).setStartingPos(9),
	new DriverResultDTO(drivers.MAX).setPos(10).setStartingPos(11),
	new DriverResultDTO(drivers.EMI).setPos(11).setStartingPos(12).setDNF(),
	new DriverResultDTO(drivers.NICOGMERZ4).setPos(12).setStartingPos(7).setDNF(),
];