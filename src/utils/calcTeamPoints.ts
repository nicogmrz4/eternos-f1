import type { DriverStatsInterface } from "@/interfaces/driverStats";
import type { TeamInterface } from "@/interfaces/team";
import {
  calcDriversPenultimateStats,
  calcDriversStats,
} from "./calcDriversPoints";
import teamsTable from "@/static/teamsTable";

export function calcTeamPoints(): TeamInterface[] {
  const driversStats: DriverStatsInterface[][] = calcDriversStats();
  const driversPenultimateStats = calcDriversPenultimateStats();

  const teams: TeamInterface[] = teamsTable;
  const teamsPenultimatePoints: TeamInterface[] = [];
  teams.forEach(t => teamsPenultimatePoints.push(Object.assign({}, t)));

  teams.map((TeamInterface) => {
    TeamInterface.points = driversStats[driversStats.length - 1]
      .filter((driverStats) => driverStats.driver.team.name == TeamInterface.name)
      .reduce((a, b) => a + b.points, 0);
  });
  
  teamsPenultimatePoints.map((TeamInterface) => {
    TeamInterface.points = driversStats[driversStats.length - 2]
      .filter((driverStats) => driverStats.driver.team.name == TeamInterface.name)
      .reduce((a, b) => a + b.points, 0);
  });

  teamsPenultimatePoints.sort((a, b) => {
    return b.points - a.points;
  });
  
  teamsPenultimatePoints.forEach((TeamInterface, i) => {
    teams.forEach((t) => {
      if (t.name == TeamInterface.name) {
        t.lastPosition = i + 1;
        return;
      }
    })
  })
  
  teams.sort((a, b) => {
    return b.points - a.points;
  });

  return teams;
}
