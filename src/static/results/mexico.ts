import * as drivers from "@/static/drivers"
import { DriverResult } from "@/models/driverResult"

export const mexicoGPResult = [
	new DriverResult(drivers.PIOR).setPos(1).setStartingPos(3),
	new DriverResult(drivers.GROBA).setPos(2).setStartingPos(2),
	new DriverResult(drivers.FACULANUS).setPos(3).setStartingPos(9),
	new DriverResult(drivers.DAMITOX).setPos(4).setStartingPos(1),
	new DriverResult(drivers.KURI).setPos(5).setStartingPos(4),
	new DriverResult(drivers.NICOGMERZ4).setPos(6).setStartingPos(7),
	new DriverResult(drivers.JACKO).setPos(7).setStartingPos(11),
	new DriverResult(drivers.JULIAN_SOSA).setPos(8).setStartingPos(6),
	new DriverResult(drivers.BLADEBAHIA).setPos(9).setStartingPos(14),
	new DriverResult(drivers.RYU).setPos(10).setStartingPos(10),
	new DriverResult(drivers.SEBA_HUNTER).setPos(11).setStartingPos(13),
	new DriverResult(drivers.MAX).setPos(12).setStartingPos(12),
	new DriverResult(drivers.EMI).setPos(13).setStartingPos(15),
	new DriverResult(drivers.EL_COLIMBAA).setPos(14).setStartingPos(5).setDNF(),
	new DriverResult(drivers.COLO).setPos(15).setStartingPos(5).setDNF(),
];