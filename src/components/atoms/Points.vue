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
.points > .value {
    font-size: 22px;
    font-weight: 700;
    margin-right: 4px;
}

.points > .label {
    font-size: 12px;
}
</style>