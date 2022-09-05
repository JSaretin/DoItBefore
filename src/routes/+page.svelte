<script lang="ts">
	import CountDown from '$lib/componets/CountDown.svelte';
	import CreateCountdown from '$lib/componets/CreateCountdown.svelte';

	import type { SavedData } from '$lib/structure';

	export let data: { countdowns: SavedData[] };
	const { countdowns } = data;
</script>

<div class="container">
	<CreateCountdown />
	<div class="countdowns">
		{#each countdowns as countdown (countdown.key)}
			<CountDown {countdown} />
		{/each}
	</div>
</div>

<style>
	.container {
		max-width: 700px;
		margin: auto;
        display: flex;
        flex-direction: column;
        gap: 2rem;
	}
	.countdowns {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
