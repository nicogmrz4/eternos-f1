<template>
  <Modal v-model="driverStatsModal" :title="modalTitle">
    <Transition name="stats" mode="out-in" :duration="{ enter: 500, leave: targetDriverStats ? 500 : 0 } ">
      <div v-if="targetDriverStats" class="stats-comparison__container" :key="targetDriverStats.driver.id">
        <div class="header">
          <div class="header__driver-name">
            {{ sourceDriverStats?.driver.name }}
          </div>
          <div class="header__driver-name">
            {{ targetDriverStats?.driver.name }}
          </div>
        </div>
        <StatComparison style="transition-delay: 50ms" name="Carreras" :source-value="sourceDriverStats!.races" :target-value="targetDriverStats!.races"/>
        <StatComparison style="transition-delay: 100ms" name="Vueltas Rápidas" :source-value="sourceDriverStats!.fastLaps" :target-value="targetDriverStats!.fastLaps"/>
        <StatComparison style="transition-delay: 150ms" name="Podios" :source-value="sourceDriverStats!.podiums" :target-value="targetDriverStats!.podiums"/>
        <StatComparison style="transition-delay: 200ms" name="Poles" :source-value="sourceDriverStats!.poles" :target-value="targetDriverStats!.poles"/>
        <StatComparison style="transition-delay: 250ms" name="Victorias" :source-value="sourceDriverStats!.wins" :target-value="targetDriverStats!.wins"/>
        <StatComparison style="transition-delay: 300ms" name="Posición Promedio" :source-value="sourceDriverStats!.positionAvg" :target-value="targetDriverStats!.positionAvg" criteria="smaller"/>
        <StatComparison style="transition-delay: 350ms" name="Clasificación Promedio" :source-value="sourceDriverStats!.startPositionAvg" :target-value="targetDriverStats!.startPositionAvg" criteria="smaller"/>
        <StatComparison style="transition-delay: 400ms" name="Carreras Limpias" :source-value="sourceDriverStats!.cleanRaces" :target-value="targetDriverStats!.cleanRaces"/>
        <StatComparison style="transition-delay: 450ms" name="Puntos por carrera" :source-value="sourceDriverStats!.pointsAvg" :target-value="targetDriverStats!.pointsAvg"/>
        <StatComparison style="transition-delay: 500ms" name="Asistencia" :source-value="sourceDriverStats!.attendanceAvg" :target-value="targetDriverStats!.attendanceAvg" suffix="%"/>
      </div>
      <div v-else class="stats__container">
        <Stat :value="sourceDriverStats!.races" name="Carreras"/>
        <Stat :value="sourceDriverStats!.fastLaps" name="Vueltas Rápidas"/>
        <Stat :value="sourceDriverStats!.podiums" name="Podios"/>
        <Stat :value="sourceDriverStats!.poles" name="Poles"/>
        <Stat :value="sourceDriverStats!.wins" name="Victorias"/>
        <Stat :value="sourceDriverStats!.positionAvg" name="Posición Promedio"/>
        <Stat :value="sourceDriverStats!.startPositionAvg" name="Clasificación Promedio"/>
        <Stat :value="sourceDriverStats!.cleanRaces" name="Carreras Limpias"/>
        <Stat :value="sourceDriverStats!.pointsAvg" name="Puntos por carrera"/>
        <Stat :value="sourceDriverStats!.attendanceAvg + '%'" name="Asistencia"/>
      </div>
    </Transition>
    <div class="btn__container">
      <Button class="btn" @click="showCompareWithModal" full>
        {{ targetDriverStats ? 'Cambiar' : 'Comparar' }}
      </Button>
      <Button v-if="targetDriverStats" class="btn" @click="removeTargetDriver" full>Dejar de comparar</Button>
    </div>
  </Modal>
  <CompareWithModal />
</template>

<script setup lang="ts">
import Modal from '@/components/atoms/Modal.vue';
import CompareWithModal from '@/components/molecules/CompareWithModal.vue';
import Stat from '../atoms/Stat.vue';
import { useDriverStore } from '@/stores/driverStore';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import StatComparison from '../atoms/StatComparison.vue';
import Button from '@/components/atoms/Button.vue';

const driverStore = useDriverStore();
const { sourceDriverStats, targetDriverStats, driverStatsModal } = storeToRefs(driverStore);
const { showCompareWithModal, removeTargetDriver } = driverStore;
const modalTitle = computed(() => {
  if (targetDriverStats.value) {
    return `Comparación`;
  } else {
    return 'Estadisticas de ' + driverStore.sourceDriverStats?.driver.name;
  }
});
</script>

<style scoped>
.header {
  display: flex;
  /* justify-content: space-around; */
  margin-bottom: 18px;
  font-weight: 400;

  & .header__driver-name {
    width: 50%;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
  }
}
.btn {
  margin-top: 18px;
}
.stats__container {
  display: flex;
  flex-wrap: wrap;
  row-gap: 18px;
  justify-content: center;
}

.stats-comparison__header {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.btn__container {
  display: flex;
  width: 100%;
  gap: 8px;
}

.stats-enter-active,
.stats-leave-active {
  transition: all 0.5s ease;
}

.stats-enter-from { opacity: 0;}
.stats-enter-to { opacity: 1;}
.stats-leave-from { opacity: 1;}
.stats-leave-to { opacity: 0;}

.stats-enter-active .stat-comparison,
.stats-leave-active .stat-comparison {
  transition: all 0.5s ease;
}
.stats-enter-from .stat-comparison { opacity: 0;}
.stats-enter-to .stat-comparison { opacity: 1;}
.stats-leave-from .stat-comparison { opacity: 1;}
.stats-leave-to .stat-comparison { opacity: 0;}

</style>