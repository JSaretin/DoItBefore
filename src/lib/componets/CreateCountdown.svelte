<script lang="ts">
	import { goto } from '$app/navigation';
	import TodoIntput from '$lib/componets/TodoIntput.svelte';
	import type { Data, SavedData } from '$lib/structure';
	import { createEventDispatcher } from 'svelte';

	export let user: { key?: string };
	let data: Data = {
		deadline: '',
		description: '',
		todos: []
	};

	const addTodo = () => {
		data.todos = [...data.todos, { title: '', id: data.todos.length, completed: false }];
	};

	const emiter = createEventDispatcher();

	const processData = async () => {
		const futureData = new Date(data.deadline).getTime();
		const now = new Date().getTime();
		if (futureData - now <= 0) {
			alert('the date you entered is in the past');
			return;
		}

		if (!user?.key) {
			const posts: { [key: string]: object } = JSON.parse(localStorage.getItem('posts') || '{}');
			posts[crypto.randomUUID()] = data;
			localStorage.setItem('posts', JSON.stringify(posts));
			alert('you need to login to create a countdown, the current countdown has been saved');
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
		emiter('addcountdown', response);
	};
</script>

<form action="" on:submit|preventDefault={processData}>
	<textarea
		cols="30"
		rows="3"
		bind:value={data.description}
		placeholder="your task description"
		required
	/>

	<label>
		Target day
		<input type="datetime-local" bind:value={data.deadline} required />
	</label>
	<div class="todos">
		<input type="button" value="add todo" aria-label="add-todo" on:click={addTodo} />

		{#each data.todos as todo (todo.id)}
			<TodoIntput
				bind:todo
				on:click={() => {
					data.todos = data.todos.filter((i) => i.id != todo.id);
				}}
			/>
		{/each}
	</div>
	<button>start countdown</button>
</form>

<style>
	form {
		/* max-width: 500px; */
		width: 100%;
		margin: auto;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background-color: rgb(255, 255, 255);
		box-shadow: 1px 3px 8px rgba(41, 2, 63, 0.2);
		border-radius: 0.5rem;
		padding: 1rem;
		font-family: 'Poppins', sans-serif;

		position: relative;
		/* margin-top: 2rem; */
	}

	label {
		width: 100%;
		display: flex;
		justify-content: space-between;
		/* flex-direction: column; */
		gap: 1rem;
		/* font-weight: 600; */
	}

	.todos {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	input[aria-label='add-todo'] {
		align-self: flex-end;
		/* width: 100%; */
		padding: 0.1rem 0.4rem;
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
		background-color: rgb(244, 244, 244);
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
