import * as drivers from "@/static/drivers"
import { DriverResultDTO } from "@/dto/driverResultDTO"

export const spainGPResult = [
	new DriverResultDTO(drivers.EMMA).setPos(1).setStartingPos(6),
	new DriverResultDTO(drivers.DAMITOX).setPos(2).setStartingPos(2),
	new DriverResultDTO(drivers.NICOGMERZ4).setPos(3).setStartingPos(9),
	new DriverResultDTO(drivers.LUCY).setPos(4).setStartingPos(1).setFastLap(),
	new DriverResultDTO(drivers.KURI).setPos(5).setStartingPos(8),
	new DriverResultDTO(drivers.JULIAN_SOSA).setPos(6).setStartingPos(5),
	new DriverResultDTO(drivers.JACKO).setPos(7).setStartingPos(10),
	new DriverResultDTO(drivers.FACULANUS).setPos(8).setStartingPos(7),
	new DriverResultDTO(drivers.BLADEBAHIA).setPos(9).setStartingPos(13),
	new DriverResultDTO(drivers.MAX).setPos(10).setStartingPos(19),
	new DriverResultDTO(drivers.SHINO).setPos(11).setStartingPos(18).setDNF(),
	new DriverResultDTO(drivers.JUANMA).setPos(12).setStartingPos(17),
	new DriverResultDTO(drivers.EMI).setPos(13).setStartingPos(14).setDNF(),
	new DriverResultDTO(drivers.RYU).setPos(14).setStartingPos(15).setDNF(),
	new DriverResultDTO(drivers.GROBA).setPos(15).setStartingPos(4).setDNF(),
	new DriverResultDTO(drivers.PABLITO).setPos(16).setStartingPos(16).setDNF(),
	new DriverResultDTO(drivers.COLO).setPos(17).setStartingPos(3).setDNF(),
	new DriverResultDTO(drivers.SEBA_HUNTER).setPos(18).setStartingPos(12).setDNF(),
	new DriverResultDTO(drivers.GALLA).setPos(19).setStartingPos(11).setDNF(),
];