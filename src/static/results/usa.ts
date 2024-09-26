import * as drivers from "@/static/drivers"
import { DriverResult } from "@/models/driverResult"

export const usaGPResult = [
	new DriverResult(drivers.FACULANUS).setPos(1).setStartingPos(8),
	new DriverResult(drivers.PIOR).setPos(2).setStartingPos(3),
	new DriverResult(drivers.EMMA).setPos(3).setStartingPos(5),
	new DriverResult(drivers.FACU).setPos(4).setStartingPos(4),
	new DriverResult(drivers.DAMITOX).setPos(5).setStartingPos(2).setFastLap(),
	new DriverResult(drivers.KURI).setPos(6).setStartingPos(6),
	new DriverResult(drivers.LUCY).setPos(7).setStartingPos(1).noCleanRace(),
	new DriverResult(drivers.SEBA_HUNTER).setPos(8).setStartingPos(10),
	new DriverResult(drivers.RYU).setPos(9).setStartingPos(9),
	new DriverResult(drivers.MAX).setPos(10).setStartingPos(11),
	new DriverResult(drivers.EMI).setPos(11).setStartingPos(12).setDNF(),
	new DriverResult(drivers.NICOGMERZ4).setPos(12).setStartingPos(7).setDNF(),
];