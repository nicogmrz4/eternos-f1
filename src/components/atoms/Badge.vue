<template>
  <div :class="['badge', `badge--${color}`]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  color: 'success' | 'pending'
}
const props = defineProps<Props>();
</script>

<style scoped>
.badge {
  font-size: 12px;
  font-weight: 400;
  padding: 2px 6px;
  border-radius: 4px;
  color: #000;
}

.badge--success {
  background-color: var(--success-color);
}

.badge--pending {
  background-color: var(--pending-color);
}
</style>