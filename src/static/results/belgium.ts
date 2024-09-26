import * as drivers from "@/static/drivers"
import { DriverResult } from "@/models/driverResult"

export const belgiumGPResult = [
	new DriverResult(drivers.EMMA).setPos(1).setStartingPos(2),
	new DriverResult(drivers.DAMITOX).setPos(2).setStartingPos(1).setFastLap(),
	new DriverResult(drivers.SEBA_HUNTER).setPos(3).setStartingPos(9),
	new DriverResult(drivers.RYU).setPos(4).setStartingPos(5),
	new DriverResult(drivers.NICOGMERZ4).setPos(5).setStartingPos(4),
	new DriverResult(drivers.KURI).setPos(6).setStartingPos(3).setDNF(),
	new DriverResult(drivers.MAX).setPos(7).setStartingPos(7).setDNF(),
	new DriverResult(drivers.FACU).setPos(8).setStartingPos(11).setDNF(),
	new DriverResult(drivers.PEPPA).setPos(9).setStartingPos(6).setDNF(),
	new DriverResult(drivers.BLADEBAHIA).setPos(10).setStartingPos(8).setDNF(),
	new DriverResult(drivers.EMI).setPos(11).setStartingPos(10).setDNF(),
];