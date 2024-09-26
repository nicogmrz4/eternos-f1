import * as drivers from "@/static/drivers"
import { DriverResult } from "@/models/driverResult"

export const azerbaijanGPResult = [
	new DriverResult(drivers.PIOR).setPos(1).setStartingPos(1),
	new DriverResult(drivers.GROBA).setPos(2).setStartingPos(4),
	new DriverResult(drivers.DAMITOX).setPos(3).setStartingPos(2),
	new DriverResult(drivers.NICOGMERZ4).setPos(4).setStartingPos(11),
	new DriverResult(drivers.KURI).setPos(5).setStartingPos(10),
	new DriverResult(drivers.FACU).setPos(6).setStartingPos(10).setFastLap(),
	new DriverResult(drivers.EMMA).setPos(7).setStartingPos(5),
	new DriverResult(drivers.FACULANUS).setPos(8).setStartingPos(6).setDNF(),
	new DriverResult(drivers.SEBA_HUNTER).setPos(9).setStartingPos(12).setDNF(),
	new DriverResult(drivers.RYU).setPos(10).setStartingPos(7).setDNF(),
	new DriverResult(drivers.MAX).setPos(11).setStartingPos(9).setDNF(),
	new DriverResult(drivers.BLADEBAHIA).setPos(12).setStartingPos(8).setDNF(),
	new DriverResult(drivers.EMI).setPos(13).setStartingPos(13).setDNF(),
];