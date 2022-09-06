<script lang="ts">
	export let data: { user?: { key: string } };
	let showNav: boolean;
</script>

{#if showNav}
	<header
		on:click={() => {
			showNav = false;
		}}
	>
		<div>
			<ul>
				<li><a href="/" data-sveltekit-prefetch>Feed</a></li>
				{#if data?.user?.key}
					<li><a href="/profile" data-sveltekit-prefetch>Profile</a></li>
					<li><a href="/logout">Logout</a></li>
				{:else}
					<li><a href="/login" data-sveltekit-prefetch>Login</a></li>
					<li><a href="/register" data-sveltekit-prefetch>Register</a></li>
				{/if}
			</ul>
		</div>
	</header>
{:else}
	<div
		class="bugger"
		on:click={() => {
			showNav = true;
		}}
	>
		<span />
		<span />
		<span />
	</div>
{/if}
<section>
	<slot />
</section>

<style>
	.bugger {
		position: fixed;
		z-index: 9999;
		width: 2.5rem;
		aspect-ratio: 1/1;
		top: 2rem;
		right: 4rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		/* gap: 0.5rem; */
		border-radius: 100%;
		overflow: hidden;
		/* padding: 0.2rem; */
		cursor: pointer;
		box-shadow: 0px 0px 6px rgba(10, 0, 0, 0.309);
	}
	.bugger span {
		display: block;
		width: 100%;
		height: 0.4rem;
		background-color: rgb(5, 5, 5);
	}
	header {
		font-family: 'Germania One', cursive;
		/* height: 5vh; */
		background-color: rgba(0, 0, 0, 0.947);
		position: fixed;
		z-index: 9999;
		backdrop-filter: blur(2px);

		max-width: 200px;
		height: 250px;
		width: 100%;

		right: 2rem;
		top: 1rem;
		border-radius: 1rem;

		display: flex;
	}

	header div {
		margin: auto;
		/* background-color: blue; */
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
	}

	header ul {
		display: flex;
		flex-direction: column;
		flex: 1;
		gap: 2rem;
		justify-content: space-between;
	}
	header div ul li {
		list-style: none;
	}
	header div ul a {
		all: unset;
		cursor: pointer;
		color: #d8d8d8;
		font-weight: 500;
	}
	section {
		width: 100%;
		height: 100vh;
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

	@media (max-width: 600px) {
		header {
			max-width: initial;
			height: initial;
			border-radius: 0;
			inset: 0;
		}

		/* header div ul {
		} */

		header div ul li a {
			font-size: 30px;
		}

		.bugger {
			background-color: #fff;
			top: initial;
			right: 2rem;
			bottom: 2rem;
		}
	}
</style>
