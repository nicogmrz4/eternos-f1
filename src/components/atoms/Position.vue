<template>
    <span class="position">{{ position }}</span>
</template>

<script setup lang="ts">
defineProps({
    position: {
        type: Number
    }
})
</script>

<style scoped>
.position {
  font-size: 22px;
  font-weight: 600;
  width: 2ch;
  text-align: center;
}
</style>