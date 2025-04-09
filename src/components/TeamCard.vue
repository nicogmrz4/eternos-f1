<template>
	<div class="team-card__container">
		<div class="team-card__info">
			<Position :position="position" />
			<PositionChange :diff="lastPosition ? lastPosition - position! : 0" />
			<div class="team-card">
				<img class="team-card__avatar" :src="team?.avatar">
				<div ref="teamNameContainer" class="team-card__name">
					<span ref="teamNameText" class="text" :style="{ 'animation-duration': `${animationDuration}s` }">{{ team?.name }}</span>
				</div>
				<Points class="team-card__points" :points="points" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Points from './atoms/Points.vue';
import Position from './atoms/Position.vue';
import PositionChange from './atoms/PositionChange.vue';
import PositionAndDiff from './molecules/PositionAndDiff.vue';
import { TeamDTO } from '@/dto/teamDTO';

const props = defineProps({
	position: Number,
	lastPosition: Number,
	points: Number,
	team: TeamDTO,
});

const teamNameContainer = ref<HTMLElement>();
const teamNameText = ref<HTMLElement>();
const animationDuration = ref(0);

onMounted(() => {
  function setMarqueeDuration() {
    const containerWidth = teamNameContainer.value?.offsetWidth!;
    const textWidth = teamNameText.value?.offsetWidth!;

    const speed = 100; 
    const distance = containerWidth + textWidth;
    animationDuration.value = distance / speed;
  }

  setMarqueeDuration();
})
</script>

<style scoped>
.team-card__container {
	display: flex;
	align-items: center;
	flex: 1 1 100%;
	flex-wrap: wrap;
	gap: .25em;
}

.team-card__container::after {
	content: "";
	flex: 0 0 100%;
	width: 100%;
	border-bottom: 1px solid var(--card-color);
}

.team-card__container:last-child::after {
	border-bottom: none;
}
.team-card__info {
	display: flex;
	align-items: center;
	width: 100%;
}

.team-card {
    flex: auto;
	display: flex;
	align-items: center;
	gap: var(--card-padding);
	/* background-color: var(--card-color); */
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
	overflow: hidden;
	/* text-overflow: ellipsis; */
	white-space: nowrap;
	width: 100%;
	max-width: 210px;
	position: relative;
}

.team-card__name > .text {
	display: inline-block;
	min-width: 210px;
	animation: scroll-bounce 10s linear infinite alternate;
}

.team-card__points {
	margin-left: auto;
}
@keyframes scroll-bounce {
	0% {
		transform: translateX(0%);
	}

	25% {
		transform: translateX(0%);
	}

	75% {
		transform: translateX(calc(210px - 100%));
	}

	100% {
		transform: translateX(calc(210px - 100%));
	}
}
</style>