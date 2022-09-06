<script lang="ts">
	export let data: { user?: { key: string } };
</script>

<header>
	<div>
		<ul>
			<li><a href="/" data-sveltekit-prefetch>Feed</a></li>
			{#if data?.user?.key}
				<li><a href="/profile" data-sveltekit-prefetch>Profile</a></li>
				<li><a href="/logout" data-sveltekit-prefetch>Logout</a></li>
			{:else}
				<li><a href="/login">Login</a></li>
				<li><a href="/register">Register</a></li>
			{/if}
		</ul>
	</div>
</header>
<section>
	<slot />
</section>

<style>
	header {
		height: 5vh;
		background-color: rgb(192, 192, 192);
		position: sticky;
		left: 0;
		top: 0;
		z-index: 9999;
		box-shadow: 0px 2px 3px rgba(10, 0, 0, 0.309);
	}

	header div {
		max-width: 700px;
		margin: auto;
		/* background-color: blue; */
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
	}

	header div ul {
		display: flex;
		flex: 1;
		justify-content: space-between;
	}
	header div ul li {
		list-style: none;
	}
	header div ul a {
		all: unset;
		cursor: pointer;
	}
	section {
		width: 100%;
		height: 95vh;
		/* min-height: 100vh; */
		background-color: #f0f2f5;
		/* background-color: red; */
		padding: 1rem;
		overflow: auto;
	}

	:global(*) {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
	}
</style>
