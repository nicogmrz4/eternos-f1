<template>
  <div class="pos-and-diff__container">
    <Transition>
      <template v-if="showPosition">
        <PositionChange :diff="diff" />
      </template>
      <template v-else="!showPosition">
        <span class="position">{{ position }}</span>
      </template>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import PositionChange from '@/components/atoms/PositionChange.vue';

const showPosition: Ref<boolean> = ref(false);
const props = defineProps({
  position: {
    type: Number,
    default: 0
  },
  diff: {
    type: Number,
    default: 0
  }
});

onMounted(() => {
  setInterval(() => {
    showPosition.value = !showPosition.value
  }, 3000)
})
</script>

<style scoped>
.pos-and-diff__container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  position: relative;
}

.position {
  text-align: center;
  font-size: 22px;
  font-weight: 900;
  position: absolute;
}

.v-enter-from {
  opacity: 0;
}

.v-enter-active {
  transition: opacity 300ms ease-out;
  transition-delay: 300ms;
}

.v-enter-to {
  opacity: 1;
}

.v-leave-from {
  opacity: 1;
}

.v-leave-active {
  transition: opacity 300ms ease-out;
}

.v-leave-to {
  opacity: 0;
}
</style>