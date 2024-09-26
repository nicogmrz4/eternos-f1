import * as drivers from "@/static/drivers"
import { DriverResult } from "@/models/driverResult"

export const japanGPResult = [
	new DriverResult(drivers.DAMITOX).setPos(1).setStartingPos(4).setFastLap(),
	new DriverResult(drivers.SHINO).setPos(2).setStartingPos(14),
	new DriverResult(drivers.FACULANUS).setPos(3).setStartingPos(7),
	new DriverResult(drivers.PIOR).setPos(4).setStartingPos(5),
	new DriverResult(drivers.KURI).setPos(5).setStartingPos(8),
	new DriverResult(drivers.NICOGMERZ4).setPos(6).setStartingPos(6),
	new DriverResult(drivers.COLO).setPos(7).setStartingPos(2).noCleanRace(),
	new DriverResult(drivers.JULIAN_SOSA).setPos(8).setStartingPos(1),
	new DriverResult(drivers.RYU).setPos(9).setStartingPos(9),
	new DriverResult(drivers.MAX).setPos(10).setStartingPos(11),
	new DriverResult(drivers.GROBA).setPos(11).setStartingPos(3).setDNF(),
	new DriverResult(drivers.BLADEBAHIA).setPos(12).setStartingPos(12).setDNF(),
	new DriverResult(drivers.EMI).setPos(13).setStartingPos(15).setDNF(),
	new DriverResult(drivers.SEBA_HUNTER).setPos(14).setStartingPos(10).setDNF(),
	new DriverResult(drivers.EMMA).setPos(15).setStartingPos(13).setDNF(),
];