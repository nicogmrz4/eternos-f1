import type { DriverResultInterface } from "@/interfaces/driverResult";

export function driverStartPositionAvg(driverResults: DriverResultInterface[]) {
  if (driverResults.length == 0) return 0;
  const startPositions = driverResults.map((result) => result.startingPosition);
  const avg = startPositions.reduce((a, b) => a + b, 0) / startPositions.length;
  return Number(avg.toFixed(1));
}