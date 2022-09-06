<script lang="ts">
	import AuthForm from '$lib/componets/AuthForm.svelte';
	export let errors: { message?: string };
</script>

<div class="container">
	<AuthForm error={errors?.message}/>
</div>

<style>
	.container {
		height: 90vh;
		width: 100%;
		display: flex;
		align-items: center;
		place-items: center;
		justify-content: center;
	}
</style>
