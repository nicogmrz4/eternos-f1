import type { TeamInterface } from "./team"

export interface DriverInterface {
  id: number
  name: string
  avatar?: string
  team: TeamInterface
}