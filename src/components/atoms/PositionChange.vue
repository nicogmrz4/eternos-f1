<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  diff: {
    type: Number,
    required: true
  }
})

const diffClasses = computed(() => {
  if (props.diff > 0) {
    return 'diff--positive';
  }

  if (props.diff < 0) {
    return 'diff--negative';
  }

  return '';
})
</script>

<template>
  <span :class="['diff', diffClasses]">
    <template v-if="diff > 0">
      <v-icon class="icon" name="md-arrowdropup-twotone" scale="1"></v-icon>
      <span class="value">{{ diff }}</span>
    </template>
    <template v-else-if="diff < 0">
      <v-icon class="icon" name="md-arrowdropdown-twotone" scale="1"></v-icon>
      <span class="value">{{ `${Math.abs(diff)}` }}</span>
    </template>
    <template v-else>
      <v-icon class="icon" name="md-remove" scale="1.2"></v-icon>
    </template>
  </span>
</template>

<style scoped>
.diff {
  width: 40px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
}

.diff .value {
  font-size: 22px;
  font-weight: 900;
  width: 35px;
  transform: translateX(-2.5px);
}

.diff--positive .icon {
  color: var(--success-color);
  max-width: 21;
}

.diff--negative .icon {
  color: var(--danger-color);
}
</style>