import type { DriverStatsInterface } from "@/interfaces/driverStats";
import { TeamStats } from "@/dto/teamStats";
import {
  calcDriversPenultimateStats,
  calcDriversStats,
} from "./calcDriversPoints";
import type { TeamInterface } from "@/interfaces/team";

export function calcTeamPoints(driversStats: DriverStatsInterface[][], teams: TeamInterface[]): TeamStats[] {
  const teamsStats: TeamStats[] = teams.map((team) => new TeamStats(team, 0, 0));
  const teamPenultimateStats: TeamStats[] = [];
  teamsStats.forEach(t => teamPenultimateStats.push(Object.assign({}, t)));

  teamsStats.map((teamStats) => {
    teamStats.points = driversStats[driversStats.length - 1]
      .filter((driverStats) => driverStats.driver.team.name == teamStats.team.name)
      .reduce((a, b) => a + b.points, 0);
  });
  
  teamPenultimateStats.map((teamStats) => {
    if (driversStats.length < 2) return;
    teamStats.points = driversStats[driversStats.length - 2]
      .filter((driverStats) => driverStats.driver.team.name == teamStats.team.name)
      .reduce((a, b) => a + b.points, 0);
  });

  teamPenultimateStats.sort((a, b) => {
    return b.points - a.points;
  });
  
  teamPenultimateStats.forEach((teamStats, i) => {
    teamsStats.forEach((t) => {
      if (t.team.name == teamStats.team.name) {
        t.lastPosition = i + 1;
        return;
      }
    })
  })
  
  teamsStats.sort((a, b) => {
    return b.points - a.points;
  });

  return teamsStats;
}
