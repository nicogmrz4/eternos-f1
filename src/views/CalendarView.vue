<script setup lang="ts">
import TracksList from '@/components/TracksList.vue';
import Badge from '@/components/atoms/Badge.vue';
import Dot from '@/components/atoms/Dot.vue';

</script>

<template>
    <div>
        <h1>Calendario de carreras</h1>
        <div class="rule-icons__container">
            <h4>Iconos</h4>
            <div class="rule-icons__items">
                <div class="rule-icons__item">
                    <v-icon name="md-workspacepremium" class="fast-lap-icon" scale="1.4"></v-icon>
                    <span>Pole</span>
                </div>
                <div class="rule-icons__item">
                    <v-icon name="md-healthandsafety-outlined" class="fast-lap-icon" scale="1.4"></v-icon>
                    <span>Carrera limpia</span>
                </div>
                <div class="rule-icons__item">
                    <v-icon name="oi-stopwatch" class="fast-lap-icon" scale="1.5"></v-icon>
                    <span>Vuelta rápida</span>
                </div>
                <br>
            </div>
        </div>

        <div class="badges__container">
            <h4>Guía</h4>
            <div class="badges__items">
                <div class="badges__item">
                    <Badge color="primary">OF</Badge>
                    <span> (Oficial) Coincide con el calendario oficial de la F1</span>
                </div>
                <div class="badges__item">
                    <Badge color="primary">SP</Badge>
                    <span>Carrera sprint</span>
                </div>
                <div class="badges__item">
                    <Dot color="pending"></Dot>
                    <span>Pendiente</span>
                </div>
                <div class="badges__item">
                    <Dot color="success"></Dot>
                    <span>Completada</span>
                </div>
            </div>
        </div>
        
        <TracksList />
    </div>
</template>

<style scoped>
.rule-icons__container > h4,
.badges__container > h4 {
    font-weight: bold;
    margin-bottom: 16px;
}

.rule-icons__container,
.badges__container {
    margin-bottom: 16px;
}

.rule-icons__container > .rule-icons__items {
    display: flex;
}

.rule-icons__container > .rule-icons__items > .rule-icons__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    margin-right: 16px;
}

.badges__item {
    display: flex;
    gap: 8px;
    align-items: center;
}

.badges__items {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
</style>