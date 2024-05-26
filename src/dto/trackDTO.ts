import type { TrackInterface } from "@/interfaces/track";
import type { DriverResultDTO } from "./driverResultDTO";

export class TrackDTO implements TrackInterface{
  constructor(
    public name: string,
    public circuit: string,
    public flag: string,
    public isRaced: boolean,
    public result: DriverResultDTO[]
  ){}
}