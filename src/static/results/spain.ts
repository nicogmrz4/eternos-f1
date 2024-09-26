import * as drivers from "@/static/drivers"
import { DriverResult } from "@/models/driverResult"

export const spainGPResult = [
	new DriverResult(drivers.EMMA).setPos(1).setStartingPos(6),
	new DriverResult(drivers.DAMITOX).setPos(2).setStartingPos(2),
	new DriverResult(drivers.NICOGMERZ4).setPos(3).setStartingPos(9),
	new DriverResult(drivers.LUCY).setPos(4).setStartingPos(1).setFastLap(),
	new DriverResult(drivers.KURI).setPos(5).setStartingPos(8),
	new DriverResult(drivers.JULIAN_SOSA).setPos(6).setStartingPos(5),
	new DriverResult(drivers.JACKO).setPos(7).setStartingPos(10),
	new DriverResult(drivers.FACULANUS).setPos(8).setStartingPos(7),
	new DriverResult(drivers.BLADEBAHIA).setPos(9).setStartingPos(13),
	new DriverResult(drivers.MAX).setPos(10).setStartingPos(19),
	new DriverResult(drivers.SHINO).setPos(11).setStartingPos(18).setDNF(),
	new DriverResult(drivers.JUANMA).setPos(12).setStartingPos(17),
	new DriverResult(drivers.EMI).setPos(13).setStartingPos(14).setDNF(),
	new DriverResult(drivers.RYU).setPos(14).setStartingPos(15).setDNF(),
	new DriverResult(drivers.GROBA).setPos(15).setStartingPos(4).setDNF(),
	new DriverResult(drivers.PABLITO).setPos(16).setStartingPos(16).setDNF(),
	new DriverResult(drivers.COLO).setPos(17).setStartingPos(3).setDNF(),
	new DriverResult(drivers.SEBA_HUNTER).setPos(18).setStartingPos(12).setDNF(),
	new DriverResult(drivers.GALLA).setPos(19).setStartingPos(11).setDNF(),
];