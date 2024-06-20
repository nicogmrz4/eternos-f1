<script setup lang="ts">
import TracksList from '@/components/TracksList.vue';

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
            </div>
        </div>
        <TracksList />
    </div>
</template>

<style scoped>
.rule-icons__container > h4 {
    font-weight: bold;
    margin-bottom: 16px;
}

.rule-icons__container {
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
</style>