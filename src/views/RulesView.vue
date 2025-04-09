<template>
  <h2>Índice</h2>
    <RouterLink to="/rules/points" style="margin-top: 25px; display: block;">Puntuación</RouterLink>
    <RouterLink to="/rules/sprint" style="margin-top: 25px; display: block;">Carrera Sprint</RouterLink>
    <RouterLink to="/rules/other-points" style="margin-top: 25px; display: block;">Otros Puntuaciones</RouterLink>
    <RouterLink to="/rules/room-config" style="margin-top: 25px; display: block;">Configuración de Sala</RouterLink>
    <RouterLink to="/rules/penalties" style="margin-top: 25px; display: block;">Penalizaciones</RouterLink>
</template>

<script setup lang="ts">
import { otherPoints as otherPointsStatic, pointsPerPositionV2, pointsPerPositionSprint, roomConfig as roomConfigStatic, type OtherPoints, type PointsPerPosition, type RoomConfig } from '@/static/rules';
import { ref, type Ref } from 'vue';

const roomConfig: Ref<RoomConfig[]> = ref(roomConfigStatic);

const pointsTable: Ref<PointsPerPosition[]> = ref(pointsPerPositionV2);
const sprintPointsTable: Ref<PointsPerPosition[]> = ref(pointsPerPositionSprint);

const otherPoints: Ref<OtherPoints[]> = ref(otherPointsStatic);
</script>

<style scoped>
h2 {
    margin-top: 25px;
}
</style>