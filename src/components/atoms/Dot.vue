<template>
  <div :class="['dot', `dot--${color}`]">
  </div>
</template>

<script setup lang="ts">
interface Props {
  color: 'success' | 'pending'
}
const props = defineProps<Props>();
</script>

<style scoped>
.dot {
  padding: 4px;
  border-radius: 50%;
}

.dot--success {
  background-color: var(--success-color);
  color: var(--success-color);
  /* background-color: var(--success-color); */
}

.dot--pending {
  background-color: var(--pending-color);
  color: var(--pending-color);
  /* background-color: var(--pending-color); */
}
</style>