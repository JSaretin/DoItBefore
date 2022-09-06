<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import type { PageConfig, SavedCountdown, User } from '$lib/structure';
	import { renderRemainingTime } from '$lib/utils';

	export let data: { countdown: SavedCountdown; user?: User };
	const { countdown } = data;
	let timeLeft: { days: string; hours: string; minutes: string; seconds: string } | string =
		renderRemainingTime(countdown.deadline);

	setInterval(() => {
		timeLeft = renderRemainingTime(countdown.deadline);
	}, 1000);

	let pageConfig: PageConfig = { showInfo: false, showTodos: false };

	let postSettings: { [key: string]: PageConfig };

	const writeToLocalstorage = () => {
		postSettings[$page.params.countdown_id] = pageConfig;
		localStorage.setItem('countdowns', JSON.stringify(postSettings));
	};

	if (browser) {
		postSettings = JSON.parse(localStorage.getItem('countdowns') || '{}');

		if (Object.keys(postSettings).includes($page.params.countdown_id)) {
			pageConfig = postSettings[$page.params.countdown_id];
		}
	}

	const canEdit =
		data?.user?.key == countdown.owner ||
		countdown.can_edit.filter((obj) => obj.user_id == data?.user?.key).length != 0;
</script>

<div class="container">
	<h1 class="countdown">
		{#if !timeLeft}
			Time dose not exist
		{:else if typeof timeLeft == 'string'}
			{timeLeft}
		{:else}
			{timeLeft.days} <span>days</span> : {timeLeft.hours} <span>hours</span> : {timeLeft.minutes}
			<span>minutes</span>
			: {timeLeft.seconds} <span>seconds</span>
		{/if}
	</h1>

	<div class="config">
		<label>
			show description
			<input type="checkbox" bind:checked={pageConfig.showInfo} on:change={writeToLocalstorage} />
		</label>

		{#if countdown.todos.length}
			<label>
				show todos
				<input
					type="checkbox"
					bind:checked={pageConfig.showTodos}
					on:change={writeToLocalstorage}
				/>
			</label>
		{/if}
	</div>

	<div class="content">
		{#if pageConfig.showInfo}
			<p class="sumary">
				{countdown.description}
			</p>
		{/if}

		{#if pageConfig.showTodos}
			<div class="todos">
				<h3>Milestones</h3>
				{#each countdown.todos as todo (todo.id)}
					<div class={'todo ' + (todo.completed ? 'done' : 'pending')}>
						<p>
							{todo.title}
						</p>
						{#if canEdit}
							<input
								type="checkbox"
								bind:checked={todo.completed}
								on:change={async () => {
									const request = await fetch('', {
										method: 'POST',
										body: JSON.stringify(countdown),
										headers: { accept: 'application/json', 'Content-Type': 'application/json' }
									});
									if (!request.ok) {
										todo.completed = !todo.completed;
									}
								}}
							/>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	

	span {
		font-style: oblique;
		font-size: 20px;
		font-family: 'Germania One', cursive;
		font-weight: 400;
		color: rgb(1, 85, 0);
		letter-spacing: 0;
	}
	.countdown {
		font-size: 5.5em;
		font-family: 'Bangers', cursive;
		/* word-break: keep-all; */
		/* white-space: nowrap; */
		letter-spacing: 0.1rem;
	}

	@media (max-width: 1000px) {
		.countdown {
			font-size: 3.75rem;
		}
	}

	@media (max-width: 600px) {
		.countdown {
			font-size: 2.5rem;
		}
	}

	.content {
		width: 100%;
		/* padding: 2rem; */
		/* background-color: aqua; */
		display: flex;
		gap: 2rem;
		flex-direction: column;
		font-family: 'Poppins', sans-serif;
	}

	.config {
		width: 100%;
		display: flex;
		justify-content: space-between;
		color: rgb(161, 161, 161);
		font-style: italic;
	}

	.config label {
		cursor: pointer;
	}

	.config input {
		cursor: pointer;
	}

	.sumary {
		border-radius: 1rem;
		padding: 1rem;

		width: 100%;
		background-color: rgba(0, 0, 255, 0.202);
		margin: auto;
	}

	.todos {
		width: 100%;
		/* background-color: blue; */
		/* padding: 1rem; */
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.todo {
		width: 100%;
		display: flex;
		padding: 1rem;
		border-radius: 0.5rem;
	}

	.pending {
		background-color: rgb(8, 121, 147);
	}

	.done {
		background-color: rgb(15, 147, 8);
		text-decoration: line-through;
	}

	.todo p {
		flex: 1;
		color: #fff;
	}

	.todo input {
		cursor: pointer;
	}
</style>
