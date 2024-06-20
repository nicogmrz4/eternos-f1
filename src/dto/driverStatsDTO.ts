import type { DriverInterface } from "@/interfaces/driver";
import type { DriverStatsInterface } from "@/interfaces/driverStats";

export class DriverStatsDTO implements DriverStatsInterface
{
  constructor(
    public driver: DriverInterface, 
    public races: number = 0,
    public wins: number = 0,
    public podiums: number = 0, 
    public poles: number = 0,
    public fastLaps: number = 0, 
    public points: number = 0,
    public results: number[] = [],
    public lastPosition: number | null = null
  ) {}
} 