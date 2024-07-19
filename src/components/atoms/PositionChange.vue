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
      <v-icon class="icon" name="md-arrowdropup-twotone" scale="1.3"></v-icon>
      <span class="value">{{ diff }}</span>
    </template>
    <template v-else-if="diff < 0">
      <v-icon class="icon" name="md-arrowdropdown-twotone" scale="1.3"></v-icon>
      <span class="value">{{ Math.abs(diff)  }}</span>
    </template>
    <template v-else>
      <!-- <v-icon class="icon" name="md-remove" scale="1.2"></v-icon>
       -->
       <div class="without-diff"></div>
    </template>
  </span>
</template>

<style scoped>
.diff {
  width: 40px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.diff .value {
  font-size: 22px;
  font-weight: 900;
}

.diff .icon {
  position: absolute;
  animation: diffIconAnimation 1.5s ease-in-out;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
}

.diff--positive .icon {
  color: var(--success-color);
  max-width: 21;
  top: -14px;
}

.diff--negative .icon {
  color: var(--danger-color);
  bottom: -14px;
}

.without-diff {
  width: 16px;
  height: 3px;
  background-color: white;
}

@keyframes diffIconAnimation {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>