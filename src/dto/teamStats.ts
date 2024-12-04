import type { TeamInterface } from "@/interfaces/team";
import type { TeamDTO } from "./teamDTO";

export class TeamStats {
    constructor(
        public team: TeamDTO,
        public points: number,
        public lastPosition: number
    ) { }
}