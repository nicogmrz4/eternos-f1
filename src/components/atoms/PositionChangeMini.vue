<template>
    <div class="diff">
      <template v-if="diff > 0">
        <v-icon name="md-arrowdropup-twotone" class="diff-indicator diff-indicator--positive" scale="1.1"></v-icon>
      </template>
      <template v-else-if="diff < 0">
        <v-icon name="md-arrowdropdown-twotone" class="diff-indicator diff-indicator--negative" scale="1.1"></v-icon>
      </template>
      <span v-if="diff != 0">{{ Math.abs(diff) }}</span>
      <span> ({{ startPosition }})</span>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  startPosition: number
  position: number
}

const props = defineProps<Props>();

const diff = computed(() => {
  return props.startPosition - props.position;
});

</script>

<style scoped>
.diff {
  margin-right: 6px;
}

.diff-indicator {
  transform: translateX(-22px);
  position: absolute;;
}

.diff-indicator--positive {
  color: var(--success-color);
}

.diff-indicator--negative {
  color: var(--danger-color);
}
</style>