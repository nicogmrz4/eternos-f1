<template>
    <RouterLink to="/rules" style="margin-top: 25px; display: block;">Volver</RouterLink>
    <h2>SISTEMA DE SANCIONES</h2>
    <p>El sistema de sanciones busca garantizar una competencia justa y fomentar la conducción limpia durante toda la
        temporada. A continuación, se detallan las reglas y penalizaciones aplicables:</p>
    <!-- <h2>Acumulación de Puntos de Penalización</h2> -->
    <ul>
        <li>
            <p>Cada infracción será evaluada por los comisarios de la liga, quienes determinarán los puntos de
                penalización según la gravedad de la acción.</p>
        </li>
        <li>
            <p>Los puntos acumulados se mantendrán durante toda la temporada. Al alcanzar el límite de 12 puntos, el
                piloto será suspendido automáticamente para la siguiente carrera.</p>
        </li>
        <li>
            <p>Después de llegar a los 12 puntos, el piloto puede volver a ser sancionado si acumula otros 12 puntos
                más.</p>
        </li>
        <li>
            <p>Al comienzo de una nueva temporada, el contador de puntos se reiniciará para todos los pilotos.</p>
        </li>
    </ul>
    <h2>TIPOS DE INFRACCIONES Y PUNTOS ASIGNADOS:</h2>
    <h3>COLISIONES</h3>
    <ul>
        <li>
            <p>Leves: <b>1 punto</b></p>
        </li>
        <li>
            <p>Moderadas: <b>2 puntos</b></p>
        </li>
        <li>
            <p>Graves: <b>3 puntos</b></p>
        </li>
    </ul>
    <h3>MANIOBRAS ANTIDEPORTIVAS</h3>
    <ul>
        <li>
            <p><b>Zigzaguear</b> de manera alevosa en recta para bloquear a otro piloto: <b>2 puntos</b>.</p>
        </li>
        <li>
            <p><b>Reincorporación peligrosa:</b> Entrar nuevamente a la pista tras un error o salida sin verificar si
                hay otros pilotos cerca, provocando riesgo de colisión: <b>2 puntos</b>.</p>
        </li>
        <li>
            <p><b>Brake-check</b>: Frenar de manera innecesaria o inesperada para perjudicar al piloto detrás o provocar
                una colisión: <b>2 a 3 puntos</b>.</p>
        </li>
    </ul>
    <h3>IGNORAR BANDERAS</h3>
    <ul>
        <li>
            <p><b>Ignorar Bandera Azul</b>: No permitir el paso a otros pilotos: <b>2 puntos</b>.</p>
        </li>
    </ul>
</template>

<script setup lang="ts">

</script>

<style scoped>
h2 {
  margin-top: 25px;
}


li {
  list-style: disc;
  margin-left: 20px;
}

ul {
  margin-bottom: 1.5em;
}

</style>