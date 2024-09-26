import type { DriverResultInterface } from "@/interfaces/driverResult";
import {
  MAX_POINTABLE_POSITIONS,
  POLE_POINTS,
  MAX_POINTS_PER_GAINED_POSITION,
  CLEAN_RACE_POINTS,
  POINTS_PER_POSITION,
  positions
} from "@/utils";

export function calcResultPoints(driverResult: DriverResultInterface): number {
  let points = 0;

  if (driverResult.dnf) return points;
  if (driverResult.position <= MAX_POINTABLE_POSITIONS)
    points += getPointsByPosition(driverResult.position);
  if (driverResult.fastLap && driverResult.position <= MAX_POINTABLE_POSITIONS)
    points++;
  if (driverResult.startingPosition == positions.FIRST) points += POLE_POINTS;
  if (driverResult.startingPosition - driverResult.position > 0) {
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
