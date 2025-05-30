<script setup lang="ts">
import Badge from '@/components/atoms/Badge.vue';
import Dot from '@/components/atoms/Dot.vue';
import type { DriverResultInterface } from '@/interfaces/driverResult';
import PositionChangeMini from '@/components/atoms/PositionChangeMini.vue';
import { onMounted, ref, type Ref } from 'vue';
import type { Caution } from '@/interfaces/caution';
import { useDriverStore } from '@/stores/driverStore';
import { useGlobalStore } from '@/stores/globalStore';
import { storeToRefs } from 'pinia';
import { calcResultPoints } from '@/utils/calcResultPoints';

interface Props {
    order: number,
    name: string,
    circuit: string,
    flag: string,
    isRaced: boolean,
    results: DriverResultInterface[],
    cautions: Caution[]
    isSprint?: boolean
    isOfficial?: boolean
}

const props = defineProps<Props>();
const showResult = ref(false);
const cautionsCount: Ref<number> = ref(0);
const { drivers, currentSeasonOptions } = storeToRefs(useGlobalStore());

function findDriverById(id: number) {
    return drivers.value.find(driver => driver.id === id);
}

onMounted(() => {
    cautionsCount.value = props.results.reduce((acc, result) => {
        if (result.cautions) {
            acc += result.cautions.length;
        }
        return acc;
    }, 0);
})
</script>

