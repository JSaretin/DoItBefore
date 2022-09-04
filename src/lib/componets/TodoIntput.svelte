<script lang="ts">
	export let todo: { title: string };
</script>

<div>
	<input type="text" bind:value={todo.title} />
	<input type="button" on:click value="delete" />
</div>

<style>
	div {
		width: 100%;
		display: flex;
        background-color: rgb(255, 255, 255);
        border-radius: .5rem;
        overflow: hidden;
	}

    input {
        padding:.6rem;
        outline: none;
        border: none;
    }

	input[type='text'] {
		flex: 1;
        background-color: transparent;
	}

    input:last-child {
        background-color: rgb(239, 101, 101);
        cursor: pointer;
        transition: all ease 300ms;

    }

    input:last-child:hover {
        background-color: red;
    }
</style>
