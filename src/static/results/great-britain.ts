import * as drivers from "@/static/drivers"
import { DriverResultDTO } from "@/dto/driverResultDTO"

export const greatBritain = [
	new DriverResultDTO(drivers.GROBA).setPos(1).setStartingPos(16),
	new DriverResultDTO(drivers.PIOR).setPos(2).setStartingPos(3),
	new DriverResultDTO(drivers.NICOGMERZ4).setPos(3).setStartingPos(4).noCleanRace(),
	new DriverResultDTO(drivers.COLO).setPos(4).setStartingPos(2),
	new DriverResultDTO(drivers.DAMITOX).setPos(5).setStartingPos(1).setFastLap(),
	new DriverResultDTO(drivers.SHINO).setPos(6).setStartingPos(8),
	new DriverResultDTO(drivers.FACULANUS).setPos(7).setStartingPos(5),
	new DriverResultDTO(drivers.SEBA_HUNTER).setPos(8).setStartingPos(9),
	new DriverResultDTO(drivers.EMMA).setPos(9).setStartingPos(6),
	new DriverResultDTO(drivers.JACKO).setPos(10).setStartingPos(7),
	new DriverResultDTO(drivers.KURI).setPos(11).setStartingPos(15),
	new DriverResultDTO(drivers.GALLA).setPos(12).setStartingPos(10).setDNF(),
	new DriverResultDTO(drivers.EMI).setPos(13).setStartingPos(14).setDNF(),
	new DriverResultDTO(drivers.BLADEBAHIA).setPos(14).setStartingPos(11).setDNF(),
	new DriverResultDTO(drivers.LUCY).setPos(15).setStartingPos(12).setDNF(),
	new DriverResultDTO(drivers.JULIAN_SOSA).setPos(16).setStartingPos(17).setDNF(),
	new DriverResultDTO(drivers.JUANMA).setPos(17).setStartingPos(13).setDNF(),
	new DriverResultDTO(drivers.MAX).setPos(18).setStartingPos(18).setDNF(),
];