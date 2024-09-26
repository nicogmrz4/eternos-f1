import type { DriverResultInterface } from "@/interfaces/driverResult"
import * as drivers from "../drivers"
import { DriverResult } from "@/models/driverResult"

export const netherlandsGPResult: DriverResult[] = [
  new DriverResult(drivers.PIOR).setPos(1).setStartingPos(1).setFastLap(),
  new DriverResult(drivers.COLO).setPos(2).setStartingPos(2),
  new DriverResult(drivers.DAMITOX).setPos(3).setStartingPos(3),
  new DriverResult(drivers.SHINO).setPos(4).setStartingPos(13),
  new DriverResult(drivers.NICOGMERZ4).setPos(5).setStartingPos(7),
  new DriverResult(drivers.GROBA).setPos(6).setStartingPos(4),
  new DriverResult(drivers.EMMA).setPos(7).setStartingPos(12).setDNF(),
  new DriverResult(drivers.KURI).setPos(8).setStartingPos(8),
  new DriverResult(drivers.SEBA_HUNTER).setPos(9).setStartingPos(5),
  new DriverResult(drivers.RYU).setPos(10).setStartingPos(6),
  new DriverResult(drivers.LUCY).setPos(11).setStartingPos(9).noCleanRace(),
  new DriverResult(drivers.MAX).setPos(12).setStartingPos(16),
  new DriverResult(drivers.JUANMA).setPos(13).setStartingPos(15),
  new DriverResult(drivers.EMI).setPos(14).setStartingPos(18),
  new DriverResult(drivers.FACULANUS).setPos(15).setStartingPos(10).setDNF(),
  new DriverResult(drivers.PABLITO).setPos(16).setStartingPos(11).setDNF(),
  new DriverResult(drivers.JACKO).setPos(17).setStartingPos(17).setDNF(),
  new DriverResult(drivers.BLADEBAHIA).setPos(18).setStartingPos(14).setDNF(),
]