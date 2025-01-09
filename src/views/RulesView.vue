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
    <h2>SISTEMA DE SANCIONES</h2>
    <p>El sistema de sanciones busca garantizar una competencia justa y fomentar la conducción limpia durante toda la temporada. A continuación, se detallan las reglas y penalizaciones aplicables:</p>
    <!-- <h2>Acumulación de Puntos de Penalización</h2> -->
    <ul>
        <li>
          <p>Cada infracción será evaluada por los comisarios de la liga, quienes determinarán los puntos de penalización según la gravedad de la acción.</p>
        </li>
        <li>
          <p>Los puntos acumulados se mantendrán durante toda la temporada. Al alcanzar el límite de 12 puntos, el piloto será suspendido automáticamente para la siguiente carrera.</p>
        </li>
        <li>
          <p>Después de llegar a los 12 puntos, el piloto puede volver a ser sancionado si acumula otros 12 puntos más.</p>
        </li>
        <li>
          <p>Al comienzo de una nueva temporada, el contador de puntos se reiniciará para todos los pilotos.</p>
        </li>
    </ul>
    <h2>TIPOS DE INFRACCIONES Y PUNTOS ASIGNADOS:</h2>
    <h3>COLISIONES</h3>
    <ul>
      <li><p>Leves: <b>1 punto</b></p></li>
      <li><p>Moderadas: <b>2 puntos</b></p></li>
      <li><p>Graves: <b>3 puntos</b></p></li>
    </ul>
    <h3>MANIOBRAS ANTIDEPORTIVAS</h3>
    <ul>
      <li>
        <p><b>Zigzaguear</b> de manera alevosa en recta para bloquear a otro piloto: <b>2 puntos</b>.</p>
      </li>
      <li>
        <p><b>Reincorporación peligrosa:</b> Entrar nuevamente a la pista tras un error o salida sin verificar si hay otros pilotos cerca, provocando riesgo de colisión: <b>2 puntos</b>.</p>
      </li>
      <li>
        <p><b>Brake-check</b>: Frenar de manera innecesaria o inesperada para perjudicar al piloto detrás o provocar una colisión: <b>2 a 3 puntos</b>.</p>
      </li>
    </ul>
    <h3>IGNORAR BANDERAS</h3>
    <ul>
      <li>
        <p><b>Ignorar Bandera Azul</b>: No permitir el paso a otros pilotos: <b>2 puntos</b>.</p>
      </li>
    </ul>
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

ul {
  margin-bottom: 1.5em;
}
</style>