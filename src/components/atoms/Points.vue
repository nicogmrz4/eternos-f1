<script setup lang="ts">
const props = defineProps({
  points: Number
})
</script>

<template>
    <div class="points">
        <span class="value">{{ points }}</span>
        <span class="label">Pts</span>
    </div>
</template>

<style scoped>
.points {
    display: flex;
    align-items: end;
    gap: 4px;
}

.points > .value {
    font-size: 22px;
    line-height: 1.1;
    font-weight: 700;
}

.points > .label {
    font-size: 12px;
}
</style>