import * as drivers from "@/static/drivers"
import { DriverResultDTO } from "@/dto/driverResultDTO"

export const canadaGPResult = [
	new DriverResultDTO(drivers.PIOR).setPos(1).setStartingPos(1),
	new DriverResultDTO(drivers.EMMA).setPos(2).setStartingPos(3),
	new DriverResultDTO(drivers.DAMITOX).setPos(3).setStartingPos(2),
	new DriverResultDTO(drivers.RYU).setPos(4).setStartingPos(6),
	new DriverResultDTO(drivers.FACULANUS).setPos(5).setStartingPos(5).setFastLap(),
	new DriverResultDTO(drivers.NICOGMERZ4).setPos(6).setStartingPos(4),
	new DriverResultDTO(drivers.MAX).setPos(7).setStartingPos(7),
	new DriverResultDTO(drivers.KURI).setPos(8).setStartingPos(8),
	new DriverResultDTO(drivers.EMI).setPos(9).setStartingPos(9).setDNF(),
	new DriverResultDTO(drivers.SEBA_HUNTER).setPos(10).setStartingPos(10).setDNF(),
	new DriverResultDTO(drivers.GALLA).setPos(11).setStartingPos(11).setDNF(),
	new DriverResultDTO(drivers.BLADEBAHIA).setPos(12).setStartingPos(12).setDNF(),
];