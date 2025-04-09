<template>
    <RouterLink to="/rules" style="margin-top: 25px; display: block;">Volver</RouterLink>
    <h2>PUNTUACIÓN POR POSICIÓN</h2>
    <table class="points-table">
        <thead>
            <tr>
                <th>Posición</th>
                <th>Puntos</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(points, i) in pointsPerPositionV2" :key="i">
                <td>{{ points.position }}</td>
                <td>{{ points.points }}</td>
            </tr>
        </tbody>
    </table>
    <h2>PUNTUACIÓN POR POSICIÓN (SPRINT)</h2>
    <table class="points-table">
        <thead>
            <tr>
                <th>Posición</th>
                <th>Puntos</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(points, i) in pointsPerPositionSprint" :key="i">
                <td>{{ points.position }}</td>
                <td>{{ points.points }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { pointsPerPositionSprint, pointsPerPositionV2 } from '@/static/rules';


</script>

<style scoped>
h2 {
  margin-top: 25px;
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

</style>