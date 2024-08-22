import * as drivers from "@/static/drivers"
import { DriverResultDTO } from "@/dto/driverResultDTO"

export const abuDabiGPResult = [
	new DriverResultDTO(drivers.DAMITOX).setPos(1).setStartingPos(1),
	new DriverResultDTO(drivers.EMMA).setPos(2).setStartingPos(2),
	new DriverResultDTO(drivers.NICOGMERZ4).setPos(3).setStartingPos(4),
	new DriverResultDTO(drivers.FACULANUS).setPos(4).setStartingPos(8).setFastLap(),
	new DriverResultDTO(drivers.PIOR).setPos(5).setStartingPos(3),
	new DriverResultDTO(drivers.RYU).setPos(6).setStartingPos(6),
	new DriverResultDTO(drivers.SEBA_HUNTER).setPos(7).setStartingPos(11),
	new DriverResultDTO(drivers.MAX).setPos(8).setStartingPos(9),
	new DriverResultDTO(drivers.EMI).setPos(9).setStartingPos(10).setDNF(),
	new DriverResultDTO(drivers.FACU).setPos(10).setStartingPos(5).setDNF(),
	new DriverResultDTO(drivers.BLADEBAHIA).setPos(11).setStartingPos(7).setDNF(),
];