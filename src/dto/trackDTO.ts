import type { TrackInterface } from "@/interfaces/track";
import type { DriverResultDTO } from "./driverResultDTO";
import type { Caution } from "@/interfaces/caution";

export class TrackDTO implements TrackInterface{
  constructor(
    public name: string,
    public circuit: string,
    public flag: string,
    public isRaced: boolean,
    public results: DriverResultDTO[],
    public cautions: Caution[]
  ){}
}