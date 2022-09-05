<script lang="ts">
	import type { SavedData } from '$lib/structure';
	import { renderRemainingTime } from '$lib/utils';

	export let countdown: SavedData;

	const done = countdown.todos.filter((t) => t.completed == true).length;

	let timeLeft = renderRemainingTime(countdown.deadline);
	setInterval(() => {
		timeLeft = renderRemainingTime(countdown.deadline);
	}, 1000);
</script>

<a href={'/view-' + countdown.key} sveltekit:prefetch>
	<div class="countdown">
		<h1 class="timer">
			{#if !timeLeft}
				Time dose not exist
			{:else if typeof timeLeft == 'string'}
				{timeLeft}
			{:else}
				{timeLeft.days} <span>days</span> : {timeLeft.hours} <span>hours</span> : {timeLeft.minutes}
				<span>minutes</span>
				: {timeLeft.seconds} <span>seconds</span>
			{/if}
		</h1>

		<p class="description">
			{countdown.description.slice(0, 150)}{#if countdown.description.length > 150}
            ... <span class="read-more">
                read more
            </span>
            {/if}
				
		</p>

		<div class="stats">
			<p class={'bold ' + (done > 0 ? 'success' : 'warning')}>completed {done}</p>
			<p>milestone {countdown.todos.length}</p>
		</div>
	</div>
</a>

<style>
	a {
		text-decoration: none;
		all: unset;
		cursor: pointer;
	}
	.countdown {
		width: 100%;
		padding: 1rem;
		background-color: rgb(255, 255, 255);
		border-radius: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.timer {
		font-size: 1.3rem;
		color: rgb(28, 1, 51);
	}

	.stats {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}

	.bold {
		font-weight: 500;
	}

	.success {
		color: rgb(8, 137, 1);
	}

    .description {
        color: rgb(66, 66, 66);
    }
    .read-more {
        color: blue;
    }
</style>
