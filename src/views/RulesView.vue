<template>
  <div>
    <h1>Reglas</h1>
    <h3>CONFIGURACIÓN DE SALA</h3>
    <div v-for="(config, i) in roomConfig" :key="i" class="room-config__item">
      <p>{{ config.name }}:</p>
      <p>{{ config.description }}</p>
    </div>

    <div class="points-tables__container">
      <table class="other-points">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Puntos</th>
            <th>Condición</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(points, i) in otherPoints" :key="i">
            <td>{{ points.type }}</td>
            <td>{{ points.points }}</td>
            <td>{{ points.condition }}</td>
          </tr>
        </tbody>
      </table>

      <table class="points">
        <thead>
          <tr>
            <th>Pos</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(points, i) in pointsTable" :key="i">
            <td>{{ points.position }}</td>
            <td>{{ points.points }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="clean-race">
      <b>Bonificación por carrera limpia:</b> solo aplica para aquellos pilotos que no tengan incidentes que perjudiquen directamente a otros pilotos. Es de suma importancia aclarar que todos los participantes deben tener registrado las carreras para poder justificar esta bonificación en caso de ser acusado.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';

class RoomConfig {
  constructor(
    public name: string,
    public description: string
  ) { }
}

class PointsPerPosition {
  constructor(
    public position: number,
    public points: number
  ) { }
}

class OtherPoints {
  constructor(
    public type: string,
    public points: string,
    public condition: string = '-'
  ) { }
}

const roomConfig: Ref<RoomConfig[]> = ref([
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
]);

const pointsTable: Ref<PointsPerPosition[]> = ref([
  new PointsPerPosition(1, 20),
  new PointsPerPosition(2, 18),
  new PointsPerPosition(3, 16),
  new PointsPerPosition(4, 14),
  new PointsPerPosition(5, 12),
  new PointsPerPosition(6, 10),
  new PointsPerPosition(7, 9),
  new PointsPerPosition(8, 8),
  new PointsPerPosition(9, 7),
  new PointsPerPosition(10, 6),
  new PointsPerPosition(11, 5),
  new PointsPerPosition(12, 4),
  new PointsPerPosition(13, 3),
  new PointsPerPosition(14, 2),
  new PointsPerPosition(15, 1)
]);

const otherPoints: Ref<OtherPoints[]> = ref([
  new OtherPoints('Vuelta rápida', '1', 'Terminar la carrera entre los primeros 15'),
  new OtherPoints('Posiciones ganadas', '1 por posición', 'Límite de 3 puntos acumulados por carrera'),
  new OtherPoints('Pole', '2'),
  new OtherPoints('Carrera limpia', '2')
]);
</script>

<style scoped>
h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 25px;
}


.room-config__item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 18px;
  text-align: justify;
}

.room-config__item>b {}

.points,
.other-points, tr, td, th {
  text-align: center;
  border: 1px solid white;
}

.points-tables__container {
  display: flex;
  gap: 14px;;
}

.clean-race {
  margin-top: 20px;
  font-size: 18px;
}

.clean-race > b {
  font-weight: bold;
}
</style>