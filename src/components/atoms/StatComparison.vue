<template>
  <div class="stat-comparison">
    <div :class="['source-value', sourceValueIsSmaller ? 'smaller-value' : '']">
      {{ sourceValueComputed }}
    </div>
    <div class="name">{{ name }}</div>
    <div :class="['target-value', targetValueIsSmaller ? 'smaller-value' : '']">
      {{ targetValueComputed }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  name: string
  sourceValue: number|string,
  targetValue: number|string,
  suffix?: string,
  criteria?: 'greater' | 'smaller'
}

const props = defineProps<Props>();
const criteria = computed(() => props.criteria || 'greater');

const sourceValueIsSmaller = computed(() => {
  if (props.targetValue === 0) return false;
  if (props.criteria === 'smaller') return props.sourceValue > props.targetValue || props.sourceValue === 0;
  return props.sourceValue < props.targetValue
})

const targetValueIsSmaller = computed(() => {
  if (props.sourceValue === 0) return false;
  if (props.criteria === 'smaller') return props.targetValue > props.sourceValue || props.targetValue === 0;
  return props.targetValue < props.sourceValue
})

const sourceValueComputed = computed(() => {
  return props.suffix ? `${props.sourceValue}${props.suffix}` : props.sourceValue
});

const targetValueComputed = computed(() => {
  return props.suffix ? `${props.targetValue}${props.suffix}` : props.targetValue
});

</script>

<style scoped>
.name {
  font-weight: 400;
}
.stat-comparison {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.source-value, .target-value {
  font-weight: bold;
  width: 50px;
  text-align: center;
  font-weight: 400;
}

.smaller-value {
  opacity: .6;
}
</style>