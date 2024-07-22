<template>
  <Transition name="modal-backdrop" :duration="600">
    <div v-if="control" class="backdrop" @click="backdropCloseModal">
      <div class="modal" tabindex="1">
        <header class="modal__header">
          <h2 class="modal__title">{{ title ?? 'Modal title' }}</h2>
          <span>
            <v-icon class="modal__close" name="md-close" @click="control = false"></v-icon>
          </span>
        </header>
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { watch } from 'vue';

interface Props {
  title?: string
}
defineProps<Props>()
const control = defineModel('modelValue', { type: Boolean, default: false })


watch(control, () => {
  if (control.value) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
  }
});

const backdropCloseModal = (e: MouseEvent) => {
  if ((e.target as HTMLElement).classList.contains('backdrop')) {
    control.value = false
  }
}
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: #0000009c;
}

.modal {
  padding: 16px;
  position: relative;
  width: 390px;
  height: 400px;
  background-color: var(--card-color);
  border-radius: var(--card-border-radius);
  z-index: 110;
}

.modal__header {
  display: flex;
}

.modal__title {
  margin-top: 0;
}

.modal__close {
  cursor: pointer;
  flex-shrink: 0;
  opacity: .5;
  transition: opacity 0.2s ease-out;
}

.modal__close:hover {
  opacity: 1;
}

.modal-backdrop-enter-active,
.modal-backdrop-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-backdrop-enter-from {
  opacity: 0;
}

.modal-backdrop-enter-to {
  opacity: 1;
}

.modal-backdrop-leave-from {
  opacity: 1;
}

.modal-backdrop-leave-to {
  opacity: 0;
}

/* Modal transition */
.modal-backdrop-enter-active .modal,
.modal-backdrop-leave-active .modal {
  transition: transform 0.6s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-backdrop-enter-active .modal {
  animation-delay: 0.1s;
}

.modal-backdrop-enter-from .modal {
  transform: translateY(600px);
}

.modal-backdrop-enter-to .modal {
  transform: translateY(0);
}

.modal-backdrop-leave-from .modal {
  transform: translateY(0);
}

.modal-backdrop-leave-to .modal {
  transform: translateY(600px);
}

</style>