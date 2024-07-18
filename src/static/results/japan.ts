import * as drivers from "@/static/drivers"
import { DriverResultDTO } from "@/dto/driverResultDTO"

export const japanGPResult = [
	new DriverResultDTO(drivers.DAMITOX).setPos(1).setStartingPos(4).setFastLap(),
	new DriverResultDTO(drivers.SHINO).setPos(2).setStartingPos(14),
	new DriverResultDTO(drivers.FACULANUS).setPos(3).setStartingPos(7),
	new DriverResultDTO(drivers.PIOR).setPos(4).setStartingPos(5),
	new DriverResultDTO(drivers.KURI).setPos(5).setStartingPos(8),
	new DriverResultDTO(drivers.NICOGMERZ4).setPos(6).setStartingPos(6),
	new DriverResultDTO(drivers.COLO).setPos(7).setStartingPos(2).noCleanRace(),
	new DriverResultDTO(drivers.JULIAN_SOSA).setPos(8).setStartingPos(1),
	new DriverResultDTO(drivers.RYU).setPos(9).setStartingPos(9),
	new DriverResultDTO(drivers.MAX).setPos(10).setStartingPos(11),
	new DriverResultDTO(drivers.GROBA).setPos(11).setStartingPos(3).setDNF(),
	new DriverResultDTO(drivers.BLADEBAHIA).setPos(12).setStartingPos(12).setDNF(),
	new DriverResultDTO(drivers.EMI).setPos(13).setStartingPos(15).setDNF(),
	new DriverResultDTO(drivers.SEBA_HUNTER).setPos(14).setStartingPos(10).setDNF(),
	new DriverResultDTO(drivers.EMMA).setPos(15).setStartingPos(13).setDNF(),
];