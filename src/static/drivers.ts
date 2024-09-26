import type { DriverInterface } from "@/interfaces/driver";
import {
  ALFA_ROMEO,
  ALPHATAURI,
  FERRARI,
  HAAS,
  MCLAREN,
  MERCEDES,
  RACING_POINT,
  RED_BULL,
  RENAULT,
  WILLIAMS,
} from "./teams";
import { Driver } from "@/dto/driverDTO";

export const COLO = new Driver(1, 'Colo', RED_BULL);
export const EMI = new Driver(2, 'Emi', RED_BULL);
export const DAMITOX = new Driver(3, 'Damitox', MCLAREN);
export const GALLA = new Driver(4, 'Galla', MCLAREN);
export const EMMA = new Driver(5, 'Emma', WILLIAMS);
export const MAX = new Driver(6, 'Max', WILLIAMS);
export const NICOGMERZ4 = new Driver(7, 'nicogmerz4', RACING_POINT); 
export const PABLITO = new Driver(8, 'Pablito', RACING_POINT);
export const SHINO = new Driver(9, 'Shino', ALFA_ROMEO);
export const JACKO = new Driver(10, 'Jacko', ALFA_ROMEO);
export const FACULANUS = new Driver(11, 'Faculanus', FERRARI);
export const JUANMA = new Driver(12, 'Juanma', FERRARI);
export const JULIAN_SOSA = new Driver(13, 'Julián Sosa', HAAS);
export const SEBA_HUNTER = new Driver(14, 'Seba Hunter', HAAS);
export const KURI = new Driver(15, 'Kuri', ALPHATAURI);
export const RYU = new Driver(16, 'Ryu', ALPHATAURI);
export const LUCY = new Driver(17, 'Lucy', MERCEDES);
export const BLADEBAHIA = new Driver(18, 'Bladebahia', MERCEDES);
export const GROBA = new Driver(19, 'Groba', RENAULT);
export const PIOR = new Driver(20, 'Pior', RENAULT);
export const EL_COLIMBAA = new Driver(21, 'ElColimbaa', RACING_POINT);
export const FACU = new Driver(22, 'Facu', MCLAREN);
export const PEPPA = new Driver(23, 'Peppa', HAAS);

export const drivers = [
  COLO,
  EMI,
  DAMITOX,
  GALLA,
  EMMA,
  MAX,
  NICOGMERZ4,
  PABLITO,
  SHINO,
  JACKO,
  FACULANUS,
  JUANMA,
  JULIAN_SOSA,
  SEBA_HUNTER,
  KURI,
  RYU,
  LUCY,
  BLADEBAHIA,
  GROBA,
  PIOR,
  FACU,
  EL_COLIMBAA,
  PEPPA
];