export class OtherPoints {
  constructor(
    public type: string,
    public points: string,
  ) { }
}


export const otherPoints: OtherPoints[] = [
  new OtherPoints('Vuelta rápida', '1'),
  new OtherPoints('Posiciones ganadas', '1 por posición'),
  new OtherPoints('Pole', '2'),
  new OtherPoints('Carrera limpia', '2')
];