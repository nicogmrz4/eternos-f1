import * as drivers from "@/static/drivers"
import { DriverResult } from "@/models/driverResult"

export const abuDabiGPResult = [
	new DriverResult(drivers.DAMITOX).setPos(1).setStartingPos(1),
	new DriverResult(drivers.EMMA).setPos(2).setStartingPos(2),
	new DriverResult(drivers.NICOGMERZ4).setPos(3).setStartingPos(4),
	new DriverResult(drivers.FACULANUS).setPos(4).setStartingPos(8).setFastLap(),
	new DriverResult(drivers.PIOR).setPos(5).setStartingPos(3),
	new DriverResult(drivers.RYU).setPos(6).setStartingPos(6),
	new DriverResult(drivers.SEBA_HUNTER).setPos(7).setStartingPos(11),
	new DriverResult(drivers.MAX).setPos(8).setStartingPos(9),
	new DriverResult(drivers.EMI).setPos(9).setStartingPos(10).setDNF(),
	new DriverResult(drivers.FACU).setPos(10).setStartingPos(5).setDNF(),
	new DriverResult(drivers.BLADEBAHIA).setPos(11).setStartingPos(7).setDNF(),
];