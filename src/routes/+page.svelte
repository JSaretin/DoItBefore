<script lang="ts">
	import CountDown from '$lib/componets/CountDown.svelte';
	import CreateCountdown from '$lib/componets/CreateCountdown.svelte';

	import type { SavedData } from '$lib/structure';
	import { writable, type Writable } from 'svelte/store';

	export let data: { countdowns: SavedData[]; user: { key?: string } };
	const countdowns: Writable<SavedData[]> = writable(data.countdowns);

	const updateCountdowns = (data: { details: SavedData }) => {
		$countdowns = [data.details, ...$countdowns];
	};
</script>

<div class="container">
	<CreateCountdown on:addcountdown={updateCountdowns} user={data.user} />
	<div class="countdowns">
		{#each $countdowns as countdown (countdown.key)}
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
