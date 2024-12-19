<script setup lang="ts">
import Badge from '@/components/atoms/Badge.vue';
import type { DriverResultInterface } from '@/interfaces/driverResult';
import PositionChangeMini from '@/components/atoms/PositionChangeMini.vue';
import { ref } from 'vue';

interface Props {
    order: number,
    name: string,
    circuit: string,
    flag: string,
    isRaced: boolean,
    results: DriverResultInterface[]
}

const props = defineProps<Props>();
const showResult = ref(false);
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
            <Badge class="track-card__status" :color="isRaced ? 'success' : 'pending'">
                {{ isRaced ? 'Completada' : 'Pendiente' }}
            </Badge>
            <Transition>
                <div v-if="showResult && isRaced" class="track-card__result">
                    <div class="table__container">
                        <table>
                            <tbody>
                                <tr v-for="r in results" :key="r.driver.id" :class="[r.dnf || r.dsq ? 'dnf' : '']">
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
                                        <template v-if="!r.dnf">
                                            <v-icon v-if="r.cleanRace" name="md-healthandsafety-outlined" scale="1.2"
                                                class="clean-race"></v-icon>
                                            <v-icon v-if="r.pole" name="md-workspacepremium"
                                                scale="1.2" class="pole"></v-icon>
                                            <v-icon v-if="r.fastLap" name="oi-stopwatch" scale="1.3"></v-icon>
                                        </template>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
}

table {
    width: 100%;
    font-size: 18px;
    padding: 0 1em;
    border-collapse: collapse;
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
    font-weight: 100;
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

.dnf, .dnf {
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
