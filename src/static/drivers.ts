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

class Driver implements DriverInterface {
  constructor(public avatar: string, public name: string, public team: string) {}
}

export default {
  jhon: new Driver('https://i.pravatar.cc/150?img=3', 'John', MERCEDES),
  emma: new Driver('https://i.pravatar.cc/150?img=33', 'Emma', FERRARI),
  michael: new Driver('https://i.pravatar.cc/150?img=55', 'Michael', RED_BULL),
  sophia: new Driver('https://i.pravatar.cc/150?img=1', 'Sophia', MCLAREN),
  william: new Driver('https://i.pravatar.cc/150?img=11', 'William', RENAULT),
  olivia: new Driver('https://i.pravatar.cc/150?img=13', 'Olivia', ALPHATAURI),
  james: new Driver('https://i.pravatar.cc/150?img=12', 'James', RACING_POINT), 
  ava: new Driver('https://i.pravatar.cc/150?img=27', 'Ava', ALFA_ROMEO),
  alexander: new Driver('https://i.pravatar.cc/150?img=18', 'Alexander', HAAS),
  mia: new Driver('https://i.pravatar.cc/150?img=5', 'Mia', WILLIAMS),
}