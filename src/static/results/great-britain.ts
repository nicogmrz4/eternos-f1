import * as drivers from "@/static/drivers"
import { DriverResult } from "@/models/driverResult"

export const greatBritain = [
	new DriverResult(drivers.GROBA).setPos(1).setStartingPos(16),
	new DriverResult(drivers.PIOR).setPos(2).setStartingPos(3),
	new DriverResult(drivers.NICOGMERZ4).setPos(3).setStartingPos(4).noCleanRace(),
	new DriverResult(drivers.COLO).setPos(4).setStartingPos(2),
	new DriverResult(drivers.DAMITOX).setPos(5).setStartingPos(1).setFastLap(),
	new DriverResult(drivers.SHINO).setPos(6).setStartingPos(8),
	new DriverResult(drivers.FACULANUS).setPos(7).setStartingPos(5),
	new DriverResult(drivers.SEBA_HUNTER).setPos(8).setStartingPos(9),
	new DriverResult(drivers.EMMA).setPos(9).setStartingPos(6),
	new DriverResult(drivers.JACKO).setPos(10).setStartingPos(7),
	new DriverResult(drivers.KURI).setPos(11).setStartingPos(15),
	new DriverResult(drivers.GALLA).setPos(12).setStartingPos(10).setDNF(),
	new DriverResult(drivers.EMI).setPos(13).setStartingPos(14).setDNF(),
	new DriverResult(drivers.BLADEBAHIA).setPos(14).setStartingPos(11).setDNF(),
	new DriverResult(drivers.LUCY).setPos(15).setStartingPos(12).setDNF(),
	new DriverResult(drivers.JULIAN_SOSA).setPos(16).setStartingPos(17).setDNF(),
	new DriverResult(drivers.JUANMA).setPos(17).setStartingPos(13).setDNF(),
	new DriverResult(drivers.MAX).setPos(18).setStartingPos(18).setDNF(),
];