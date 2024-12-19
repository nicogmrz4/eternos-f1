import type { DriverInterface } from "@/interfaces/driver";
import type { DriverResultInterface } from "@/interfaces/driverResult";

export class DriverResultDTO implements DriverResultInterface {
  public position: number = 0;
  public startingPosition: number = 0;
  public fastLap: boolean = false;
  public dnf: boolean = false;
  public dsq: boolean = false;
  public cleanRace: boolean = true;

  constructor(
    public driver: DriverInterface,
  ) {}

  setPos(position: number) {
    this.position = position;
    return this;
  }

  setStartingPos(position: number) {
    this.startingPosition = position;
    return this;
  }

  setFastLap() {
    this.fastLap = true
    return this;
  }
  
  setDNF() {
    this.dnf = true
    return this;
  }
  
  noCleanRace() {
    this.cleanRace = false
    return this;
  }
}