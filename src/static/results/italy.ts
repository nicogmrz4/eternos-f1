import * as drivers from "@/static/drivers"
import { DriverResult } from "@/models/driverResult"

export const italyGPResult = [
	new DriverResult(drivers.EMMA).setPos(1).setStartingPos(2),
	new DriverResult(drivers.DAMITOX).setPos(2).setStartingPos(6),
	new DriverResult(drivers.NICOGMERZ4).setPos(3).setStartingPos(3).noCleanRace(),
	new DriverResult(drivers.FACULANUS).setPos(4).setStartingPos(7),
	new DriverResult(drivers.RYU).setPos(5).setStartingPos(5),
	new DriverResult(drivers.SEBA_HUNTER).setPos(6).setStartingPos(11),
	new DriverResult(drivers.KURI).setPos(7).setStartingPos(4),
	new DriverResult(drivers.MAX).setPos(8).setStartingPos(9),
	new DriverResult(drivers.FACU).setPos(9).setStartingPos(1).setDNF(),
	new DriverResult(drivers.BLADEBAHIA).setPos(10).setStartingPos(8).setDNF(),
	new DriverResult(drivers.EMI).setPos(11).setStartingPos(10).setDNF(),
];