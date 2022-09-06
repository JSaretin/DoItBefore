<script lang="ts">
	import CountDown from '$lib/componets/CountDown.svelte';
	import CreateCountdown from '$lib/componets/CreateCountdown.svelte';
import Layout from '$lib/componets/Layout.svelte';
	import RenderCountdowns from '$lib/componets/RenderCountdowns.svelte';

	import type { SavedCountdown } from '$lib/structure';
	import { writable, type Writable } from 'svelte/store';

	export let data: { countdowns: SavedCountdown[]; user: { key?: string } };
	const countdowns: Writable<SavedCountdown[]> = writable(data.countdowns);

	const updateCountdowns = (countdown: { detail: SavedCountdown }) => {
		$countdowns = [countdown.detail, ...$countdowns];
	};
</script>

<Layout>
	<CreateCountdown on:addcountdown={updateCountdowns} user={data.user} />
	<RenderCountdowns countdowns={$countdowns} />
</Layout>
