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

export const JOHN = new Driver(1, 'John', MERCEDES);
export const EMMA = new Driver(2, 'Emma', FERRARI);
export const MICHAEL = new Driver(3, 'Michael', RED_BULL);
export const SOFIA = new Driver(4, 'Sophia', MCLAREN);
export const WILLIAM = new Driver(5, 'William', RENAULT);
export const OLIVIA = new Driver(6, 'Olivia', ALPHATAURI);
export const JAMES = new Driver(7, 'James', RACING_POINT); 
export const AVA = new Driver(8, 'Ava', ALFA_ROMEO);
export const ALEXANDER = new Driver(9, 'Alexander', HAAS);
export const MIA = new Driver(10, 'Mia', WILLIAMS);
export const MARCELO = new Driver(11, 'Marcelo', MERCEDES);
export const JOE = new Driver(12, 'Joe', FERRARI);
export const DANIEL = new Driver(13, 'Daniel', RENAULT);
export const LUIS = new Driver(14, 'Luis', ALPHATAURI);
export const LUCAS = new Driver(15, 'Lucas', RACING_POINT);
export const GABRIEL = new Driver(16, 'Gabriel', ALFA_ROMEO);
export const KATE = new Driver(17, 'Kate', HAAS);
export const LANDO = new Driver(18, 'Lando', WILLIAMS);
export const LILIAN = new Driver(19, 'Lilian', RED_BULL);
export const IVAN = new Driver(20, 'Iván', MCLAREN);

export const drivers = [JOHN, EMMA, MICHAEL, SOFIA, WILLIAM, OLIVIA, JAMES, AVA, ALEXANDER, MIA, MARCELO, JOE, DANIEL, LUIS, LUCAS, GABRIEL, KATE, LANDO, LILIAN, IVAN];