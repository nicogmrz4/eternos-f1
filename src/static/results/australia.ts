import * as drivers from "@/static/drivers"
import { DriverResultDTO } from "@/dto/driverResultDTO"

export const australiaGPResult = [
	new DriverResultDTO(drivers.EMMA).setPos(1).setStartingPos(3),
	new DriverResultDTO(drivers.NICOGMERZ4).setPos(2).setStartingPos(2),
	new DriverResultDTO(drivers.DAMITOX).setPos(3).setStartingPos(1),
	new DriverResultDTO(drivers.SEBA_HUNTER).setPos(4).setStartingPos(7),
	new DriverResultDTO(drivers.PEPPA).setPos(5).setStartingPos(8),
	new DriverResultDTO(drivers.RYU).setPos(6).setStartingPos(5),
	new DriverResultDTO(drivers.KURI).setPos(7).setStartingPos(4).setFastLap(),
	new DriverResultDTO(drivers.EMI).setPos(8).setStartingPos(9).setDNF(),
	new DriverResultDTO(drivers.FACULANUS).setPos(9).setStartingPos(6).setDNF(),
];