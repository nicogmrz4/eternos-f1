export class RoomConfig {
  constructor(
    public name: string,
    public description: string
  ) { }
}

export const roomConfig = [
  new RoomConfig(
    'Duración de la carrera',
    '50%'
  ),
  new RoomConfig(
    'Parc fermé',
    'Activado'
  ),
  new RoomConfig(
    'Coche de seguridad',
    'Activado'
  ),
  new RoomConfig(
    'Fantasma',
    'Desactivado'
  ),
  new RoomConfig(
    'Duración de clasificación',
    'Corta'
  ),
  new RoomConfig(
    'Daños de monoplaza',
    'Simulación'
  ),
  new RoomConfig(
    'Severidad de curvas',
    'Estricto'
  )
]