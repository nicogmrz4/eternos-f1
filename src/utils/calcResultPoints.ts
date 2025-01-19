import type { DriverResultInterface } from "@/interfaces/driverResult";
import {
  MAX_POINTABLE_POSITIONS,
  POLE_POINTS,
  MAX_POINTS_PER_GAINED_POSITION,
  CLEAN_RACE_POINTS,
  POINTS_PER_POSITION,
  positions
} from "@/utils";

export function calcResultPoints(driverResult: DriverResultInterface, options: any = null): number {
  let points = 0;
  
  if (driverResult.pole && options.polePoints) points += POLE_POINTS;
  if (driverResult.dnf || driverResult.dsq) return points;
  if (driverResult.position <= MAX_POINTABLE_POSITIONS)
    points += getPointsByPosition(driverResult.position);
  if (driverResult.fastLap && driverResult.position <= MAX_POINTABLE_POSITIONS)
    points++;
  if (driverResult.startingPosition - driverResult.position > 0 && options.pointsPositionsGained) {
    points += Math.min(
      MAX_POINTS_PER_GAINED_POSITION,
      driverResult.startingPosition - driverResult.position
    );
  }
  if (driverResult.cleanRace) points += CLEAN_RACE_POINTS;

  return points;
}

function getPointsByPosition(position: number): number {
  return POINTS_PER_POSITION[position - 1];
}
