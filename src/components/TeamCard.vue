<template>
  <div class="team-card" >
    <span class="team-card__position">{{ position }}</span>
    <img class="team-card__avatar" :src="avatar">
    <span class="team-card__name">{{ name }}</span>
    <Points class="team-card__points" :points="points" />
  </div>
</template>

<script setup lang="ts">
import Points from './atoms/Points.vue';

const props = defineProps({
  position: Number,
  avatar: String,
  name: String,
  points: Number,
});

</script>

<style scoped>

.team-card {
    display: flex;
    align-items: center;
    gap: var(--card-padding);
    background-color: var(--card-color);
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    transition: opacity 0.2s ease-out, transform 0.2s ease-out;
}

.team-card__position {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    text-align: center;
    font-size: 22px;
    font-weight: 900;
}

.team-card__avatar {
    width: 40px;
    height: 40px;
    object-fit: contain;
}

.team-card__name {
    font-size: 18px;
    font-weight: 500;
}

.team-card__points {
  margin-left: auto;
}

</style>