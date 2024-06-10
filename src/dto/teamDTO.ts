import type { TeamInterface } from "@/interfaces/team";

export class TeamDTO implements TeamInterface {
  constructor(
    public name: string,
    public avatar: string,
    public points: number,
    public lastPosition: number,
  ) {}
}
