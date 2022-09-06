<script lang="ts">
	import type { SavedCountdown } from '$lib/structure';
	import CountDown from './CountDown.svelte';

	export let countdowns: SavedCountdown[];
</script>

<div class="countdowns">
	{#each countdowns.sort((a, b) => b.created_at - a.created_at) as countdown (countdown.key)}
		<CountDown {countdown} />
	{/each}
</div>

<style>
	.countdowns {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
