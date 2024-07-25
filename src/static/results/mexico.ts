import * as drivers from "@/static/drivers"
import { DriverResultDTO } from "@/dto/driverResultDTO"

export const mexicoGPResult = [
	new DriverResultDTO(drivers.PIOR).setPos(1).setStartingPos(3),
	new DriverResultDTO(drivers.GROBA).setPos(2).setStartingPos(2),
	new DriverResultDTO(drivers.FACULANUS).setPos(3).setStartingPos(9),
	new DriverResultDTO(drivers.DAMITOX).setPos(4).setStartingPos(1),
	new DriverResultDTO(drivers.KURI).setPos(5).setStartingPos(4),
	new DriverResultDTO(drivers.NICOGMERZ4).setPos(6).setStartingPos(7),
	new DriverResultDTO(drivers.JACKO).setPos(7).setStartingPos(11),
	new DriverResultDTO(drivers.JULIAN_SOSA).setPos(8).setStartingPos(6),
	new DriverResultDTO(drivers.BLADEBAHIA).setPos(9).setStartingPos(14),
	new DriverResultDTO(drivers.RYU).setPos(10).setStartingPos(10),
	new DriverResultDTO(drivers.SEBA_HUNTER).setPos(11).setStartingPos(13),
	new DriverResultDTO(drivers.MAX).setPos(12).setStartingPos(12),
	new DriverResultDTO(drivers.EMI).setPos(13).setStartingPos(15),
	new DriverResultDTO(drivers.EL_COLIMBAA).setPos(14).setStartingPos(5).setDNF(),
	new DriverResultDTO(drivers.COLO).setPos(15).setStartingPos(5).setDNF(),
];