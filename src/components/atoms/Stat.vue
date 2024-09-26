<template>
  <div class="stat">
    <div class="value">
      {{ value }}
    </div>
    <div class="name card-text-muted">
      {{ name }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
  value: number|string,
}

defineProps<Props>();
</script>

<style scoped>
.stat {
  flex-basis: 25%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & .name {
    font-size: 14px;
  }

  & .value {
    font-size: 24px;
    font-weight: 700;
  }
}
</style>