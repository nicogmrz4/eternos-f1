<template>
  <div :class="['badge', `badge--${color}`]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  color: 'success' | 'pending' | 'primary'
}
const props = defineProps<Props>();
</script>

<style scoped>
.badge {
  font-size: 14px;
  font-weight: 400;
  padding: 2px 6px;
  border-radius: 4px;
  color: #000;
}

.badge--success {
  border: 1px solid var(--success-color);
  color: var(--success-color);
  /* background-color: var(--success-color); */
}

.badge--pending {
  border: 1px solid var(--pending-color);
  color: var(--pending-color);
  /* background-color: var(--pending-color); */
}

.badge--primary {
  background-color:   var(--card-color);
  color: #fef;
  /* background-color: var(--pending-color); */
}
</style>