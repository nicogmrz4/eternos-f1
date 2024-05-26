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

export const JOHN = new Driver(1, 'https://i.pravatar.cc/150?img=3', 'John', MERCEDES);
export const EMMA = new Driver(2, 'https://i.pravatar.cc/150?img=33', 'Emma', FERRARI);
export const MICHAEL = new Driver(3, 'https://i.pravatar.cc/150?img=55', 'Michael', RED_BULL);
export const SOFIA = new Driver(4, 'https://i.pravatar.cc/150?img=1', 'Sophia', MCLAREN);
export const WILLIAM = new Driver(5, 'https://i.pravatar.cc/150?img=11', 'William', RENAULT);
export const OLIVIA = new Driver(6, 'https://i.pravatar.cc/150?img=23', 'Olivia', ALPHATAURI);
export const JAMES = new Driver(7, 'https://i.pravatar.cc/150?img=12', 'James', RACING_POINT); 
export const AVA = new Driver(8, 'https://i.pravatar.cc/150?img=27', 'Ava', ALFA_ROMEO);
export const ALEXANDER = new Driver(9, 'https://i.pravatar.cc/150?img=18', 'Alexander', HAAS);
export const MIA = new Driver(10, 'https://i.pravatar.cc/150?img=5', 'Mia', WILLIAMS);

export const drivers = [JOHN, EMMA, MICHAEL, SOFIA, WILLIAM, OLIVIA, JAMES, AVA, ALEXANDER, MIA];