import type { DriverResultInterface } from "@/interfaces/driverResult";

export function driverPositionAvg(driverResults: DriverResultInterface[]) {
  if (driverResults.length == 0) return 0;
  const positions = driverResults.map((result) => result.position);
  const avg = positions.reduce((a, b) => a + b, 0) / positions.length;
  return Number(avg.toFixed(1));
}