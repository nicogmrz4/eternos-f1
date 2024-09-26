<template>
  <div>
    <h1>Reglas</h1>
    <h3>CONFIGURACIÓN DE SALA</h3>
    <table class="room-config-table">
      <thead>
        <tr>
          <th>Opción</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(config, i) in roomConfig" :key="i">
          <td>{{ config.name }}</td>
          <td>{{ config.description }}</td>
        </tr>
      </tbody>
    </table>
    <h2>PUNTUACIÓN POR POSICIÓN</h2>
    <table class="points-table">
      <thead>
        <tr>
          <th>Posición</th>
          <th>Puntos</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(points, i) in pointsTable" :key="i">
          <td>{{ points.position }}</td>
          <td>{{ points.points }}</td>
        </tr>
      </tbody>
    </table>
    <h2>OTRAS PUNTUACIÓNES</h2>
    <table class="other-points-table">
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Puntos</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(points, i) in otherPoints" :key="i">
          <td>{{ points.type }}</td>
          <td>{{ points.points }}</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li>
        <h2>Vuelta rápida</h2>
        <p>
          Se le otorga al piloto que haga la vuelta más rápida y termine la carrera entre los 15 primeros.
        </p>
      </li>
      <li>
        <h2>Posiciones ganadas</h2>
        <p>
          Por cada puesto que el piloto gane se le otorgará un punto, con un tope de 3 puntos por carrera.
        </p>
      </li>
      <li>
        <h2>Pole</h2>
        <p>
          Se le otorga al piloto que tenga la primera posición en la clasificación.
        </p>
      </li>
      <li>
        <h2>Bonificación por carrera limpia</h2>
        <p>
          Solo aplica para aquellos pilotos que no tengan incidentes que perjudiquen directamente a otros pilotos. Es de
          suma importancia aclarar que todos los participantes deben tener registrado las carreras para poder justificar
          esta bonificación en caso de ser acusado.
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { otherPoints as otherPointsStatic, pointsPerPosition, roomConfig as roomConfigStatic, type OtherPoints, type PointsPerPosition, type RoomConfig } from '@/static/rules';
import { ref, type Ref } from 'vue';

const roomConfig: Ref<RoomConfig[]> = ref(roomConfigStatic);

const pointsTable: Ref<PointsPerPosition[]> = ref(pointsPerPosition);

const otherPoints: Ref<OtherPoints[]> = ref(otherPointsStatic);
</script>

<style scoped>
.room-config-table,
.points-table,
.other-points-table {
  width: 100%;
}

.room-config-table,
.points-table {
  margin-bottom: 50px;
}

th {
  font-weight: bold;
  background-color: var(--card-color);
}

th {
  &:first-child {
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
  }
}

td,
th {
  padding: 12px;
  border: unset;
  text-align: center;
  border-bottom: 1px solid var(--card-color);
  vertical-align: middle;
  position: relative;
}

td:first-child,
th:first-child {
  border-left: unset;
}

td:last-child,
th:last-child {
  border-right: unset;
}

.room-config thead tr th:last-child,
.room-config tbody tr td:last-child {
  text-align: right;
}

.room-config thead tr th:first-child,
.room-config tbody tr td:first-child {
  text-align: left;
  font-weight: bold;
}

.points-tables__container {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

li {
  list-style: disc;
  margin-left: 20px;
}
</style>