import * as drivers from "@/static/drivers"
import { DriverResultDTO } from "@/dto/driverResultDTO"

export const azerbaijanGPResult = [
	new DriverResultDTO(drivers.PIOR).setPos(1).setStartingPos(1),
	new DriverResultDTO(drivers.GROBA).setPos(2).setStartingPos(4),
	new DriverResultDTO(drivers.DAMITOX).setPos(3).setStartingPos(2),
	new DriverResultDTO(drivers.NICOGMERZ4).setPos(4).setStartingPos(11),
	new DriverResultDTO(drivers.KURI).setPos(5).setStartingPos(10),
	new DriverResultDTO(drivers.FACU).setPos(6).setStartingPos(10).setFastLap(),
	new DriverResultDTO(drivers.EMMA).setPos(7).setStartingPos(5),
	new DriverResultDTO(drivers.FACULANUS).setPos(8).setStartingPos(6).setDNF(),
	new DriverResultDTO(drivers.SEBA_HUNTER).setPos(9).setStartingPos(12).setDNF(),
	new DriverResultDTO(drivers.RYU).setPos(10).setStartingPos(7).setDNF(),
	new DriverResultDTO(drivers.MAX).setPos(11).setStartingPos(9).setDNF(),
	new DriverResultDTO(drivers.BLADEBAHIA).setPos(12).setStartingPos(8).setDNF(),
	new DriverResultDTO(drivers.EMI).setPos(13).setStartingPos(13).setDNF(),
];