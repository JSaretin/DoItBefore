<script lang="ts">
	import { goto } from '$app/navigation';
	import TodoIntput from '$lib/componets/TodoIntput.svelte';
	import type { Data, SavedData } from '$lib/structure';

	let data: Data = {
		deadline: '',
		description: '',
		todos: []
	};

	const addTodo = () => {
		data.todos = [...data.todos, { title: '', id: data.todos.length, completed: false }];
	};

	const processData = async () => {
		const futureData = new Date(data.deadline).getTime();
		const now = new Date().getTime();
		if (futureData - now <= 0) {
			alert('the date you entered is in the past');
			return;
		}
		const request = await fetch('/api/countdown', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(data)
		});

		const response: SavedData = await request.json();
		localStorage.setItem(response.key, JSON.stringify(response));
		await goto('/view-' + response.key);
	};
</script>

<form action="" on:submit|preventDefault={processData}>
	<label>
		description
		<textarea
			cols="30"
			rows="10"
			bind:value={data.description}
			placeholder="write something"
			required
		/>
	</label>
	<div class="todos">
		{#each data.todos as todo (todo.id)}
			<TodoIntput
				bind:todo
				on:click={() => {
					data.todos = data.todos.filter((i) => i.id != todo.id);
				}}
			/>
		{/each}
		<input type="button" value="add todo" aria-label="add-todo" on:click={addTodo} />
	</div>
	<label>
		delivery day
		<input type="datetime-local" bind:value={data.deadline} required />
	</label>
	<button>start countdown</button>
</form>

<style>
	form {
		max-width: 500px;
		width: 100%;
		margin: auto;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		/* background-color: rgb(255, 255, 255); */
		box-shadow: 1px 3px 8px rgba(41, 2, 63, 0.2);
		border-radius: 0.5rem;
		padding: 2rem;
		font-family: 'Poppins', sans-serif;

		/* margin-top: 2rem; */
	}

	label {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		/* font-weight: 600; */
	}

	label > * {
		width: 100%;
	}

	.todos {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	input[aria-label='add-todo'] {
		align-self: flex-end;
		width: 100%;
		padding: 0.4rem;
		background-color: transparent;
		border: none;
		outline: 1px solid gray;
		/* border-radius: 1rem; */
		transition: all ease 300ms;
		cursor: pointer;
	}

	input[aria-label='add-todo']:hover {
		background-color: black;
		color: #fff;
	}

	textarea {
		background-color: rgb(255, 255, 255);
		padding: 1rem;
		resize: none;
		border-radius: 0.4rem;
		border: none;
		outline: none;
		color: rgb(17, 1, 28);
		font-weight: 400;
		font-size: 14px;
	}

	button {
		width: 100%;
		padding: 0.6rem;
		border-radius: 0.6rem;
		background-color: rgb(81, 3, 133);
		color: #fff;
		border: none;
		outline: none;
		cursor: pointer;
	}
</style>
