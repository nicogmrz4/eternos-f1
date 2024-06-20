import type { DriverResultInterface } from "@/interfaces/driverResult"
import * as drivers from "../drivers"
import { DriverResultDTO } from "@/dto/driverResultDTO"

export const netherlandsGPResult: DriverResultDTO[] = [
  new DriverResultDTO(drivers.PIOR).setPos(1).setStartingPos(1).setFastLap(),
  new DriverResultDTO(drivers.COLO).setPos(2).setStartingPos(2),
  new DriverResultDTO(drivers.DAMITOX).setPos(3).setStartingPos(3),
  new DriverResultDTO(drivers.SHINO).setPos(4).setStartingPos(13),
  new DriverResultDTO(drivers.NICOGMERZ4).setPos(5).setStartingPos(7),
  new DriverResultDTO(drivers.GROBA).setPos(6).setStartingPos(4),
  new DriverResultDTO(drivers.EMMA).setPos(7).setStartingPos(12),
  new DriverResultDTO(drivers.KURI).setPos(8).setStartingPos(8),
  new DriverResultDTO(drivers.SEBA_HUNTER).setPos(9).setStartingPos(5),
  new DriverResultDTO(drivers.RYU).setPos(10).setStartingPos(6),
  new DriverResultDTO(drivers.LUCY).setPos(11).setStartingPos(9),
  new DriverResultDTO(drivers.MAX).setPos(12).setStartingPos(16),
  new DriverResultDTO(drivers.JUANMA).setPos(13).setStartingPos(15),
  new DriverResultDTO(drivers.EMI).setPos(14).setStartingPos(18),
  new DriverResultDTO(drivers.FACULANUS).setPos(15).setStartingPos(10).setDNF(),
  new DriverResultDTO(drivers.PABLITO).setPos(16).setStartingPos(11).setDNF(),
  new DriverResultDTO(drivers.JACKO).setPos(17).setStartingPos(17).setDNF(),
  new DriverResultDTO(drivers.BLADEBAHIA).setPos(18).setStartingPos(14).setDNF(),
]