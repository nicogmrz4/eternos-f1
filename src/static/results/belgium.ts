import * as drivers from "@/static/drivers"
import { DriverResultDTO } from "@/dto/driverResultDTO"

export const belgiumGPResult = [
	new DriverResultDTO(drivers.EMMA).setPos(1).setStartingPos(2),
	new DriverResultDTO(drivers.DAMITOX).setPos(2).setStartingPos(1).setFastLap(),
	new DriverResultDTO(drivers.SEBA_HUNTER).setPos(3).setStartingPos(9),
	new DriverResultDTO(drivers.RYU).setPos(4).setStartingPos(5),
	new DriverResultDTO(drivers.NICOGMERZ4).setPos(5).setStartingPos(4),
	new DriverResultDTO(drivers.KURI).setPos(6).setStartingPos(3).setDNF(),
	new DriverResultDTO(drivers.MAX).setPos(7).setStartingPos(7).setDNF(),
	new DriverResultDTO(drivers.FACU).setPos(8).setStartingPos(11).setDNF(),
	new DriverResultDTO(drivers.PEPPA).setPos(9).setStartingPos(6).setDNF(),
	new DriverResultDTO(drivers.BLADEBAHIA).setPos(10).setStartingPos(8).setDNF(),
	new DriverResultDTO(drivers.EMI).setPos(11).setStartingPos(10).setDNF(),
];