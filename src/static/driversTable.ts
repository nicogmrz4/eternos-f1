import type { DriverInterface } from "@/interfaces/driver"
import type { DriverStatsInterface } from "@/interfaces/driverStats"

class DriverStats implements DriverStatsInterface {
  constructor(
    public driver: DriverInterface, 
    public fastLaps: number, 
    public poles: number, 
    public points: number) {}
}

export default <DriverStatsInterface[]>[]