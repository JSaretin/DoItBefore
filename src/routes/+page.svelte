<script lang="ts">
	import CountDown from '$lib/componets/CountDown.svelte';
	import CreateCountdown from '$lib/componets/CreateCountdown.svelte';

	import type { SavedCountdown } from '$lib/structure';
	import { writable, type Writable } from 'svelte/store';

	export let data: { countdowns: SavedCountdown[]; user: { key?: string } };
	const countdowns: Writable<SavedCountdown[]> = writable(data.countdowns);

	const updateCountdowns = (countdown: { detail: SavedCountdown }) => {
		$countdowns = [countdown.detail, ...$countdowns];
	};
</script>

<div class="container">
	<CreateCountdown on:addcountdown={updateCountdowns} user={data.user} />
	<div class="countdowns">
		{#each $countdowns.sort((a, b) => b.created_at - a.created_at) as countdown (countdown.key)}
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
