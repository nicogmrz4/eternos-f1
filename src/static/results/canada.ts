import * as drivers from "@/static/drivers"
import { DriverResult } from "@/models/driverResult"

export const canadaGPResult = [
	new DriverResult(drivers.PIOR).setPos(1).setStartingPos(1),
	new DriverResult(drivers.EMMA).setPos(2).setStartingPos(3),
	new DriverResult(drivers.DAMITOX).setPos(3).setStartingPos(2),
	new DriverResult(drivers.RYU).setPos(4).setStartingPos(6),
	new DriverResult(drivers.FACULANUS).setPos(5).setStartingPos(5).setFastLap(),
	new DriverResult(drivers.NICOGMERZ4).setPos(6).setStartingPos(4),
	new DriverResult(drivers.MAX).setPos(7).setStartingPos(7),
	new DriverResult(drivers.KURI).setPos(8).setStartingPos(8),
	new DriverResult(drivers.EMI).setPos(9).setStartingPos(9).setDNF(),
	new DriverResult(drivers.SEBA_HUNTER).setPos(10).setStartingPos(10).setDNF(),
	new DriverResult(drivers.GALLA).setPos(11).setStartingPos(11).setDNF(),
	new DriverResult(drivers.BLADEBAHIA).setPos(12).setStartingPos(12).setDNF(),
];