import type { DriverInterface } from "@/interfaces/driver";
import type { DriverResultInterface } from "@/interfaces/driverResult";

export class DriverResultDTO implements DriverResultInterface {
  constructor(
    public position: number,
    public startingPosition: number,
    public fastLap: boolean,
    public dnf: boolean,
    public driver: DriverInterface,
  ) {}
}