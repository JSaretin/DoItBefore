<script lang="ts">
	import Layout from '$lib/componets/Layout.svelte';
	import RenderCountdowns from '$lib/componets/RenderCountdowns.svelte';

	import type { SavedCountdown } from '$lib/structure';

	export let data: { countdowns: SavedCountdown[] };
	const { countdowns } = data;
</script>

<Layout>
	<RenderCountdowns {countdowns} />
</Layout>
