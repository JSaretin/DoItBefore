<script lang="ts">
	import { page } from '$app/stores';
	import EmailInput from './EmailInput.svelte';
	import PasswordInput from './PasswordInput.svelte';
	import TextInput from './TextInput.svelte';

	export let error: string | undefined;

	$: isRegister = $page.url.pathname.includes('/register');
</script>

<form action="" method="post">
	{#if error}
		<div class="error">
			{error}
		</div>
	{/if}

	<div class="form-content">
		{#if isRegister}
			<TextInput />
		{/if}
		<EmailInput />

		<PasswordInput name={'password'} />

		{#if isRegister}
			<PasswordInput name={'confirm password'} />
			<input type="submit" value="register" />
		{:else}
			<input type="submit" value="login" />
		{/if}
	</div>
	<small>
		{#if isRegister}
			already have an account? <a href="/login" sveltekit:prefetch>login</a>
		{:else}
			don't have an account? <a href="/register" sveltekit:prefetch>register</a>
		{/if}
	</small>
</form>

<style>
	.error {
		position: absolute;
		left: 0;
		width: 100%;
		top: 0;
		padding: 0.5rem;
		background-color: orange;
		transform: translateY(-120%);
		border-radius: 0.5rem;
		text-align: center;
		/* color: #fff; */
	}

	form {
		max-width: 400px;
		background-color: #fff;
		padding: 2rem;
		margin: auto;
		border-radius: 0.5rem;
		position: relative;
		box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.2);
	}
	.form-content,
	form {
		display: flex;
		flex-direction: column;
	}

	.form-content {
		gap: 0.5rem;
	}

	input[type='submit'] {
		margin-top: 1rem;
		border-radius: 0.2rem;
		border: none;
		background-color: rgba(3, 186, 85, 0.779);
		color: #fff;
		padding: 0.5rem 0;
		cursor: pointer;
	}

	small {
		margin-top: 1rem;
		color: rgb(130, 130, 130);
	}

	small a {
		text-decoration: none;
		color: blue;
		font-weight: 500;
		cursor: pointer;
	}
</style>
