<template>
  <button :class="[
    'btn',
    full ? 'btn--full' : '' 
    ]" >
    <slot>Button</slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  full?: boolean
}

defineProps<Props>();
</script>

<style scoped>
.btn {
  background-color: white;
  border: none;
  border-radius: 4px;
  color: #000;
  font-size: 16px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.2s ease-out;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:hover {
    background-color: #e0e0e0;
  }
}

.btn--full {
  width: 100%;
}

</style>