import type { TrackInterface } from "@/interfaces/track";
import type { DriverResult } from "./driverResult";

export class Track implements TrackInterface{
  constructor(
    public name: string,
    public circuit: string,
    public flag: string,
    public isRaced: boolean,
    public result: DriverResult[]
  ){}
}