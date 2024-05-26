import type { DriverInterface } from "@/interfaces/driver";

export class Driver implements DriverInterface {
  constructor(public id: number, public avatar: string, public name: string, public team: string) {}
}