import type { DriverStatsInterface } from "@/interfaces/driverStats";
import type { Team } from "@/interfaces/team";
import {
  calcDriversPenultimatePoints,
  calcDriversPoints,
} from "./caclDriversPoints";
import teamsTable from "@/static/teamsTable";

export function calcTeamPoints(): Team[] {
  const driversStats: DriverStatsInterface[] = calcDriversPoints();
  const driversPenultimateStats = calcDriversPenultimatePoints();

  const teams: Team[] = teamsTable;
  const teamsPenultimatePoints: Team[] = [];
  teams.forEach(t => teamsPenultimatePoints.push(Object.assign({}, t)));

  teams.map((team) => {
    team.points = driversStats
      .filter((driverStats) => driverStats.driver.team == team.name)
      .reduce((a, b) => a + b.points, 0);
  });
  
  teamsPenultimatePoints.map((team) => {
    team.points = driversPenultimateStats
      .filter((driverStats) => driverStats.driver.team == team.name)
      .reduce((a, b) => a + b.points, 0);
  });

  teamsPenultimatePoints.sort((a, b) => {
    return b.points - a.points;
  });
  
  teamsPenultimatePoints.forEach((team, i) => {
    teams.forEach((t) => {
      if (t.name == team.name) {
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
