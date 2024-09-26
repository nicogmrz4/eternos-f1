import type { DriverInterface } from "@/interfaces/driver";
import type { TeamInterface } from "@/interfaces/team";

export class Driver implements DriverInterface {
  constructor(
    public id: number,
    public name: string,
    public team: TeamInterface
  ) {}
}