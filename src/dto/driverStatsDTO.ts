import type { DriverInterface } from "@/interfaces/driver";
import type { DriverResultInterface } from "@/interfaces/driverResult";
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
    public cleanRaces: number = 0,
    public attendanceAvg: number = 0,
    public pointsAvg: number = 0,
    public startPositionAvg: number = 0,
    public positionAvg: number = 0,
    public results: DriverResultInterface[] = [],
    public lastPosition: number | null = null
  ) {}

  addStats(stats: DriverStatsInterface): void {
    this.races += stats.races;
    this.wins += stats.wins;
    this.podiums += stats.podiums;
    this.poles += stats.poles;
    this.fastLaps += stats.fastLaps;
    this.points += stats.points;
    this.cleanRaces += stats.cleanRaces;
  }

  subtractStats(stats: DriverStatsInterface): void {
    this.races -= stats.races;
    this.wins -= stats.wins;
    this.podiums -= stats.podiums;
    this.poles -= stats.poles;
    this.fastLaps -= stats.fastLaps;
    this.points -= stats.points;
    this.cleanRaces -= stats.cleanRaces;
  }
} 