<template>
    <div class="track-card__container">
        <div :class="['track-card', isRaced ? 'pointer' : ' ']" @click="showResult = !showResult">
            <span class="track-card__order">
                #{{ order }}
            </span>
            <span :class="['fi ' + flag, 'track-card__flag']"></span>
            <div class="track-card__info">
                <div class="name">{{ name }}</div>
                <div class="circuit card-text-muted">{{ circuit }}</div>
            </div>
            <Badge v-if="isOfficial" color="primary">OF</Badge>
            <Badge v-if="isSprint" color="primary">SP</Badge>
            <Dot class="track-card__status" :color="isRaced ? 'success' : 'pending'">
                {{ isRaced ? 'Completada' : 'Pendiente' }}
            </Dot>
            <Transition>
                <div v-if="showResult && isRaced" class="track-card__result">
                    <div class="table__container">
                        <table>
                            <tbody>
                                <tr v-for="r in results" :key="r.driver.id" :class="[r.dnf || r.dsq ? 'dnf' : '']" style="height: 30px;">
                                    <td class="pos__col">{{ r.position }}</td>
                                    <td class="name__col">{{ r.driver.name }}</td>
                                    <td class="diff__col">
                                        <template v-if="r.dnf">
                                            <span class="dnf">DNF ({{ r.startingPosition }})</span>
                                        </template>
                                        <template v-else-if="r.dsq">
                                            <span class="dsq">DSQ ({{ r.startingPosition }})</span>
                                        </template>
                                        <template v-else>
                                            <PositionChangeMini :position="r.position"
                                                :start-position="r.startingPosition" />
                                        </template>
                                    </td>
                                    <td class="icons__col">
                                        <v-icon v-if="r.pole" name="md-workspacepremium"
                                        scale="1.2" class="pole"></v-icon>
                                        <template v-if="!r.dnf">
                                            <v-icon v-if="r.cleanRace" name="md-healthandsafety-outlined" scale="1.2"
                                                class="clean-race"></v-icon>
                                            <v-icon v-if="r.fastLap" name="oi-stopwatch" scale="1.3"></v-icon>
                                        </template>
                                    </td>
                                    <td class="points__col">+ {{ calcResultPoints(r, isSprint, currentSeasonOptions) }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div v-if="cautions.length > 0">
                            <h4 class="caution-title">Amonestaciones</h4>
                            <table class="cautions-table">
                                <thead>
                                    <th>Piloto</th>
                                    <th class="caution-reason__reason-col">Motivo</th>
                                    <th>Puntos</th>
                                </thead>
                                <tbody>
                                    <tr v-for="(c, i) in cautions" :key="i">
                                        <td>{{ findDriverById(c.driver_id)?.name || c.driver_id }}</td>
                                        <td class="caution-reason__reason-col">{{ c.reason }}</td>
                                        <td class="caution-reason__points-col">{{ c.points }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<style scoped>
.table__container {
    display: flex;
    padding: 0 8px;
    flex-direction: column;
    gap: 1em;
}

.caution-title {
    font-weight: bold;
    margin-bottom: 1em;
}
.cautions-table {
    font-size: 18px;
}

.cautions-table tr td {
    padding-bottom: 1em;
}

.cautions-table tr:last-child td {
    padding-bottom: 0;
}

.cautions-table thead {
    height: 30px;
    font-weight: bold;
}

.caution-reason__reason-col {
    padding: 0 1em;
}

.caution-reason__points-col {
    text-align  : center;
}

table {
    width: 100%;
    font-size: 18px;
    padding: 0 1em;
    border-collapse: collapse;
    text-align: left;
}

table .name__col {}

table .diff__col {
    text-align: left;
    font-size: 16px;
    width: 80px;
}

table .icons__col {
    width: 80px;
    text-align: left;
}

table .name_col, table .diff__col, table .icons__col, table .points__col {
    padding: .1em 0;
}

.track-card__container {
    display: flex;
    align-items: center;
    flex: 1 1 100%;
    flex-wrap: wrap;
    gap: .25em;
}

.track-card__container::after {
    content: "";
    flex: 0 0 100%;
    width: 100%;
    border-bottom: 1px solid var(--card-color);
}

.track-card__container:last-child::after {
    border-bottom: none;
}

.track-card {
    flex: auto;
    display: flex;
    flex-wrap: wrap;
    /* background-color: var(--card-color); */
    align-items: center;
    gap: var(--card-padding);
    /* background-color: var(--card-color); */
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    transition: opacity 0.2s ease-out, transform 0.2s ease-out;
    overflow: hidden;
}

.pointer {
    cursor: pointer;
}

.track-card--raced {
    opacity: .6;
}

.track-card__order {
    width: 35px;
    font-size: 20px;
    /* font-weight: 700; */
}

.track-card__info {
    display: flex;
    flex-direction: column;
}

.track-card__info>.name {
    font-size: 18px;
    font-weight: 500;
    height: 20px;
}

.track-card__info>.circuit {
    font-size: 12px;
    font-weight: 300;
}

.track-card__flag {
    box-sizing: content-box;
    font-size: 28px;
    border-radius: 10%;
    margin-right: 4px;
}

.track-card__status {
    margin-left: auto;
}

.track-card__result {
    width: 100%;
}

.driver-result {
    display: flex;
    padding: 1px 12px;
    font-size: 18px;
    margin-bottom: 2px;
}

.driver-result>.pos {
    width: 40px;
}

.driver-result>.name {
    width: 120px;
}

.dnf, .dsq {
    opacity: .6;
}

.fast-lap {
    font-weight: 700;
    background-color: #c92bdf;
    border-radius: 8px;
    animation: fastLap 5s ease-in-out infinite;
}

@keyframes fastLap {
    25% {
        background-color: #ca2bdfd5;
    }

    50% {
        background-color: #ca2bdf00;
    }

    75% {
        background-color: #ca2bdfd5;
    }
}

.icons {
    margin-left: auto;
    display: flex;
    gap: 4px;
}

.v-enter-from {
    max-height: 0;
    opacity: 0;
}

.v-enter-active {
    transition: max-height 400ms linear, opacity 0.2s ease-out 150ms;
}

.v-enter-to {
    max-height: 500px;
    opacity: 1;
}

.v-leave-from {
    max-height: 500px;
    opacity: 1;
}

.v-leave-active {
    transition: max-height 400ms linear, opacity 0.2s ease-in;
}

.v-leave-to {
    max-height: 0;
    opacity: 0;
}
</style>
