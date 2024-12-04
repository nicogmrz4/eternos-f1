<template>
	<div class="team-card__container">
		<Position :position="position" />
        <PositionChange :diff="lastPosition ? lastPosition - position! : 0" />
		<div class="team-card">
			<img class="team-card__avatar" :src="team?.avatar">
			<span class="team-card__name">{{ team?.name }}</span>
			<Points class="team-card__points" :points="points" />
		</div>
	</div>
</template>

<script setup lang="ts">
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

console.log(props);
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
}

.team-card__points {
	margin-left: auto;
}
</style>